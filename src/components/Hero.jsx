import React from 'react'
import { FaDatabase, FaAsterisk, FaAccusoft, FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='hero  w-full h-screen bg-darkgrey max-lg:h-auto'>
            <div className='container max-w-[1240px] m-auto px-4 py-0 max-lg:px-4'>
                <div className='content grid grid-cols-[repeat(2,1fr)] max-lg:grid-cols-[1fr]'>
                    <div className='col-1 h-[70vh] flex flex-col justify-center pl-0 pr-4 py-4  max-lg:h-[90vh] max-w-full p-[0.2rem]'>
                        <h1 className='text-[42px] font-bold text-white max-lg:text-[42px]'>Data to enrich your</h1>
                        <h1 className='text-[42px] font-bold text-white max-lg:text-[42px]'><span className='primary-color'>online business</span></h1>
                        <p className='text-base text-grey leading-[1.4] mt-[1.2rem]'>
                            Lorem ipsum dolor sit amet, consec tetur adipisicing elit.
                            Architecto iure fuga deleniti sit! Cum doloribus, nesciunt
                            laboriosam eos praesentium veritatis!
                        </p>
                        <div className='used-by'>
                            <p className='text-lightgrey text-xs mt-8 mb-4 mx-0'> USED BY</p>
                            <div className='icons flex'>
                                <i className='text-grey pr-4'><FaDatabase /> Staxx</i>
                                <i className='text-grey pr-4'><FaAsterisk /> Star AI</i>
                                <i className='text-grey pr-4'><FaAccusoft /> Accusoft</i>
                            </div>
                        </div>
                    </div>
                    <div className='col-2 h-[70vh] flex flex-col justify-center text-[0.8rem] p-4 max-lg:hidden'>
                        <div className='form-layout  w-[400px] bg-white m-auto rounded-md '>
                            <div className='form-container px-8 py-6'>
                                <p className='sign-in-txt text-grey mb-2.5'>Sign in with</p>
                                <div className='social-login flex'>
                                    <i className='bg-white border border-lightgrey rounded pt-4 pb-1.5 px-[45px] border-solid'><FaFacebook size={20} /></i>
                                    <i className='bg-white border border-lightgrey rounded pt-4 pb-1.5 px-[45px] border-solid'><FaTwitter size={20} /></i>
                                    <i className='bg-white border border-lightgrey rounded pt-4 pb-1.5 px-[45px] border-solid'><FaGithub size={20} /></i>
                                </div>
                                <div className='divider'>
                                    <p className='w-full text-center border-b-[color:var(--lightgrey)] leading-[0.1em] mx-0 my-8 border-b border-solid'><span className='bg-white px-2.5 py-0'>Or</span></p>
                                </div>
                                <form action=''>
                                    <input className='block w-full border border-lightgrey rounded mx-0 my-[1.2rem] p-2 border-solid' type='text' placeholder='Name' />
                                    <input className='block w-full border border-lightgrey rounded mx-0 my-[1.2rem] p-2 border-solid' type='email' placeholder='Email' />
                                    <input className='block w-full border border-lightgrey rounded mx-0 my-[1.2rem] p-2 border-solid' type='password' placeholder='Password' />
                                    <button>Create your account</button>
                                </form>
                            </div>
                            <div className='form-footer border-t-lightgrey bg-[#f8f8f8] rounded-br-lg rounded-bl-lg border-t border-solid;'>
                                <p className='text-grey px-8 py-6'>By signing up, you agree to our
                                    <span className='primary-color font-medium'> Terms, Data Policy</span> and
                                    <span className='primary-color font-medium'> Cookies Policy</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
  )
}

export default Hero