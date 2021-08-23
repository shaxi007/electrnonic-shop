import { readFile } from '../lib/readAndWrite.js'

function productsGet(req,res) {
	if(req.query){
		let products = JSON.parse(readFile('products'))
		products.forEach( (product,index) => {
			product.productId = product.product_id
			product.productName = product.product_name
			product.subCategoryId = product.sub_category_id
			delete product.product_id
			delete product.product_name
			delete product.sub_category_id
		} )
		let storage = []
    	for (let i in products) {
    	    let counter = 0
    	    let length = 0
    	    for (let j in req.query) {
    	        if (req.query[j] === products[i][j]) {
    	            counter++
    	        }
    	        length += 1
    	    }
    	    if (counter === length) {	
    	        storage.push(products[i]);
    	    }
    	}

		res.send(storage)
	}
}

export {
	productsGet
}