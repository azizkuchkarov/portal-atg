import React from 'react';
import Image from 'next/image'
import { Heading } from '@/components/Heading'






export function UCS1texmap () {
  const wkc1 = 'https://ik.imagekit.io/ATG/UCS1/1__1_.jpg?updatedAt=1689487011049';
  const wkc2 = 'https://ik.imagekit.io/ATG/UCS1/1__2_.jpg?updatedAt=1689487011049'
  const wkc3 = 'https://ik.imagekit.io/ATG/UCS1/1__3_.jpg?updatedAt=1689487011049'
  const wkc4 = 'https://ik.imagekit.io/ATG/UCS1/1__4_.jpg?updatedAt=1689487011049'
  const wkc5 = 'https://ik.imagekit.io/ATG/UCS1/1__5_.jpg?updatedAt=1689487011049'
  const wkc6 = 'https://ik.imagekit.io/ATG/UCS1/1__6_.jpg?updatedAt=1689487011049'
  const wkc7 = 'https://ik.imagekit.io/ATG/UCS1/1__7_.jpg?updatedAt=1689487011049'
  const wkc8 = 'https://ik.imagekit.io/ATG/UCS1/1__8_.jpg?updatedAt=1689487011049'
  const wkc9 = 'https://ik.imagekit.io/ATG/UCS1/1__9_.jpg?updatedAt=1689487011049'
  
  
  return (
<>

<Heading level={2} id="tex-map">
Техническая карта станции UCS1:
        </Heading>
  <div className="flex flex-col wkc">
        <hr className='my-8 mx-0' />


  <div className="flex justify-center">
  <a href="#1"   rel="noopener noreferrer">
    <Image
      src={wkc1}
      alt="Image 1"
       width={780}
      height={551}
      className="w-full my-0 ease-in duration-300 hover:scale-110"
    />
  </a>
  <a href="#2"   rel="noopener noreferrer">
    <Image
      src={wkc2}
      alt="Image 2"
       width={780}
      height={551}
      className="w-full my-0 ease-in duration-300 hover:scale-110"
    />
  </a>
  <a href="#3"   rel="noopener noreferrer">
    <Image
      src={wkc3}
      alt="Image 3"
       width={780}
      height={551}
      className="w-full my-0 ease-in duration-300 hover:scale-110"
    />
  </a>

</div>

<div className="flex justify-center">
  <a href="#4"   rel="noopener noreferrer">
    <Image
      src={wkc4}
      alt="Image 1"
       width={780}
      height={551}
      className="w-full my-0 ease-in duration-300 hover:scale-110"
    />
  </a>
  <a href="#5"   rel="noopener noreferrer">
    <Image
      src={wkc5}
      alt="Image 2"
       width={780}
      height={551}
      className="w-full my-0 ease-in duration-300 hover:scale-110"
    />
  </a>
  <a href="#6"   rel="noopener noreferrer">
    <Image
      src={wkc6}
      alt="Image 3"
       width={780}
      height={551}
      className="w-full my-0 ease-in duration-300 hover:scale-110"
    />
  </a>

</div>

<div className="flex justify-center">
  <a href="#7"   rel="noopener noreferrer">
    <Image
      src={wkc7}
      alt="Image 1"
       width={780}
      height={551}
      className="w-full my-0 ease-in duration-300 hover:scale-110"
    />
  </a>
  <a href="#8"   rel="noopener noreferrer">
    <Image
      src={wkc8}
      alt="Image 2"
       width={780}
      height={551}
      className="w-full my-0 ease-in duration-300 hover:scale-110"
    />
  </a>
  <a href="#9"   rel="noopener noreferrer">
    <Image
      src={wkc9}
      alt="Image 3"
       width={780}
      height={551}
      className="w-full my-0 ease-in duration-300 hover:scale-110"
    />
  </a>

</div>



  </div>
</>


        
  );
};
