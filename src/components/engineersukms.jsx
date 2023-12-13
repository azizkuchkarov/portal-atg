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
    href: '/ukms/engineers#zhang-lishuang',
    name: 'Zhang Lishuang',
    description: 'Начальник / Manager',
    link: user,
    flag: china,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },

  {
    href: '/ukms/engineers#zhang-zhi',
    name: `Zhang Zhi`,
    description: 'Заместитель начальника / Deputy Manager',
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
    href: '/ukms/engineers#makhmud-rakhmanov',
    name: `Makhmud Rakhmanov`,
    description: 'Заместитель начальника / Deputy Manager',
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
    href: '/ukms/engineers#ulugbek-khakimov',
    name: `Ulugbek Khakimov`,
    description:
      'Инженер-механик по оборудованию / Mechanics equipment engineer',
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
    href: '/ukms/engineers#zheng-baoping',
    name: 'Zheng Baoping',
    description: 'Инженера КИПиА / Automatic equipment system engineer',
    flag: china,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/ukms/engineers#zekhniddin-fayzullaev',
    name: 'Zekhniddin Fayzullaev',
    description: 'Инженер - электрик / Electrical Engineer',
    flag: uzb,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/ukms/engineers#yang-zhijun',
    name: 'Yang Zhijun',
    description: `Инженер - электрик / Electrical Engineer`,
    flag: uzb,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/ukms/engineers#khalilov-akmal',
    name: 'Khalilov Akmal',
    description: 'Сменный инженер / Shift Engineer',
    flag: uzb,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/ukms/engineers#sherzod-khudoyberdiev',
    name: 'Sherzod Khudoyberdiev',
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
    href: '/ukms/engineers#fayzullaev-jikhan',
    name: 'Fayzullaev Jikhan',
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
    href: '/ukms/engineers#azamat-atoev',
    name: 'Azamat Atoev',
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
    href: '/ukms/engineers#ilkhom-sagatov',
    name: 'Ilkhom Sagatov',
    description: 'Сменный инженер / Shift Engineer',
    flag: uzb,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/ukms/engineers#shukhrat-iskhakov',
    name: 'Shukhrat Iskhakov',
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
    href: '/ukms/engineers#oybek-israfilov',
    name: 'Oybek Israfilov',
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
    href: '/ukms/engineers#amirbek-musaev',
    name: 'Amirbek Musaev',
    description: 'Сменный инженер / Shift Engineer',
    flag: uzb,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/ukms/engineers#amirbek-musaev',
    name: 'Amirbek Musaev',
    description: 'Сменный инженер / Shift Engineer',
    flag: uzb,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/ukms/engineers#ravshan-muradov',
    name: 'Ravshan Muradov',
    description: 'Переводчик / Translator',
    flag: china,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/ukms/engineers#shokir-karimov',
    name: 'Shokir Karimov',
    description: 'Заведующий хозяйственной частью / Household coordinator',
    flag: china,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/ukms/engineers#makhsud-kudratov',
    name: 'Makhsud Kudratov',
    description: 'Водитель / Driver',
    flag: china,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/ukms/engineers#mekhriddin-karomatov',
    name: 'Mekhriddin Karomatov',
    description: 'Водитель / Driver',
    flag: china,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/ukms/engineers#safarali-suleymanov',
    name: 'Safarali Suleymanov',
    description: 'Водитель / Driver',
    flag: china,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/ukms/engineers#omon-kholikov',
    name: 'Omon Kholikov',
    description: 'Водитель / Driver',
    flag: china,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/ukms/engineers#zhang-madao',
    name: 'Zhang Madao',
    description:
      'Инструктор по организационным вопросам / Instructor on organizational issuesr',
    flag: china,
    link: user,
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/ukms/engineers#aziz-pulatov',
    name: 'Aziz Pulatov',
    description: 'Садовник / Gardener',
    flag: china,
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

export function Engineersukms() {
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
