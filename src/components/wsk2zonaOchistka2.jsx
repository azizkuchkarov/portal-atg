import Image from 'next/image'

export function Ochistka2Img({link}) {



  const GCompressor = link
  return (
<div className="my-16 xl:max-w-none">
    <Image 
    width={1056}
    height={704}
    alt='GCOmpressor' 
    src={GCompressor}
    className='w-full my-0'
      />
      </div>
  )
}

