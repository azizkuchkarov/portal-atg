import React from 'react';

export function Ucs1table2 (){
    return (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr>
                <th className="px-4 py-2 font-semibold text-gray-800 border-b">Детали и точки проверки</th>
                <th className="px-4 py-2 font-semibold text-gray-800 border-b">Единица измерения</th>
                <th className="px-4 py-2 font-semibold text-gray-800 border-b">Параметры <br/> Воздушный компрессор L132G-13A</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b">Верхний и нижний предел давления трубопровода </td>
                <td className="px-4 py-2 border-b">МПа</td>
                <td className="px-4 py-2 border-b">0.6-1.0</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Перепад давления воздушного сепаратора</td>
                <td className="px-4 py-2 border-b">бар</td>
                <td className="px-4 py-2 border-b">＜0.05</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Перепад давления масляного сепаратора</td>
                <td className="px-4 py-2 border-b">бар</td>
                <td className="px-4 py-2 border-b">＜1.2</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Температура элемента воздушного компрессора</td>
                <td className="px-4 py-2 border-b">℃</td>
                <td className="px-4 py-2 border-b">＜110</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Температура воздуха на входе</td>
                <td className="px-4 py-2 border-b">℃</td>
                <td className="px-4 py-2 border-b">＜45</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Заданное значение предохранительного клапана</td>
                <td className="px-4 py-2 border-b">бар</td>
                <td className="px-4 py-2 border-b">11</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Самая высокая температура эксплуатации</td>
                <td className="px-4 py-2 border-b">℃</td>
                <td className="px-4 py-2 border-b">＜45</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Самая низкая температура эксплуатации</td>
                <td className="px-4 py-2 border-b">℃</td>
                <td className="px-4 py-2 border-b">1</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Максимальное рабочее давление</td>
                <td className="px-4 py-2 border-b">МПа</td>
                <td className="px-4 py-2 border-b">1.3</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Рабочее давление</td>
                <td className="px-4 py-2 border-b">МПа</td>
                <td className="px-4 py-2 border-b">1</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Normal flow / Средний расход</td>
                <td className="px-4 py-2 border-b">Nm3/h </td>
                <td className="px-4 py-2 border-b">1116</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Скорость двигателя</td>
                <td className="px-4 py-2 border-b">м </td>
                <td className="px-4 py-2 border-b">2980</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Максимальное рабочее давление сушилки</td>
                <td className="px-4 py-2 border-b">МПа </td>
                <td className="px-4 py-2 border-b">Нормальная работа 1.0</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Максимальное рабочее давление воздушного ресивера</td>
                <td className="px-4 py-2 border-b">МПа </td>
                <td className="px-4 py-2 border-b">По проекту 1.3, нормальная работа при 1.0</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
};


