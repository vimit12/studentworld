from django.contrib import admin
# from scienceblog.models import Post,Comment
from scienceblog.models import Post,Comment,Profile

class PostAdmin(admin.ModelAdmin):
    list_display=['id','title', 'slug', 'author', 'publish', 'created', 'updated', 'status']
    prepopulated_fields = {"slug": ("title",)}
    list_filter = ('status', 'created', 'publish', 'author')
    search_fields = ('title', 'body')
    #can be removed in future
    raw_id_fields = ('author',)
    date_hierarchy = 'publish'
    ordering = ['status', 'publish']

class CommentAdmin(admin.ModelAdmin):
    list_display = ['name','email','post','body','created','updated','active']
    list_filter = ('active','created','updated')
    search_fields = ('name','email','body')
    
    
admin.site.register(Profile)
admin.site.register(Post, PostAdmin)
admin.site.register(Comment, CommentAdmin)
