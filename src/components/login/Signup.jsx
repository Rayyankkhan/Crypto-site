import React from 'react'

function Signup() {
  return (
    <>
    <div className="main  flex  space-x-16"  >
    <div className="container-1 grid-cols-1">
    <img className='w-[600px] h-[500px]'
        src="/Group1.png"
        alt="Your Image"
      />
      <p className='mt-[50px] -ml-[70PX]  text-center text-2xl'>Start testing in minutes !</p>
    </div>  
    <div className="container-2  grid-cols-2 w-[500px] mt-10 ml-16">
        <div className="form1">
            <div className="button1 flex justify-center w-full ">
            <button 
      className=" mt-3 text-black font-bold w-72 py-2 px-4 rounded border-2 border-black"
      onClick={() => {
        // Add your Google login functionality here
      }}
    >
      Login with Google
    </button>
            </div>
            <div className="button1 flex justify-center w-full ">
            <button 
      className=" mt-4 text-black font-bold w-72 py-2 px-4 rounded border-2 border-black"
      onClick={() => {
        // Add your Google login functionality here
      }}
    >
      Login with Facebook
    </button>
            </div>
            <div className="button1 flex justify-center w-full ">
            <button 
      className=" mt-4 mb-4 text-black font-bold w-72 py-2 px-4 rounded border-2 border-black"
      onClick={() => {
        // Add your Google login functionality here
      }}
    >
      Login with Twitter
    </button>
        </div>
        <hr></hr>
        </div>
    <div className="form2 mx-6">
        <form>
            <div className='flex space-x-4'>

       
        
        <div className='justify-center p-2  mt-4 mx-1'>
        <h3 className='ml-[14px] absolute -mt-[11px] bg-white'>Telegram Username</h3>
        <input
        className='border p-1'
        type="text"
        placeholder=""
        />
        </div>
        <div className='justify-center p-2  mt-4 mx-1'>
        <h3 className='ml-[14px] absolute -mt-[11px] bg-white'>Discord Username</h3>
        <input
        className='border p-1'
        type="text"
        placeholder=""
        />
        </div>
        </div>
            <div className='flex space-x-4'>

       
        <div className='justify-center p-2  mt-4 mx-1'>
        <h3 className='ml-[14px] absolute -mt-[11px] bg-white'>Project Username</h3>
        <input
        className='border p-1'
        type="text"
        placeholder=""
        />
        </div>
        <div className='justify-center p-2  mt-4 mx-1'>
        <h3 className='ml-[14px] absolute -mt-[11px] bg-white'>Alias</h3>
        <input
        className='border p-1'
        type="text"
        placeholder=""
        />
        </div>
        </div>
        <div className="email">
        <div className='justify-center p-2  mt-4 mx-1'>
        <h3 className='ml-[14px] absolute -mt-[11px] bg-white font-semibold'>Email</h3>
        <input
        className='border p-1 w-full h-10'
        type="Email"
        placeholder=""
        />
        </div>
        </div>
        <div className="Wallet Address">
        <div className='justify-center p-2  mt-4 mx-1'>
        <h3 className='ml-[14px] absolute -mt-[11px] bg-white font-semibold'>Wallet Address</h3>
        <input
        className='border p-1 w-full h-10'
        type="text"
        placeholder=""
        />
        </div>
        </div>
       <a href='/MyWallet'>
        <button className=' w-full mt-7 border h-11 bg-[#FFE061] font-poppins p-2 text-xl text-[#0A3749]'> Login</button>
        </a> 
        </form>
    </div>
    </div>

    </div>
      
    </>
  )
}

export default Signup;
