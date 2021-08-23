import express from 'express'
import { PORT, host } from './config.js'
import { REGISTER, LOGIN } from './modules/auth.js'
import { getCategories,subCategory } from './modules/getRoute.js'
import { postCategoriy,postSubCategoriy,postProducts } from './modules/POST.js'
import { productsGet } from './modules/productsGet.js'
import { register } from './midlwares/authController.js'
import { postCat ,postSub, postPro} from './midlwares/controlPost.js'
import tokenTrue from './lib/tokenTrue.js'

const app = express()

app.use( express.json() )
app.use( tokenTrue )

app.get( '/subcategories', subCategory  )
app.post( '/subcategories',postSub, postSubCategoriy  )
app.get( '/subcategories/:subCategoryId', subCategory )

app.get( '/categories', getCategories  )
app.post( '/categories',postCat ,postCategoriy  )
app.get( '/categories/:categoryId', getCategories  )

app.get( '/products', productsGet )
app.post( '/products',postPro,postProducts )

app.post( '/register',register, REGISTER )
app.post( '/login', LOGIN)

app.listen(PORT, ()=> console.log('http://' + host + ':' + PORT))