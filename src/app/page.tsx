// import Dashboard from '@/components/Dashboard'
import Navbar from '@/components/Navbar'
import OrdersTable from '@/components/OrdersTable'
import Products from '@/components/Products'
import SalesAnalytics from '@/components/SalesAnalytics'
import SalesGraph from '@/components/SalesGraph'
import SalesOverview from '@/components/SalesOverview'
import Sidebar from '@/components/Sidebar'
// import Sidebar from '@/components/Sidebar'
import React from 'react'

const HomePage = () => {
  return (
    <>
    <div className="flex mr-0">
      <Sidebar/>
      <div className="p-6 ml-64 w-full md:ml-[50px]">
        <Navbar/>
        <SalesOverview/>
        <SalesAnalytics/>
        <Products/>
      {/* <Dashboard/> */}
       <SalesGraph />
       <OrdersTable />
      {/* <Dashboard/> */}
    </div>
    </div>
    </>
  )
}

export default HomePage