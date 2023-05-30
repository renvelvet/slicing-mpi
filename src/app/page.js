import Schedule from './components/Schedule'
import Headline from './components/Headline'
import UnknownSection from './components/UnknownSection'
import News from './components/News'
import Footer from './components/Footer'
import SideContent from './components/SideContent'
import Banner from './components/Banner'
import KanalMenu from './components/KanalMenu'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Banner />
      <KanalMenu />
      <Schedule />
      <Headline />
      <div className="pt-[35px] pb-[25px]">
        <section className="grid grid-cols-4 mx-auto max-w-6xl gap-x-[27px]">
          <div className="col-span-3">
            <UnknownSection />
            <News />
          </div>
          <div>
            <SideContent />
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}
