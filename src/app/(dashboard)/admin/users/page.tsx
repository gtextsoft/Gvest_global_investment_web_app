import InvestorsTable from '@/components/features/admin/InvestorsTable'
import React from 'react'

const AllUsers = () => {
  return (
    <section className="flex flex-col w-full gap-2">
      <div className="flex flex-col gap-5 px-8 py-10">
        <h2 className="text-base md:text-xl font-medium">List of Investors</h2>
        <InvestorsTable />
      </div>
    </section>
  )
}

export default AllUsers
