import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';

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
          <li className='font-semibold'>
            Product
          </li>
          <li className='opacity-60'>
            <Link to="/note-app" className="hover:opacity-80">
              Notes
            </Link>
          </li>
          <li className='opacity-60'>
            <Link to="/inkonnect" className="hover:opacity-80">
              Meet
            </Link>
          </li>
          <li className='opacity-60'>
            <Link to="/enterprise" className="hover:opacity-80">
              Canvas
            </Link>
          </li>
          <li className='opacity-60'>
            <Link to="/textink/chat" className="hover:opacity-80">
              TextInk
            </Link>
          </li>
        </ul>
        <ul className='flex flex-col gap-2'>
          <li className='font-semibold'>Company</li>
          <li className='opacity-60'>
            <Link to="/documentation" className="hover:opacity-80">
              Docs
            </Link>
          </li>
          <li className='opacity-60'>
          <Link to="/" className="hover:opacity-80">
            About
          </Link>
          </li>
          <li className='opacity-60'>
          <Link to="/contact-sales" className="hover:opacity-80">
            Contact Us
          </Link>
          </li>

          
                  </ul>
        {/* <ul className='flex flex-col gap-2'>
            <li className='font-semibold'>Docs</li>
            <li className='opacity-60'>Editor</li>
            <li className='opacity-60'>Hocuspocus</li>
            <li className='opacity-60'>Extensions</li>
            <li className='opacity-60'>Examples</li>
        </ul> */}
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
