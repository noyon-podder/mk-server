import { Router } from 'express'
import validateRequest from '../../middleware/validateRequest'
import { ProductValidation } from './product.validate'
import { ProductControllers } from './product.cotroller'

const router = Router()

router.post(
  '/create-product',
  validateRequest(ProductValidation.productCreateValidationSchema),
  ProductControllers.createProduct,
)

export const ProductRoutes = router
