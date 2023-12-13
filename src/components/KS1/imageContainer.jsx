import React from 'react';
import Image from 'next/image'


export function ImageContainer () {
  
  const GCS1= 'https://ik.imagekit.io/ATG/GCS/1921.png?updatedAt=1685448005936'
  const GCS2= 'https://ik.imagekit.io/ATG/GCS/1922.png?updatedAt=1685448005936'
  const GCS3= 'https://ik.imagekit.io/ATG/GCS/1923.png?updatedAt=1685448005936'
  const GCS4= 'https://ik.imagekit.io/ATG/GCS/1924.png?updatedAt=1685448005936'
  const GCS5= 'https://ik.imagekit.io/ATG/GCS/1925.png?updatedAt=1685448005936'
  const GCS6= 'https://ik.imagekit.io/ATG/GCS/1926.png?updatedAt=1685448005936'

  return (

    
<>
  <div className="flex flex-col ">
    <div className="flex justify-center">
      <a href="#"   rel="noopener noreferrer">
        <Image
          src={GCS1}
          alt="Image 1"
           width={1103}
          height={1170}
          className="w-full my-0 ease-in duration-300 hover:scale-125  "
        />
      </a>
      <a href="#"   rel="noopener noreferrer">
        <Image
          src={GCS2}
          alt="Image 2"
          
           width={1103}
    height={1170}
          className="w-full my-0 ease-in duration-300 hover:scale-125"
        />
      </a>
      <a href="#"   rel="noopener noreferrer">
        <Image
          src={GCS3}
          alt="Image 3"
          
           width={1103}
    height={1170}
          className="w-full my-0 ease-in duration-300 hover:scale-125"
        />
      </a>
    </div>
    <div className="flex justify-center">
      <a href="#"   rel="noopener noreferrer">
        <Image
          src={GCS4}
          alt="Image 4"
          
           width={1103}
    height={1170}
          className="w-full my-0 ease-in duration-300 hover:scale-125"
        />
      </a>
      <a href="#"   rel="noopener noreferrer">
        <Image
          src={GCS5}
          alt="Image 5"
          
           width={1103}
    height={1170}
          className="w-full my-0 ease-in duration-300 hover:scale-125"
        />
      </a>
      <a href="#"   rel="noopener noreferrer">
        <Image
          src={GCS6}
          alt="Image 6"
          
           width={1103}
    height={1170}
          className="w-full my-0 ease-in duration-300 hover:scale-125"
        />
      </a>
    </div>
  </div>
</>


        
  );
};
