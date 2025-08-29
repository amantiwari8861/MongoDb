from rest_framework import serializers


class StudentSerializer(serializers.Serializer):
    id = serializers.CharField(read_only=True)
    name = serializers.CharField(max_length=100)
    age = serializers.IntegerField()
    grade = serializers.CharField(max_length=10)
