import React from 'react'
import './Market.css'
import Navbar from './Navbar'
import { FaMoneyBill } from "react-icons/fa";

function Market() {
  return (
    <>
    <Navbar />
    <div className="d-container min-h-screen text-white">
        <div className="wrapper">
            <div className="grid-thing mx-16 ml-32">
                <div className="kpisummary l-container">
                    <h4>Kpi Summary</h4>
                    <div className="content-wrapper flex max-md:flex-col lg:flex-row justify-between">
                        <div className="item1 flex flex-col gap-2 mt-12">
                            <FaMoneyBill className='h-auto w-14 p-3 rounded-full bg-red-300 text-white mb-3'/>
                            <div className='text-zinc-400 text-base font-light'>Total Marketing Spend</div>
                            <div className='font-bold text-3xl'>$192,817</div>
                            <div><span className='text-green-400'>+5.3%</span> vs last month</div>
                        </div>
                        <hr />
                        <div className="item1 flex flex-col gap-2 mt-12">
                            <FaMoneyBill className='h-auto w-14 p-3 rounded-full bg-red-300 text-white mb-3'/>
                            <div className='text-zinc-400 text-base font-light'>Total Marketing Spend</div>
                            <div className='font-bold text-3xl'>$192,817</div>
                            <div><span className='text-green-400'>+5.3%</span> vs last month</div>
                        </div>
                        <hr />
                        <div className="item1 flex flex-col gap-2 mt-12">
                            <FaMoneyBill className='h-auto w-14 p-3 rounded-full bg-red-300 text-white mb-3'/>
                            <div className='text-zinc-400 text-base font-light'>Total Marketing Spend</div>
                            <div className='font-bold text-3xl'>$192,817</div>
                            <div><span className='text-green-400'>+5.3%</span> vs last month</div>
                        </div>
                        <hr />
                        <div className="item1 flex flex-col gap-2 mt-12">
                            <FaMoneyBill className='h-auto w-14 p-3 rounded-full bg-red-300 text-white mb-3'/>
                            <div className='text-zinc-400 text-base font-light'>Total Marketing Spend</div>
                            <div className='font-bold text-3xl'>$192,817</div>
                            <div><span className='text-green-400'>+5.3%</span> vs last month</div>
                        </div>
                    </div>

                </div>
                <div className="adperformance l-container">
                    <div className='header flex justify-between items-center'>
                        <h4>Ad Performance</h4>
                        <div className="selector flex bg-zinc-700 gap-3 p-2 rounded-2xl text-white items-center">
                            <div className="bg-zinc-800 rounded-xl px-3 py-2">All</div>
                            <div className="p-1 hover:text-white">Campaign</div>
                            <div className="p-1 hover:text-white">Email</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Market