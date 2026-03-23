import { type Payment } from "./PaymentTypes"

export interface Student {
  name: string
  icNumber: string
  payments: Payment[]
  totalDue: number
  totalOutstanding: number
}