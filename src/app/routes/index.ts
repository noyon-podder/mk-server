import express from 'express'
import { UserRoutes } from '../modules/user/user.route'
import { ProductRoutes } from '../modules/product/product.route'

const MainRouter = express.Router()

const moduleRoutes = [
  { path: '/auth', routes: UserRoutes },
  { path: '/product', routes: ProductRoutes },
]

moduleRoutes.forEach((route) => MainRouter.use(route.path, route.routes))

export default MainRouter
