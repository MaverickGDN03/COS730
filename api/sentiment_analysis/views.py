from rest_framework import viewsets, status
from rest_framework.response import Response
from textblob import TextBlob
from .models import Document, Paragraph
from .serializers import DocumentSerializer, ParagraphSerializer


class DocumentViewSet(viewsets.ModelViewSet):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer

    def create(self, request, *args, **kwargs):
        paragraphs_data = request.data.get("paragraphs", [])
        paragraphs = []
        for para_data in paragraphs_data:
            content = para_data.get("content", "")
            blob = TextBlob(content)
            sentiment = (
                "positive"
                if blob.sentiment.polarity > 0
                else "negative" if blob.sentiment.polarity < 0 else "neutral"
            )
            paragraph = Paragraph(content=content, sentiment=sentiment)
            paragraph.save()
            paragraphs.append(paragraph)
        document = Document(title=request.data.get("title", ""))
        document.save()
        document.paragraphs.set(paragraphs)
        serializer = self.get_serializer(document)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
