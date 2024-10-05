from django.urls import path
from .views import JobList, JobSeekerDetail

urlpatterns = [
    path('jobs/', JobList.as_view(), name='job-list'),
    path('jobseekers/<int:pk>/', JobSeekerDetail.as_view(), name='jobseeker-detail'),
]
