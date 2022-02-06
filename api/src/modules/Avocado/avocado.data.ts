import { v4 as uuid } from 'uuid';

//* Interfaces
import Avocado from './interfaces/avocado.interface';

const Avo: Avocado[] = [
  {
    id: uuid(),
    createdAt: new Date(),
    updatedAt: undefined,
    deletedAt: undefined,
    name: 'Carmen Hass',
    price: 1.3,
    sku: 'JBP7N',
    image: 'https://images.unsplash.com/photo-1590005024862-6b67679a29fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=740&q=80',
    description: "Carmen Hass is a beautiful, red, and very tasty avocado. It's a great addition to any meal.",
    attributes: {
      shape: 'round',
      hardiness: 'hard',
      taste: 'tasty'
    },
  },
  {
    id: uuid(),
    createdAt: new Date(),
    updatedAt: undefined,
    deletedAt: undefined,
    name: 'Carmen Hass',
    price: 1.3,
    sku: 'JBP7N',
    image: 'https://images.unsplash.com/photo-1590005024862-6b67679a29fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=740&q=80',
    description: "Carmen Hass is a beautiful, red, and very tasty avocado. It's a great addition to any meal.",
    attributes: {
      shape: 'round',
      hardiness: 'hard',
      taste: 'tasty'
    },
  }
]

export default Avo;