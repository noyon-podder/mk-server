/* eslint-disable @typescript-eslint/no-explicit-any */
// import QueryBuilder from '../../builder/QueryBuilder'
import AppError from '../../errors/AppError'
import { TProduct } from './product.interface'
import { Product } from './product.model'

// create product
const productCreateIntoDB = async (payload: TProduct) => {
  const result = await Product.create(payload)

  return result
}

// get all products
const getAllProductsFromDB = async (query: Record<string, unknown>) => {
  try {
    const {
      searchTerm,
      brand,
      rating,
      minQuantity,
      maxQuantity,
      minPrice,
      maxPrice,
      sort,
    } = query

    const filter: any = {}

    // search product into name and brand
    if (searchTerm) {
      filter.$or = [
        { name: { $regex: searchTerm, $options: 'i' } },
        { brand: { $regex: searchTerm, $options: 'i' } },
      ]
    }

    // Filter by brand
    if (brand) {
      filter.brand = brand
    }

    // Filter by rating
    if (rating) {
      filter.rating = { $gte: Number(rating) }
    }

    // Filter by price range
    if (minPrice || maxPrice) {
      filter.price = {}
      if (minPrice) filter.price.$gte = Number(minPrice)
      if (maxPrice) filter.price.$lte = Number(maxPrice)
    }

    // Filter by quantity range
    if (minQuantity || maxQuantity) {
      filter.quantity = {}
      if (minQuantity) filter.quantity.$gte = Number(minQuantity)
      if (maxQuantity) filter.quantity.$lte = Number(maxQuantity)
    }

    // Determine sorting order
    const sortOption: any = {}
    if (sort === 'price-asc') {
      sortOption.price = 1
    } else if (sort === 'price-desc') {
      sortOption.price = -1
    } else {
      sortOption.createdAt = -1
    }

    const result = await Product.find(filter).sort(sortOption)

    return result
  } catch (err: any) {
    throw new AppError(500, err.message)
  }
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
