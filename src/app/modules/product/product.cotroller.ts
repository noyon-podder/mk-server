import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { ProductServices } from './product.service'

const createProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.productCreateIntoDB(req.body)

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Product created successfully',
    data: result,
  })
})

export const ProductControllers = {
  createProduct,
}
