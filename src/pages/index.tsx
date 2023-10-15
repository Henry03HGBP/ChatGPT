//import Image from 'next/image'
//import { Inter } from 'next/font/google'
//const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="grid w-screen h-screen">
      <div className="flex flex-col items-center">
       <header className='w-screen pl4 pr4 mt-14'>
        <form className='flex gap-1'>
         <input type='text' placeholder='¿Qué quieres buscar?' className='--bg-gray-100 rounded-lg px-4 py-2 w-full' />
         <button type='submit' className='w-[100px] bg-blue-500 text-white rounded px-4 py-2'>Buscar</button>
        </form>
       </header>
       <div className='mt-8 '>
       <h1 className='text-4xl font-bold'>Gato</h1>
       </div> 
      </div>
    </main>
  )
}
