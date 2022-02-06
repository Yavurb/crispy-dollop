import BaseFields from "../../base/base.interface";

export interface Attributes {
  shape?: string
  hardiness?: string
  taste?: string
}

export interface Avocado extends BaseFields {
  name: string;
  price: number;
  sku: string;
  image: string;
  description: string;
  attributes: Attributes;
}

export default Avocado;
