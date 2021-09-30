/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b p-6">
        <p className="text-4xl font-bold">Koup </p>
        <p className="text-1xl">NFT Coupons</p>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-4 text-pink-500">
              Home
            </a>
          </Link>
          <Link href="/my-coupons">
            <a className="mr-6 text-pink-500">
              My Coupons
            </a>
          </Link>
          <Link href="/create-promotion">
            <a className="mr-6 text-pink-500">
            Start a Promotion
            </a>
          </Link>
          <Link href="/my-promotions">
            <a className="mr-6 text-pink-500">
              My Promotions
            </a>
          </Link>
          <Link href="/store">
            <a className="mr-6 text-pink-500">
              Store
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
