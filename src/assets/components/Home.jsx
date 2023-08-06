import React, { useEffect, useState } from 'react'

function Home(){

  const [champions, setChampions] = useState([])

  useEffect(() => {
    const fetchChampions = async () => {
      const response = await fetch('https://ddragon.leagueoflegends.com/cdn/13.15.1/data/pt_BR/champion.json')
      const data = await response.json()
      setChampions(data)
    }
    fetchChampions()
  }, [])

  return (
    <div>
      <section className="text-gray-400 bg-gray-50 body-font">
        <div className="container mx-auto py-24">
          <h1 className="text-center text-2xl font-bold text-black">Escolha seu</h1>
          <h1 className="text-center text-8xl font-bold text-black">Campeão</h1>
        </div>
      </section>

      <section className="text-gray-400 body-font bg-gray-900">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <form>
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative mb-2">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                  </div>
                  <input type="search" id="default-search" className="w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Busque um campeão" />
                  <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-yellow-600 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-4 py-2 dark:yellow-600 dark:hover:yellow-300 dark:focus:yellow-800">Pesquisar</button>
                </div>
              </form>
              <div className="h-1 bg-yellow-600 rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https:dummyimage.com/720x400" alt="content" />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">SUBTITLE</h3>
                <h2 className="text-lg text-white font-medium title-font mb-4"></h2>
                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
