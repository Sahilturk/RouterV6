import React from 'react'
import {FaDatabase} from 'react-icons/fa'

const Testimonials = () => {
  return (
    <div className='testimonial w-full text-white mx-0 my-12 max-lg: mx-0 my-4'>
    <div className='container max-w-[1240px] overflow-hidden m-auto p-4'>
        <div className='outline w-full h-[450px] bg-left rounded-[10px]'>
            <div className='content flex flex-col h-full max-w-[50%] justify-center p-12 max-lg:max-w-full'>
                <i><FaDatabase/> Staxx</i>
                <p className='bodypx-0 py-[1.2rem]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam minus totam optio maiores, delectus deserunt rerum quae
                    officiis inventore magni.
                </p>
                <div className='name'>
                    <p className='text-sm text-white'>Marie Chilvers</p>
                    <p>CEO, Staxx</p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Testimonials