from django.urls import path
from .views import JobList, JobSeekerDetail
from django.views.generic import TemplateView

urlpatterns = [
    path('jobs/', JobList.as_view(), name='job-list'),
    path('jobseekers/<int:pk>/', JobSeekerDetail.as_view(), name='jobseeker-detail'),
]
