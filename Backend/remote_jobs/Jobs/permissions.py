# permissions.py
from rest_framework import permissions

class IsJobSeeker(permissions.BasePermission):
    """
    Custom permission to only allow job seekers to access certain views.
    """

    def has_permission(self, request, view):
        return request.user.is_authenticated and hasattr(request.user, 'jobseekerprofile')

class IsRecruiter(permissions.BasePermission):
    """
    Custom permission to only allow recruiters to access certain views.
    """

    def has_permission(self, request, view):
        return request.user.is_authenticated and hasattr(request.user, 'recruiter')
