from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import MovieViewSet

from .views import (
    get_all_movies,
    create_review,
    GenreListView,
    LikeReviewView,
    login_view,
    logout_view,
    MovieViewSet  # <-- этот импорт тоже обязателен
)
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'movie-crud', MovieViewSet, basename='movie-crud')

urlpatterns = router.urls + [
    path('movies/', get_all_movies, name='movie-list'),
    path('reviews/create/', create_review, name='create-review'),
    path('genres/', GenreListView.as_view(), name='genre-list'),
    path('reviews/like/', LikeReviewView.as_view(), name='like-review'),
    path('login/', login_view, name='login'),
    path('logout/', logout_view, name='logout'),
]
