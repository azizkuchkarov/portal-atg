import { useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { AnimatePresence, motion, useIsPresent } from 'framer-motion'

import { Button } from '@/components/Button'
import { useIsInsideMobileNavigation } from '@/components/MobileNavigation'
import { useSectionStore } from '@/components/SectionProvider'
import { Tag } from '@/components/Tag'
import { remToPx } from '@/lib/remToPx'

function useInitialValue(value, condition = true) {
  let initialValue = useRef(value).current
  return condition ? initialValue : value
}

function TopLevelNavItem({ href, children }) {
  return (
    <li className="md:hidden">
      <Link
        href={href}
        className="block py-1 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
      >
        {children}
      </Link>
    </li>
  )
}

function NavLink({ href, tag, active, isAnchorLink = false, children }) {
  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className={clsx(
        'flex justify-between gap-2 py-1 pr-3 text-sm transition',
        isAnchorLink ? 'pl-7' : 'pl-4',
        active
          ? 'text-zinc-900 dark:text-white'
          : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
      )}
    >
      <span className="truncate">{children}</span>
      {tag && (
        <Tag variant="small" color="zinc">
          {tag}
        </Tag>
      )}
    </Link>
  )
}

function VisibleSectionHighlight({ group, pathname }) {
  let [sections, visibleSections] = useInitialValue(
    [
      useSectionStore((s) => s.sections),
      useSectionStore((s) => s.visibleSections),
    ],
    useIsInsideMobileNavigation()
  )

  let isPresent = useIsPresent()
  let firstVisibleSectionIndex = Math.max(
    0,
    [{ id: '_top' }, ...sections].findIndex(
      (section) => section.id === visibleSections[0]
    )
  )
  let itemHeight = remToPx(2)
  let height = isPresent
    ? Math.max(1, visibleSections.length) * itemHeight
    : itemHeight
  let top =
    group.links.findIndex((link) => link.href === pathname) * itemHeight +
    firstVisibleSectionIndex * itemHeight

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2 } }}
      exit={{ opacity: 0 }}
      className="absolute inset-x-0 top-0 bg-blue-100 will-change-transform dark:bg-blue-900"
      style={{ borderRadius: 8, height, top }}
    />
  )
}

function ActivePageMarker({ group, pathname }) {
  let itemHeight = remToPx(2)
  let offset = remToPx(0.25)
  let activePageIndex = group.links.findIndex((link) => link.href === pathname)
  let top = offset + activePageIndex * itemHeight

  return (
    <motion.div
      layout
      className="absolute left-2 h-6 w-px bg-blue-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2 } }}
      exit={{ opacity: 0 }}
      style={{ top }}
    />
  )
}

