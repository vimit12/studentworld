from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse
from django.utils import timezone
from taggit.managers import TaggableManager
from PIL import Image
#for tags on every post

class CustomManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(status='published')
    
class Post(models.Model):
    STATUS_CHOICES=(('draft','Draft'),('published','Published'))
    title = models.CharField(max_length=256)
    slug = models.SlugField(max_length=264,unique_for_date='publish')
    # need to create user model through login to come back later
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='blog_post',
                               related_query_name=None, limit_choices_to=None, null=True, db_column='author', blank=True)
    body = models.TextField()
    publish = models.DateTimeField(default=timezone.now)
    #datetime of create() action at time of creation of post
    created = models.DateTimeField(default=timezone.now)
    updated = models.DateTimeField(default=timezone.now)
    status=models.CharField(max_length=10,choices=STATUS_CHOICES,default='draft')
    
    objects= CustomManager()
    tags = TaggableManager()

    class Meta:
        ordering=('-publish',)
    
    def __str__(self):
        return self.title
    
    # def save(self):
    #     super().save()
        
    #     author = self.author
    
    def get_absolute_url(self):
        return reverse('post_detail', args=[self.publish.year, self.publish.strftime('%m'), self.publish.strftime('%d'), self.slug], kwargs=None, current_app='scienceblog')

        
class Comment(models.Model):
    post = models.ForeignKey(
        Post, on_delete=models.CASCADE, related_name='comments')
    name = models.CharField(max_length=100)
    email = models.EmailField()
    body = models.TextField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now_add=True)
    active = models.BooleanField(default=True)
    
    class Meta:
        ordering = ('-created',)
    
    def __str__(self):
        return f'''Commented by {self.name} on {self.post}'''
    

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(default='default.jpg', upload_to='profile_pics')

    def __str__(self):
        return f'{self.user.username} Profile'
    
    def save(self,*args,**kwargs):
        super().save(*args, **kwargs)
        
        img = Image.open(self.image.path)
        
        if img.height>300 and img.width>300:
            output_size = (200,200)
            img.thumbnail(output_size)
            img.save(self.image.path)
            


