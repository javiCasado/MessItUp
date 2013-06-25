var level;
var tamano;
var arrayNum;
var i;
var j;
var iValue,jValue;
var pivote;
var pos;
var value, value1;
var tiempoTotal=0;
var errores=0;

var CronoID = null
var CronoEjecutandose = false
var decimas, segundos, minutos




function start(){
	level=0;
	tamano=3;
	arrayNum= new Array();
	pos=0;
	ultimo=tamano;
	i=-1;
	j=-1;	
	pivote=-1;
	value=-1;
	value=-1;
	ponerArray(0);
	
	document.getElementById("initButton").disabled=true;
	document.getElementById("startDiv").style.zIndex="-1";
	document.getElementById('initButton').style.visibility = "hidden";
	document.getElementById('comprobar').style.visibility="visible";
	document.getElementById('mover').style.visibility="visible";
	document.getElementById('time').style.visibility="visible";
	IniciarCrono();
	
}

function subirNivel(level){
	switch(level){
		case 1:
			tamano=5;
			break;
		case 2:
			tamano=8;
			break;
		case 3:
			tamano=11;
			break;
		case 4:
			tamano=14;
			break;
		case 5:
			tamano=17;
			break;
		
	}
	errores=0;
	ultimo=tamano;
	i=0;
	j=tamano-1;
	ponerArray(level);
	
}

function ponerArray(level){
	switch(level){
		case 0:
			document.getElementById('level0').style.visibility = "visible";
			document.getElementById('level1').style.visibility = "hidden";
			document.getElementById('level2').style.visibility = "hidden";
			document.getElementById('level3').style.visibility = "hidden";
			document.getElementById('level4').style.visibility = "hidden";
			document.getElementById('level5').style.visibility = "hidden";
			break;
		case 1:
			document.getElementById('level0').style.visibility = "hidden";
			document.getElementById('level1').style.visibility = "visible";
			document.getElementById('level2').style.visibility = "hidden";
			document.getElementById('level3').style.visibility = "hidden";
			document.getElementById('level4').style.visibility = "hidden";
			document.getElementById('level5').style.visibility = "hidden";
			break;
		case 2:
			document.getElementById('level0').style.visibility = "hidden";
			document.getElementById('level1').style.visibility = "hidden";
			document.getElementById('level2').style.visibility = "visible";
			document.getElementById('level3').style.visibility = "hidden";
			document.getElementById('level4').style.visibility = "hidden";
			document.getElementById('level5').style.visibility = "hidden";
			break;
		case 3:
			document.getElementById('level0').style.visibility = "hidden";
			document.getElementById('level1').style.visibility = "hidden";
			document.getElementById('level2').style.visibility = "hidden";
			document.getElementById('level3').style.visibility = "visible";
			document.getElementById('level4').style.visibility = "hidden";
			document.getElementById('level5').style.visibility = "hidden";
			break;
		case 4:
			document.getElementById('level0').style.visibility = "hidden";
			document.getElementById('level1').style.visibility = "hidden";
			document.getElementById('level2').style.visibility = "hidden";
			document.getElementById('level3').style.visibility = "hidden";
			document.getElementById('level4').style.visibility = "visible";
			document.getElementById('level5').style.visibility = "hidden";
			break;
		case 5:
			document.getElementById('level0').style.visibility = "hidden";
			document.getElementById('level1').style.visibility = "hidden";
			document.getElementById('level2').style.visibility = "hidden";
			document.getElementById('level3').style.visibility = "hidden";
			document.getElementById('level4').style.visibility = "hidden";
			document.getElementById('level5').style.visibility = "visible";
			break;
			
	}
	cargarArray()
}

function cargarArray(){
		pos=0;
		pivote=-1;
		value=-1;
		value=-1;
		document.getElementById("piboteLabel").innerHTML="el pibote es: "+(tamano-1);
		for (i=0; i<tamano; i++){
			arrayNum[i]=Math.floor(Math.random()*40);
		}
		desordenarArray(arrayNum);
		var j=0;
		do{
			document.getElementById("pos"+level+j).src="image/"+arrayNum[j]+".png";
			document.getElementById("array"+level+j).style.visibility="visible";
			j++;
		}while(j<tamano)
		iValue=0;
		jValue=arrayNum.length-2;
		document.getElementById("iposLabel").innerHTML="Posicion i: "+iValue;
		document.getElementById("jposLabel").innerHTML="Posicion j: "+jValue;
}

function anadirValor(valor){
	if(value1==-2){
		value1=valor;
	}
	
	if(value==-1){
		value=valor;	
		value1=-2;
	}
	
	if(value>-1&&value1>-1){
		quickSort();
	}	
}

function quickSort(){
	if((value==iValue &&value1==jValue)||(value==jValue &&value1==iValue)){		
		if(value<value1){
			if(arrayNum[value]<arrayNum[value1])
				alert("esta desordenando el array");
			else
				
				cambio();
		}else{
			if(value1<value0)
				if(arrayNum[value1]<arrayNum[value])
					alert("esta desordenando el array");
				else
					cambio();
		}
	}else{
		alert("movimiento invalido en el metodo quicksort");
		value=-1;
		value1=-1;
	}
	
}

function desordenarArray(arrayNum){
	arrayNum.sort(compareNum);
	var cambio,aux;
	var i=0;
	var j=arrayNum.length-1;
	do{
		j--;
		cambio=Math.floor(Math.random()*2);
		if (cambio==0){
			aux=arrayNum[i];
			arrayNum[i]=arrayNum[j];
			arrayNum[j]=aux;
		}
		i++;
	}while(i<=j);
	
}
function compareNum (a, b)
{
   return a-b;
}

function cambio(){
	var aux;
	aux=arrayNum[value];
	arrayNum[value]=arrayNum[value1];
	arrayNum[value1]=aux;
				
	document.getElementById("pos"+level+value).src="image/"+arrayNum[value]+".png";
	document.getElementById("pos"+level+value1).src="image/"+arrayNum[value1]+".png";
	add();
	value=-1;value1=-1;	
}

function add(){
	iValue++;
	jValue--;
	/*
	if(i>=j){
		alert('se ha terminado esta fase');
	}*/
	document.getElementById("iposLabel").innerHTML="Posicion i: "+iValue;
	document.getElementById("jposLabel").innerHTML="Posicion j: "+jValue;
}

function comprobar(){
	var correcto=1;
	//comprobar
	var i=0;
	do{
		if(arrayNum[i]>arrayNum[i+1]){
			correcto=0;
			break;
		}
		i++;
	}while(i<tamano)
	
	if (correcto==1){
		alert("nivel completado con exito");
		document.getElementById('level'+level).style.display = "none";
		if(level==5){
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
			document.getElementById('botones').style.display = "none";
			document.getElementById('tiempo').style.display = "none";
			document.getElementById('posicion').style.display = "none";
			localStorage.setItem('juegoQuiksort',tiempoTotal);
			level=0;
			setTimeout("location.href='./index.html'", 5000);
		}
		tiempoTotal=minutos*60+segundos+errores*30;
		level++;
		subirNivel(level);
	}else{
		alert("no es correcto, vuelva a intentarlo");
		ultimo=tamano;
		cargarArray();
	}
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

