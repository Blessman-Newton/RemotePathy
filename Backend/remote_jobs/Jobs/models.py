from django.db import models
from django.contrib.auth.models import User

class Job(models.Model):
    title = models.CharField(max_length=255)
    company = models.CharField(max_length=255)
    description = models.TextField()
    location = models.CharField(max_length=255)
    salary_range = models.CharField(max_length=50)
    posted_on = models.DateTimeField(auto_now_add=True)
    external_url = models.URLField(null=True, blank=True)  # For API jobs

class JobSeeker(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    resume = models.FileField(upload_to='resumes/')
    location = models.CharField(max_length=100)
    preferred_salary = models.DecimalField(max_digits=10, decimal_places=2)
    resume_text = models.TextField(blank=True, null=True)
