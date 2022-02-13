import React from 'react'
import { HobbiesItem } from './HobbiesItem'

import laptop from '../../media/img/svg/laptop.svg'
import guitar from '../../media/img/svg/guitar.svg'
import swords from '../../media/img/svg/swords.svg'

export const HobbiesGrid = () => {
  const hobbies=[
    {
      key: "Desarrollador",
      img: laptop,
      title: "Desarrollador",
      body: "Soy un joven programador y full stack developer jr, estoy en constante aprendizaje de tecnologías y me gusta aplicarlas y experimentar con ellas como hobby, de seguro ahorita mismo estoy escupiendo código en un editor de texto. ¿Tienes alguna duda? contactame."
    },
    {
      key: "Música",
      img: guitar,
      title: "Música",
      body: "Me gusta tocar guitarra y experimentar con otros instrumentos, invierto horas practicando y escuchando música. Disfruto de la música de una manera enorme, tan hermoso que nos permite desde cantar para expresarnos, hasta eso que no se puede expresar con palabras."
    },
    {
      key: "Competitividad",
      img: swords,
      title: "Competitividad",
      body: "Me gusta tener un nivel aceptable en las actividades que realizo, desde tener un buen conocimiento en mi área de trabajo, hasta en pasatiempos que realizo. Cuando una actividad me gusta puedo pasar horas solamente realizando esa actividad y creeme que cada segundo que pasa lo disfruto."
    },
  ]
  return (
    <div className="cont-color">

      <div className="pas contenedor">
        {
          hobbies.map(hobbie=>(
            <HobbiesItem {...hobbie} key={hobbie.key}/>
          ))
        }
      </div>
    </div>
  )
}
