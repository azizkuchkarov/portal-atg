import { Heading } from '@/components/Heading'
import Image from 'next/image'




export function KSB() {
const first = 'https://ik.imagekit.io/ATG/image_2023-07-15_09-06-56.png?updatedAt=1689394110075'
const second = 'https://ik.imagekit.io/ATG/image_2023-07-15_09-07-04.png?updatedAt=1689394109922'
const third = 'https://ik.imagekit.io/ATG/image_2023-07-15_09-07-19.png?updatedAt=1689394110330'

  return (
    <>
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="ksb">
      КСВ 
      </Heading>
      {/* <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
      <p>Hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, ullam.</p>
        </div> */}
        <p>
        Для бесперебойной и стабильной подачи сжатого воздуха на СГУ компрессоров, для привода кранов, а также для продувки воздушных фильтров воздухозаборника ГПА на компрессорной станции KC-1 установлены 2 единицы воздушного компрессора «ATLAS COPCO». 
        </p>
        <h3>Перечень неисправностей и методы их устранения</h3>
         <Image 
         alt='image'
          src={first}
          width={1080}
         height={548}  />
        <h3>Техническое обслуживание  воздушного компрессора  «Atlas Copco GA 132»</h3>
         <Image 
         alt='image'
          src={second}
          width={1080}
         height={548}  />
         <Image 
         alt='image'
          src={third}
          width={1080}
         height={548}  />
         
       
      </div>
         
    </>

      )
}
