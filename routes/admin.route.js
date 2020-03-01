import { Router } from 'express'

export const adminRouter = Router()

import { postAddProduct, getAllProducts, getProductById, getEditProduct, postDeleteProduct } from '../controllers/admin.controller'

adminRouter.get('/getAllProducts', getAllProducts)

adminRouter.get('/single-product', getProductById)

adminRouter.get('/edit-product', getEditProduct)

adminRouter.post('/add-product', postAddProduct)

adminRouter.post('/delete-product', postDeleteProduct)