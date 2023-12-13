import Image from 'next/image'

export function OchistkaImg() {

  const GCompressor = 'https://ik.imagekit.io/ATG/WKS2Work/photo_2019-10-13_19-08-42.jpg?updatedAt=1686716545248'
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
