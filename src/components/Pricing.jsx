import React from 'react'

const Pricing = () => {
  return (
    <div className='pricing  w-full mt-20'>
            <div className='container max-w-[1240px] overflow-hidden m-auto p-4'>
                <div className='top-content grid grid-cols-[3fr_1fr] border-b-lightgrey pb-12 border-b border-solid max-lg:grid-cols-[1fr]'>
                    <div>
                        <h2 className='text-[38px] pb-2 max-lg:text-[32px]'>Everything you need for <span className='text-primary'>$99 a month</span></h2>
                        <p className='text-grey'>Includes every feature we offer plus unlimited projects and unlimited users.</p>
                    </div>
                    <div className='btn-div'>
                        <button>Get started today</button>
                    </div>
                </div>
                <div className='bottom-content grid grid-cols-[repeat(3,1fr)] gap-2.5 mx-auto my-12 max-lg:hidden'>
                    <div className='card flex flex-col pl-0 pr-4 py-4'>
                        <p><span className='text-primary uppercase font-medium text-sm'>Everything you need</span></p>
                        <h3 className='text-[28px] m-[0.7rem]'>All-in-one platform</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                            soluta, temporibus ea est ipsum vero recusandae blanditiis ut
                            doloribus excepturi!</p>
                    </div>
                    <div className='card flex flex-col pl-0 pr-4 py-4'>
                        <div className='flex border-b-lightgrey px-0 py-4 border-b border-solid;'>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div className='flex border-b-lightgrey px-0 py-4 border-b border-solid;'>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div className='flex border-b-lightgrey px-0 py-4 border-b border-solid;'>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div className='flex border-b-lightgrey px-0 py-4 border-b border-solid;'>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div className='flex border-b-lightgrey px-0 py-4 border-b border-solid;'>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                    <div className='card flex flex-col pl-0 pr-4 py-4'>
                        <div className='flex border-b-lightgrey px-0 py-4 border-b border-solid;'>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div className='flex border-b-lightgrey px-0 py-4 border-b border-solid;'>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div className='flex border-b-lightgrey px-0 py-4 border-b border-solid;'>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div className='flex border-b-lightgrey px-0 py-4 border-b border-solid;'>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div className='flex border-b-lightgrey px-0 py-4 border-b border-solid;'>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Pricing