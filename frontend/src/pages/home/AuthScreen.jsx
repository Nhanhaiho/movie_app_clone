import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {ChevronRight} from 'lucide-react'
const AuthScreen = () => {

    const [email, setEmail] = useState('')
    const navigate = useNavigate();
    const handleFormSubmit = (e) => {
        e.preventDefault();
        navigate("/signup?email="+email)
    }
  return (
      <div className='hero-bg relative'>
          {/* navbar */}
          <header className='max-w-6xl mx-auto flex items-center justify-between p-4 pb-10'>
              <img src='/netflix-logo.png' alt='Netflix logo' className='w-32 md:w-52'/>
              <Link to={"/login"} className='text-white bg-red-600 py-1 px-2 rounded'>
                Sign in
              </Link>
          </header>

          {/* phan nhap email get start */}
          <div className='flex flex-col items-center justify-center text-center py-40 text-white max-w-6xl mx-auto'>
              <h1 className='text-4xl md:text-6xl font-bold mb-4'>Vô vàn film, Tv Show và hàng ngàn chương trình khác .... </h1>
              <p className='text-lg mb-4'>Xem bất cứ đâu</p>
              <p className='mb-4'>Sẵn sàng để xem? Hãy nhập email và bắt đầu hội viên nào</p>
              <form className='flex flex-col md:flex-row gap-4 w-1/2' onSubmit={handleFormSubmit}>
                  <input
                      type='email'
                      placeholder='Email'
                      className='p-2 rounded flex-1 bg-black/80 border border-gray-700'
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                  />
                 <button className='bg-red-600 text-xl lg:text-2xl px-2 lg:px-6 py-1 md:py-2 rounded flex justify-center items-center'>
						Bắt Đầu
						<ChevronRight className='size-8 md:size-10' />
					</button>
              </form>
          </div>
          {/* ket thuc phan nhap email get start */}
          
          {/* br */}
          <div className='h-2 w-full bg-[#232323]' aria-hidden='true'/>
          {/* section-1 */}
        <div className='py-10 bg-black text-white'>
            <div className='flex max-w-6xl mx-auto items-center justify-between flex-col md:flex-row px-4 md:px-2'>
    
            {/* Left section - Text */}
            <div className='flex-1 text-center md:text-left mb-6 md:mb-0'>
            <h2 className='text-4xl md:text-5xl font-extrabold mb-4'>Thưởng thức các bộ phim</h2>
            <p className='text-lg md:text-xl'>
               Xem trên Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, ...
            </p>
            </div>

            {/* Right section - video */}
            <div className='flex-1 relative flex items-center justify-center'>
            <img src='./tv.png' alt='tv-image' className='w-full max-w-md' />
            <video
                                className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4'
                                playsInline
                autoPlay
                loop
                muted
            >
                <source src='./hero-vid.m4v' type='video/mp4' />
            </video>
            </div>

  </div>
        </div>
          {/* end of section1*/}

            {/* br */}
          <div className='h-2 w-full bg-[#232323]' aria-hidden='true' />
          {/* section2 */}
          <div className='py-10 bg-black text-white'>
              
              <div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2'>
                  {/* left section */}
                  <div className='flex-1 flex justify-center md:justify-end'>
                      <div className='relative'>
                          <img src='/stranger-things-lg.png' alt="stranger things img" className='mt-4' />
                          <div className='flex items-center gap-2 absolute bottom-5 left-1/2 -translate-x-1/2 bg-black w-3/4 lg:w-1/2 h-23 border border-slate-500 rounded-sm px-2'>
                              <img src='/stranger-things-sm.png' className='h-full w-16' />
                              <div className='flex justify-between items-center w-full'>
                                  <div className='flex flex-col gap-0'>
                                      <span className='text-md lg:text-lg font-bold'> Stranger Things
                                      </span>
                                      <span className='text-sm text-blue-400'>
                                          Downloading...
                                      </span>
                                  </div>
                                <img src="/download-icon.gif" alt="" className='h-8 w-8'/>

                              </div>
                          </div>
                      </div>
                  </div>
                  {/* right section */}
                  <div className='flex-1 md:text-left text-center'>
                       <h2 className='text-4xl md:text-5xl font-extrabold mb-4'>Tải xuống các bộ phim</h2>
                        <p className='text-lg md:text-xl'>
                           Dễ dàng lưu và có thể xem khi không có internet
                        </p>
                  </div>
              </div>
            </div>
          {/* end of section2*/}
          
           {/* br */}
          <div className='h-2 w-full bg-[#232323]' aria-hidden='true' />

        {/* section-3 */}
        <div className='py-10 bg-black text-white'>
            <div className='flex max-w-6xl mx-auto items-center justify-between flex-col md:flex-row px-4 md:px-2'>
    
            {/* Left section - Text */}
            <div className='flex-1 text-center md:text-left mb-6 md:mb-0'>
            <h2 className='text-4xl md:text-5xl font-extrabold mb-4'>Xem mọi lúc mọi nơi</h2>
            <p className='text-lg md:text-xl'>
                Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more
            </p>
            </div>

            {/* Right section - video */}
            <div className='flex-1 relative flex items-center justify-center'>
            <img src='./device-pile.png' alt='device-image' className='w-full max-w-md z-10' />
            <video
                                className='absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 md:w-3/5 lg:w-1/2 z-0'
                playsInline
                autoPlay
                loop
                muted
            >
                <source src='./video-devices.m4v' type='video/mp4' />
            </video>
            </div>

        </div>
        </div>
          {/* end of section3*/}

            {/* br */}
          <div className='h-2 w-full bg-[#232323]' aria-hidden='true' />

          {/* section 4 */}
          <div className='py-10 bg-black text-white'>
              <div className='flex max-w-6xl mx-auto items-center justify-center flex-col-reverse md:flex-row px-4 md:px-2'>
                    {/* left */}
					<div className='flex-1 relative'>
						<img src='/kids.png' alt='Enjoy on your TV' className='mt-4' />
					</div>
					{/* right */}
					<div className='flex-1 text-center md:text-left'>
						<h2 className='text-4xl md:text-5xl font-extrabold mb-4'>Tạo profiles dành cho trẻ em</h2>
						<p className='text-lg md:text-xl'>
							Send kids on adventures with their favorite characters in a space made just for them—free
							with your membership.
						</p>
					</div>
                  
              </div>
          </div>
          {/* end of section4 */}

    </div>
  )
}

export default AuthScreen