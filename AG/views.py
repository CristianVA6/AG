from django.shortcuts import render

# Create your views here.
def Home(request):
    return render(request,'Home.html')

def ObtenerDatos(request):
    Genes = 0
    Velocidad = 0
    Mutacion = 0
    if request.method == 'GET':
        Genes = int(request.GET.get('Genes'))
        Velocidad = float(request.GET.get('Velocidad'))
        Mutacion = float(request.GET.get('Mutacion'))
        print(Genes)

    return render(request,'Respuesta.html',{'G':Genes,'V':Velocidad,'M':Mutacion})
