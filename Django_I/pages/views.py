from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def home_view(request, *args, **kwargs):
    #return HttpResponse("<h1>Hello Django</h1>")
    return render(request, "home.html", {}) #from templates folder

def contact_view(request, *args, **kwargs):
    print(request.user)
    return HttpResponse("<h1>Contact Page</h1>")

def about_view(request, *args, **kwargs):
    #return HttpResponse("<h1>Hello Django</h1>")
    my_context = {
        "my_text": "This is about us",
        "this_is_true": True,
        "my_number": 123,
        "my_list": [123, 4242, 312, "Abc"]
    }
    return render(request, "about.html", my_context)