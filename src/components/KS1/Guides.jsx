import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

const guides = [
  {
    href: '/wkc1/wks1',
    name: 'WKC-1',
    description: 'Компрессорная станция-1',
  },
  {
    href: '/wkc2/wkc2',
    name: 'WKC-2',
    description: `Компрессорная станция-2`,
  },
  {
    href: '/wkc3/wkc3',
    name: 'WKC-3',
    description: 'Компрессорная станция-3',
  },
  {
    href: '/ms/ms',
    name: 'MS',
    description: 'Газоизмерительная станция MS',
  },
  {
    href: '/ucs1/ucs1',
    name: 'UCS-1 ',
    description: 'Компрессорная станция UCS-1',
  },
  {
    href: '/gcs/gcs',
    name: 'GCS',
    description: 'Компрессорная станция GCS',
  },
  {
    href: '/ucs3/ucs3',
    name: 'UCS-3',
    description: 'Компрессорная станция UCS-3',
  },
  {
    href: '/ukms/ukms',
    name: 'UKMS',
    description: 'Газоизмерительная станция UKMS',
  },
]

export function Guides() {
  return (
    <>
      <div className="my-16 xl:max-w-none">
        <Heading level={2} id="guides">
          Станции
        </Heading>
        <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4">
          {guides.map((guide) => (
            <div key={guide.href}>
              <h3 className="text-sm font-semibold uppercase text-zinc-900 dark:text-white">
                {guide.name}
              </h3>
              <p className="mt-1 text-sm uppercase text-zinc-600 dark:text-zinc-400">
                {guide.description}
              </p>
              <p className="mt-4">
                <Button href={guide.href} variant="text" arrow="right">
                  Подробнее
                </Button>
              </p>
            </div>
          ))}
        </div>
      </div>
      {/*  */}
    </>
  )
}
