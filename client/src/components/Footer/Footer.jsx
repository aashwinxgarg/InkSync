import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer flex flex-col gap-32">
      <header className='mt-20'>
        <h1 className='font-semibold text-8xl'>Start your Journey</h1>
        <h2 className='text-5xl mt-4 font-extralight tracking-wider'>with InkSync</h2>
        <button className='mt-20 bg-white text-black p-4 rounded-xl px-5'>Get started now →</button>
      </header>
      <main className='text-white flex flex-row justify-center gap-20'>
        <ul className='flex flex-col gap-2'>
            <li className='font-semibold'>Product</li>
            <li className='opacity-60'>Editor</li>
            <li className='opacity-60'>Collaboration</li>
            <li className='opacity-60'>Content AI</li>
            <li className='opacity-60'>Documents</li>
            <li className='opacity-60'>Pricing</li>
        </ul>
        <ul className='flex flex-col gap-2'>
            <li className='font-semibold'>Company</li>
            <li className='opacity-60'>Blog</li>
            <li className='opacity-60'>About</li>
            <li className='opacity-60'>Contact Us</li>
        </ul>
        <ul className='flex flex-col gap-2'>
            <li className='font-semibold'>Docs</li>
            <li className='opacity-60'>Editor</li>
            <li className='opacity-60'>Hocuspocus</li>
            <li className='opacity-60'>Extensions</li>
            <li className='opacity-60'>Examples</li>
        </ul>
        <ul className='flex flex-col gap-2'>
            <li className='font-semibold'>Resources</li>
            <li className='opacity-60'>Release notes</li>
            <li className='opacity-60'>Experiments</li>
            <li className='opacity-60'>MIT license</li>
            <li className='opacity-60'>Security</li>
            <li className='opacity-60'>Pro license</li>
        </ul>
        <ul className='flex flex-col gap-2'>
            <li className='font-semibold'>Connect</li>
            <li className='opacity-60'>Github</li>
            <li className='opacity-60'>Discord</li>
            <li className='opacity-60'>LinkedIn</li>
            <li className='opacity-60'>X</li>
        </ul>
      </main>
      <footer className='flex justify-center'>
        <ul className='flex flex-row gap-10 text-gray-400'>
            <li className='text-white'>© 2024 InkSync</li>
            <li>Legal Notice</li>
            <li>System Status</li>
            <li>Privacy Policy</li>
            <li>Terms</li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer