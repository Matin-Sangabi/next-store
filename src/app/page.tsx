import { Button } from '@/Components/Button/Button'
import React from 'react'

export default function Page() {
  return (
    <div className='w-full flex items-center justify-center h-full min-h-[80vh]'>
      <Button href='/products'>Go To Shop</Button>
    </div>
  )
}
