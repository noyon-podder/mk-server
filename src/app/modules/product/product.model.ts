import { model, Schema } from 'mongoose'
import { TProduct } from './product.interface'

const productSchema = new Schema<TProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
)

productSchema.pre('find', function () {
  this.where({ isDeleted: { $ne: true } })
})

productSchema.pre('findOne', function () {
  this.where({ isDeleted: { $ne: true } })
})

export const Product = model<TProduct>('Product', productSchema)
