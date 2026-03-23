import { type Payment } from "./PaymentTypes";

export interface PaymentCheckRequest {
  icNumber: string;
}

export interface PaymentCheckResponse {
  name: string;
  icNumber: string;
  payments: Payment[];
  totalDue: number;
  totalOutstanding: number;
}

export interface PaymentCheckError {
  message: string;
}