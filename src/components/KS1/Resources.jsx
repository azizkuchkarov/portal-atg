import Link from 'next/link'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'

import { GridPattern } from '@/components/GridPattern'
import { Heading } from '@/components/Heading'
import { UsersIcon } from '@/components/icons/UsersIcon'


const resources = [
  {
    href: '/cdu',
    name: 'ЦДУ',
    description:
      'Зам. Нач. отдела ЦДУ, ',
    icon: UsersIcon,
    vn:2310,
    head:'Матчанов Одилбек',
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: '/tas',
    name: 'Отдел по техническим вопросам',
    description:
      'Зам. Нач. отдела по техническим вопросам,',
    icon: UsersIcon,
    head:'Тураев Собир',
    vn:2375,
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
  {
    href: '/maintenance',
    name: 'Центр ремонта и техобслуживания',
    description:
      `Зам. Нач. ЦР и TO `,
    icon: UsersIcon,
    vn:2028,
    head:'Бахромов Алишер',
    pattern: {
      y: 32,
      squares: [
        [0, 2],
        [1, 4],
      ],
    },
  },
  {
    href: '/pipeline',
    name: 'Отдел по управлению трубопроводом',
    description:
      'Зам. Нач. Отдела по управлению трубопроводом',
    icon: UsersIcon,
    vn:2065,
    head:'Икрамов Рустам',
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/tb/ooc',
    name: 'Отдел по ТБ  и ООС',
    description:
      'Нач.отдела по Технике безопасности и охране окружающей среды',
    icon: UsersIcon,
    vn:2357,
    head:'Жураев Асрор',

    pattern: {
      y: 10,
      squares: [[0, 1]],
    },
  },
  {
    href: '/transport',
    name: 'Транспортный отдел',
    description:
      'Заведующий транспортным отделом',
    icon: UsersIcon,
    vn:2010,
    head:'Якубов Искандар',

    pattern: {
      y: 22,
      squares: [[12, 1]],
    },
  },
  {
    href: '/hr',
    name: 'Отдел кадров',
    description:
      'Начальник Отдела кадров',
    icon: UsersIcon,
    vn:2355, 
    head:'Хусенов Василжон',

    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    href: '/cb',
    name: 'Отдел безопасности',
    description:
      'Заместитель начальника Бухарского ОУМГ-начальник отдела безопасности',
    icon: UsersIcon,
    vn:2307,
    head:'',

    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  // yangi yangi yangi
 
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
      <div className="relative rounded-2xl px-4 pb-4 pt-16">
        <ResourceIcon icon={resource.icon} />
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
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">вн. {resource.vn}</p>
      </div>
    </div>
  )
}

export function Resources() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="resources">
      Отделы НЦДУ ATG
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
        {resources.map((resource) => (
          <Resource key={resource.href} resource={resource} />
        ))}
      </div>
    </div>
  )
}
