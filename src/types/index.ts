export interface Investment {
  _id: string;
  name: string;
  description: string;
  unit_price: number;
  rate: number;
  tenor: number;
  currency: string;
  available_slots: number;
  banner: string;
  plan: string;
  type: string;
  ref: string;
  customer: string;
  status: string;
  matured: boolean;
  actual_cost: number;
  total_unit: number;
  roi_frequency: number;
  return_on_investment: number;
  daily_income: number;
  pending_payment: boolean;
}

export interface Transaction {
  _id: string;
  amount: number;
  type: string;
  status: string;
  createdAt: string;
  description: string;
  transaction_purpose: string;
  transaction_currency: string;
  transaction_amount: number;
  transaction_type: string;
  transaction_ref: string;
  transaction_description: string;
  transaction_payment_method: string;
  discount: number;
  createdBy: string;
  user: string;
  updatedAt: string;
  customer: string;
}

export interface Referral {
  _id: string;
  code: string;
  count: number;
  createdAt: string;
}

export interface Investor {
  _id: string;
  name: string;
  email: string;
  status: string;
  createdAt: string;
}

export interface ApiError {
  message: string;
  status: number;
  data?: unknown;
} 