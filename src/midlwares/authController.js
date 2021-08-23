function register(req,res,next) {
	try {
		let { username,password,email,birth,gender } = req.body
		if(!username) throw 'you did not enter username'
		if(!password) throw 'you did not enter password'
		if(!password.match(/[0-9]/)) throw 'the password must contain a number from 0-9'
		if(!password.match(/[a-z]/)) throw 'the password must be lowercase'
		if(!password.match(/[A-Z]/)) throw 'the password must be uppercase'
		if(password.length < 8) throw 'enter more than 8 characters in the password'
		if(!(/[!@#$%^&*()_+,./><?|]/).test(password)) throw 'the characters in the password must be letters'
		if(!email) throw 'you did not enter email'
		if(!(/[@.]/).test(email)) throw 'email @ and . must be'
		if(!birth) throw 'you did not enter birth'
		if(birth.split('-').length!= 3) throw 'birth in the wrong format'
		if(!gender) throw 'you did not enter gender'
		next()
	} catch(e) {
		res.send(e);
	}
}

export {
	register
}