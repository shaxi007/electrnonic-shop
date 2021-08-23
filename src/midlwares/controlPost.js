function postCat(req,res,next) {
	try {
		if(!req.body.categoryName) throw 'you did not enter categoryName'
		if( typeof req.body.categoryName != 'string') throw 'Enter a string in the categoryName'
		if(req.body.categoryName.length<5) throw 'Use more than 5 characters in the categoryName'
		if(req.body.categoryName.length>50) throw 'Use less than 50 characters in the categoryName'
		next()
	} catch(e) {
		res.send(e);
	}
}

function postSub(req,res,next) {
	try {
		let { categoryId ,subCategoryName } = req.body
		if(!categoryId) throw 'you did not enter categoryId'
		if(!subCategoryName) throw  'you did not enter subCategoryName'
		if(subCategoryName.length<5) throw 'Use more than 5 characters in the subCategoryName'
		if(subCategoryName.length>50) throw 'Use less than 50 characters in the subCategoryName'
		if( typeof categoryId != 'number') throw 'Enter a number in the categoryId'
		next()
	} catch(e) {
		res.send(e);
	}
}

function postPro(req,res,next) {
	try {
		let { subCategoryId ,productName,price,model,color } = req.body
		if(!subCategoryId) throw 'you did not enter subCategoryId'
		if(!productName) throw  'you did not enter productName'
		if(productName.length<1) throw 'Use more than 1 characters in the productname'
		if(!model) throw 'you did not enter model'
		if(productName.length>200) throw 'Use less than 200 characters in the productname'
		if(!price) throw 'you did not enter price'
		if( typeof subCategoryId != 'number') throw 'Enter a number in the subCategoryId'
		if(!color) throw 'you did not enter color'
		if( typeof color != 'string') throw 'Enter a string in the color'
		if(model.length<1) throw 'Use more than 5 characters in the model'
		if(model.length>50) throw 'Use less than 50 characters in the model'
		if( typeof price != 'number') throw 'Enter a number in the price'

		next()
	} catch(e) {
		res.send(e);
	}
}

export {
	postCat,
	postSub,
	postPro
}