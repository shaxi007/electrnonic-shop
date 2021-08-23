import { readFile, writeFile } from '../lib/readAndWrite.js'

function postCategoriy(req,res){
	let categories = readFile('category')
	categories = categories ? JSON.parse(categories) : []
	let { categoryName: category_name }  = req.body
	let newCategory = {
		category_name
	}
	let category_id = categories.length ? categories[categories.length-1].category_id+1 : 1
	newCategory.category_id = category_id
	categories.push(newCategory)
	writeFile('category',categories)
	res.send('created')
}

function postSubCategoriy(req,res){
	let subcategories = readFile('subCategories')
	subcategories = subcategories ? JSON.parse(subcategories) : []
	let { subCategoryName: sub_category_name,categoryId:category_id }  = req.body
	let newSubCategory = {
		category_id,
		sub_category_name
	}
	let sub_category_id = subcategories.length ? subcategories[subcategories.length-1].sub_category_id+1 : 1
	newSubCategory.sub_category_id = sub_category_id
	subcategories.push(newSubCategory)
	writeFile('subCategories',subcategories)
	res.send('created')
}

function postProducts(req,res){
	let products = readFile('products')
	products = products ? JSON.parse(products) : []
	let { subCategoryId:sub_category_id,productName:product_name,model,price,color }  = req.body
	let newProduct = {
		sub_category_id,
		product_name,
		model,
		price,
		color
	}
	let product_id = products.length ? products[products.length-1].product_id +1 : 1
	newProduct.product_id = product_id
	products.push(newProduct)
	writeFile('products',products)
	res.send('created')
}


export {
	postCategoriy,
	postSubCategoriy,
	postProducts
}