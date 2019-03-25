const {cursos, opciones} = require ('./datos');
const express = require('express');
const app = express();
const argv = require('yargs').command ('inscribir', 'INSCRIPCIÓN', opciones).argv
const cursoEscogido = cursos.find( cursoEsc => cursoEsc.id == argv.i);
var count = 1;

if(cursoEscogido == undefined) {
	if((argv.i && argv.n && argv.c) != undefined) {
		console.log('El curso escogido no existe, por favor escoja uno de los siguientes cursos:');
	}

	console.log('\nLISTADO DE CURSOS \n\n');

	let curso = (idCurso, callback) => {
		setTimeout(function(){
			count = count + 1;
			let curso = cursos.find( curso => curso.id == idCurso);
			let mensaje = console.log('-' + curso.nombre + '(id=' + curso.id + '): Tiene una duración de ' + curso.duracion + ' semanas y un costo de $' + curso.valor + '\n' );
			loopCurso(count);
			callback(mensaje);
		}, 2000);
	}
	
	let loopCurso = (count) =>{
		if(count <= cursos.length){
			curso(count, function(mensaje){});
		}
	}

	curso(count, function(mensaje){});
} else {
	let mostrarNavegador = (opciones) => {
		texto = '<b>INSCRIPCIÓN:</b><br/><br/>El estudiante ' + argv.n + '<br/>' +
				'identificado con CC número ' + argv.c + '<br/>' +
				'se ha inscrito al curso ' + cursoEscogido.nombre + '(id=' + cursoEscogido.id + ')<br/>' +
				'el cual tiene una duración de ' + cursoEscogido.duracion + ' horas <br/>' +
				'y tiene un valor de $' + cursoEscogido.valor + '<br/>'
	}
	mostrarNavegador(opciones);
}


app.get('/', function (req, res) {
  res.send(texto)
})
 
app.listen(3000)