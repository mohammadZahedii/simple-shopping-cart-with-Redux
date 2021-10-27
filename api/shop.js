/**
 * Mocking client-server processing
 */
import products from './products.json'

export default {
  getProducts: (cb) => setTimeout(() => cb(products), 1000)

}
