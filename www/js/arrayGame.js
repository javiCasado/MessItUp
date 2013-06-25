var nivel=1;
var guardado=0;
var guardable=0;
var newElement;
var arrayValores;
var position;
var foco;
var isImportant=0;
var cambiar=-1;
var puntos;
var errores;
var guardar;
var tiempoTotal=0;

var CronoID = null
var CronoEjecutandose = false
var decimas, segundos, minutos


function start(){
	
	cargarArray(nivel);
}


function cargarArray(nivel){
	
	arrayValores = new Array();
	puntos=0;errores=0;
	var i=0;
	if(nivel==1){
		do{
			arrayValores[i]=Math.floor(Math.random()*40);
			document.getElementById("pos"+i).src="image/"+arrayValores[i]+".png";
			document.getElementById("array"+i).style.visibility="visible";
			i++;
		}while(i<3)
			position=Math.floor(Math.random()*3);
			document.getElementById("startDiv").style.zIndex="-1";
			document.getElementById("startButton").style.visibility="hidden";
			document.getElementById("newLabel").style.visibility="visible";
			document.getElementById("position").style.visibility="visible";
			document.getElementById("time").style.visibility="visible";
			document.getElementById("saveLabel").style.visibility="visible";
			
	}

	if(nivel==2){
		do{
			arrayValores[i]=Math.floor(Math.random()*40);
			document.getElementById("pos"+i).src="image/"+arrayValores[i]+".png";
			document.getElementById("array"+i).style.visibility="visible";
			i++;
		}while(i<7)
			position=Math.floor(Math.random()*7);
	}
	if(nivel==3){	
		do{
			arrayValores[i]=Math.floor(Math.random()*40);
			document.getElementById("pos"+i).src="image/"+arrayValores[i]+".png";
			document.getElementById("array"+i).style.visibility="visible";
			i++;
		}while(i<10)
			position=Math.floor(Math.random()*10);
			
	}
	if(nivel==4){	
		do{
			arrayValores[i]=Math.floor(Math.random()*40);
			document.getElementById("pos"+i).src="image/"+arrayValores[i]+".png";
			document.getElementById("array"+i).style.visibility="visible";
			i++;
		}while(i<13)
			position=Math.floor(Math.random()*10);
	}
	if(nivel==5){	
		do{
			arrayValores[i]=Math.floor(Math.random()*40);
			document.getElementById("pos"+i).src="image/"+arrayValores[i]+".png";
			document.getElementById("array"+i).style.visibility="visible";
			i++;
		}while(i<16)
			position=Math.floor(Math.random()*16);
	}
	if(nivel==6){
		if (tiempoTotal<50){
			document.getElementById('point').src="./image/PantallaNivelMuyAlto.png";
		}
		if ((tiempoTotal>=50)&&(tiempoTotal<100)){
			document.getElementById('point').src="./image/PantallaNivelAlto.png";
		}
		if ((tiempoTotal>=100)&&(tiempoTotal<150)){
			document.getElementById('point').src="./image/PantallaNivelMedio.png";
		}
		if ((tiempoTotal>=150)&&(tiempoTotal<200)){
			document.getElementById('point').src="./image/PantallaNivelBajo.png";
		}
		if ((tiempoTotal>=200)){
			document.getElementById('point').src="./image/PantallaNivelMuyBajo.png";
		}
		
		document.getElementById('pointDiv').style.visibility = "visible";
		document.getElementById('pointDiv').style.display = "";
		document.getElementById('arrayDiv').style.display = "none";
		document.getElementById('newElementDiv').style.display = "none";
		document.getElementById('superior').style.display = "none";
		
		localStorage.setItem('juegoArray',tiempoTotal);
		nivel==1;
		setTimeout("location.href='./index.html'", 5000);
		
	}
	IniciarCrono();
	document.getElementById("saveNum").src="image/fondo.png";
	newElement=Math.floor(Math.random()*40);
	document.getElementById("newElementImg").src="image/"+newElement+".png";
	document.getElementById("position").innerHTML="POSICION: "+position;
	document.getElementById("newElement").style.visibility = "visible";	
	document.getElementById("saveNumButton").style.visibility = "visible";	
	
		

}

