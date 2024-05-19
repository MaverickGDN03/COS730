from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from .models import Document, Paragraph
from .serializers import DocumentSerializer


class ParagraphModelTest(TestCase):
    def test_create_paragraph(self):
        paragraph = Paragraph.objects.create(
            content="Test content", sentiment="positive"
        )
        self.assertEqual(paragraph.content, "Test content")
        self.assertEqual(paragraph.sentiment, "positive")


class DocumentSerializerTest(TestCase):
    def test_document_serializer(self):
        paragraph = Paragraph.objects.create(
            content="Test content", sentiment="positive"
        )
        document = Document.objects.create(title="Test Document")
        document.paragraphs.add(paragraph)

        serializer = DocumentSerializer(document)
        data = serializer.data

        self.assertEqual(data["title"], "Test Document")
        self.assertEqual(len(data["paragraphs"]), 1)
        self.assertEqual(data["paragraphs"][0]["content"], "Test content")
        self.assertEqual(data["paragraphs"][0]["sentiment"], "positive")


class DocumentViewSetTest(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_create_document(self):
        payload = {
            "title": "Test Document",
            "paragraphs": [{"content": "This is a test paragraph."}],
        }
        response = self.client.post("/api/documents/", payload, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Document.objects.count(), 1)
        self.assertEqual(Paragraph.objects.count(), 1)
        document = Document.objects.get()
        self.assertEqual(document.title, "Test Document")
        paragraph = Paragraph.objects.get()
        self.assertEqual(paragraph.content, "This is a test paragraph.")
        self.assertIsNotNone(paragraph.sentiment)
