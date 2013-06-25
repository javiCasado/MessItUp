var puntero=7;
var arrayPila = new Array();
var arrayElementos=new Array();
arrayElementos[0]=null;
arrayElementos[1]=5;
arrayElementos[2]=3;
arrayElementos[3]=1;
arrayElementos[4]=7;
arrayElementos[5]=9;
arrayElementos[6]=4;
arrayElementos[7]=2;
var randomElement=5;
var nivel=1;
var arrayPuntero= new Array();
var ordenes;
var aux;
var boton;
var random;
var comprobar;
var elementoGuardado,elementoLeido,elementoIntro;
var elem;
var tiempoTotal=0;

var CronoID = null
var CronoEjecutandose = false
var decimas, segundos, minutos

var subtitulosTutorial=new Array();
subtitulosTutorial[0]="Introduzca el numero indicado en la pila";
subtitulosTutorial[1]="Extraiga un numero de la pila";
subtitulosTutorial[2]="Lea un numero de la pila ";
subtitulosTutorial[3]="Busca el numero: ";
subtitulosTutorial[4]="Extrae el numero: ";
subtitulosTutorial[5]="sustituye el numero: ";
subtitulosTutorial[6]="lee y extrae el numero: ";


var arrayBotones=new Array();
var primero=0;


function start(){
	cargarArray();
	cargarNivel();
	ordenes=0;
	errores=0;
	IniciarCrono();
	document.getElementById("startDiv").style.zIndex="-2";
	document.getElementById("startButton").style.visibility = "hidden";
	document.getElementById("punteroDiv").style.visibility = "visible";
	document.getElementById("pilaDiv").style.visibility = "visible";
	document.getElementById("accionesDiv").style.visibility = "visible";
	document.getElementById("combrobarDiv").style.visibility = "visible";
	document.getElementById("errorButton").style.visibility = "visible";
	document.getElementById("subtitulosDiv").style.visibility = "visible";
	document.getElementById("divTime").style.visibility = "visible";
	document.getElementById("botonesDiv").style.visibility = "visible";

}

function cargarArray(){
	arrayPila[0]=null;
	arrayPila[1]=document.getElementById("pila1");
	arrayPila[2]=document.getElementById("pila2");
	arrayPila[3]=document.getElementById("pila3");
	arrayPila[4]=document.getElementById("pila4");
	arrayPila[5]=document.getElementById("pila5");
	arrayPila[6]=document.getElementById("pila6");
	arrayPila[7]=document.getElementById("pila7");

	arrayPila[1].src="image/X.png";
	arrayPila[2].src="image/X.png";
	arrayPila[3].src="image/X.png";
	arrayPila[4].src="image/X.png";
	arrayPila[5].src="image/X.png";
	arrayPila[6].src="image/X.png";
	arrayPila[7].src="image/X.png";

	arrayPuntero[0]=null;
	arrayPuntero[1]=document.getElementById("puntero1");
	arrayPuntero[1].src="image/fondo.png";
	arrayPuntero[2]=document.getElementById("puntero2");
	arrayPuntero[2].src="image/fondo.png";
	arrayPuntero[3]=document.getElementById("puntero3");
	arrayPuntero[3].src="image/fondo.png";
	arrayPuntero[4]=document.getElementById("puntero4");
	arrayPuntero[4].src="image/fondo.png";
	arrayPuntero[5]=document.getElementById("puntero5");
	arrayPuntero[5].src="image/fondo.png";
	arrayPuntero[6]=document.getElementById("puntero6");
	arrayPuntero[6].src="image/fondo.png";
	arrayPuntero[7]=document.getElementById("puntero7");
	arrayPuntero[7].src="image/fondo.png";
}


function cargarNivel (){
	switch (nivel){
		case 1:
			for (var i=0; i<8; i++){
				arrayElementos[i]=Math.floor(Math.random()*40);
			}
			document.getElementById("topLabel").innerHTML="leido: ";
			document.getElementById("popLabel").innerHTML="guardado: ";
			document.getElementById("pushLabel").innerHTML="Introducir: "+Math.floor(Math.random()*10);
			arrayPuntero[7].src="image/flecha.png";
			aux=Math.floor(Math.random()*3);
			document.getElementById("subtitulos").innerHTML=subtitulosTutorial[aux];
			document.getElementById('confirmarButton').style.visibility="hidden";
			break;
		case 2:
			document.getElementById('errorButton').style.visibility="hidden";
		case 3:
			for(var i=0;i<8;i++){
				arrayElementos[i]=Math.floor(Math.random()*10);
			}
			document.getElementById("topLabel").innerHTML="leido: ";
			document.getElementById("popLabel").innerHTML="guardado: ";
			document.getElementById("pushLabel").innerHTML="Introducir: "+Math.floor(Math.random()*10);
			arrayPuntero[7].src="image/flecha.png";
			random=Math.floor(Math.random()*6)+1;
			random=arrayElementos[random];
			aux=Math.floor(Math.random()*4)+3;
			document.getElementById("subtitulos").innerHTML=subtitulosTutorial[aux]+' '+random;
			document.getElementById('confirmarButton').style.visibility="visible";
			break;
	
		case 4:
			document.getElementById('pointDiv').style.visibility = "visible";
			document.getElementById('pointDiv').style.display = "";
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
				document.getElementById('point').src="./image/PantallaNivelBajo.png";;
			}
			if ((tiempoTotal>=200)){
				document.getElementById('point').src="./image/PantallaNivelMuyBajo.png";
			}
			localStorage.setItem('juegoPila',tiempoTotal);
			document.getElementById("punteroDiv").style.visibility = "hidden";
			document.getElementById("pilaDiv").style.visibility = "hidden";
			document.getElementById("accionesDiv").style.visibility = "hidden";
			document.getElementById("combrobarDiv").style.visibility = "hidden";
			document.getElementById("subtitulosDiv").style.visibility = "hidden";
			document.getElementById("divTime").style.visibility = "hidden";
			document.getElementById("botonesDiv").style.visibility = "hidden";
			setTimeout("location.href='./index.html'", 5000);
			break;
		}
	
}

