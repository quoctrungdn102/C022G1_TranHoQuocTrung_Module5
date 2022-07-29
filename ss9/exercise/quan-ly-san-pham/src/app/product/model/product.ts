export interface Product {
  idProduct: number;
  nameProduct: string;
  price: number;
  description: string;
  producer: string;
  category: {
    idCategory: number;
    nameCategory: string;
  };
}
