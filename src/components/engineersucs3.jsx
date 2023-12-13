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
    href: '/ucs3/engineers#wang-haihao',
    name: 'Wang Haihao',
    description: 'Начальник UCS3 / Manager of UCS3',
    link: user,
    flag: china,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/ucs3/engineers#eshmuradov-ikrom',
    name: 'Eshmuradov Ikrom',
    description: 'Заместитель начальника UCS-3 / UCS-3 Deputy Manager',
    link: user,
    flag: uzb,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },

  {
    href: '/ucs3/engineers#zhou-xin',
    name: `Zhou Xin`,
    description: 'Инженер по компрессорам / Compressors engineer',
    link: user,
    flag: china,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/ucs3/engineers#shamsiddin-mansurov',
    name: 'Shamsiddin Mansurov',
    description: `"Инженер по компрессорам / Compressors engineer"`,
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
    href: '/ucs3/engineers#shaxzod-vakilov',
    name: `Shaxzod Vakilov`,
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
    href: '/ucs3/engineers#han-chen',
    name: 'Han Chen',
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
    href: '/ucs3/engineers#zhou-fengqi',
    name: 'Zhou Fengqi',
    description: 'Инженера КИПиА / Automatic equipment system engineer',
    flag: china,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/ucs3/engineers#sokhibjon-rakhmonov',
    name: 'Sokhibjon Rakhmonov',
    description: 'Инженер КИПиА Automatic Equipments System Engineer',
    flag: uzb,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/ucs3/engineers#feng-xiaoliang',
    name: 'Feng Xiaoliang',
    description: 'Инженер - электрик /Electrical Engineer',
    flag: china,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/ucs3/engineers#oybek-rozikov',
    name: 'Oybek Rozikov',
    description: 'Инженер - электрик / Electrical Engineer',
    flag: china,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/ucs3/engineers#komil-ruziev',
    name: 'Komil Ruziev',
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
    href: '/ucs3/engineers#gayrat-djabborov',
    name: 'Gayrat Djabborov',
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
    href: '/ucs3/engineers#babaev-alisher',
    name: 'Babaev Alisher',
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
    href: '/ucs3/engineers#sharafutdin-abduraimov',
    name: 'Sharafutdin Abduraimov',
    description: 'Сменный инженер / Shift Engineer',
    flag: uzb,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/ucs3/engineers#khasan-karimov',
    name: 'Khasan Karimov',
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
    href: '/ucs3/engineers#gao-dongwan',
    name: 'Gao Dongwan',
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
    href: '/ucs3/engineers#duan-zhigang',
    name: 'Duan Zhigang',
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
    href: '/ucs3/engineers#murod-makhsudov',
    name: 'Murod Makhsudov',
    description: 'Сменный инженер / Shift Engineer',
    flag: uzb,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/ucs3/engineers#abdulaziz-abduganiev',
    name: 'Murod Makhsudov',
    description: 'Сменный инженер Shift Engineer',
    flag: china,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/ucs3/engineers#abdulaziz-abduganiev',
    name: 'Abdulaziz Abduganiev',
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
    href: '/wkc3/engineers#sadullo-sadullaev',
    name: 'Sadullo Sadullaev',
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
    href: '/ucs3/engineers#mirshod-irgashev',
    name: 'Mirshod Irgashev',
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
    href: '/ucs3/engineers#okiljon-ismoilov',
    name: 'Okiljon Ismoilov',
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
    href: '/ucs3/engineers#okiljon-ismoilov',
    name: 'Bakhtiyor Rashidov',
    description: 'Заведующий хозяйственной частью / Household coordinator',
    flag: uzb,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/ucs3/engineers#adiz-kodirov',
    name: 'Adiz Kodirov',
    description: 'Водитель / Driver',
    flag: china,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/ucs3/engineers#tolib-navruzov',
    name: 'Tolib Navruzov',
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
    href: '/ucs3/engineers#odil-rashidov',
    name: 'Odil Rashidov',
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
    href: '/ucs3/engineers#kambarov-nodir',
    name: 'Камбаров Нодир',
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
    href: '/ucs3/engineers#li-xiaofeng',
    name: 'Li Xiaofeng',
    description:
      'Инструктор по организационным вопросам / Instructor on organizational issues',
    flag: uzb,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/ucs3/engineers#bakhodir-bekiev',
    name: 'Bakhodir Bekiev',
    description: `Оператор пульта управления водозаборной станции / Control- panel operator of water intake station`,
    flag: uzb,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/ucs3/engineers#shadiev-botir',
    name: 'Shadiev Botir',
    description: `Оператор пульта управления водозаборной станции / Control- panel operator of water intake station`,
    flag: uzb,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/ucs3/engineers#rahimov-ravshan',
    name: 'Rahimov Ravshan',
    description: `Оператор пульта управления водозаборной станции / Control- panel operator of water intake station`,
    flag: uzb,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/ucs3/engineers#shohrukh-boltaev',
    name: 'Shohrukh Boltaev',
    description: `Оператор пульта управления водозаборной станции / Control- panel operator of water intake station`,
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

export function Engineersucs3() {
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
