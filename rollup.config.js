import serve from 'rollup-plugin-serve'


export default {
	input: 'index.js',
	output: {
		file: 'bundle.js',
		format: 'iife', 
		sourcemap: 'inline'
	},
	plugins: [serve()],
	
}