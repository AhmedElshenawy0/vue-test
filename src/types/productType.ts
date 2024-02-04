export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  [quantity: string]: any;
};

export type StateType = {
  products: ProductType[];
  product: ProductType;
  cartList: ProductType[];
};
