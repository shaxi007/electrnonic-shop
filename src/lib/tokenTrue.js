function tokenTrue(req,res,next) {
  try {
  	if(!req.headers.token && req.url != '/register'&& req.url != '/login') throw 'token required'
  	next()
  } catch(e) {
  	res.send(e);
  }
}

export default tokenTrue
