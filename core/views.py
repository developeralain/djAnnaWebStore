from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from .models import Customer, Painting
from .serializers import *

@api_view(['POST'])
def create_customer(request):
    if request.method ==  'POST':
        serializer = CustomerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def retrieve_paintings(request):
    if request.method == 'GET':
        data = Painting.objects.all()

        serializer = PaintingSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
