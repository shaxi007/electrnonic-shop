import { readFile, writeFile } from '../lib/readAndWrite.js'

function getCategories(req,res) {
	let subCategories = JSON.parse(readFile ('subCategories'))
	let categories = JSON.parse(readFile ('category'))
	subCategories.forEach( (sub,index) => {
		sub.subCategoryName = sub.sub_category_name
		sub.subCategoryId = sub.sub_category_id
		delete sub.sub_category_id
		delete sub.sub_category_name
	} )

	categories.forEach( (category,index) => {
		category.categoryId = category.category_id
		category.categoryName = category.category_name
		delete category.category_id
		delete category.category_name
	} )

	categories.forEach( category => {
		let sub = subCategories.filter( sub => sub.category_id == category.categoryId) 
		subCategories.forEach( sub => delete sub.category_id) 
		category.subCategories = sub
	} )
	if(!req.params.categoryId) res.send(categories)
	if(req.params){
		let category = categories.find(el => el.categoryId == req.params.categoryId)
		res.send(category)
	}
}

function subCategory(req,res) {
	let subCategories = JSON.parse(readFile ('subCategories'))
	let products = JSON.parse(readFile ('products'))
	subCategories.forEach( (sub,index) => {
		sub.subCategoryName = sub.sub_category_name
		sub.subCategoryId = sub.sub_category_id
		delete sub.sub_category_id
		delete sub.sub_category_name
	} )

	products.forEach( (product,index) => {
		product.productId = product.product_id
		product.productName = product.product_name
		delete product.product_id
		delete product.product_name
	} )

	subCategories.forEach( subCategorie => {
		delete subCategorie.category_id
		let product = products.filter( product => product.sub_category_id == subCategorie.subCategoryId) 
		products.forEach( product => delete product.sub_category_id) 
		subCategorie.products = product
	} )
	if(!req.params.subCategoryId) res.send(subCategories)
	if(req.params){
		let subcategory = subCategories.find(el => el.subCategoryId == req.params.subCategoryId)
		res.send(subcategory)
	}
}


export {
	getCategories,
	subCategory
}