function botonTop() { 
	if (nivel==1){
		verificar();	
		}
	elementoLeido=+arrayElementos[puntero];
	document.getElementById("topLabel").innerHTML="Leido: "+arrayElementos[puntero];
}


function botonPop() { 
	if (puntero>0){	
		elementoGuardado=arrayElementos[puntero];
		document.getElementById("popLabel").innerHTML="guardado: "+arrayElementos[puntero];
		comprobar=arrayElementos[puntero];
		arrayPila[puntero].src="image/fondo.png"
		arrayElementos[puntero]="";
		arrayPuntero[puntero].src="image/fondo.png"
		puntero--;
		arrayPila[puntero].src="image/X.png"
		arrayPuntero[puntero].src="image/flecha.png"
		if (nivel==1){
			verificar();	
		}
	}else{
		alert("no quedan elementos en la pila!!");
	}
}

function botonPush() { 
	
	if(puntero<7){
	
		arrayPuntero[puntero].src="image/fondo.png"
		puntero++;
		arrayPuntero[puntero].src="image/flecha.png"
		arrayElementos[puntero]=randomElement;
		comprobar=randomElement;
		arrayPila[puntero].src="image/X.png";
		randomElement=Math.floor(Math.random()*10);
		document.getElementById("pushLabel").innerHTML="Introducir: "+randomElement;
		if (nivel==1){
			verificar();	
		}
	}
}

function verificar(){
	switch (nivel){
	case 1:
		if(puntero >7){
			errores++;					
		}
		if(puntero <0){
			errores++;
		}
		if (boton==4){
			if(puntero >7){
				puntero--;
			}
			if(puntero <0){
				puntero++;
			}
		}
		
		if(boton!=3){
			if(aux!=boton){
				errores++;
			}
		}
		nuevaOrden();
		break;	
	case 2: 
	case 3:
		switch (aux){
			case 3:
				if((elementoLeido!=random)&&(elementoGuardado!=random)){
					errores++;
				}
				break;
			case 4:
				if(elementoGuardado!=random){
					errores++;
				}
				break;
			case 5:
				if((elementoGuardado!=random)&&(randomElement!=random)){
					errores++;
				}
				break;
			case 6:
				if((elementoLeido!=random)||(elementoGuardado!=random)){
					errores++;
				}
				break;
		}
		nuevaOrden();
		break;
	}	
	
	
}

function nuevaOrden(){
	ordenes++;
	switch (nivel) {
		case 1:
			if(ordenes<10){
				aux=Math.floor(Math.random()*3);
				document.getElementById("subtitulos").innerHTML=subtitulosTutorial[aux];
				break;
			}else{
				if(errores>3){
					alert("Demasiados errores");
				}else{
					alert ("nivel completado");
					tiempoTotal=tiempoTotal+errores*20+minutos*60+segundos;
					nivel++;
				}
				DetenerCrono();
				start();
				break;
			}
		
		case 2:
			if (ordenes<5){
				puntero=7;
				cargarArray();
				cargarNivel();
				aux=Math.floor(Math.random()*4)+3;
				random=Math.floor(Math.random()*6)+1;
				random=arrayElementos[random];
				document.getElementById("subtitulos").innerHTML=subtitulosTutorial[aux] +' '+random;
				break;
			}else{
				if(errores>2){
					alert("Demasiados errores");
				}else{
					alert("nivel completado");
					tiempoTotal=tiempoTotal+errores*20+minutos*60+segundos;
					nivel++;
				}		
			}
			
			break;
		case 3:
			if (ordenes<10){
				puntero=7;
				cargarArray();
				cargarNivel();
				aux=Math.floor(Math.random()*4)+3;
				random=Math.floor(Math.random()*6)+1;
				random=arrayElementos[random];
				document.getElementById("subtitulos").innerHTML=subtitulosTutorial[aux] +' '+random;
				break;
			}else{
				if(errores>2){
					alert("Demasiados errores");
				}else{
					alert("nivel completado");
					tiempoTotal=tiempoTotal+errores*20+minutos*60+segundos;
					nivel++;
					cargarNivel();
				}
			}
			break;
	}		
			
}



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
	document.getElementById("time").innerHTML='00:00:0';
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


