import { Heading } from '@/components/Heading'
import Image from 'next/image'
import { Ochistka2Img } from '@/components/wsk2zonaOchistka2.jsx'

import { ImageContainer } from './imageContainer'

export function AVO() {
  return (
    <>
      <div className="my-16 xl:max-w-none">
        <Heading level={2} id="avo1">
          Аппараты воздушного охлаждения газа
        </Heading>

        <p>
          Аппараты воздушного охлаждения газа предназначены для охлаждения газа
          на выходе ГПА перед попаданием в магистральный газопровод. Общее
          количество АВО составляет 22 линии, и на каждой линии АВО установлены
          по 2 вентилятора с приводом от электродвигателя мощностью 37 кВт.
          Общее количество вентиляторов составляет 44 штук. На входе и выходе
          установлена запорная арматура краны MOV и BV. Каждая секция имеет
          свечные краны для стравливания. На АВО газа также имеются контрольные
          датчики температуры. Согласно проектным данным температура на выходе
          компрессорной станции не должно превышать 50 0С. Если температура газа
          достигнет 60 0С, сработает система ESD.
        </p>
        <Ochistka2Img
          link={
            'https://ik.imagekit.io/ATG/image_2023-07-11_10-11-59.png?updatedAt=1689052354776'
          }
        />
        <Ochistka2Img
          link={
            'https://ik.imagekit.io/ATG/image_2023-07-11_10-11-55.png?updatedAt=1689052354800'
          }
        />
        <Ochistka2Img
          link={
            'https://ik.imagekit.io/ATG/image_2023-07-11_10-11-50.png?updatedAt=1689052355189'
          }
        />
      </div>
    </>
  )
}
