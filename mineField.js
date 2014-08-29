var casillasX;
var tamX;
var casillasY;
var tamY;
var campo;

function inicio()
{
	alert("Bienvenido al campo minado.");
	casillasX = prompt("Ingrese el número de casillas en X");
	casillasY = prompt("Ingrese el número de casillas en Y");
	tamX = parseInt().casillasX;
	tamY = parseInt().casillasY;
}

function generarNumeroAleatorio(minimo, maximo)
{
	var numeroAleatorio = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
	return numeroAleatorio; 
}

function crearMatriz(x, y)
{
	var matriz = new Array(x);
	for(var i = 0; i < y; i++)
	{
		matriz[i] = new Array(y);
	}
	return matriz; 
}

function minarCampo(matriz)
{
	for(var j = 0; j < tamX; j++)
	{
		for(var k = 0; k < tamY; k++)
		{
			var matriz[j][k] = generarNumeroAleatorio(0,1);
		}
	}
}

inicio();
var campo = crearMatriz(tamX, tamY);
minarCampo(campo);
alert(campo[0][0]);
