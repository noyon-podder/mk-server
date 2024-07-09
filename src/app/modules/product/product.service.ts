import { TProduct } from './product.interface'
import { Product } from './product.model'

const productCreateIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload)

  return result
}

export const ProductServices = {
  productCreateIntoDB,
}
