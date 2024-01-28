import React from 'react'
import Image from 'next/image'
import backgroundImage from '/public/bg-website-min.png'
import heroBtnBackground from '/public/hero-btn.png'
import HeroBtnBg from '/public/hero-btn.png'
import Link from 'next/link'

function navbar() {
    return (
        <div>
            <div style={{
                backgroundImage: `url(${backgroundImage.src})`,
            }}
                className='h-screen  bg-cover bg-center bg-no-repeat flex justify-center items-center overflow-x-hidden'
            >
                <div className='absolute top-0 left-0 my-8   w-full flex justify-between items-center text-white'>
                    <div className='flex space-x-2 mx-10 cursor-pointer'>
                        <Image src="/Chronicle.svg" alt="logo" width={22} height={22} className='' /><span className='text-2xl'>chronicle</span>
                    </div>
                    <button className='bg-white px-6 py-3 mx-8 text-black font-semibold text-md rounded-xl hover:bg-purple-300'>Join Beta</button>
                </div>
                <div className='text-white absolute top-12 left[50%] translate-x-[-50] flex items-center  space-x-6'>
                    <Link href='/product' className='font-semibold border-b-2 border-white'>Product</Link>
                    <Link href='/ourstory' className='text-gray-400 hover:font-semibold hover:border-b-2 hover:border-white hover:text-white'>Our story</Link>
                    <Link href='/careers' className='text-gray-400 hover:font-semibold hover:border-b-2 hover:border-white hover:text-white'>Careers</Link>
                </div>
                <div className='relative bg-green-600 w-[1250px] flex justify-center items-center top-20 overscroll-none scrollbar-hide'>
                    <div className=''>
                        <Image src='/hero.png' width={1200} height={550} alt='herobg' className='text-white overscroll-none ' />
                    </div>
                    <div className='text-white px-4 pt-2 flex justify-between items-center absolute top-0 w-[1200px] '>
                        <div className='flex space-x-2'>
                            <span className='rounded-full w-3 h-3 border border-neutral-600 hover:bg-pink-400'></span>
                            <span className='rounded-full w-3 h-3 border border-neutral-600 hover:bg-orange-400'></span>
                            <span className='rounded-full w-3 h-3 border border-neutral-600 hover:bg-green-700'></span>
                        </div>
                        <div className='flex space-x-2'>
                            <div className='relative'>
                                <div>
                                    <Image src={HeroBtnBg} width={25} height={25} alt='hero-btn background' />
                                </div>
                                <div className='absolute top-2 left-2 '>
                                    <Image src='/hero-btn-1.svg' width={10} height={10} alt='hero-btn background' />
                                </div>
                            </div>
                            <div className='relative'>
                                <div>
                                    <Image src={HeroBtnBg} width={25} height={25} alt='hero-btn background' />
                                </div>
                                <div className='absolute top-2 left-2 '>
                                    <Image src='/hero-btn-2.svg' width={10} height={10} alt='hero-btn background' />
                                </div>
                            </div>
                            <div className='relative'>
                                <div>
                                    <Image src={HeroBtnBg} width={25} height={25} alt='hero-btn background' />
                                </div>
                                <div className='absolute top-2 left-2 '>
                                    <Image src='/hero-btn-3.svg' width={10} height={10} alt='hero-btn background' />
                                </div>
                            </div>
                            <div className='relative'>
                                <div>
                                    <Image src={HeroBtnBg} width={25} height={25} alt='hero-btn background' />
                                </div>
                                <div className='absolute top-2 left-2 '>
                                    <Image src='/hero-btn-4.svg' width={10} height={10} alt='hero-btn background' />
                                </div>
                            </div>
                        </div>
                        <div className='flex  space-x-[-6px] cursor-pointer'>
                            <span className='rounded-full w-6 h-6 bg-red-500 border-2 border-black text-sm flex justify-center items-center'>J</span>
                            <span className='rounded-full w-6 h-6 bg-purple-500 border-2 border-black text-sm flex justify-center items-center'>M</span>
                            <span className='rounded-full w-6 h-6 bg-green-500 border-2 border-black text-sm flex justify-center items-center'>S</span>
                            <span className='rounded-full w-6 h-6 bg-gray-500 border-2 border-black text-sm flex justify-center items-center'>+</span>
                        </div>
                    </div>
                    {/* <div>mid</div>
                    <div>bottom</div> */}
                </div>
            </div>
        </div>
    )
}

export default navbar