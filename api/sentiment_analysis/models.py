# sentiment_analysis/models.py
from django.db import models


class Document(models.Model):
    content = models.TextField()
    sentiment = models.CharField(max_length=20, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
