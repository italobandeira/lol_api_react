import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import parse from 'html-react-parser';

function Champion() {

  const { id } = useParams()
  const [champion, setChampion] = useState([])

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/14.3.1/data/pt_BR/champion/${id}.json`)
      const data = await response.json()
      setChampion(Object.values(data.data))
    }
    fetchProduct()
  }, [])

  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-5 mx-auto flex flex-col">
        {champion.map((champ) => {
          return (
            <div key={champ.id}>
              <div className="min-[200px]:w-1/1 sm:w-9/12 mx-auto">
                <div className="rounded-lg overflow-hidden">
                  <img alt="content" className="object-cover object-center h-full w-full" src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ.id}_0.jpg`} />
                </div>
                <div className="w-9/12 container mx-auto py-5">
                  <h1 className="text-center min-[280px]:text-1xl sm:text-2xl font-bold text-white"><i>{champ.title.toUpperCase()}</i></h1>
                  <h1 className="text-center min-[280px]:text-6xl sm:text-9xl font-bold text-white"><i>{champ.name.toUpperCase()}</i></h1>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-7/12 text-center sm:py-8">
                    <div className="w-12 h-12 mx-auto mt-10 fill-yellow-700">
                      <svg viewBox="0 0 100 100">
                        <path d="M67.84,56.35v5.5h0c8.62-8.62,14.37,0,14.37,0C112.14,40.78,90.35,2,90.35,2s-.72,17.24-15.08,27.77V46.29c-.24,4.79-3.84,7.9-7.43,10.06"></path>
                        <path d="M17.79,62.09s4.07-6.46,10.78-2.63L20.91,48.2l6.7-16c-17.24-10.54-18-29.93-18-29.93S-12.14,41,17.79,62.09"></path>
                        <path d="M26.89,83.89,32.4,65.21l-.24-.48L19.23,77.9A17.78,17.78,0,0,1,7.5,83.17H3L2,85.56l12,11.5Z"></path>
                        <path d="M92.27,83.89a16.24,16.24,0,0,1-11.74-5.27L68.8,66.88,72.63,84.6,85.8,98l12-11.49-1-2.4Z"></path>
                        <path d="M55.87,42.7c0,.24-.24.48-.24.71h.72c5.75.48,7.66,2.64,9.1,7.67a9.35,9.35,0,0,0,2.39-1.92c1-1,1.68-1.67,1.68-2.63V28.09a2,2,0,0,0-1.68-1.92L36.47,20.43H36a2.39,2.39,0,0,0-2.39,2.39v6.71l24.9,3.35Z"></path>
                        <path d="M60.18,54c-1.2-5.27-1.44-4.55-5.75-4.79L40.78,48V44.13h5.51A4.09,4.09,0,0,0,50.36,41l1-3.35L32.4,35l-5,12.22,11.74,17L33.6,82.69,49.88,98,66.41,82.93s-6.23-28.5-6.23-29"></path>
                        <path d="M49.88,2.23,45.09,12.52l4.79,3.83,4.79-3.83Z"></path>
                        <path d="M62.1,9.41l1.43,6h6l2.87-11Z"></path>
                        <path d="M30.25,15.4h6l.24-.72,1.2-5.27-10.3-5Z"></path>
                      </svg>
                    </div>
                    <div className="flex flex-col items-center text-center justify-center">
                      <h2 className="font-medium title-font mt-4 text-white text-lg">{champ.tags[0]} {champ.tags[1] ? `· ` + champ.tags[1] : ``}</h2>
                      <div className="w-12 h-1 bg-yellow-600 rounded mt-2 mb-4"></div>
                    </div>
                  </div>
                  <div className="sm:w-2/3 sm:pl-7 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left ml-3">
                    <p className="leading-relaxed text-justify text-lg mb-4">{champ.lore}</p>
                  </div>
                </div>
              </div>
              <div className="container py-24">
                <h1 className='text-center mb-10 min-[280px]:text-5xl sm:text-5xl font-bold text-white'><i>HABILIDADES</i></h1>
                <div className="flex min-[200px]:flex-col sm:flex-row justify-center">
                  <div className="flex flex-col items-center text-center justify-center relative mb-10 border-gray-800 sm:border-t-0 border-t">
                    <img className='rounded mt-10' src={`http://ddragon.leagueoflegends.com/cdn/14.3.1/img/passive/${champ.passive.image.full}`} />
                    <div className="flex-grow pt-14 px-4">
                      <h2 className="font-medium title-font text-sm text-white mb-1">PASSIVA</h2>
                      <h2 className="min-[280px]:text-2xl sm:text-lg font-medium text-white mb-1">{champ.passive.name}</h2>
                      <p className="leading-relaxed text-justify">{parse(champ.passive.description)}</p>
                    </div>
                  </div>
                  {champ.spells.map((c) => {
                    return (
                      <div className="flex flex-col items-center text-center justify-center relative mb-10 border-gray-800 sm:border-t-0 border-t" key={c.id}>
                        <img className='rounded mt-10' src={`http://ddragon.leagueoflegends.com/cdn/14.3.1/img/spell/${c.image.full}`} />
                        <div className="flex-grow pt-14 px-4">
                          <h2 className="font-medium text-sm text-white mb-1">MAGIA</h2>
                          <h2 className="min-[280px]:text-2xl sm:text-lg font-medium text-white mb-1">{c.name}</h2>
                          <p className="leading-relaxed text-justify">{parse(c.description)}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Champion
