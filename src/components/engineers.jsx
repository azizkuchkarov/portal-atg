import Link from 'next/link'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
// import { Ochistka2Img } from '../wsk2zonaOchistka2';
import { Ochistka2Img } from '@/components/mechanicsPic'
import { Flag } from '@/components/flag'

import { GridPattern } from '@/components/GridPattern'
import { Heading } from '@/components/Heading'

const user =
  'https://ik.imagekit.io/ATG/ingeneers/istockphoto-1337144146-612x612.jpg?updatedAt=1690100036699'

const uzb =
  'https://ik.imagekit.io/ATG/ingeneers/Frame%201.png?updatedAt=1690098069648'
const china =
  'https://ik.imagekit.io/ATG/ingeneers/Frame%202.png?updatedAt=1690098069608'

const resources = [
  {
    href: '/wkc1/engineers#song-xiaoning',
    name: 'Song Xiaoning',
    description: `"Начальник КС1 /  
      WKC1 Manager"`,
    link: `https://ik.imagekit.io/ATG/ingeneers/WKC1/Song%20Xiaoning.jpg?updatedAt=1690093883513`,
    flag: china,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },

  {
    href: '/wkc1/engineers#kanislyamov-rafael',
    name: `Канислямов Рафаэль`,
    description: `"Заместитель начальника WKC1
      WKC1 Deputy Manager" `,
    link: `https://ik.imagekit.io/ATG/ingeneers/WKC1/Kanislyamov%20Rafael.jpg?updatedAt=1690093875340`,
    flag: uzb,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/wkc1/engineers#li-chaoming',
    name: `Li Chaoming`,
    description: `"Инженер по компрессорам
    Compressors engineer"
    `,
    link: 'https://ik.imagekit.io/ATG/ingeneers/WKC1/Li%20Chaoming.jpg?updatedAt=1690093878957',
    flag: china,
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
  {
    href: '/wkc1/engineers#akbar-mamurov',
    name: 'Akbar Mamurov',
    description: `"Инженер по компрессорам
    Compressors engineer"`,
    link: `https://ik.imagekit.io/ATG/ingeneers/WKC1/Mamurov%20Akbar.jpg?updatedAt=1690093880432`,
    flag: uzb,
    pattern: {
      y: 32,
      squares: [
        [0, 2],
        [1, 4],
      ],
    },
  },
  {
    href: '/wkc1/engineers#liu-feng',
    name: `Liu Feng`,
    description: `"Инженер-механик по оборудованию
      Mechanics equipment engineer"
      `,
    link: `https://ik.imagekit.io/ATG/ingeneers/WKC1/Liu%20Feng.jpg?updatedAt=1690093880280`,
    flag: china,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },

  {
    href: '/wkc1/engineers#anvar-turdiev',
    name: 'Turdiev Anvar',
    description: `"Инженер-механик по оборудованию
      Mechanics equipment engineer"
      `,
    flag: uzb,
    link: `https://ik.imagekit.io/ATG/ingeneers/WKC1/Turdiev%20Anvar.jpg?updatedAt=1690093883085`,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/wkc1/engineers#bai-zhioyng',
    name: 'Bai Zhioyng',
    description: `"Инженера КИПиА
      Automatic equipment system engineer"
      `,
    flag: china,
    link: `https://ik.imagekit.io/ATG/ingeneers/WKC1/Bai%20Zhiyong.PNG?updatedAt=1690093875254`,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/wkc1/engineers#rakhimjon-muminov',
    name: 'Rakhimjon Muminov',
    description: `"Инженер КИПиА
      Automatic Equipments System Engineer "
      `,
    flag: uzb,
    link: `https://ik.imagekit.io/ATG/ingeneers/WKC1/Muminov%20Rakhimjon.jpg?updatedAt=1690093881027`,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/wkc1/engineers#zang-zongqiang',
    name: 'Zang Zongqiang',
    description: `"Инженер - электрик
      Electrical Engineer"`,
    flag: china,
    link: `https://ik.imagekit.io/ATG/ingeneers/WKC1/Zang%20Zongqiang.JPG?updatedAt=1690093885076`,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/wkc1/engineers#djuraev-akmal',
    name: 'Djuraev Akmal',
    description: `"Переводчик
      Translator"
      `,
    flag: uzb,
    link: `https://ik.imagekit.io/ATG/ingeneers/WKC1/Djuraev%20Akmal.jpg?updatedAt=1690093877174`,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/wkc1/engineers#sadullaev-spartak',
    name: 'Sadullaev Spartak',
    description: `"Переводчик
      Translator`,
    flag: uzb,
    link: `https://ik.imagekit.io/ATG/ingeneers/WKC1/Sadullaev%20Spartak.jpg?updatedAt=1690093882894`,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/wkc1/engineers#yu-zhezhe',
    name: 'Yu Zhezhe',
    description: `"Сменный инженер
      Shift Engineer"`,
    flag: china,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/wkc1/engineers#alohon-vahobov',
    name: 'Alohon Vahobov',
    description: `"Сменный инженер
      Shift Engineer"
      `,
    flag: uzb,
    link: `https://ik.imagekit.io/ATG/ingeneers/WKC1/Vakh%D0%B0bov%20Alokhon.jpg?updatedAt=1690093884522`,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/wkc1/engineers#pafnutov-maksim',
    name: 'Pafnutov Maksim',
    description: `"Сменный инженер
      Shift Engineer"
      `,
    flag: uzb,
    link: `https://ik.imagekit.io/ATG/ingeneers/WKC1/Pafnutov%20Maksim.jpg?updatedAt=1690093881177`,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/wkc1/engineers#narimon-bekchanov',
    name: 'Narimon Bekchanov',
    description: `"Сменный инженер
      Shift Engineer"
      `,
    flag: uzb,
    link: `https://ik.imagekit.io/ATG/ingeneers/WKC1/Bekchanov%20Narimon.jpg?updatedAt=1690093877294`,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/wkc1/engineers#ochilov-amrillo',
    name: 'Ochilov Amrillo',
    description: `"Сменный инженер
      Shift Engineer"
      `,
    flag: uzb,
    link: `https://ik.imagekit.io/ATG/ingeneers/WKC1/Ochilov%20Amrillo.jpg?updatedAt=1690093880649`,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/wkc1/engineers#rasim-yusupov',
    name: 'Rasim Yusupov',
    description: `"Сменный инженер
      Shift Engineer"
      `,
    flag: uzb,
    link: `https://ik.imagekit.io/ATG/ingeneers/WKC1/Yusupov%20Rasim.jpg?updatedAt=1690093884539`,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/wkc1/engineers#bai-xuefeng',
    name: 'Bai Xuefeng',
    description: `"Сменный инженер
      Shift Engineer"
      `,
    flag: china,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/wkc1/engineers#wang-bo',
    name: 'Wang Bo',
    description: `"Сменный инженер
      Shift Engineer"
      `,
    flag: china,
    link: `https://ik.imagekit.io/ATG/ingeneers/WKC1/Wang%20Bo.JPG?updatedAt=1690093883685`,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/wkc1/engineers#khumoyun-abdurakhmanov',
    name: 'Khumoyun Abdurakhmanov',
    description: `"Сменный инженер
      Shift Engineer"
      `,
    flag: uzb,
    link: `https://ik.imagekit.io/ATG/ingeneers/WKC1/Abdurakhmanov%20Khumoyun.jpg?updatedAt=1690093876715`,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/wkc1/engineers#azizbek-afakov',
    name: 'Azizbek Afakov',
    description: `"Сменный инженер
      Shift Engineer"
      `,
    flag: uzb,
    link: `https://ik.imagekit.io/ATG/ingeneers/WKC1/Afakov%20Azizbek.JPG?updatedAt=1690093877253`,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/wkc1/engineers#shukhrat-sharipov',
    name: 'Shukhrat Sharipov',
    description: `"Сменный инженер
      Shift Engineer"
    `,
    flag: uzb,
    link: `https://ik.imagekit.io/ATG/ingeneers/WKC1/Sharipov%20Shukhrat.jpg?updatedAt=1690093882140`,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/wkc1/engineers#feruzjon-sabirov',
    name: 'Feruzjon Sabirov',
    description: `"Заведующий хозяйственной частью
      Household coordinator"
      `,
    flag: uzb,
    link: `https://ik.imagekit.io/ATG/ingeneers/WKC1/Sabirov%20Feruzjon.jpg?updatedAt=1690093883100`,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/wkc1/engineers#feng-jixiang',
    name: 'Feng Jixiang',
    description: `"Инструктор по организационным вопросам WKC1
      WKC1 Instructor on organizational issues"
      `,
    flag: china,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/wkc1/engineers#mirali-gafarov',
    name: 'Mirali Gafarov',
    description: `"Водитель
      Driver"
      `,
    flag: uzb,
    link: `https://ik.imagekit.io/ATG/ingeneers/WKC1/Gafarov%20Mirali.jpg?updatedAt=1690093876411`,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/wkc1/engineers#sherzod-karimov',
    name: 'Sherzod Karimov',
    description: `"Водитель
      Driver"
      `,
    flag: uzb,
    link: `https://ik.imagekit.io/ATG/ingeneers/WKC1/Karimov%20Sherzod.jpg?updatedAt=1690093876440`,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/wkc1/engineers#ergashov-akram',
    name: 'Ergashov Akram',
    description: `"Водитель
      Driver"
      `,
    flag: uzb,
    link: `https://ik.imagekit.io/ATG/ingeneers/WKC1/Ergashov%20Akram.jpg?updatedAt=1690093877265`,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/wkc1/engineers#abdurakhmon-khalilov',
    name: 'Abdurakhmon Khalilov',
    description: `"Водитель
      Driver"
      `,
    flag: uzb,
    link: `https://ik.imagekit.io/ATG/ingeneers/WKC1/Khalilov%20Abdurakhmon.jpg?updatedAt=1690093878210`,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/wkc1/engineers#rafebaev-valijon',
    name: 'Rafebaev Valijon',
    description: `Садовник/ Gardener
      `,
    flag: uzb,
    link: `https://ik.imagekit.io/ATG/ingeneers/WKC1/Rafebaev%20Valijon.jpg?updatedAt=1690093881418`,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '#',
    name: '"Khasanov Soli',
    description: `Дворник/ Yard keeper`,
    flag: uzb,
    link: `https://ik.imagekit.io/ATG/ingeneers/WKC1/Khasanov%20Soli.jpg?updatedAt=1690093879598`,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
]

function ResourceIcon({ icon: Icon }) {
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-blue-300/10 dark:group-hover:ring-blue-400">
      <Icon className="h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-blue-300/10 dark:group-hover:stroke-blue-400" />
    </div>
  )
}

function ResourcePattern({ mouseX, mouseY, ...gridProps }) {
  let maskImage = useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`
  let style = { maskImage, WebkitMaskImage: maskImage }

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5"
          {...gridProps}
        />
      </div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#C1E1ED] to-[#D1EAF6] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#05516d] dark:to-[#2c6b82]"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      >
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10"
          {...gridProps}
        />
      </motion.div>
    </div>
  )
}

function Resource({ resource }) {
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  function onMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      key={resource.href}
      onMouseMove={onMouseMove}
      className="group relative flex rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5"
    >
      <ResourcePattern {...resource.pattern} mouseX={mouseX} mouseY={mouseY} />
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20" />
      <div className="relative rounded-2xl px-4 pb-4 pt-8">
        <div className="flex items-end">
          <Ochistka2Img link={resource.link} />
          <Flag link={resource.flag} />
        </div>

        <h3 className="mt-4 text-sm font-semibold leading-7 text-zinc-900 dark:text-white">
          <Link href={resource.href}>
            <span className="absolute inset-0 rounded-2xl" />
            {resource.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          {resource.description}
        </p>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          {resource.head}
        </p>
        {/* <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">вн. {resource.vn}</p> */}
      </div>
    </div>
  )
}

export function Engineers() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="resources"></Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
        {resources.map((resource) => (
          <Resource key={resource.href} resource={resource} />
        ))}
      </div>
    </div>
  )
}
