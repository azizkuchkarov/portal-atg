import Link from 'next/link'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { GridPattern } from '@/components/GridPattern'
import { Heading } from '@/components/Heading'
import { UserIcon } from '@/components/icons/UserIcon'
import { ListIcon } from './icons/ListIcon'

const resources = [
  {
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSd3035kgIqVAl8dpRsiHyKJbPN4zLgdxOtZEtSuLvPLto8YRQ/viewform?usp=sf_link',
    name: 'Электроснабжение агрегата SOLAR',
    description: '10 Вопросов',
    icon: ListIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7f7a88eEaar5oIJ13v6PeKG4JnCHIftvr3ppW5z-T86ltaA/viewform?usp=sf_link',
    name: 'Зона АВО газа',
    description: '9 Вопросов',
    icon: ListIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSeQYQkvH9fmONvMgTLTHao8UfRvLvtzFxRU7jhgAVIZ_bqMUQ/viewform?usp=sf_link',
    name: 'Промывки ГПА Solar',
    description: '10 Вопросов',
    icon: ListIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSflTcWJqBWdiQrnfBoTasAcq5VD3PVWUc8K7emzQH4l8oTIdQ/viewform?usp=sf_link',
    name: 'Зона очистки газа',
    description: '10 Вопросов',
    icon: ListIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSfA-M6_AqJS2gwhhAcyq7VFvfWxwwqxXEJcr2zdPQZgC77uXw/viewform?usp=sf_link',
    name: 'Датчиков вибрации на ГПА Solar',
    description: '13 Вопросов',
    icon: ListIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSe2-eI-d392kWJG-Qb47jRatLngge1KZ9ACoyunD_QhRAMGEg/viewform?usp=sf_link',
    name: 'БПТГ',
    description: '7 Вопросов',
    icon: ListIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: 'https://docs.google.com/forms/d/e/1FAIpQLScdHXw7T0Qs7o0NcSoU_eczXHNARjJ6GtlUwpyeA2HpLnVRWQ/viewform?usp=sf_link',
    name: 'Пожаротушения ГПА',
    description: '10 Вопросов',
    icon: ListIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: 'https://docs.google.com/forms/d/e/1FAIpQLScKOYyn9ySP9SadNTwyAxzVCc7nijqBkHTecR1PvJkxShfGqQ/viewform?usp=sf_link',
    name: 'Управление агрегатам Solar',
    description: '9 Вопросов',
    icon: ListIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: 'https://docs.google.com/forms/d/e/1FAIpQLScYUzW1xwLShVL4io_8UaGbRIy7nBF6Mhm9dS9FkU9sqfkbmg/viewform?usp=sf_link',
    name: 'Система уплотнения компрессора Solar',
    description: '10 Вопросов',
    icon: ListIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSeMgjSJdRrd-l7OO6-MLbxaYJFXQnOM_SZ6oTLeI_RTCI6s3A/viewform?usp=sf_link',
    name: 'КСВ Comp Air',
    description: '10 Вопросов',
    icon: ListIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSf3nWQo1mUz0YMLv7SYZBu_flAPlcbyq_Hnpj9GFQZ-yOgS8g/viewform?usp=sf_link',
    name: 'Компрессоры',
    description: '18 Вопросов',
    icon: ListIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: 'https://docs.google.com/forms/d/e/1FAIpQLScaDuukiorvkd8xywfgjImmT1CY9DjVC8iR2VAPUOLjftpl4g/viewform?usp=sf_link',
    name: 'ВОУ от ГПА SOLAR',
    description: '13 Вопросов',
    icon: ListIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSdcnSACGC1tHG6lF2MM1pxGa-SVdKSZzQ6lZ1NOu2Jo4NRkXA/viewform?usp=sf_link',
    name: 'Дизельный генератор',
    description: '18 Вопросов',
    icon: ListIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSfBTnvNUONqgHImAZxDDR6A-tO8-ztvDki0nUoX4lrFp8Isrw/viewform?usp=sf_link',
    name: 'Материаловедение',
    description: '20 Вопросов',
    icon: ListIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSeM0aVLJmusrfHiSKOHRUIMKCRbnH-1WMWtVj2aeY-roHhvaw/viewform?usp=sf_link',
    name: 'Газогенератор Caterpillar G3516',
    description: '15 Вопросов',
    icon: ListIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSfVKt3wheJUaggcBk3z3WP8E-ihggwtXZTkO-GoWXXt0wXvHw/viewform?usp=sf_link',
    name: 'Зона очистки газа',
    description: '10 Вопросов',
    icon: ListIcon,
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
]

function ResourceIcon({ icon: Icon }) {
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-emerald-300/10 dark:group-hover:ring-emerald-400">
      <Icon className="h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-emerald-300/10 dark:group-hover:stroke-emerald-400" />
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
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
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
      </div>
    </div>
  )
}

export function QuestionsUCS1() {
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
