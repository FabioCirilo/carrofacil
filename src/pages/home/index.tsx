import { useState } from 'react'
import type { FormEvent } from 'react'
import { FiSearch, FiMapPin } from 'react-icons/fi'
import Container from '../../components/container'

interface CarProps {
  id: string
  name: string
  year: string
  km: string
  price: number
  city: string
  image: string
}

const cars: CarProps[] = [
  {
    id: '1',
    name: 'Caoa Chery',
    year: '2026/2026',
    km: '0 Km',
    price: 20000000,
    city: 'Kinaxixe, Luanda',
    image:
      'https://midiawm1.webmotors.com.br/wp-content/uploads/2026/11/23180719/Caoa-Chery-Tiggo-8-Pro-PHEV-5.webp'
  },
  {
    id: '2',
    name: 'Caoa Chery',
    year: '2026/2026',
    km: '0 Km',
    price: 20000000,
    city: 'Kinaxixe, Luanda',
    image:
      'https://midiawm1.webmotors.com.br/wp-content/uploads/2026/11/23180719/Caoa-Chery-Tiggo-8-Pro-PHEV-5.webp'
  },
  {
    id: '3',
    name: 'Caoa Chery',
    year: '2026/2026',
    km: '0 Km',
    price: 20000000,
    city: 'Kinaxixe, Luanda',
    image:
      'https://midiawm1.webmotors.com.br/wp-content/uploads/2026/11/23180719/Caoa-Chery-Tiggo-8-Pro-PHEV-5.webp'
  },
  {
    id: '4',
    name: 'Caoa Chery',
    year: '2026/2026',
    km: '0 Km',
    price: 20000000,
    city: 'Kinaxixe, Luanda',
    image:
      'https://midiawm1.webmotors.com.br/wp-content/uploads/2026/11/23180719/Caoa-Chery-Tiggo-8-Pro-PHEV-5.webp'
  },
  {
    id: '5',
    name: 'Caoa Chery',
    year: '2026/2026',
    km: '0 Km',
    price: 20000000,
    city: 'Kinaxixe, Luanda',
    image:
      'https://midiawm1.webmotors.com.br/wp-content/uploads/2026/11/23180719/Caoa-Chery-Tiggo-8-Pro-PHEV-5.webp'
  },
  {
    id: '6',
    name: 'Caoa Chery',
    year: '2026/2026',
    km: '0 Km',
    price: 20000000,
    city: 'Kinaxixe, Luanda',
    image:
      'https://midiawm1.webmotors.com.br/wp-content/uploads/2026/11/23180719/Caoa-Chery-Tiggo-8-Pro-PHEV-5.webp'
  }
]

export default function Home() {
  const [input, setInput] = useState('')

  function handleSearch(e: FormEvent) {
    e.preventDefault()
    if (input.trim() === '') return
    // aqui vai a lógica da pesquisa
    console.log(input)
  }

  return (
    <Container>
      <section className="py-10 sm:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Encontre o carro <span className="text-blue-600">ideal</span>
          </h1>
          <p className="mt-3 text-slate-500">
            Pesquise pelo nome e descubra as melhores ofertas.
          </p>

          <form
            onSubmit={handleSearch}
            className="mt-8 flex items-center gap-2 rounded-full border border-slate-200 bg-white p-2 shadow-sm transition focus-within:border-blue-600 focus-within:ring-4 focus-within:ring-blue-100"
          >
            <FiSearch size={20} className="ml-3 shrink-0 text-slate-400" />
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Digite o nome do carro"
              className="h-10 w-full bg-transparent px-1 text-slate-900 outline-none placeholder:text-slate-400"
            />
            <button
              type="submit"
              className="h-10 shrink-0 rounded-full bg-blue-600 px-6 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              Buscar
            </button>
          </form>
        </div>
      </section>

      <h2 className="text-center text-xl font-bold text-slate-900 sm:text-2xl">
        Carros novos e usados em Luanda
      </h2>

      <main className="grid grid-cols-1 gap-6 py-8 sm:grid-cols-2 lg:grid-cols-3">
        {cars.map(car => (
          <article
            key={car.id}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className={`aspect-4/3 overflow-hidden bg-slate-100`}>
              <img
                src={car.image}
                alt={`Imagem do ${car.name}`}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-4">
              <p className="truncate text-lg font-bold text-slate-900">
                {car.name}
              </p>

              <div className="mt-2 flex items-center justify-between gap-2">
                <span className="text-sm text-slate-500">
                  {car.year} | {car.km}
                </span>
                <strong className="text-lg text-blue-600">{car.price}</strong>
              </div>

              <div className="mt-4 flex items-center gap-1.5 border-t border-slate-100 pt-3 text-sm text-slate-500">
                <FiMapPin size={16} className="shrink-0" />
                <span>{car.city}</span>
              </div>
            </div>
          </article>
        ))}
      </main>
    </Container>
  )
}
