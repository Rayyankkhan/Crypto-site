import React from 'react'

function Signup() {
  return (
    <>
    <div className="main  flex  space-x-10"  >
    <div className="container-1 grid-cols-1 border-2 ">
    <img className='w-[600px] h-[500px]'
        src="/Group1.png"
        alt="Your Image"
      />
      <p className='mt-[50px] -ml-[70PX] border text-center text-2xl'>Start testing in minutes !</p>
    </div>  
    <div className="container-2 border-2 grid-cols-2  w-96 ">
        <div className="form1">
            <div className="button1 flex h-screen">
            <button
      className=" hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => {
        // Add your Google login functionality here
      }}
    >
      Login with Google
    </button>
            </div>
        
        </div>

    </div>

    </div>
      
    </>
  )
}

export default Signup;
