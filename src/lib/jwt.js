import jsonwebtoken  from 'jsonwebtoken'
import { PRIVATE_KEY } from '../config.js'

function sign(obj) {
	return jsonwebtoken.sign( obj, PRIVATE_KEY )
}

function verify (token) {
	return jsonwebtoken.varifiy( token, PRIVATE_KEY )
}

export {
	sign,
	verify
}