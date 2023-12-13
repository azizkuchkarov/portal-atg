import Image from 'next/image'

export function Wsk2GpaImg() {

  const GCompressor = 'https://ik.imagekit.io/ATG/WKS2Work/photo_2019-04-12_16-36-27.jpg?updatedAt=1686716551256'
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
