from rest_framework import generics
from .models import Job, JobSeeker
from .serializers import JobSerializer, JobSeekerSerializer

class JobList(generics.ListCreateAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer

class JobSeekerDetail(generics.RetrieveUpdateAPIView):
    queryset = JobSeeker.objects.all()
    serializer_class = JobSeekerSerializer
