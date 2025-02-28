import './Ecommerce.css'
import Navbar from './Navbar.jsx'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts';
import React, { PureComponent } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Ecommerce() {
  const data1 = [
    {
      name: '01 Jun',
      sales: 242,
    },
    {
      name: '02 Jun',
      sales: 333,
    },
    {
      name: '03 Jun',
      sales: 503,
    },
    {
      name: '04 Jun',
      sales: 469,
    },
    {
      name: '06 Jun',
      sales: 231,
    },
    {
      name: 'Page F',
      sales: 643,
    },
    {
      name: 'Page G',
      sales: 546,
    },
  ];

  const data2 = [{ name: "Progress", value: 75, fill: "#007bff" }];

  return (
    <>
      <div className="ecomm-section p">
        <div className="container ecomm-wrapper">
          <div className="container overview col-span-3 row-span-3">
            <div className="overview-header">
              <div className="text-2xl pb-3">Overview</div>
              <div className="p">dropdown</div>
            </div>
            <div className="overview-selector">
              <div className="option"><button className='select-button p-3 flex flex-col m-3'>
                <div className="text-zinc-400 text-xs">Total Profit</div>
                <div className="text-white text-2xl">$312,341</div>
                <div className="flex gap-2"><div className="span text-green-500">+3.4% </div>from last month</div>
              </button></div>
              <div className="option"><button className='select-button p-3 flex flex-col m-3'>
                <div className="text-zinc-400 text-xs">Total Order</div>
                <div className="text-white text-2xl">7234</div>
                <div className="flex gap-2"><div className="span text-red-500">-2.8% </div>from last month</div>
              </button></div>
              <div className="option"><button className='select-button p-3 flex flex-col m-3'>
                <div className="text-zinc-400 text-xs">Impressions</div>
                <div className="text-white text-2xl">3.1M</div>
                <div className="flex gap-2"><div className="span text-green-500">+4.6% </div>from last month</div>
              </button></div>
            </div>
            <div className="overview-graph" style={{ width: '100%', height: 400 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={data1}
                  margin={{ top: 50, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeOpacity={0} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="sales-target">
            <div className="sales-header flex justify-between p-3">
              <h4>Sales Target</h4>
              <DropdownButton id="dropdown-basic-button" variant='secondary' title="Dropdown button">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
            </div>
            <div className="progress-content flex">
              <div className="container progress-text flex flex-col">
                <div className="flex items-baseline gap-1">
                  <div className="text-2xl">1.3k</div>
                  <div className="text-zinc-500">/1.8k units</div>
                </div>
                <div className="text-zinc-500 text-xs font-light">made this month year</div>
              </div>
              <div className="radial-chart">
                <RadialBarChart
                  width={100}
                  height={100}
                  cx={50}
                  cy={50}
                  innerRadius="80%"
                  outerRadius="100%"
                  barSize={10}
                  data={data2}
                >
                  <RadialBar minAngle={15} clockWise dataKey="value" />
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize="18"
                    fill="#fff"
                  >
                    75%
                  </text>
                </RadialBarChart>
              </div>
            </div>
          </div>
          <div className="the-container top-product pb-3">
            <div className="container flex justify-between p-3">
              <div className="text-xl">Top Product</div>
              <button className='bg-zinc-700 p-2'>View All</button>
            </div>
            <div className="productlist mx-3 flex flex-col gap-3">
              <div className="product-item flex justify-between items-center" >
                <div className="content flex items-center gap-3">
                  <img className='w-20 h-auto rounded-2xl' src="https://ecme-react.themenate.net/img/products/product-7.jpg" alt="" />
                  <div className="flex flex-col gap-2">
                    <div className="font-bold text-sm">Maneko Poster</div>
                    <div className="text-zinc-500 text-xs">Sold: 1234</div>
                  </div>
                </div>
                <div>
                  <div className="gain text-green-500 bg-green-900 rounded-xl p-1">+15.2%</div>
                </div>
              </div>
              <div className="product-item flex justify-between items-center" >
                <div className="content flex items-center gap-3">
                  <img className='w-20 h-auto rounded-2xl' src="https://ecme-react.themenate.net/img/products/product-7.jpg" alt="" />
                  <div className="flex flex-col gap-2">
                    <div className="font-bold text-sm">Maneko Poster</div>
                    <div className="text-zinc-500 text-xs">Sold: 1234</div>
                  </div>
                </div>
                <div>
                  <div className="gain text-red-500 bg-red-900 rounded-xl p-1">-15.2%</div>
                </div>
              </div>
              <div className="product-item flex justify-between items-center" >
                <div className="content flex items-center gap-3">
                  <img className='w-20 h-auto rounded-2xl' src="https://ecme-react.themenate.net/img/products/product-7.jpg" alt="" />
                  <div className="flex flex-col gap-2">
                    <div className="font-bold text-sm">Maneko Poster</div>
                    <div className="text-zinc-500 text-xs">Sold: 1234</div>
                  </div>
                </div>
                <div>
                  <div className="gain text-green-500 bg-green-900 rounded-xl p-1">+15.2%</div>
                </div>
              </div>
              <div className="product-item flex justify-between items-center" >
                <div className="content flex items-center gap-3">
                  <img className='w-20 h-auto rounded-2xl' src="https://ecme-react.themenate.net/img/products/product-7.jpg" alt="" />
                  <div className="flex flex-col gap-2">
                    <div className="font-bold text-sm">Maneko Poster</div>
                    <div className="text-zinc-500 text-xs">Sold: 1234</div>
                  </div>
                </div>
                <div>
                  <div className="gain text-green-500 bg-green-900 rounded-xl p-1">+15.2%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="the-container top-countries">
            
          </div>
        </div>
      </div>
    </>
  )
}

export default Ecommerce