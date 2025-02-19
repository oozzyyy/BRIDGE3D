from django.shortcuts import render

def bridge_designer(request):
    return render(request, 'bridge_app/bridge_designer.html')

def index(request):
    return render(request, "bridge_app/index.html")

def page(request):
    return render(request, "bridge_app/page.html")

def page1(request):
    return render(request, "bridge_app/page1.html")

def page2(request):
    return render(request, "bridge_app/page2.html")

def bridgedes(request):
    return render(request, "bridge_app/bridgedes.html")

def bridgedes1(request):
    return render(request, "bridge_app/bridgedes1.html")

def test(request):
    return render(request, "bridge_app/test.html")

def test_result(request):
    return render(request, "bridge_app/test_result.html")


from django.shortcuts import render, redirect
from django.http import HttpRequest
from .models import UserResponse

QUESTIONS = [
    {"text": "Какой длины должен быть мост?", "options": ["Короткий", "Средний", "Длинный"]},
    {"text": "Какую нагрузку должен выдерживать мост?", "options": ["Легковесный", "Средний", "Высокая нагрузка"]},
    {"text": "Где будет находиться мост?", "options": ["В городе", "В природе", "Над водой"]},
    {"text": "Из какого материала его построить?", "options": ["Бетон", "Сталь", "Дерево"]},
    {"text": "Что для вас важнее в мосте?", "options": ["Прочность", "Дизайн", "Доступность"]},
]

MAPPING = {
    "Короткий": "пешеходный",
    "Легковесный": "пешеходный",
    "В городе": "пешеходный",
    "Средний": "арочный",
    "Бетон": "арочный",
    "Прочность": "арочный",
    "Длинный": "висячий",
    "Высокая нагрузка": "висячий",
    "Над водой": "висячий",
}

def test(request: HttpRequest, question_number: int):
    if question_number > len(QUESTIONS):
        return redirect('test_result')

    if request.method == "POST":
        answer = request.POST.get("answer")
        session_id = request.session.session_key or request.session.create()
        UserResponse.objects.create(session_id=session_id, question_number=question_number, answer=answer)
        return redirect('test', question_number=question_number + 1)

    return render(request, "test.html", {
        "question": QUESTIONS[question_number - 1]["text"],
        "options": QUESTIONS[question_number - 1]["options"],
        "question_number": question_number
    })

def test_result(request: HttpRequest):
    session_id = request.session.session_key
    responses = UserResponse.objects.filter(session_id=session_id)
    counter = {"висячий": 0, "пешеходный": 0, "арочный": 0}

    for response in responses:
        result_type = MAPPING.get(response.answer)
        if result_type:
            counter[result_type] += 1

    final_result = max(counter, key=counter.get)

    return render(request, "test_result.html", {"result": final_result})