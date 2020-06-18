from taggit.models import Tag
from django.contrib.auth.models import User
from scienceblog.models import Post, Profile


def generate_tags_related_to_post(**kwargs):
    post=Post.objects.get(slug=kwargs.get('slug'))
    title = post.title.lower().split()
    for tag_value in title:
        post.tags.add(tag_value)
        post.save()
    return post
