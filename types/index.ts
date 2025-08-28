// types/index.ts
export type ProductCategory = 'fresh-catfish' | 'dried-catfish' | 'fish-feed' | 'hatchery' | 'consultancy';

export interface Product {
  _id?: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  unit?: string;
  price?: number;
  images?: string[];
}

export interface PriceItem {
  _id?: string;
  name: string;
  unit?: string;
  price: number;
  category: string;
}   