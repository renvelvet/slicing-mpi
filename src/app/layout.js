import {
  facebook,
  forward,
  instagram,
  tiktok,
  twitter,
  youtube,
} from '../../public/icons'
import './globals.css'
import { Roboto } from 'next/font/google'
import Image from 'next/image'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <header className="w-full h-10 fixed bg-[#F9F9F9] border-b border-b-blue-primary z-30">
          <div className="flex max-w-6xl h-full mx-auto flex-row justify-between items-center">
            <ul className="flex flex-row items-center gap-x-[13px] h-fit text-[#272121] text-sm font-medium leading-4">
              <li>RCTI+</li>
              <li>Vision+</li>
              <li>Okezone.com</li>
              <li>SINDOnews.com</li>
              <li>iNews.id</li>
              <li>Buddyku</li>
              <li>
                <Image src={forward} alt="dropdown icon" width={9} height={6} />
              </li>
            </ul>
            <ul className="flex flex-row items-center gap-x-[15px] h-fit">
              <li>
                <Image
                  src={facebook}
                  alt="facebook-icon"
                  weight={29}
                  height={29}
                />
              </li>
              <li>
                <Image
                  src={twitter}
                  alt="facebook-icon"
                  weight={29}
                  height={29}
                />
              </li>
              <li>
                <Image
                  src={instagram}
                  alt="facebook-icon"
                  weight={29}
                  height={29}
                />
              </li>
              <li>
                <Image
                  src={youtube}
                  alt="facebook-icon"
                  weight={29}
                  height={29}
                />
              </li>
              <li>
                <Image
                  src={tiktok}
                  alt="facebook-icon"
                  weight={29}
                  height={29}
                />
              </li>
            </ul>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
