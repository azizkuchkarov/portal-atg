import Link from 'next/link'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { GridPattern } from '@/components/GridPattern'
import { Heading } from '@/components/Heading'
import { UserIcon } from '@/components/icons/UserIcon'
import { ListIcon } from './icons/ListIcon'

const resources = [
  {
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSdcaw9f8oh8iv-eI5v3Gd4-ExRtDwXwEOHnwSUKVbPcQp_KHg/viewform?usp=sf_link',
    name: 'Теплоснабжения',
    description: '16 Вопросов',
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
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSdvZ-UsbMYkjpn8wzjplC8klklnaNQD3x9cBF5zfhW07Q7h2A/viewform?usp=sf_link',
    name: 'КНС',
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
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSfIsG3WkkwrhO-2-ZHyOVS-i03zmDQuCiTbkyzMqVdOCBnrgQ/viewform?usp=sf_link',
    name: 'Пожара насосная станция',
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
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSdNBwzy7UGJE3iDxsfZMZfLN0FAisjO0QX2ts9JcSKFwntUdQ/viewform?usp=sf_link',
    name: 'БПТГ',
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
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSdZypm4c_QwAWEx7PdB9M5uReGyABXybMEnSL2EIsG96Lt7mg/viewform?usp=sf_link',
    name: 'Пуск агрегата GE',
    description: '26 Вопросов',
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
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSfljEQLqV2O0JFnOygbd6PvCZoFCk-qn0Wnf7uM9yN2d9ntqA/viewform?usp=sf_link',
    name: 'Cистема управления и виброманиторингу ГПА GE',
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
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSdcsfPz9k-rUkhTY5JBHFApXO8bxsoGzhLukNntnCapCfJFAQ/viewform?usp=sf_link',
    name: 'Зоне очистки газа',
    description: '14 Вопросов',
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
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSeRCj1NrLri_8DDHchKwzzvsAZtbEowBPYa_K5d6xuW85T0rQ/viewform?usp=sf_link',
    name: 'Система смазки ГПА GE LM2500+',
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
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSfi9joI1OZW_4XTr9aZIJR8Oi_Wu65OQ5LmrTl5_B4_rzqpPA/viewform?usp=sf_link',
    name: 'Металловедение',
    description: '19 Вопросов',
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
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSfVL-pVNZTl1W0JcVYx-HvaLO1kPGEfOiMgN0xFXctFhgsDiw/viewform?usp=sf_link',
    name: 'Насосы',
    description: '11 Вопросов',
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
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSftg3qutRUuPUAOOP7ZHcCWiifh6Ak17PDCKiLUuhRNZ-xHMA/viewform?usp=sf_link',
    name: 'Подшипники',
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
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSdTRWlW6pXZySrEq7BkTKkMcp5pUQdbE_KPIcHD6qt-FjH2cQ/viewform?usp=sf_link',
    name: 'Запорных арматур',
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
    href: 'https://docs.google.com/forms/d/e/1FAIpQLScmx0QI9_40X0j87VhB9THqg76NUfy5w4DHkc26h3-Xl39gfw/viewform?usp=sf_link',
    name: 'Дизельгенератор Baifa',
    description: '6 Вопросов',
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

export function QuestionsWKC2() {
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
