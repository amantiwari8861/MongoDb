from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from bson import ObjectId
from .db import collection
from .serializers import StudentSerializer

class StudentList(APIView):
    def get(self, request):
        students = list(collection.find())
        for s in students:
            s["id"] = str(s["_id"])
            del s["_id"]
        return Response(students)

    def post(self, request):
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            result = collection.insert_one(serializer.validated_data)
            return Response({"id": str(result.inserted_id)}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class StudentDetail(APIView):
    def get(self, request, pk):
        student = collection.find_one({"_id": ObjectId(pk)})
        if student:
            student["id"] = str(student["_id"])
            del student["_id"]
            return Response(student)
        return Response(status=status.HTTP_404_NOT_FOUND)

    def put(self, request, pk):
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            result = collection.update_one({"_id": ObjectId(pk)}, {"$set": serializer.validated_data})
            if result.matched_count:
                return Response({"updated": True})
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        result = collection.delete_one({"_id": ObjectId(pk)})
        if result.deleted_count:
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(status=status.HTTP_404_NOT_FOUND)