function NavigationGroup({ group, className }) {
  const isInsideMobileNavigation = useIsInsideMobileNavigation()
  const [router, sections] = useInitialValue(
    [useRouter(), useSectionStore((s) => s.sections)],
    isInsideMobileNavigation
  )
  const [activeSubsection, setActiveSubsection] = useState(null)

  const isActiveGroup =
    group.links.findIndex((link) => link.href === router.pathname) !== -1

  return (
    <li className={clsx('relative mt-6', className)}>
      <motion.h2
        layout="position"
        className="text-xs font-semibold text-zinc-900 dark:text-white"
      >
        {group.title}
      </motion.h2>
      <div className="relative mt-3 pl-2">
        <AnimatePresence initial={!isInsideMobileNavigation}>
          {isActiveGroup && (
            <VisibleSectionHighlight
              group={group}
              pathname={router.pathname}
              activeSubsection={activeSubsection}
            />
          )}
        </AnimatePresence>
        <motion.div
          layout
          className="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"
        />
        <AnimatePresence initial={false}>
          {isActiveGroup && (
            <ActivePageMarker
              group={group}
              pathname={router.pathname}
              activeSubsection={activeSubsection}
            />
          )}
        </AnimatePresence>
        <ul role="list" className="border-l border-transparent">
          {group.links.map((link) => (
            <motion.li key={link.href} layout="position" className="relative">
              <NavLink
                href={link.href}
                active={link.href === router.pathname}
                isAnchorLink={false}
              >
                {link.title}
              </NavLink>
              <AnimatePresence mode="popLayout" initial={false}>
                {link.href === router.pathname && sections.length > 0 && (
                  <motion.ul
                    role="list"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { delay: 0.1 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15 },
                    }}
                  >
                    {sections.map((section) => (
                      <li className={section.className} key={section.id}>
                        <NavLink
                          href={`${link.href}#${section.id}`}
                          tag={section.tag}
                          isAnchorLink
                          active={section.id === activeSubsection}
                        >
                          {section.title}
                        </NavLink>
                        {section.subsections &&
                          section.subsections.length > 0 && (
                            <ul className="ml-4">
                              {section.subsections.map((subsection) => (
                                <li key={subsection.id}>
                                  <NavLink
                                    href={`${link.href}#${subsection.id}`}
                                    tag={subsection.tag}
                                    isAnchorLink
                                    active={subsection.id === activeSubsection}
                                  >
                                    {subsection.title}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          )}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export const navigation = [
  {
    title: 'Asia Trans Gas',
    links: [{ title: 'О нашей компании', href: '/' }],
  },
  {
    title: 'WKC-1',
    links: [
      { title: 'Компрессорная станция WКС-1', href: '/wkc1/wks1' },
      {
        title: 'Список инженеров станции',
        href: '/wkc1/engineers',
        pageClassName: '',
      },
      /* { title: 'Зона ESD', href: '/wkc1/esd' }, */
      { title: 'Зона замера газа', href: '/wkc1/kabina' },
      /* { title: 'ЗОНА ОЧИСТКИ ГАЗА', href: '/wkc1/Cleaning1' }, */
      /* { title: 'ЗОНА БПТГ', href: '//wkc1/bptg' }, */
      { title: 'Зона Компримирование (ГПА)', href: '/wkc1/gpa' },
      { title: 'Вспомогательное оборудование', href: '/wkc1/mechanics' },
      /* { title: 'ЗОНА АВО ГАЗА', href: '/wkc1/avo' }, */
      { title: 'ГПЭС', href: '/wkc1/generator' },
      /* { title: 'КСВ', href: '/wkc1/ksb' }, */
      { title: 'Противопожарная система', href: '/wkc1/firefightning' },
      { title: 'Дополнительные системы', href: '/wkc1/sewerage' },
      { title: 'Все презентации WKC1', href: '/wkc1/presentation' },
      { title: 'Коммент', href: '/wkc1/comment' },
    ],
  },

  {
    title: 'WKC-2',
    links: [
      { title: 'Компрессорная станция WКС-2', href: '/wkc2/wkc2' },
      {
        title: 'Список инженеров станции',
        href: '/wkc2/engineers',
        pageClassName: '',
      },
      /* { title: 'Зона ESD', href: '/wkc2/esd' }, */

      /* { title: 'ЗОНА ОЧИСТКИ ГАЗА', href: '/wkc2/cleaning' }, */
      /* { title: 'ЗОНА БПТГ', href: '/wkc2/bptg' }, */
      { title: 'Зона Компримирование (ГПА)', href: '/wkc2/gpa' },
      { title: 'Вспомогательное оборудование', href: '/wkc2/mechanics' },
      /* { title: 'ЗОНА АВО ГАЗА', href: '/wkc2/avo' }, */
      { title: 'ГПЭС', href: '/wkc2/generator' },
      /* { title: 'КСВ (компрессор сжатого воздуха).', href: '/wkc2/ksb' }, */
      {
        title: 'Системы порошковога пожаратушения цеха ГПА',
        href: '/wkc2/firefighting',
      },
      { title: 'Все презентации WKC2', href: '/wkc2/presentation' },
      { title: 'Коммент', href: '/wkc2/comment' },
    ],
  },

  {
    title: 'WKC-3',
    links: [
      { title: 'Компрессорная станция WKC-3', href: '/wkc3/wkc3' },
      {
        title: 'Список инженеров станции',
        href: '/wkc3/engineers',
        pageClassName: '',
      },
      /* { title: 'Система ESD  ', href: '/wkc3/esd' },
      /* { title: 'Зона очистки газа', href: '/wkc3/cleaning' }, */
      /* { title: 'БПТГ', href: '/wkc3/bptg' }, */
      { title: 'Зона Компримирование (ГПА)', href: '/wkc3/gpa' },
      { title: 'Вспомогательное оборудование', href: '/wkc3/mechanics' },
      /* { title: 'Зона АВО', href: '/wkc3/avo' }, */
      { title: 'Система электроснабжения', href: '/wkc3/electr' },
      /* { title: 'КСВ', href: '/wkc3/ksv' }, */
      { title: 'Система пожаротушения', href: '/wkc3/firefighting' },
      { title: 'Все презентации WKC3', href: '/wkc3/presentation' },
      { title: 'Коммент', href: '/wkc3/comment' },

    ],
  },
  {
    title: 'MS',
    links: [
      { title: 'Замерная станция УЗРГ', href: '/wkc3/wkc3' },
      {
        title: 'Список инженеров станции',
        href: '/ms/engineers',
        pageClassName: '',
      },
      { title: 'Зона замера газа', href: '/ms/kabina' },

      { title: 'Вспомогательное оборудование', href: '/wkc3/mechanics' },
      /* { title: 'Зона АВО', href: '/wkc3/avo' }, */
      { title: 'Система электроснабжения', href: '/wkc3/electr' },
      /* { title: 'КСВ', href: '/wkc3/ksv' }, */
      { title: 'Система пожаротушения', href: '/wkc3/firefighting' },
      { title: 'Все презентации MS', href: '/ms/presentation' },
      { title: 'Коммент', href: '/ms/comment' },
    ],
  },
  {
    title: 'UCS1',
    links: [
      { title: 'Компрессорная станция UCS-1', href: '/ucs1/ucs1' },
      {
        title: 'Список инженеров станции',
        href: '/ucs1/engineers',
        pageClassName: '',
      },
      { title: 'Зона замера газа', href: '/ucs1/kabina' },
      /* { title: 'Система ESD  ', href: '/wkc3/esd' },
      /* { title: 'Зона очистки газа', href: '/wkc3/cleaning' }, */
      /* { title: 'БПТГ', href: '/wkc3/bptg' }, */
      { title: 'Зона Компримирование (ГПА)', href: '/ucs1/gpa' },
      { title: 'Вспомогательное оборудование', href: '/ucs1/mechanics' },
      /* { title: 'Зона АВО', href: '/wkc3/avo' }, */
      { title: 'Система электроснабжения', href: '/wkc3/electr' },
      /* { title: 'КСВ', href: '/wkc3/ksv' }, */
      { title: 'Система пожаротушения', href: '/wkc3/firefighting' },
      { title: 'Все презентации UCS1', href: '/ucs1/presentation' },
      { title: 'Коммент', href: '/ucs1/comment' },
    ],
  },
  {
    title: 'GCS',
    links: [
      { title: 'Компрессорная станция GCS', href: '/wkc3/wkc3' },
      {
        title: 'Список инженеров станции',
        href: '/gcs/engineers',
        pageClassName: '',
      },
      /* { title: 'Система ESD  ', href: '/wkc3/esd' },
      /* { title: 'Зона очистки газа', href: '/wkc3/cleaning' }, */
      /* { title: 'БПТГ', href: '/wkc3/bptg' }, */
      { title: 'Зона Компримирование (ГПА)', href: '/gcs/gpa' },
      { title: 'Вспомогательное оборудование', href: '/gcs/mechanics' },
      /* { title: 'Зона АВО', href: '/wkc3/avo' }, */
      { title: 'Система электроснабжения', href: '/wkc3/electr' },
      /* { title: 'КСВ', href: '/wkc3/ksv' }, */
      { title: 'Система пожаротушения', href: '/wkc3/firefighting' },
      { title: 'Все презентации GCS', href: '/gcs/presentation' },
      { title: 'Коммент', href: '/gcs/comment' },

    ],
  },
  {
    title: 'UCS-3',
    links: [
      { title: 'Компрессорная станция UCS-3', href: '/wkc3/ucs3' },
      {
        title: 'Список инженеров станции',
        href: '/ucs3/engineers',
        pageClassName: '',
      },
      /* { title: 'Система ESD  ', href: '/wkc3/esd' },
      /* { title: 'Зона очистки газа', href: '/wkc3/cleaning' }, */
      /* { title: 'БПТГ', href: '/wkc3/bptg' }, */
      { title: 'Зона Компримирование (ГПА)', href: '/ucs3/gpa' },
      { title: 'Вспомогательное оборудование', href: '/ucs3/mechanics' },
      /* { title: 'Зона АВО', href: '/wkc3/avo' }, */
      { title: 'Система электроснабжения', href: '/wkc3/electr' },
      /* { title: 'КСВ', href: '/wkc3/ksv' }, */
      { title: 'Система пожаротушения', href: '/wkc3/firefighting' },
      { title: 'Все презентации UCS3', href: '/ucs3/presentation' },
      { title: 'Коммент', href: '/ucs3/comment' },

    ],
  },
  {
    title: 'UKMS',
    links: [
      { title: 'Замерная станция УУЗРГ', href: '/ukms/ukms' },
      {
        title: 'Список инженеров станции',
        href: '/ukms/engineers',
        pageClassName: '',
      },
      { title: 'Зона замера газа', href: '/ukms/kabina' },

      { title: 'Вспомогательное оборудование', href: '/wkc3/mechanics' },
      /* { title: 'Зона АВО', href: '/wkc3/avo' }, */
      { title: 'Система электроснабжения', href: '/wkc3/electr' },
      /* { title: 'КСВ', href: '/wkc3/ksv' }, */
      { title: 'Система пожаротушения', href: '/wkc3/firefighting' },
      { title: 'Все презентации UKMS', href: '/ukms/presentation' },
      { title: 'Коммент', href: '/ukms/comment' },

    ],
  },

  {
    title: 'Отделы',
    links: [
      { title: 'Отдел по ТБ  и ООС', href: '/tb/ooc' },
      /* { title: 'ЦДУ', href: '/cdu' }, */
      { title: 'Отдел по техническим вопросам', href: '/tas' },
      //{ title: 'Центр ремонта и техобслуживания', href: '/maintenance' }, */
      { title: 'Отдел по управлению трубопроводом', href: '/pipeline' },
      // here sections
      { title: 'ЦДУ', href: '/cdu' },
      { title: 'Центр ремонта и техобслуживания', href: '/maintenance' },
      { title: 'Транспортный отдел', href: '/transport' },
      { title: 'Отдел кадров', href: '/hr' },
      { title: 'Отдел безопасности', href: '/cb' },
      { title: 'Коммент', href: '/tb/comment' },
    ],
  },
  {
    title: 'Questions',
    links: [
      { title: 'Информация', href: '/Test' },
      { title: 'HSE Section', href: '/TestHSE' },
      { title: 'WKC1 Questions', href: '/TestWKC1' },
      { title: 'WKC2 Questions', href: '/TestWKC2' },
      { title: 'WKC3 Questions', href: '/TestWKC3' },
      { title: 'MS Questions', href: '/TestMS' },
      { title: 'UCS1 Questions', href: '/TestUCS1' },
      { title: 'GCS Questions', href: '/TestGCS' },
      { title: 'UCS3 Questions', href: '/TestUCS3' },
      { title: 'UKMS Questions', href: '/TestUKMS' },
      
    ],
  },
]

export function Navigation(props) {
  return (
    <nav {...props}>
      <ul role="list">
        <TopLevelNavItem href="/wks1">Станции</TopLevelNavItem>
        <TopLevelNavItem href="/cdu">Отделы</TopLevelNavItem>
        <TopLevelNavItem href="/test1">Тесты</TopLevelNavItem>
        {navigation.map((group, groupIndex) => (
          <NavigationGroup
            key={group.title}
            group={group}
            className={groupIndex === 0 && 'md:mt-0'}
          />
        ))}
        <li className="sticky bottom-0 z-10 mt-6 min-[416px]:hidden">
          <Button href="https://atg-login.vercel.app/" variant="filled" className="w-full">
            Sign out
          </Button>
        </li>
      </ul>
    </nav>
  )
}
