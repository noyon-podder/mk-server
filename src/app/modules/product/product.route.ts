import { Router } from 'express'
import validateRequest from '../../middleware/validateRequest'
import { ProductValidation } from './product.validate'
import { ProductControllers } from './product.cotroller'

const router = Router()

router.post(
  '/',
  validateRequest(ProductValidation.productCreateValidationSchema),
  ProductControllers.createProduct,
)

router.get('/', ProductControllers.getAllProducts)

router.get('/:id', ProductControllers.getProductById)

router.put(
  '/:id',
  validateRequest(ProductValidation.productUpdateValidationSchema),
  ProductControllers.updateProduct,
)

router.delete('/:id', ProductControllers.deleteProduct)

export const ProductRoutes = router
