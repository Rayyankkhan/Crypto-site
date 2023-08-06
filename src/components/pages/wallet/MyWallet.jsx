import React from 'react'
import DarkMode from '../../darkmode/DarkMode'
import { CiGrid41 } from 'react-icons/ci';
import { LuArrowDownUp } from 'react-icons/lu';
import { GiStairsGoal } from 'react-icons/gi';
import { TbDeviceAnalytics } from 'react-icons/tb';
import { IoIosAddCircle } from 'react-icons/io';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import Dropdown from '../../buttons/Dropdown';

const MyWallet = () => {
  return (
    <>
     <div className="main">
      <div className=' drop-shadow-md dark:shadow-white  bg-white dark:bg-Dark '>
        <div className="flex start  space-x-8 mx-10 p-2 items-center ">
          <div>
              <a href='/'>
               
            <h3 className="text-[#00B3FF] active:bg-[#E3F6FE] p-2 flex text-[18px] ">
            <CiGrid41 className='mt-[2px]  mx-[1px]' size='1.4rem'/>  Treasure
              </h3>
                </a>
          </div>
          <div>
            <a href='/'>

            <h3 className="text-[#00B3FF] active:bg-[#E3F6FE] p-2 flex text-[18px]">
              <LuArrowDownUp className='mt-[2px] mx-[3px]' size='1.4rem'/>
              Contracts
              </h3>
            </a>
          </div>
          <div>
            <a href='/'>
            <h3 className="text-[#00B3FF] active:bg-[#E3F6FE] p-2 flex text-[18px]">
            <GiStairsGoal className='mt-[px] mx-[4px]' size='1.4rem'/>
              Goal planner</h3>
            </a>
          </div>
          <div>
            <a href='/'>
            <h3 className="text-[#00B3FF] active:bg-[#E3F6FE] p-2 flex text-[18px]">
            <TbDeviceAnalytics className='mt-[3px] mx-[4px]' size='1.4rem'/>
              Navigator
              </h3>
            </a>
          </div>
          <DarkMode/>
        </div>
      </div>
      <div className="container mx-8 flex space-x-5 mt-20">
        <div className="grid-cols-1 w-72  ">
          <div className="">
            <h1 className='text-lg font-poppins mt-2 '>Select Wallet</h1>
          </div>
          <div className=' p-1  mt-1 justify-center'>
            <div className="mx-2 ">
            <Dropdown />
            </div>
            <div className="balance border mt-6 p-2 mb-6  rounded-lg">
              {/* Balance : {walletBalance} USDT */}
              <h4 className='font-poppins text-[15px] mt-3 text-[#AFAFAF] '>Your Balance</h4>
              <div className="amount flex space-x-4">
                <div className="amount text-lg text-black font-semibold">$128,320</div>
                <div className="amount text-lg text-green-500">
                  <span className='flex'> <AiOutlineArrowUp className='mt-1' />
                  23.12%
                  </span>
                  </div>
                <div className="amount text-lg text-red-500"> 
               <span className='flex'> <AiOutlineArrowDown className='mt-1' />
                23.12%
                </span> 
                </div>
              </div>
              <hr className='mt-6' />
              <div className="curency mt-5 flex space-x-20 mb-10">
                {/* <p>$USD</p><img src={usdtLogo} alt="" width="auto"/> */}
                {/* <p>{selectedCurrency}</p> */}
                {/* <select name="" id="" onChange={(e)=>setSelectedCurrency(e.target.value)}> */}
                  {/* <option value="$">USDT</option> */}
                  {/* <option value="#">BTC</option> */}
                  {/* <option value="#">ETH</option> */}
                  {/* <option value="#">BNB</option> */}
                  {/* <option value="#">DOGE</option> */}
                  {/* <option value="#">LTC</option> */}
                  {/* <option value="#">XRP</option> */}
                  <div className="currency">
                  <h4 className='font-poppins text-[15px] mt-3 text-[#AFAFAF] '>Currency</h4>
                  <h1 className='font-semibold'>USD / US Dollar</h1>
                  </div>
                  <div className="Active">

                  <h4 className='font-poppins text-[15px] mt-3 text-[#AFAFAF] '>Status</h4>
                  <h1 className='font-semibold'>Active</h1>
                  </div>

              </div>
            </div>
            <div className="  justify-center mb-10">
              <button className='font-poppins p-2 rounded-lg  border bg-[#F5F6FA] flex w-full'>
               <span className='mx-[66px] text-[#00B3FF]   flex'>
                <IoIosAddCircle  className='' size='1.4em' /> Add Wallet
                </span> 
                </button>
            </div>

          </div>
        </div>
        <div className="grid-cols-2 p-4 border-2 w-[95%]">
          <div className="space-x-10 flex">
            <div className="border p-1 py-2 border-l-4 border-l-[#00B3FF] w-48 rounded-md ">
            <div className="mx-1">
              <h6 className='text-sm text-[#AFAFAF]'>My Balance</h6>
              <h3 className='text-[#15223C] font-semibold'>$128,320</h3>
              </div>
            </div>
            <div className="border p-1 py-2 border-l-4 border-l-[#2DD683] w-48 rounded-md flex space-x-8 items-center ">
              <div className="mx-1">
                <h6 className='text-sm text-[#AFAFAF]'>Income</h6>
              <h3 className='text-[#15223C] font-semibold'>$128,320</h3>
                </div>
                <div className='border h-7 bg-[#D8FFEC] w-16 justify-center'>
                  <h6 className='text-xs mx-2 mt-1 text-[#2DD683]'>11.09</h6>

                </div>
            </div>
            <div className="border p-1 py-2 border-l-4 border-l-[#FED142] w-48 rounded-md ">
              <div className="mx-1">
                <h6 className='text-sm text-[#AFAFAF]'>Saving</h6>
              <h3 className='text-[#15223C] font-semibold'>$128,320</h3>
                </div>
            </div>
           
          </div>
        </div>
        <div className="grid-cols-3 border-2 w-96"></div>
      </div>
            
    </div> 
    </>
  )
}

export default MyWallet
