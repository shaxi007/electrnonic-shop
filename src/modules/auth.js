import { sign } from '../lib/jwt.js'
import { readFile, writeFile } from '../lib/readAndWrite.js'

function REGISTER(req,res){
	let users = readFile( 'users' )
	users = users ? JSON.parse(users) : []
	let newUser = req.body
	let user = users.find( user => user.username == newUser.username )
	if( user ) {
		res.send( 'the user already exists' )
	}else {
		let user_id =  users.length ? users[users.length - 1].user_id + 1 : 1
		newUser.user_id = user_id
		users.push(newUser)
		writeFile( 'users', users )
		res.json( [{ token : sign( {userId : user_id } )}] )
	}
}

function LOGIN(req,res){
	let users = readFile( 'users' )
	users = users ? JSON.parse(users) : []
	let { username,password } = req.body
	let user = users.find( user => user.username == username &&user.password == password )
	if( user ) {
		res.json( [{ token : sign( {userId : user.user_id } )}] )
	}else {
		res.send( 'no such user was found' )
	}
}


export {
	REGISTER,
	LOGIN
}