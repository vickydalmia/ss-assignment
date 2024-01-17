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
type Color = "black" | "green" | "red";
export const product: ProductType = {
  id: 1,
  images: [
    productOneFirst,
    productOneTwo,
    productOneThree,
    productOneFour,
    productOneFive,
  ],
  title: "Dobbs Corner Gaming Desk with Adjustable Monitor Stand",
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
  description: `The Dobbs Corner Gaming Desk with Adjustable Monitor Stand is a fantastic option for making the most out of your space.Featuring an L-shaped design, this desk provides ample space for your devices and other gaming essentials and comes with a headphone hook and a cup holder provides a clutter-free space.The K shaped metal frame ensures strength and the particleboard worktop features a carbon fibre texture for durability against everyday use.Complete with a 3 level adjustable monitor shelf, this L shaped gaming desk will offer you a practical and stylish set up to really immerse yourself in the game.. 
  <ul>
  <li>L shaped corner desk.</li> 
  <li>Provides ample space for your devices and other gaming essentials. Headphone hook and a cup holder provides a clutter-free space. </li>
  <li>K shaped metal frame with particleboard worktops ensure strength and durability;. </li>
  <li>Carbon fibre texture on the table top for durability. Protective foot pads prevent your floor from damaged. Monitor shelf is 3 level adjustable. </li>
  <li>Cross panels of the frame for stability. Material: Particleboard, Metal;. Overall Dimension: 125L x 125W x 75H cm. Table top Size (3 section): 73W x 48D cm, 48W x 48D cm, 73W x 48D cm. </li>
  <li>Table top Height: 75 cm. Monitor Shelf Height: 48W x 20D cm. Cup Holder Size: 6cm. </li>
  <li>Headphone Hook: 5L x 2W cm. Weight Capacity: 40kg (table top), 3kg (monitor shelf)*Self Assembly Required*Please note that this product is delivered direct from our supplier and may take a little longer to arrive</li></ul>`,
};

export type ProductType = {
  id: number;
  images: string[];
  title: string;
  mrp: number;
  sellingPrice: number;
  withoutTaxPrice: number;
  currency: string;
  rating: number;
  frequentlyBought: number[];
  variant: {
    color: Color;
    qty: number;
  }[];
  isNewStock: boolean;
  onClearance: boolean;
  description: string;
};

