import Image from 'next/image'

export function Compressor1() {

  const GCompressor = 'https://ik.imagekit.io/ATG/GCompressor.png?updatedAt=1685447801230'
  // const GCompressor = {link}

  return (
    <Image 
    width={1056}
    height={704}
    alt='GCOmpressor' 
    src={GCompressor}
    className='w-full my-0'
      />
  )
}
