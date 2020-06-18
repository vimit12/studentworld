from scienceblog.models import Post
from django import template

register = template.Library()

@register.simple_tag(name='count',takes_context=True)
def total_posts(context):
    return Post.objects.count()


@register.inclusion_tag('blog/latest_post.html')
def show_latest_post(count=5):
    latest_post = Post.objects.order_by('-publish')[:count]
    return {'latest_post': latest_post}


from django.db.models import Count
@register.filter
def get_range(value):
    return range(1,value+1)


