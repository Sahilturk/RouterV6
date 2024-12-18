import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

const Contact = () => {
    return (
        <div className='contact w-full flex mx-0 my-12 max-lg: my-4'>
            <div className='container max-w-[1240px] overflow-hidden flex m-auto max-lg:flex-col'>
                <div className='col-1 flex-[1_0_45%] px-8 py-20 max-lg:px-4 py-0'>
                    <div className='content'>
                        <div><h2 className='text-[28px] px-0 py-[0.4rem]'>Get in touch</h2>
                            <p className=' text-grey'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam,
                                iusto natus fugit saepe minima rem nemo laborum ea dolorum
                                est.</p>
                        </div>
                        <div className='address px-0 py-4'>
                            <p className=' text-grey'>742 Evergreen Terrace</p>
                            <p className=' text-grey'>Springfield, OR 12345</p>
                        </div>
                        <div className='icons flex items-center px-0 py-[0.4rem]'>
                            <FaPhone style={{ marginRight: '1rem' }} />
                            <p className=' text-grey'>+1 (555) 123-4567</p>
                        </div>
                        <div className='icons flex items-center px-0 py-[0.4rem]'>
                            <FaEnvelope style={{ marginRight: '1rem' }} />
                            <p className=' text-grey'>support@example.com</p>
                        </div>
                        <div className='careers px-0 py-8'>
                            <p className=' text-grey'>Looking for careers? <span className=' text-primary'>View all jop openings.</span></p>
                        </div>
                    </div>
                </div>
                <div className='col-2 flex-[1_0_55%] px-8 py-20 max-lg:p-4'>
                    <form className='flex flex-col max-w-[500px] m-auto' action=''>
                        <input className='text-base rounded border border-lightgrey mb-4 p-[0.6rem] border-solid' type='text' placeholder='Full name' />
                        <input className='text-base rounded border border-lightgrey mb-4 p-[0.6rem] border-solid' type='email' placeholder='Email' />
                        <input className='text-base rounded border border-lightgrey mb-4 p-[0.6rem] border-solid' type='phone' placeholder='Phone' />
                        <textarea className='text-base rounded border border-lightgrey mb-4 p-[0.6rem] border-solid;
  font-family: "Montserrat", sans-serif' name='Message' placeholder='Message' cols='30' rows='10'></textarea>
                        <div className='checkbox flex items-center justify-center px-0 py-4'>
                            <input className='text-base rounded border border-lightgrey m-4 p-[0.6rem] border-solid ' type='checkbox' />
                            <p className=' text-grey'>By checking this box, you agree to the <span className=' text-primary'>Privacy Policy</span> and
                                <span className=' text-primary'>Cookie Policy</span>.</p>
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact