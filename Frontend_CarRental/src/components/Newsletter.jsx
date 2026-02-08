import React from 'react'

export default function Newsletter() {
  return (
    <div className='mt-5 mb-21'>
          <div>
           <div className="flex flex-col items-center justify-center text-center space-y-2">
            <h1 className="md:text-4xl text-2xl font-semibold">Never Miss a Deal!</h1>
            <p className="md:text-lg text-gray-800/70 pb-8">
                Subscribe to get the latest offers, new arrivals, and exclusive discounts
            </p>
            <form className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12">
                <input
                    className="border border-gray-600 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-700"
                    type="text"
                    placeholder="Enter your email id"
                    required
                />
                <button type="submit" className="md:px-12 px-8 h-full text-white bg-indigo-500 hover:bg-indigo-600 transition-all cursor-pointer rounded-md rounded-l-none">
                    Subscribe
                </button>
            </form>
        </div> 
    </div>
    </div>
  )
}
