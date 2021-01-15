export class Transaction {
  productName: string;
  amount_paid: number;
  amount_remaining: number;
  product_price: number;
  emiScheme: number = 2;
  userId: number;
  productId: number;
  productPurchasedId: number;
  emi: number;
  transaction_date: Date;
  transaction_time: Date;
  emiCompleted: boolean;
  transactionId: number;
  status: string;
  message: string;
  producturl:string;
}
