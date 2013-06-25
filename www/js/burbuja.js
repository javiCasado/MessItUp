var nivel=0;
var arrayNum;
var pos;
var ultimo;
var value;
var value1;
var level;
var tamano;
var img=new Array();
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
	value=-1;
	value1=-1;	
	ponerArray(0);
	
	document.getElementById("initButton").disabled=true;
	document.getElementById("initDiv").style.zIndex="-1";
	document.getElementById('initButton').style.visibility = "hidden";
	document.getElementById('addPosition').style.visibility="visible";
	document.getElementById('comprobar').style.visibility="visible";
	document.getElementById('time').style.visibility="visible";
	
}

//inicializar niveles
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
	cargarArray();
}

function cargarArray(){
		pos=0;
		document.getElementById("posLabel").innerHTML="POSICION="+pos+"     ";
		for (i=0; i<tamano; i++){
			arrayNum[i]=Math.floor(Math.random()*40);
		}
		var j=0;
		do{
			document.getElementById("pos"+level+j).src="image/"+arrayNum[j]+".png";
			document.getElementById("array"+level+j).style.visibility="visible";
			j++;
		}while(j<tamano)
			IniciarCrono();
}


function anadirValor(valor){
	if(value==valor){
		value=-1;
		value1=-1;
	}
	if(value1==-2){
		value1=valor;
	}
	
	if(value==-1){
		value=valor;	
		value1=-2;
	}
	

	if(value>-1&&value1>-1){
		metodoBurbuja();
	}
}

function metodoBurbuja(){	
		if((value==pos &&value1==pos+1)||(value==pos+1 &&value1==pos)){		
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
			alert("movimiento invalido en el metodo burbuja");
			value=-1;
			value1=-1;
			
		}

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
	pos++;
	if(pos==ultimo-1){
		pos=0;
		ultimo--;
	}
	document.getElementById("posLabel").innerHTML="POSICION="+pos;
	
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
				document.getElementById('point').src="./image/PantallaNivelBajo.png";;
			}
			if ((tiempoTotal>=200)){
				document.getElementById('point').src="./image/PantallaNivelMuyBajo.png";
			}
			localStorage.setItem('juegoBurbuja',tiempoTotal);
			document.getElementById('pointDiv').style.visibility = "visible";
			document.getElementById('pointDiv').style.display = "";
			document.getElementById('botones').style.display = "none";
			document.getElementById('tiempo').style.display = "none";
			document.getElementById('posicion').style.display = "none";
			nivel=0;
			setTimeout("location.href='./index.html'", 5000);
		}
		tiempoTotal=minutos*60+segundos+errores*30;
		document.getElementById('level'+level).style.visibility = "hidden";
		level++;
		subirNivel(level);
	}else{
		alert("no es correcto, vuelva a intentarlo");
		tiempoTotal+=100;
		ultimo=tamano;
		cargarArray();
	}
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
	ultimo=tamano;
	errores=0;
	ponerArray(level);
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
