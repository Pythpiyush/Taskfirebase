from django.shortcuts import render,HttpResponse,redirect
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
def home(request):
    return render(request,'registerform/home.html')

def handleSignup(request):
    if request.method=='POST':
        username=request.POST.get('username')
        fname=request.POST.get('fname')
        lname=request.POST.get('lname')
        pass1=request.POST.get('pass1')
        pass2=request.POST.get('pass2')
        email=request.POST.get('email')

        # if len(username)>10:
        #     messages.error(request, "Username must be under 10 characters!!")
        #     return redirect('home')
        #
        # if not username.isalnum():
        #     messages.error(request, "Username must alphanumeric characters!!")
        #     return redirect('home')

        if(pass1!=pass2):
            messages.error(request, "Passwords donot match")
            return redirect('home')

        myuser=User.objects.create_user(username,email,pass1)
        myuser.first_name=fname
        myuser.last_name=lname
        myuser.save()
        messages.success(request,"Your account is created successfully")
        return redirect('home')
    else:
        return HttpResponse("404-Not Found")

def handleLogin(request):
    if request.method=='POST':
        loginusername=request.POST.get('loginusername')
        loginpassword=request.POST.get('loginpassword')
        user=authenticate(username=loginusername,password=loginpassword)
        if user is not None:
            login(request,user)
            messages.success(request,"Successfully logged In")
            return redirect('home')
        else:
            messages.error(request,"Invalid Credentials")
            return redirect('home')
    return HttpResponse('404-Not Found')

def handleLogout(request):
    logout(request)
    messages.success(request,"Successfully logged out")
    return redirect('home')

