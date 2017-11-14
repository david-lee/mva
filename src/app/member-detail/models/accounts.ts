export interface Account {
  id: string;
  lastUpdateDate?: string;
  lastUpdateUser?: string;
  status?: string;
  accountNumber: string;
  product: string;
  plan: string;
  amount: string;
  effectiveDate: string;
  terminationDate: string;
  category?: string;
}
