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