import AdminInvestments from '@/components/features/admin/AdminInvestments'
import React from 'react'

const Investments = () => {
  return (
    <section className="flex flex-col w-full gap-2">
      <div className="flex flex-col gap-10 px-5">
        <div className="flex flex-col gap-6 px-6 py-6 md:p-6 bg-white rounded-b-xl min-h-screen">
          <h2 className="font-medium text-xl">All Investment History</h2>
          <div className="flex">
            <AdminInvestments/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Investments