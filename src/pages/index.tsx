import Aside from '@/components/core/Aside'
import Header from '@/components/core/Header'
import Main from '@/components/core/Main'
import SideBar from '@/components/core/SideBar'
import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <Head>
        <title>ConnectU</title>
        <meta name="description" content="Created for students by students" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='min-h-full'>
        {/* navigation  */}
        <Header />
        <div className="py-10">
          <div className="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">
            <SideBar />
            <Main />
            <Aside />
          </div>
        </div>
      </main>
    </>
  )
}
