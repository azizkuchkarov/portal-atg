import Image from 'next/image'

export function Flag({link}) {
  const GCompressor = link
  
  return (
<div className="xl:max-w-none">
    <Image 
    width={1000}
    height={1000}
    alt='GCOmpressor' 
    src={GCompressor}
    className='w-6 my-0 rounded-full'
      />
      </div>
  )
}

