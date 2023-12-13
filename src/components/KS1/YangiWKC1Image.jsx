import React from 'react'
import Image from 'next/image'
import { Heading } from '@/components/Heading'
;('https://ik.imagekit.io/ATG/wkc1/1__64_.png?updatedAt=1685444948973')

export function YangiWKC1Image() {
  const wkc1 =
    'https://ik.imagekit.io/ATG/9talik/wks11/1__1_.png?updatedAt=1685567254079'
  const wkc2 =
    'https://ik.imagekit.io/ATG/9talik/wks11/1__2_.png?updatedAt=1685567254079'
  const wkc3 =
    'https://ik.imagekit.io/ATG/9talik/wks11/1__3_.png?updatedAt=1685567254079'
  const wkc4 =
    'https://ik.imagekit.io/ATG/9talik/wks11/1__4_.png?updatedAt=1685567254079'
  const wkc5 =
    'https://ik.imagekit.io/ATG/9talik/wks11/1__5_.png?updatedAt=1685567254079'
  const wkc6 =
    'https://ik.imagekit.io/ATG/9talik/wks11/1__6_.png?updatedAt=1685567254079'
  const wkc7 =
    'https://ik.imagekit.io/ATG/9talik/wks11/1__7_.png?updatedAt=1685567254079'
  const wkc8 =
    'https://ik.imagekit.io/ATG/9talik/wks11/1__8_.png?updatedAt=1685567254079'
  const wkc9 =
    'https://ik.imagekit.io/ATG/9talik/wks11/1__9_.png?updatedAt=1685567254079'

  return (
    <>
      <Heading level={2} id="tex-map">
        Техническая карта станции WKC1:
      </Heading>
      <div className="wkc flex flex-col">
        <hr className="mx-0 my-8" />

        <div className="flex justify-center">
          <a href="/wkc1/esd" rel="noopener noreferrer">
            <Image
              src={wkc1}
              alt="Image 1"
              width={780}
              height={551}
              className="my-0 w-full duration-300 ease-in hover:scale-110"
            />
          </a>
          <a href="/wkc1/avo" rel="noopener noreferrer">
            <Image
              src={wkc2}
              alt="Image 2"
              width={780}
              height={551}
              className="my-0 w-full duration-300 ease-in hover:scale-110"
            />
          </a>
          <a href="/wkc1/gpa" rel="noopener noreferrer">
            <Image
              src={wkc3}
              alt="Image 3"
              width={780}
              height={551}
              className="my-0 w-full duration-300 ease-in hover:scale-110"
            />
          </a>
        </div>

        <div className="flex justify-center">
          <a href="/wkc1/esd" rel="noopener noreferrer">
            <Image
              src={wkc4}
              alt="Image 1"
              width={780}
              height={551}
              className="my-0 w-full duration-300 ease-in hover:scale-110"
            />
          </a>
          <a href="/wkc1/avo" rel="noopener noreferrer">
            <Image
              src={wkc5}
              alt="Image 2"
              width={780}
              height={551}
              className="my-0 w-full duration-300 ease-in hover:scale-110"
            />
          </a>
          <a href="/wkc1/gpa" rel="noopener noreferrer">
            <Image
              src={wkc6}
              alt="Image 3"
              width={780}
              height={551}
              className="my-0 w-full duration-300 ease-in hover:scale-110"
            />
          </a>
        </div>

        <div className="flex justify-center">
          <a href="/wkc1/esd" rel="noopener noreferrer">
            <Image
              src={wkc7}
              alt="Image 1"
              width={780}
              height={551}
              className="my-0 w-full duration-300 ease-in hover:scale-110"
            />
          </a>
          <a href="/wkc1/kabina" rel="noopener noreferrer">
            <Image
              src={wkc8}
              alt="Image 2"
              width={780}
              height={551}
              className="my-0 w-full duration-300 ease-in hover:scale-110"
            />
          </a>
          <a href="/wkc1/Cleaning1" rel="noopener noreferrer">
            <Image
              src={wkc9}
              alt="Image 3"
              width={780}
              height={551}
              className="my-0 w-full duration-300 ease-in hover:scale-110"
            />
          </a>
        </div>
      </div>
    </>
  )
}
