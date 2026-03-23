export interface Payment {
  month: string
  year: number
  paidAmount: number
  dueAmount: number
  outstandingAmount: number
  paymentStatus: "Paid" | "Unpaid" | "Partially"
}