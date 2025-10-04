"use client"

import { Nav_Items } from '@/lib/Contans'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navitems = () => {

    const pathname :string = usePathname()
    const isActive :(path:string)=> any =(path :string)=>{
        if (path =='/') return pathname == '/';
        return pathname.startsWith(path)
    }



  return (
   <ul className='flex flex-col sm:flex-row gap-3  sm:gap-10 font-medium '>
    {Nav_Items.map(({title , href})=>(
        <li key={href}>
            <Link href={href} className={`hover:text-yellow-500 transition-colors 
                ${isActive(href)?'text-gray-100':''}`}>
            {title}
            </Link>
        </li>
    ))}
   </ul>
  )
}

export default Navitems
