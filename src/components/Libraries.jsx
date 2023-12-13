import Image from 'next/image'

import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
const logoGE = 'https://ik.imagekit.io/ATG/animatedLogos/GeneralELectrics.svg?updatedAt=1685494773100'
const logoSiemens = 'https://ik.imagekit.io/ATG/animatedLogos/Siemens_AG_logo.svg?updatedAt=1685494389020'
const logoMoxa = 'https://ik.imagekit.io/ATG/animatedLogos/moxa.svg?updatedAt=1685494388965'
const logoCisco = 'https://ik.imagekit.io/ATG/animatedLogos/Cisco_logo_blue_2016.svg?updatedAt=1685494388856'
const logoCatepillar = 'https://ik.imagekit.io/ATG/animatedLogos/Caterpillar_logo.svg?updatedAt=1685494388888'
const logoDell = 'https://ik.imagekit.io/ATG/animatedLogos/Dell_logo_2016.svg?updatedAt=1685494388804'
const logoHoneywell = 'https://ik.imagekit.io/ATG/animatedLogos/Honeywell_logo.svg?updatedAt=1685494388536'
const logoRollsRoyce = 'https://ik.imagekit.io/ATG/animatedLogos/RollsRoyce.svg?updatedAt=1685495438800'

const libraries = [
  {
    href: '#',
    name: 'Moxa',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum facere explicabo illum rem unde',
    logo: logoMoxa,
  },
  {
    href: '#',
    name: 'Cisco',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum facere explicabo illum rem unde',
    logo: logoCisco,
  },
  {
    href: '#',
    name: 'Catepillar',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum facere explicabo illum rem unde',
    logo: logoCatepillar,
  },
  {
    href: '#',
    name: 'Dell',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum facere explicabo illum rem unde',
    logo: logoDell,
  },
  {
    href: '#',
    name: 'Siemens',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum facere explicabo illum rem unde',
    logo: logoSiemens,
  },
  {
    href: '#',
    name: 'Honeywell',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum facere explicabo illum rem unde',
    logo: logoHoneywell,
  },
  {
    href: '#',
    name: 'Rolls-Royce',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum facere explicabo illum rem unde',
    logo: logoRollsRoyce,
  },
  {
    href: '#',
    name: 'General Electrics',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum facere explicabo illum rem unde',
    logo: logoGE,
  },
]

export function Libraries() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="official-libraries">
        Official libraries
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-x-6 gap-y-10 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:max-w-none xl:grid-cols-3">
        {libraries.map((library) => (
          <div key={library.name} className="flex flex-row-reverse gap-6">
            <div className="flex-auto">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                {library.name}
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {library.description}
              </p>
              <p className="mt-4">
                <Button href={library.href} variant="text" arrow="right">
                  Read more
                </Button>
              </p>
            </div>
            <Image
              src={library.logo}
              alt=""
              className="h-12 w-12"
              unoptimized
            width={48}
            height={48}
/>
          </div>
        ))}
      </div>
    </div>
  )
}
