from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from textblob import TextBlob
from .models import Document
from .serializers import DocumentSerializer


class DocumentViewSet(viewsets.ModelViewSet):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer

    def create(self, request, *args, **kwargs):
        content = request.data.get("content", "")
        blob = TextBlob(content)
        sentiment = (
            "positive"
            if blob.sentiment.polarity > 0
            else "negative" if blob.sentiment.polarity < 0 else "neutral"
        )
        document = Document.objects.create(content=content, sentiment=sentiment)
        serializer = self.get_serializer(document)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
