import fs from 'fs'
import path from 'path'

function readFile(name ) {
	try {
		return fs.readFileSync(path.join( process.cwd(), 'src', 'database', name + '.json' ), 'utf8')
	} catch(e) {
		console.log(e);
	}
}

function writeFile( name, data ) {
	try {
		fs.writeFileSync(path.join( process.cwd(), 'src', 'database', name + '.json' ), JSON.stringify(data, null, 4))
	} catch(e) {
		console.log(e);
	}
}

export {
	readFile,
	writeFile
}