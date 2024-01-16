import productOneFirst from "./images/product-1/product-11.png";
import productOneTwo from "./images/product-1/product-12.png";
import productOneThree from "./images/product-1/product-13.png";
import productOneFour from "./images/product-1/product-14.png";
import productOneFive from "./images/product-1/product-15.png";
import productTwoFirst from "./images/product-2/product-21.png";
import productThreeFirst from "./images/product-3/product-31.png";
import productFourFirst from "./images/product-4/product-41.png";
import productFifthFirst from "./images/product-5/product-51.png";
import productSixthFirst from "./images/product-6/product-61.png";
import productSevenFirst from "./images/product-7/product-71.png";

export const product = {
  id: 1,
  images: [
    productOneFirst,
    productOneTwo,
    productOneThree,
    productOneFour,
    productOneFive,
  ],
  title: "Dobbs Corner Gaming Desk with Adjustable Monitor...",
  mrp: 97.99,
  sellingPrice: 91.99,
  withoutTaxPrice: 76.99,
  currency: "£",
  rating: 5,
  frequentlyBought: [2, 3],
  variant: [
    {
      color: "black",
      qty: 4,
    },
    {
      color: "red",
      qty: 4,
    },
  ],
  isNewStock: false,
  onClearance: false,
};

export type ProductType = typeof product;

export const products = [
  {
    id: 2,
    images: [productTwoFirst],
    title: "X Rocker Saturn Mid-Back Gaming Chair",
    mrp: 97.99,
    sellingPrice: 84.99,
    withoutTaxPrice: 70.99,
    currency: "£",
    rating: 5,
    frequentlyBought: [],
    variant: [
      {
        color: "green",
        qty: 4,
      },
      {
        color: "red",
        qty: 4,
      },
    ],
    isNewStock: false,
    onClearance: true,
  },
  {
    id: 3,
    images: [productThreeFirst],
    title: "Mesh Tek Single Cube Bedside Table",
    mrp: 74.99,
    sellingPrice: 74.99,
    withoutTaxPrice: 74.99,
    currency: "£",
    rating: 5,
    frequentlyBought: [],
    variant: [],
    isNewStock: true,
    onClearance: false,
  },
  {
    id: 4,
    images: [productFourFirst],
    title: "Camilla Gaming Desk with Steel Frame",
    mrp: 90.99,
    sellingPrice: 85.99,
    withoutTaxPrice: 71.99,
    currency: "£",
    rating: 5,
    frequentlyBought: [],
    variant: [
      {
        color: "green",
        qty: 4,
      },
      {
        color: "red",
        qty: 4,
      },
    ],
    isNewStock: false,
    onClearance: false,
  },
  {
    id: 5,
    images: [productFifthFirst],
    title: "X Rocker Lynx Full Colour LED Gaming Desk",
    mrp: 185.0,
    sellingPrice: 169.99,
    withoutTaxPrice: 156.99,
    currency: "£",
    rating: 5,
    frequentlyBought: [],
    variant: [],
  },
  {
    id: 6,
    images: [productSixthFirst],
    title: "Avery Gaming Desk with Steel Frame",
    mrp: 90.99,
    sellingPrice: 85.99,
    withoutTaxPrice: 71.99,
    currency: "£",
    rating: 5,
    frequentlyBought: [],
    variant: [
      {
        color: "green",
        qty: 4,
      },
      {
        color: "red",
        qty: 4,
      },
    ],
    isNewStock: false,
    onClearance: false,
  },
  {
    id: 7,
    images: [productSevenFirst],
    title: "Caledonia L-Shape Corner Desk 150cm",
    mrp: 185.0,
    sellingPrice: 129.99,
    withoutTaxPrice: 156.99,
    currency: "£",
    rating: 5,
    frequentlyBought: [],
    variant: [],
    isNewStock: false,
    onClearance: false,
  },
];