export const products: ProductType[] = [
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
    description: `The Dobbs Corner Gaming Desk with Adjustable Monitor Stand is a fantastic option for making the most out of your space.Featuring an L-shaped design, this desk provides ample space for your devices and other gaming essentials and comes with a headphone hook and a cup holder provides a clutter-free space.The K shaped metal frame ensures strength and the particleboard worktop features a carbon fibre texture for durability against everyday use.Complete with a 3 level adjustable monitor shelf, this L shaped gaming desk will offer you a practical and stylish set up to really immerse yourself in the game.. 
  <ul>
  <li>L shaped corner desk.</li> 
  <li>Provides ample space for your devices and other gaming essentials. Headphone hook and a cup holder provides a clutter-free space. </li>
  <li>K shaped metal frame with particleboard worktops ensure strength and durability;. </li>
  <li>Carbon fibre texture on the table top for durability. Protective foot pads prevent your floor from damaged. Monitor shelf is 3 level adjustable. </li>
  <li>Cross panels of the frame for stability. Material: Particleboard, Metal;. Overall Dimension: 125L x 125W x 75H cm. Table top Size (3 section): 73W x 48D cm, 48W x 48D cm, 73W x 48D cm. </li>
  <li>Table top Height: 75 cm. Monitor Shelf Height: 48W x 20D cm. Cup Holder Size: 6cm. </li>
  <li>Headphone Hook: 5L x 2W cm. Weight Capacity: 40kg (table top), 3kg (monitor shelf)*Self Assembly Required*Please note that this product is delivered direct from our supplier and may take a little longer to arrive</li></ul>`,
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
    description: `The Dobbs Corner Gaming Desk with Adjustable Monitor Stand is a fantastic option for making the most out of your space.Featuring an L-shaped design, this desk provides ample space for your devices and other gaming essentials and comes with a headphone hook and a cup holder provides a clutter-free space.The K shaped metal frame ensures strength and the particleboard worktop features a carbon fibre texture for durability against everyday use.Complete with a 3 level adjustable monitor shelf, this L shaped gaming desk will offer you a practical and stylish set up to really immerse yourself in the game.. 
  <ul>
  <li>L shaped corner desk.</li> 
  <li>Provides ample space for your devices and other gaming essentials. Headphone hook and a cup holder provides a clutter-free space. </li>
  <li>K shaped metal frame with particleboard worktops ensure strength and durability;. </li>
  <li>Carbon fibre texture on the table top for durability. Protective foot pads prevent your floor from damaged. Monitor shelf is 3 level adjustable. </li>
  <li>Cross panels of the frame for stability. Material: Particleboard, Metal;. Overall Dimension: 125L x 125W x 75H cm. Table top Size (3 section): 73W x 48D cm, 48W x 48D cm, 73W x 48D cm. </li>
  <li>Table top Height: 75 cm. Monitor Shelf Height: 48W x 20D cm. Cup Holder Size: 6cm. </li>
  <li>Headphone Hook: 5L x 2W cm. Weight Capacity: 40kg (table top), 3kg (monitor shelf)*Self Assembly Required*Please note that this product is delivered direct from our supplier and may take a little longer to arrive</li></ul>`,
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
    description: `The Dobbs Corner Gaming Desk with Adjustable Monitor Stand is a fantastic option for making the most out of your space.Featuring an L-shaped design, this desk provides ample space for your devices and other gaming essentials and comes with a headphone hook and a cup holder provides a clutter-free space.The K shaped metal frame ensures strength and the particleboard worktop features a carbon fibre texture for durability against everyday use.Complete with a 3 level adjustable monitor shelf, this L shaped gaming desk will offer you a practical and stylish set up to really immerse yourself in the game.. 
  <ul>
  <li>L shaped corner desk.</li> 
  <li>Provides ample space for your devices and other gaming essentials. Headphone hook and a cup holder provides a clutter-free space. </li>
  <li>K shaped metal frame with particleboard worktops ensure strength and durability;. </li>
  <li>Carbon fibre texture on the table top for durability. Protective foot pads prevent your floor from damaged. Monitor shelf is 3 level adjustable. </li>
  <li>Cross panels of the frame for stability. Material: Particleboard, Metal;. Overall Dimension: 125L x 125W x 75H cm. Table top Size (3 section): 73W x 48D cm, 48W x 48D cm, 73W x 48D cm. </li>
  <li>Table top Height: 75 cm. Monitor Shelf Height: 48W x 20D cm. Cup Holder Size: 6cm. </li>
  <li>Headphone Hook: 5L x 2W cm. Weight Capacity: 40kg (table top), 3kg (monitor shelf)*Self Assembly Required*Please note that this product is delivered direct from our supplier and may take a little longer to arrive</li></ul>`,
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
    isNewStock: false,
    onClearance: false,
    description: `The Dobbs Corner Gaming Desk with Adjustable Monitor Stand is a fantastic option for making the most out of your space.Featuring an L-shaped design, this desk provides ample space for your devices and other gaming essentials and comes with a headphone hook and a cup holder provides a clutter-free space.The K shaped metal frame ensures strength and the particleboard worktop features a carbon fibre texture for durability against everyday use.Complete with a 3 level adjustable monitor shelf, this L shaped gaming desk will offer you a practical and stylish set up to really immerse yourself in the game.. 
  <ul>
  <li>L shaped corner desk.</li> 
  <li>Provides ample space for your devices and other gaming essentials. Headphone hook and a cup holder provides a clutter-free space. </li>
  <li>K shaped metal frame with particleboard worktops ensure strength and durability;. </li>
  <li>Carbon fibre texture on the table top for durability. Protective foot pads prevent your floor from damaged. Monitor shelf is 3 level adjustable. </li>
  <li>Cross panels of the frame for stability. Material: Particleboard, Metal;. Overall Dimension: 125L x 125W x 75H cm. Table top Size (3 section): 73W x 48D cm, 48W x 48D cm, 73W x 48D cm. </li>
  <li>Table top Height: 75 cm. Monitor Shelf Height: 48W x 20D cm. Cup Holder Size: 6cm. </li>
  <li>Headphone Hook: 5L x 2W cm. Weight Capacity: 40kg (table top), 3kg (monitor shelf)*Self Assembly Required*Please note that this product is delivered direct from our supplier and may take a little longer to arrive</li></ul>`,
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
    description: `The Dobbs Corner Gaming Desk with Adjustable Monitor Stand is a fantastic option for making the most out of your space.Featuring an L-shaped design, this desk provides ample space for your devices and other gaming essentials and comes with a headphone hook and a cup holder provides a clutter-free space.The K shaped metal frame ensures strength and the particleboard worktop features a carbon fibre texture for durability against everyday use.Complete with a 3 level adjustable monitor shelf, this L shaped gaming desk will offer you a practical and stylish set up to really immerse yourself in the game.. 
  <ul>
  <li>L shaped corner desk.</li> 
  <li>Provides ample space for your devices and other gaming essentials. Headphone hook and a cup holder provides a clutter-free space. </li>
  <li>K shaped metal frame with particleboard worktops ensure strength and durability;. </li>
  <li>Carbon fibre texture on the table top for durability. Protective foot pads prevent your floor from damaged. Monitor shelf is 3 level adjustable. </li>
  <li>Cross panels of the frame for stability. Material: Particleboard, Metal;. Overall Dimension: 125L x 125W x 75H cm. Table top Size (3 section): 73W x 48D cm, 48W x 48D cm, 73W x 48D cm. </li>
  <li>Table top Height: 75 cm. Monitor Shelf Height: 48W x 20D cm. Cup Holder Size: 6cm. </li>
  <li>Headphone Hook: 5L x 2W cm. Weight Capacity: 40kg (table top), 3kg (monitor shelf)*Self Assembly Required*Please note that this product is delivered direct from our supplier and may take a little longer to arrive</li></ul>`,
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
    description: `The Dobbs Corner Gaming Desk with Adjustable Monitor Stand is a fantastic option for making the most out of your space.Featuring an L-shaped design, this desk provides ample space for your devices and other gaming essentials and comes with a headphone hook and a cup holder provides a clutter-free space.The K shaped metal frame ensures strength and the particleboard worktop features a carbon fibre texture for durability against everyday use.Complete with a 3 level adjustable monitor shelf, this L shaped gaming desk will offer you a practical and stylish set up to really immerse yourself in the game.. 
  <ul>
  <li>L shaped corner desk.</li> 
  <li>Provides ample space for your devices and other gaming essentials. Headphone hook and a cup holder provides a clutter-free space. </li>
  <li>K shaped metal frame with particleboard worktops ensure strength and durability;. </li>
  <li>Carbon fibre texture on the table top for durability. Protective foot pads prevent your floor from damaged. Monitor shelf is 3 level adjustable. </li>
  <li>Cross panels of the frame for stability. Material: Particleboard, Metal;. Overall Dimension: 125L x 125W x 75H cm. Table top Size (3 section): 73W x 48D cm, 48W x 48D cm, 73W x 48D cm. </li>
  <li>Table top Height: 75 cm. Monitor Shelf Height: 48W x 20D cm. Cup Holder Size: 6cm. </li>
  <li>Headphone Hook: 5L x 2W cm. Weight Capacity: 40kg (table top), 3kg (monitor shelf)*Self Assembly Required*Please note that this product is delivered direct from our supplier and may take a little longer to arrive</li></ul>`,
  },
];
