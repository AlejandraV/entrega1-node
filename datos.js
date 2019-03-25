let cursos = [
	{
		id: '1',
		nombre: 'Node.js',
		duracion: 32, // En semanas
		valor: 180000 // En pesos
	},
	{
		id: '2',
		nombre: 'Angular.js',
		duracion: 48,
		valor: 250000
	},
	{
		id: '3',
		nombre: 'React.js',
		duracion: 48,
		valor: 250000
	},
	{
		id: '4',
		nombre: 'Meteor.js',
		duracion: 32,
		valor: 180000
	},
	{
		id: '5',
		nombre: 'Moment.js',
		duracion: 24,
		valor: 120000
	}
];

const opciones = {
	id: {
		demand: true,
		alias: 'i'
	},
	nombre: {
		demand: true,
		alias: 'n'
	},
	cedula: {
		demand: true,
		alias: 'c'
	}
}

module.exports = {cursos, opciones};