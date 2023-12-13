import Image from 'next/image'

export function WKS2Work() {

  const GCompressor = 'https://ik.imagekit.io/ATG/WKS2Work/IMG_8876.JPG?updatedAt=1686716557162'
//   console.log(link, 'link')
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
