from rest_framework import serializers
from .models import Document, Paragraph


class ParagraphSerializer(serializers.ModelSerializer):
    class Meta:
        model = Paragraph
        fields = "__all__"


class DocumentSerializer(serializers.ModelSerializer):
    paragraphs = ParagraphSerializer(many=True)

    class Meta:
        model = Document
        fields = "__all__"

    def create(self, validated_data):
        paragraphs_data = validated_data.pop("paragraphs")
        document = Document.objects.create(**validated_data)
        for paragraph_data in paragraphs_data:
            Paragraph.objects.create(document=document, **paragraph_data)
        return document
