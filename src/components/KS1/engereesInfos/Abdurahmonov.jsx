import React, { useState } from 'react';
import { PhoneIcon } from '@heroicons/react/outline'; // Use '/outline' suffix for v2
import Image from 'next/image'; // Import the Image component from next/image

export default function Abdurahmonov() {
  const [selectedSection, setSelectedSection] = useState('First');

  const handleSectionChange = (sectionName) => {
    setSelectedSection(sectionName);
  };

  return (
    <div className="md:w-3/4 lg:w-1/2 ">
      <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
        <div className="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
          <div className="ml-4 mt-4">
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
              <div className="ml-4">
                <h3 className="text-base font-semibold leading-6 text-gray-900">Абдурахманов Хумоюн Нажмиддинович</h3>
                <p className="text-sm text-gray-500">
                  <a href="#">WKC 1</a>
                </p>
              </div>
            </div>
          </div>
          <div className="ml-4 mt-4 flex flex-shrink-0">
            <button
              type="button"
              className={`relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold ${
                selectedSection === 'First' ? 'text-blue-500' : 'text-gray-900'
              } shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50`}
              onClick={() => handleSectionChange('First')}
            >
              {/* <PhoneIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
              <span>Объективные данные</span>
            </button>
            <button
              type="button"
              className={`relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold ${
                selectedSection === 'Second' ? 'text-blue-500' : 'text-gray-900'
              } shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50`}
              onClick={() => handleSectionChange('Second')}
            >
              {/* <EnvelopeIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
              <span>Трудовая деятельность</span>
            </button>
            <button
              type="button"
              className={`relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold ${
                selectedSection === 'Third' ? 'text-blue-500' : 'text-gray-900'
              } shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50`}
              onClick={() => handleSectionChange('Third')}
            >
              {/* <EnvelopeIcon className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
              <span>Результаты теста</span>
            </button>
          </div>
        </div>
      </div>

      {selectedSection === 'First' && (
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

      {selectedSection === 'Second' && (
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

      {selectedSection === 'Third' && (
        <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
          {/* Content for the Third section */}
          {/* Replace this with your desired content for the third person */}
        </div>
      )}
    </div>
  );
}