function guardarElemento() { 
	if(guardar==1){	
		esGuardable(arrayValores[foco]);
		if(guardable==1){
			save(foco);
			return;
		}else{
			alert("no es necesario guardar!!!");
			errores++;
		}
	}
	guardar=0;
}

function introducir(){
	if(position==foco){
		estaGuardado(arrayValores[foco]);
		if(guardado==1){
			arrayValores[foco]=newElement;
			if(isImportant==0){
				document.getElementById("pos"+foco).src="image/"+newElement+".png";
				arrayValores[foco]=newElement;
			}
			else{
				document.getElementById("pos"+foco).src="image/"+newElement+"e.png";
				arrayValores[foco]=newElement+"e";
			}
			puntos++;
			var aux=puntos+errores;
			if(aux>5){
				DetenerCrono();
				alert("Buen trabajo. Nivel superado con exito");
				tiempoTotal=tiempoTotal+minutos*60+segundos+errores*30;
				nivel++;
				cargarArray(nivel);
				}
			else{
				nuevoRandom();
			}
		return;
		}else{
			alert("acaba de perder un elemento importante!!!");
			errores++;
		}
	}else{
		foco=-1;
		alert("ha fallado, intentelo de nuevo");
		errores++;
	}
}


function esGuardable(value){
	guardable=0;
	var i=0;
	do{
		if(value==i+"e"){
			guardable=1;
			return;
		}
		i++;
	}while(i<40)
}

function estaGuardado(value){
	guardado=1;
	var i=0;
	do{
		if(value==i+"e"){
			guardado=0;
			return;
		}
		i++;
	}while(i<40)
}

function save(value){
	document.getElementById("saveNum").src="image/"+arrayValores[value]+".png";
	arrayValores[value]=null;
	document.getElementById("pos"+value).src="image/fondo.png";
	guardar=0;
	foco=-1;
	guardable=0;
}


function nuevoRandom(elemento){
	
	
	newElement=Math.floor(Math.random()*40);
	
	switch (nivel){
	case 1:
		position=Math.floor(Math.random()*3);
		break;
	case 2:
		position=Math.floor(Math.random()*7);
		break;
	case 3:
		position=Math.floor(Math.random()*10);
		break;
	case 4:
		position=Math.floor(Math.random()*10);
		break;
	case 5:
		position=Math.floor(Math.random()*16);
		break;
	}
	
    isImportant=Math.floor(Math.random()*2);
	
	if(isImportant==0){
		document.getElementById("newElementImg").src="image/"+newElement+".png";
		document.getElementById("newElement").value=newElement;
	}else{
		document.getElementById("newElementImg").src="image/"+newElement+"e.png";
		document.getElementById("newElement").value=newElement+"*";
	}
	document.getElementById("position").innerHTML="POSICION: "+position;
	
	foco=-1;
}


//Funciones para el uso del reloj

function DetenerCrono (){
   	if(CronoEjecutandose)
   		clearTimeout(CronoID)
   	CronoEjecutandose = false
}

function InicializarCrono () {
	//inicializa contadores globales
	decimas = 0
	segundos = 0
	minutos = 0
	
	//pone a cero los marcadores
	document.getElementById("time").innerHTML='00:00';
}

function MostrarCrono () {
	       
   	//incrementa el crono
   	decimas++
	if ( decimas > 9 ) {
		decimas = 0
		segundos++
		if ( segundos > 59 ) {
			segundos = 0
			minutos++
			if ( minutos > 99 ) {
				alert('Fin de la cuenta')
				DetenerCrono()
				return true
			}
		}
	}

	//configura la salida
	var ValorCrono = ""
	ValorCrono = (minutos < 10) ? "0" + minutos : minutos
	ValorCrono += (segundos < 10) ? ":0" + segundos : ":" + segundos
	
			
  	document.getElementById("time").innerHTML=ValorCrono;
  	CronoID = setTimeout("MostrarCrono()", 100)
	CronoEjecutandose = true
	return true
}

function IniciarCrono () {
 	DetenerCrono()
 	InicializarCrono()
	MostrarCrono()
}