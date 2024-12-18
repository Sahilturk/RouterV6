import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer w-full bg-darkgrey'>
    <div className='container max-w-[1240px] overflow-hidden grid grid-cols-[1fr_1fr_1fr_1fr_2fr] m-auto px-4 py-12 max-lg:flex flex-wrap justify-around p-4'>
        <div className='col solutions max-lg:hidden'>
            <h6 className='text-grey text-sm px-0 py-[0.4rem]'>Solutions</h6>
            <ul>
                <li><Link to='/' className='link text-lightgrey text-sm block px-0 py-[0.4rem]'>Marketing</Link></li>
                <li><Link to='/'className='link text-lightgrey text-sm block px-0 py-[0.4rem]'>Analytics</Link></li>
                <li><Link to='/'className='link text-lightgrey text-sm block px-0 py-[0.4rem]'>Commerce</Link></li>
                <li><Link to='/'className='link text-lightgrey text-sm block px-0 py-[0.4rem]'>Insights</Link></li>
            </ul>
        </div>
        <div className='col support max-lg:hidden'>
            <h6 className='text-grey text-sm px-0 py-[0.4rem]'>Support</h6>
            <ul>
                <li><Link to='/'className='link text-lightgrey text-sm block px-0 py-[0.4rem]'>Pricing</Link></li>
                <li><Link to='/'className='link text-lightgrey text-sm block px-0 py-[0.4rem]'>Documentation</Link></li>
                <li><Link to='/'className='link text-lightgrey text-sm block px-0 py-[0.4rem]'>Guides</Link></li>
                <li><Link to='/'className='link text-lightgrey text-sm block px-0 py-[0.4rem]'>API Status</Link></li>
            </ul>
        </div>
        <div className='col company'>
            <h6 className='text-grey text-sm px-0 py-[0.4rem] max-lg:text-lg'>Company</h6>
            <ul>
                <li><Link to='/'className='link text-lightgrey text-sm block px-0 py-[0.4rem]'>About</Link></li>
                <li><Link to='/'className='link text-lightgrey text-sm block px-0 py-[0.4rem]'>Blog</Link></li>
                <li><Link to='/'className='link text-lightgrey text-sm block px-0 py-[0.4rem]'>Jops</Link></li>
                <li><Link to='/'className='link text-lightgrey text-sm block px-0 py-[0.4rem]'>Press</Link></li>
            </ul>
        </div>
        <div className='col legal'>
            <h6 className='text-grey text-sm px-0 py-[0.4rem] max-lg:text-lg'>Legal</h6>
            <ul>
                <li><Link to='/'className='link text-lightgrey text-sm block px-0 py-[0.4rem]'>Claim</Link></li>
                <li><Link to='/'className='link text-lightgrey text-sm block px-0 py-[0.4rem]'>Privacy</Link></li>
                <li><Link to='/'className='link text-lightgrey text-sm block px-0 py-[0.4rem]'>Cookies</Link></li>
                <li><Link to='/'className='link text-lightgrey text-sm block px-0 py-[0.4rem]'>Terms</Link></li>
            </ul>
        </div>
        <div className='col-subscribe max-lg:text-center m-8'>
            <h6 className='text-grey text-sm px-0 py-[0.4rem] max-lg:text-lg'>Subscribe to our newsletter</h6>
            <p className='text-grey text-sm px-0 py-[0.4rem] max-lg:text-lg'>The latest news, articles, and resources sent to your inbox weekly.</p>
            <div className='subscribe flex justify-center items-center max-lg:hidden'>
                <input className='text-sm rounded w-[250px] border border-lightgrey p-[0.4rem] border-solid max-lg:w-full m-auto' type='email' placeholder='Enter your email' />
                <button className='w-[150px] ml-[0.8rem] max-lg:w-full m-auto'>Subscribe</button>
            </div>
        </div>
    </div>
    <div className='footer-bottom'>
        <div className='content max-w-[1240px] flex justify-between border-t-grey m-auto p-8 border-t border-solid max-lg:justify-center p-4'>
            <div className='rights max-lg:hidden'>
                <p className='text-grey text-sm px-0 py-[0.4rem]'>&copy; Workflow, Inc. All rights reserved.</p>
            </div>
            <div className='flex'>
                <FaFacebook size={20} style={{color: '#d3d3d3', marginRight: '10px'}} />
                <FaInstagram size={20} style={{color: '#d3d3d3', marginRight: '10px'}} />
                <FaTwitter size={20} style={{color: '#d3d3d3', marginRight: '10px'}} />
                <FaGithub size={20} style={{color: '#d3d3d3', marginRight: '10px'}} />
            </div>
        </div>
    </div>
</div>
  )
}

export default Footer