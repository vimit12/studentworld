from django.shortcuts import render,get_object_or_404,redirect
from scienceblog.models import Post,Profile
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.core.mail import send_mail
from .forms import EmailForm, CommentForm, PostForm, SignUpForm, UserRegistrationForm,UserUpdateForm,ProfileUpdateForm
from django.urls import resolve
from taggit.models import Tag
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout
from django.http import HttpRequest,QueryDict
# from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
import re,os
from helpers.tags_value import generate_tags_related_to_post


@login_required
def post_delete_view(request,id):
    post = Post.objects.get(id=id)
    if post.author != request.user:
        logout(request)
        messages.warning(
            request, f'Your are not authorized user to update or delete this post!!')
        return redirect('login')
    post.delete()
    messages.warning(request, f'Your are post have been deleted!!')
    return redirect('blog-home')

@login_required
def post_update_view(request,id):
    post = Post.objects.get(id = id)
    if post.author != request.user:
        logout(request)
        messages.warning(
            request, f'Your are not authorized user to update or delete this post!!')
        return redirect('login')
    post_form = get_object_or_404(Post, id=id)
    user = User.objects.filter(username=request.user).first()
    kwargs = {}
    if request.method == 'POST':
        form = PostForm(request.POST, initial={'title': post_form.title, 'body': post_form.body,
                                               'status': post_form.status, 'author': post_form.author}, instance=user)
        form_value = QueryDict.dict(form.data)
        slug_value = re.sub(r'\s+', '-', form_value.get('title').lower())
        kwargs['id'] = id
        kwargs['title'] = form_value.get('title')
        kwargs['slug'] = slug_value
        kwargs['author'] = user
        kwargs['body'] = form_value.get('body')
        kwargs['status'] = form_value.get('status')
        try:
            obj = Post(**kwargs)
            obj.save()
            messages.success(request, f'Your Post have been Updated!')
            return redirect('profile')
        except Exception as e:
            messages.warning(
                request, f'There have been some Error, Please Contact Admin {e}')
            return redirect('blog-home')
    else:
        form = PostForm(initial={'title':post_form.title,'body':post_form.body,'status':post_form.status,'author':post_form.author},instance=post)
        
    return render(request, 'blog/post_update_view.html', {'form': form,'id':id})

@login_required
def create_post(request):
    user = User.objects.filter(username=request.user).first()
    kwargs = {}
    if request.method == 'POST':
        form = PostForm(request.POST, instance=user)
        form_value = QueryDict.dict(form.data)
        slug_value = re.sub(r'\s+', '-', form_value.get('title').lower())
        # tag_value = re.sub(r'\s+', ',', form_value.get('title').lower())
        kwargs['title'] = form_value.get('title')
        kwargs['slug'] = slug_value
        # kwargs['tags'] = tag_value
        kwargs['author'] = request.user
        kwargs['body'] = form_value.get('body')
        kwargs['status'] = form_value.get('status')
        try:
            obj = Post(**kwargs)
            obj.save()
            post = generate_tags_related_to_post(**kwargs)
            if kwargs['status']=='draft':
                messages.success(request, f'Your Post have been Drafted!')
            else:
                messages.success(request, f'Your Post have been Added!')
            return redirect('blog-home')
        except Exception as e:
            messages.warning(request,f'There have been some Error, Please Contact Admin {e}')
            return redirect('blog-home')
    else:
        form = PostForm(initial={'author': request.user}, instance=request.user)
    return render(request, 'blog/create.html', {'form': form})


def post_list_view(request,tag_slug=None):
    post_list = Post.objects.all()
    tag = None
    if tag_slug:
        tag = get_object_or_404(Tag,slug=tag_slug)
        post_list = post_list.filter(tags__in=[tag])
    paginator = Paginator(post_list,2)
    page_number=request.GET.get('page')
    try:
        post_list=paginator.page(page_number)
    except PageNotAnInteger:
        post_list=paginator.page(1)
    except EmptyPage:
        post_list=paginator.page(paginator.num_pages)
    return render(request,'blog/post_list.html',{'post_list':post_list,'tag':tag})


def post_detail_view(request, year, month, day, post):
    post = get_object_or_404(Post, slug=post, status='published', publish__year=year, publish__month=month, publish__day=day)
    comments = post.comments.filter(active=True)
    csubmit = False
    if request.method=='POST':
        form = CommentForm(request.POST)
        if form.is_valid:
            new_comment = form.save(commit=False)
            new_comment.post = post
            new_comment.save()
            csubmit = True
    else:
        form = CommentForm()
            
    return render(request, 'blog/post_detail.html', {'post': post, 'form': form, 'csubmit': csubmit, 'comments': comments})
    


def mail_send_view(request,id):
    post = get_object_or_404(Post,id=id,status='published')
    form = EmailForm()
    sent = False
    if request.method == 'POST':
        form = EmailForm(request.POST)
        if form.is_valid():
            cd = form.cleaned_data
            post_url = request.build_absolute_uri(post.get_absolute_url())
            subject = '{}({}) recommends you to read "{}"'.format(
                cd['name'], cd['email'], post.title)
            message = 'Read Post At: \n {}\n\n{}\' Comments:\n{}'.format(
                post_url, cd['name'], cd['comments'])
            try:
                send_mail(subject, message, os.environ.get('EMAIL_USER'), [cd['to']])
                sent = True
            except Exception as e:
                messages.warning(
                    request, f'Email Not sent Please Contact Admin!!')
                sent=False
    else:
        form = EmailForm()
    return render(request, 'blog/sharebymail.html', {'form': form, 'post': 'post','sent': sent})


def sign_up_form(request):
    # sent = False
    if request.method == 'POST':
        try:
            form = UserRegistrationForm(request.POST)
            if form.is_valid:
                form.save()
                username = QueryDict.dict(form.data).get('username')
                user = User.objects.filter(username=f'{username}').first()
                Profile.objects.create(user=user)
                messages.success(request,f'Your Account has been created!, You now login to access the page')
                return redirect('login')
            
        except Exception as e:
            print(e)
    else:
        form = UserRegistrationForm()
    
    
    return render(request, 'blog/signup.html', {'form': form})

@login_required
def profile(request):
    user = User.objects.filter(username = request.user).first()
    if request.method == 'POST':
        u_form = UserUpdateForm(request.POST, instance=request.user)
        p_form = ProfileUpdateForm(request.POST, request.FILES ,instance=request.user.profile)
        if u_form.is_valid and p_form.is_valid:
            u_form.save()
            p_form.save()
            messages.success(
                request, f'Your Account has been Updated!')
            return redirect('profile')
    else:
        u_form = UserUpdateForm(instance=request.user)
        p_form = ProfileUpdateForm(instance=request.user.profile)
        user_post_obj = list(Post.objects.filter(author=user))
        user_module = dict()
        # user_module = [ user_module[i.id] = i.title for i in user_post_obj]
        # for i in user_post_obj:
        #     user_module[i.id] = [i.title, i.created.year,
        #                          i.created.month, i.created.day, i.slug]
        # print(user_module)
        for i in user_post_obj:
            user_module[i.id] = i.title
        user_post_title = [i for i in user_post_obj]
    context = {
        'u_form':u_form,
        'p_form':p_form,
        'user_post': user_post_title,
        'user_module': user_module,
        'year':2020
    }
    return render(request, 'blog/profile.html', context)
