from django.shortcuts import render

def bridge_designer(request):
    return render(request, 'bridge_app/bridge_designer.html')