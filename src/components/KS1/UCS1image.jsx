import React from 'react';
import {Ochistka2Img} from '../wsk2zonaOchistka2.jsx'







export function UCS1image ({link1, link2}) {
  const birinchi = link1
  const ikkinchi = link2
  
  return (
<>
  <div className="flex justify-center">
  <Ochistka2Img link={birinchi}/>
  <Ochistka2Img link={ikkinchi}/>
</div>





</>


        
  );
};
