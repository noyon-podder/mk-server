import catchAsync from '../../utils/catchAsync'
import sendResponse from '../../utils/sendResponse'
import { ProductServices } from './product.service'

// create a product
const createProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.productCreateIntoDB(req.body)

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Product created successfully',
    data: result,
  })
})

// get all products
const getAllProducts = catchAsync(async (req, res) => {
  const result = await ProductServices.getAllProductsFromDB()

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Product Fetch successfully',
    data: result,
  })
})

// get single product
const getProductById = catchAsync(async (req, res) => {
  const result = await ProductServices.getProductByIdFromDB(req.params.id)

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Single Product Fetch successfully',
    data: result,
  })
})

// update a product
const updateProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.singleProductUpdateFromDB(
    req.params.id,
    req.body,
  )

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Product Update successfully',
    data: result,
  })
})

// delete a product
const deleteProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.deleteProductFromDB(req.params.id)

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Product Delete successfully',
    data: result,
  })
})

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
}
