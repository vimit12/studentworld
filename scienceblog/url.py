'''scienceblog related url defination'''

from django.urls import path,re_path
from django.conf.urls import url, include
from . import views
from django.contrib.auth import views as auth_view


urlpatterns = [
    url(r'^blog/$', views.post_list_view,name='blog-home'),
    url(r'^profile/$', views.profile,name='profile'),
    url(r'^create/$', views.create_post,name='create'),
    url(r'^signup/$', views.sign_up_form, name='signup'),
    url('login/', auth_view.LoginView.as_view(),name='login'),
    url('logout/', auth_view.LogoutView.as_view(template_name='registration/logout.html'),name='logout'),
    path('password-reset/', auth_view.PasswordResetView.as_view(template_name='registration/password_reset.html'),name='password_reset'),
    path('password-reset/done', auth_view.PasswordResetDoneView.as_view(template_name='registration/password_reset_done.html'),name='password_reset_done'),
    path('password-reset-confirm/<uidb64>/<token>/', auth_view.PasswordResetConfirmView.as_view(template_name='registration/password_reset_confirm.html'),name='password_reset_confirm'),
    path('password-reset-compelete/', auth_view.PasswordResetCompleteView.as_view(
        template_name='registration/password_reset_complete.html'), name='password_reset_complete'),
    # url('accounts/', include('django.contrib.auth.urls')),
    url(r'^tag/(?P<tag_slug>[-\w]+)/$', views.post_list_view,name='post_list_tag_name'),
    url(r'^(?P<year>\d{4})/(?P<month>\d{2})/(?P<day>\d{2})/(?P<post>[-\w]+) /$', views.post_detail_view,name='post_detail'),
    url(r'^update/(?P<id>\d+)/$', views.post_update_view, name='post_update'),
    url(r'^delete/(?P<id>\d+)/$', views.post_delete_view, name='post_delete'),
    url(r'^(?P<id>\d+)/share/$',views.mail_send_view),
]

