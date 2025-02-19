from django.db import models



from django.db import models

class UserResponse(models.Model):
    session_id = models.CharField(max_length=255)  # Для отслеживания пользователя
    question_number = models.IntegerField()
    answer = models.CharField(max_length=50)


# Create your models here.
