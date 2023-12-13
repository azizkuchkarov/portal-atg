import Image from 'next/image'

export function GroupImage() {
const Main2 = 'https://ik.imagekit.io/ATG/main2.JPG?updatedAt=1685447468595?tr=w-1056'

  return (
    <Image 
    src={Main2}  
    alt='Main2'
    width={1056}
    height={704}
    className='w-full my-0'
    />
  )
}
