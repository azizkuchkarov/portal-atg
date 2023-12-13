import React from 'react';

export function Ucs1table (){
    return (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="px-4 py-2 font-semibold text-gray-800 border-b">№</th>
                <th className="px-4 py-2 font-semibold text-gray-800 border-b">Уровень</th>
                <th className="px-4 py-2 font-semibold text-gray-800 border-b">Описание</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b">1</td>
                <td className="px-4 py-2 border-b">Отключение в режиме ESD всей станционной площадки (Station ESD)</td>
                <td className="px-4 py-2 border-b">Производится аварийное отключение всей станции и газ стравливается со всей площадки КС </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">2</td>
                <td className="px-4 py-2 border-b">Аварийное отключение площадки компрессоров (Compressor Area ESD)</td>
                <td className="px-4 py-2 border-b">Производится аварийное отключение всего оборудования площадки ГПА, затем газ стравливается с этой площадки</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">3</td>
                <td className="px-4 py-2 border-b">Аварийное отключение площадки генераторных установок (Generator Area ESD)</td>
                <td className="px-4 py-2 border-b">Производится аварийный останов всех установок газогенератора и ГПА. Стравливается газ из топливных линии по станции.</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
};


