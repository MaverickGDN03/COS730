from django.db import models


class Paragraph(models.Model):
    content = models.TextField()
    sentiment = models.CharField(max_length=20, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)


class Document(models.Model):
    title = models.CharField(max_length=100, default="")
    paragraphs = models.ManyToManyField(Paragraph)
    created_at = models.DateTimeField(auto_now_add=True)
