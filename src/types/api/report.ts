export interface ReportResponse {
  id: string;
  no: number;
  application_id: string;
  created_at: string;
  order_id: string;
  application: string;
  tax_fee: number;
  delivery_fee: number;
  platform_fee: number;
  payment_fee: number;
  total_product_price: number;
  order_created_at: string;
  order_expired_at: string;
  order_finished_at: string;
  order_status: string;
  buyer_phone_number: string;
  merchant_transaction_id: string;
}

interface TimeFinish {
  Time: string;
  Valid: boolean;
}
export interface ReportDetailResponse {
  id: string;
  tax_fee: number;
  delivery_fee: number;
  platform_fee: number;
  payment_fee: number;
  total_product_price: number;
  created_at: string;
  expired_at: string;
  deleted_at: string;
  finished_at: TimeFinish;
  updated_at: string;
  created_by: string;
  request_msg_id: string;
  acquirementStatus: string;
  checkout_url: string;
  merchant_transaction_id: string;
  callback_url: string;
  buyer_id: string;
  seller_id: string;
  buyer_phone_number: string;
}

export interface CancelOrderRequest {
  id: string | string[] | undefined;
  cancel_reason: string;
}
export interface RefundOrderRequest {
  order_id: string | string[] | undefined;
  reason: string;
  amount: number;
  payout_account_no: string;
  initiator_id: string;
  destination: string;
  actor_type: string;
  callback_url: string;
}
