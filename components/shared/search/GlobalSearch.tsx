import React from 'react'
import Image from 'next/image'
import { Input } from "@/components/ui/input"



const GlobalSearch = () => {
  return (
    <div className='relative w-full max-w-[600px] max-lg:hidden'>
        <div className='background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4'>
            <Image src='/assets/icons/search.svg' width={20} height={20} alt='Search Icon' className='cursor-pointer' />
            <Input type="text" placeholder="Is there anything that you want to know..." value='' className='paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none' />
        </div>
    </div>
  )
}

export default GlobalSearch