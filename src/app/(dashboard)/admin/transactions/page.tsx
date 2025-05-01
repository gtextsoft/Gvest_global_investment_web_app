import AdminTransactionTable from '@/components/features/admin/AdminTransaction'
import React from 'react'

const Transactions = () => {
  return (
    <section className="flex flex-col w-full gap-2">
    <div className="flex flex-col gap-10 px-4 sm:px-0 md:px-5">
      <div className="flex flex-col gap-6 px-0 py-6 bg-white rounded-b-xl min-h-screen">
        <h2 className="font-medium text-xl">Transactions History</h2>
        <div className="flex">
          <AdminTransactionTable />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Transactions