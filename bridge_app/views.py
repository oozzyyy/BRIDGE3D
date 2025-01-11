from django.shortcuts import render

def bridge_designer(request):
    return render(request, 'bridge_app/bridge_designer.html')

def index(request):
    return render(request, "bridge_app/index.html")

def page(request):
    return render(request, "bridge_app/page.html")
