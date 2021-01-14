export class Product {
  productId: number;
  productName: string;
  productDescription: string;
  price: number;
  productImageUrl: string;
  productType: string;

  emiSchemadetails: EmiSchemadetails[];
}

export class EmiSchemadetails {
  processingFee: any;
  emiScheme: string;
  noOfMonth: number;
  amountPerMonth: any;
}
