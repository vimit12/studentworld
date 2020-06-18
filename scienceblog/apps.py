from django.apps import AppConfig


class ScienceblogConfig(AppConfig):
    name = 'scienceblog'
    
    def ready(self):
        import scienceblog.signals
