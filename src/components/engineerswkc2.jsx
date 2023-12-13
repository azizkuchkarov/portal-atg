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
    href: '/wkc2/engineers#zhang-yiyong',
    name: 'Zhang Yiyong',
    description: 'Начальник КС-2/WKC-2 Manager',
    link: user,
    flag: china,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },

  {
    href: '/wkc2/engineers#maksim-igamratov',
    name: `Maksim Igamratov`,
    description: 'Заместитель начальника WKC2 / WKC2 Deputy Manager',
    link: user,
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
    href: '/wkc2/engineers#hamzabek-giyosov',
    name: `Hamzabek Giyosov`,
    description: 'Инженер по компрессорам / Compressors engineer',
    link: user,
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
    href: '/wkc2/engineers#xu-xuehui',
    name: 'Xu Xuehui',
    description: `"Инженер по компрессорам
    Compressors engineer"`,
    link: user,
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
    href: '/wkc2/engineers#abdulmanov-shavkat',
    name: `Abdulmanov Shavkat`,
    description:
      'Инженер-механик по оборудованию / Mechanics equipment engineer',
    link: user,
    flag: china,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },

  {
    href: '/wkc2/engineers#an-zhenshan',
    name: 'An Zhenshan',
    description:
      'Инженер-механик по оборудованию / Mechanics equipment engineer',
    flag: uzb,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/wkc2/engineers#wei-guangfeng',
    name: 'Wei Guangfeng',
    description: 'Инженера КИПиА / Automatic equipment system engineer',
    flag: china,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/wkc2/engineers#nuriddin-khalimov',
    name: 'Nuriddin Khalimov',
    description: 'Инженер КИПиА Automatic Equipments System Engineer',
    flag: uzb,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/wkc2/engineers#zoyirov-abdunazir',
    name: 'Zoyirov Abdunazir',
    description: 'Инженер - электрик /Electrical Engineer',
    flag: china,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/wkc2/engineers#yang-zhi',
    name: 'Yang Zhi',
    description: 'Инженер - электрик / Electrical Engineer',
    flag: china,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/wkc2/engineers#saidov-ikhtiyor',
    name: 'Saidov Ikhtiyor',
    description: `"Переводчик
      Translator"
      `,
    flag: uzb,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/wkc2/engineers#abdullo-kuldashev',
    name: 'Abdullo Kuldashev',
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
    href: '/wkc2/engineers#akram-abdulloev',
    name: 'Akram Abdulloev',
    description: 'Сменный инженер / Shift Engineer',
    flag: uzb,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/wkc2/engineers#shukhrat-ismoilov',
    name: 'Shukhrat Ismoilov',
    description: `"Сменный инженер
      Shift Engineer"
      `,
    flag: uzb,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/wkc2/engineers#erkinjon-safarov',
    name: 'Erkinjon Safarov',
    description: `"Сменный инженер
      Shift Engineer"
      `,
    flag: uzb,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/wkc2/engineers#nodirbek-murodov',
    name: 'Nodirbek Murodov',
    description: `"Сменный инженер
      Shift Engineer"
      `,
    flag: uzb,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/wkc2/engineers#mirfayzjon-naimov',
    name: 'Mirfayzjon Naimov',
    description: 'Сменный инженер / Shift Engineer',
    flag: uzb,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/wkc2/engineers#sherzodxuja-anvarov',
    name: 'Sherzodxuja Anvarov',
    description: 'Сменный инженер Shift Engineer',
    flag: china,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/wkc2/engineers#wang-xiaojun',
    name: 'Wang Xiaojun',
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
    href: '/wkc2/engineers#rashid-kholikov',
    name: 'Rashid Kholikov',
    description: `"Сменный инженер
      Shift Engineer"
      `,
    flag: uzb,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/wkc2/engineers#umidjon-axmedov',
    name: 'Umidjon Axmedov',
    description: `"Заведующий хозяйственной частью
      Household coordinator"
      `,
    flag: uzb,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/wkc2/engineers#kholov-khol',
    name: 'Kholov Khol',
    description: 'Водитель / Driver',
    flag: china,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/wkc2/engineers#yusuf-shukurov',
    name: 'Yusuf Shukurov',
    description: `"Водитель
      Driver"
      `,
    flag: uzb,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/wkc2/engineers#inoyatkhon-ataev',
    name: 'Inoyatkhon Ataev',
    description: `"Водитель
      Driver"
      `,
    flag: uzb,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/wkc2/engineers#ulugbek-bobodjanov',
    name: 'Ulugbek Bobodjanov',
    description: `"Водитель
      Driver"
      `,
    flag: uzb,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/wkc2/engineers#du-yongliang',
    name: 'Du Yongliang',
    description:
      'Инструктор по организационным вопросам / Instructor on organizational issues',
    flag: uzb,
    link: user,
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

export function Engineerswkc2() {
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
