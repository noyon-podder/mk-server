import AppError from '../../errors/AppError'
import { TProduct } from './product.interface'
import { Product } from './product.model'

// create product
const productCreateIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload)

  return result
}

// get all products
const getAllProductsFromDB = async () => {
  const result = await Product.find({})

  return result
}

// get single all products
const getProductByIdFromDB = async (id: string) => {
  const result = await Product.findById({ _id: id })
  if (!result) {
    throw new AppError(404, 'Product not found')
  }
  return result
}

// update product
const singleProductUpdateFromDB = async (
  id: string,
  payload: Partial<TProduct>,
) => {
  const result = await Product.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  })

  if (!result) {
    throw new AppError(404, 'Product not found')
  }

  return result
}

// delete product
const deleteProductFromDB = async (id: string) => {
  const result = await Product.findByIdAndUpdate(
    { _id: id },
    { isDeleted: true },
    { new: true },
  )

  if (!result) {
    throw new AppError(404, 'Product not found')
  }

  return result
}

export const ProductServices = {
  productCreateIntoDB,
  getAllProductsFromDB,
  getProductByIdFromDB,
  singleProductUpdateFromDB,
  deleteProductFromDB,
}
