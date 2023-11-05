import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='p-8 bg-gray-300 space-y-5'>
        <div>
            <h1 className='text-2xl font-bold text-center'>
                Automatas Finitos Deterministas
            </h1>
        </div>
        
        {/* <nav>
            <ul className='flex justify-evenly uppercase'>
                <li className='p-2 rounded-md cursor-pointer hover:bg-[#3333] hover:text-white '>
                    <Link href={'/'}>Home</Link>
                </li>
                <li className='p-2 rounded-md cursor-pointer hover:bg-[#3333] hover:text-white '>
                    <Link href={'/ejercicio01'}>Ejercicio 01</Link>
                </li>
                <li className='p-2 rounded-md cursor-pointer hover:bg-[#3333] hover:text-white '>
                    <Link href={'/ejercicio02'}>Ejercicio 02</Link> 
                </li>
                <li className='p-2 rounded-md cursor-pointer hover:bg-[#3333] hover:text-white '>
                    <Link href={'/ejercicio03'}>Ejercicio 03</Link>
                </li>
                <li className='p-2 rounded-md cursor-pointer hover:bg-[#3333] hover:text-white '>
                    <Link href={'/ejercicio04'}>Ejercicio 04</Link>
                </li>
            </ul>
        </nav> */}
        <nav>
            <ul className='flex justify-evenly uppercase '>
                <li className='p-2 rounded-md cursor-pointer hover:bg-[#3333] hover:text-white '>
                    <Link href={'/'}>Home</Link>
                </li>
                <li className='p-2 rounded-md cursor-pointer hover:bg-[#3333] hover:text-white '>
                    <Link href={'/ejercicio01'}>Ejercicio 01</Link>
                </li>
                <li className='p-2 rounded-md cursor-pointer hover:bg-[#3333] hover:text-white '>
                    <Link href={'/ejercicio02'}>Ejercicio 02</Link> 
                </li>
                <li className='p-2 rounded-md cursor-pointer hover:bg-[#3333] hover:text-white '>
                    <Link href={'/ejercicio03'}>Ejercicio 03</Link>
                </li>
                <li className='p-2 rounded-md cursor-pointer hover:bg-[#3333] hover:text-white '>
                    <Link href={'/ejercicio04'}>Ejercicio 04</Link>
                </li>
                <li className='p-2 rounded-md cursor-pointer hover:bg-[#3333] hover:text-white '>
                    <Link href={'/ejercicio05'}>Ejercicio 05</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
