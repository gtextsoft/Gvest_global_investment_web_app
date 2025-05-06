import AdminInvestmentsTable from '@/components/features/admin/AdminInvestmentTable'
import React from 'react'

const Investments = () => {
  return (
    <section className="flex flex-col w-full gap-2">
      <div className="flex flex-col gap-5 px-8 py-10">
        <h2 className="text-base md:text-xl font-medium">List of Investments</h2>
        <AdminInvestmentsTable />
      </div>
    </section>
  )
}

export default Investments