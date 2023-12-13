import React, { useState, Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { PhoneIcon } from '@heroicons/react/outline';
import Image from 'next/image';

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

const navigation = [
  { name: 'Объективные данные', current: true },
  { name: 'Трудовая деятельность', current: false },
  { name: 'Результаты теста', current: false },
];

// const userNavigation = [
//   { name: 'Your Profile', href: '#' },
//   { name: 'Settings', href: '#' },
//   { name: 'Sign out', href: '#' },
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Shorasul() {
  const [selectedSection, setSelectedSection] = useState('Объективные данные');

  const [navigation, setNavigation] = useState([
    { name: 'Объективные данные', current: true },
    { name: 'Трудовая деятельность', current: false },
    { name: 'Результаты теста', current: false },
  ]);
  
  const handleSectionChange = (sectionName) => {
    const updatedNavigation = navigation.map((item) => ({
      ...item,
      current: item.name === sectionName,
    }));
    setNavigation(updatedNavigation);
    setSelectedSection(sectionName);
  };

  return (
   <div className="md:w-3/4 lg:w-1/2">
      <div className="min-h-full">
        <div className="bg-gray-800 pb-32">
          <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
              <>
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                  <div className="border-b border-gray-700">
                    <div className="flex h-16 items-center justify-between px-4 sm:px-0">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                           <Image
                  src="https://ik.imagekit.io/ATG/ingeneers/WKC1/Abdurakhmanov%20Khumoyun.jpg?updatedAt=1690093876715"
                  alt=""
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full"
                />
                        </div>
                        <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                          {navigation.map((item) => (
                            <button
                              key={item.name}
                              className={`${
                                item.current
                                  ? 'bg-gray-900 text-white'
                                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                              } rounded-md px-3 py-2 text-sm font-medium`}
                              onClick={() => handleSectionChange(item.name)}
                            >
                              {item.name}
                            </button>
                          ))}
                      </div>
                        </div>
                      </div>
                      <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                          {/* <button
                            type="button"
                            className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                          >
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                          </button> */}

                          {/* Profile dropdown */}
                          <Menu as="div" className="relative ml-3">
                            <div>
                              {/* <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">Open user menu</span>
                                <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                              </Menu.Button> */}
                            </div>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
  {/* Remove this part that references userNavigation */}
  {/* {userNavigation.map((item) => (
    <Menu.Item key={item.name}>
      {({ active }) => (
        <a
          href={item.href}
          className={classNames(
            active ? 'bg-gray-100' : '',
            'block px-4 py-2 text-sm text-gray-700'
          )}
        >
          {item.name}
        </a>
      )}
    </Menu.Item>
  ))} */}
</Menu.Items>
                            </Transition>
                          </Menu>
                        </div>
                      </div>
                      <div className="-mr-2 flex md:hidden">
                        {/* Mobile menu button */}
                        <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Open main menu</span>
                          {open ? (
                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                          ) : (
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                          )}
                        </Disclosure.Button>
                      </div>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="border-b border-gray-700 md:hidden">
  <div className="space-y-1 px-2 py-3 sm:px-3">
    {navigation.map((item) => (
      <Disclosure.Button
        key={item.name}
        className={classNames(
          item.current
            ? 'bg-gray-900 text-white'
            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
          'block rounded-md px-3 py-2 text-base font-medium'
        )}
        onClick={() => handleSectionChange(item.name)}
      >
        {item.name}
      </Disclosure.Button>
    ))}
  </div>
</Disclosure.Panel>

              </>
            )}
          </Disclosure>
          <header className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-white">Абдурахманов Хумоюн Нажмиддинович</h1>
            </div>
          </header>
        </div>

        <main className="-mt-32">
          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
            {selectedSection === 'Объективные данные' && (
              <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
                <h3 className='mt-0'>Ф.И.O.</h3> Абдурахманов Хумоюн Нажмиддинович 
         <h3> Должность </h3>
         Сменный инженер 
          (Специалист) 
         <h3> Отдел </h3> 
         WKC 1 
         <h3> Дата приема на работу в СП:</h3>  26.09.2017
         <h3>Дата рождения:</h3>  16.10.1990 г.р.
         <h3>Место рождения:</h3>г. Самарканд
         <h3>Когда, какое учебное заведение окончил:    </h3>
         2013 г., Бухарский инженерно-технологический институт (Бакалавр) 
         <br />
        2017 г., Бухарский инженерно-технологический институт (Магистр)
         <h3>Специальность </h3>
         Технология переработки нефти и газа, Химическая технология нефти и газа 

         <h3> Научная степень:</h3> 
         не имеет
          <h3>Какими иностранными языками владеет:</h3>
          Английский (разговорный)
              </div>
            )}

{selectedSection === 'Трудовая деятельность' && (
              <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
               <h3 className='mt-2'>09.2009 - 06.2013</h3>
          	Учёба в Бухарском инженерно-технологическом институте (Бакалавр)	г. Бухара
          <h3>11.2013 - 02.2014</h3>
          Филиал &#34;Бухорошахаргаз&#34; УП &#34;Гарбгазтаъминот&#34;, контролёр абонентского отдела	г. Бухара
          <h3>01.2015 - 05.2017</h3>
          Бухарский инженерно-технологический институт, лаборант (0,5 ставка)	г. Бухара
          <h3>09.2015 - 06.2017</h3>
          Учёба в Бухарском инженерно-технологическом институте (Магистратура)	г. Бухара
          <h3>09.2017 - По н/в</h3>
          СП OOO «Asia Trans Gas» Бухарское ОУМГ, Сменный инженер (Специалист) WKC 1	г. Бухара
        <hr className='mt-5 mb-5 ' />
          <h1 >Стажировки и обучения : </h1>
          <h3>Декабрь 2018 </h3>
          <h3>КС1</h3>
          Прохождение обучения по оказанию доврачебной помощи пострадавшим на производстве и укусах ядовитых змей и насекомых
          <h3>Ноябрь 2019</h3>
        <h3>г.Уфа (Российская Федерация)</h3>
          Участие в обучении по теме «Эксплуатация газоперекачивающих агрегатов на компрессорных станциях и диспетчерское управление магистральными газопроводами»
        
              </div>
            )}

{selectedSection === 'Результаты теста' && (
              <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
                {/* Content for the third section */}
                {/* Replace this with your desired content for the third section */}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}