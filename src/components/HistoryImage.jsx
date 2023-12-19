import Image from 'next/image'

export function HistoryImage() {

  const MainImg = '../images/history/Picture1.jpg'
  // const GCompressor = {link}

  return (
    <Image 
    width={1056}
    height={704}
    alt='GCOmpressor' 
    src={MainImg}
    className='w-full my-0'
      />
  )
}
