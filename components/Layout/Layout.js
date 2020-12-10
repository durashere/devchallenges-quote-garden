import Head from "next/head"
import { useRouter } from "next/router"

const Layout = ({ children }) => {
  const router = useRouter()

  return (
    <div className="w-screen h-screen flex flex-col justify-between">
      <Head>
        <title>Quote Garden</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Icons"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&Raleway:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className="flex justify-end">
        <button
          onClick={() => router.replace("/")}
          className="p-4 flex items-center gap-2 font-ral font-medium text-lg text-gray-c4F4F4F focus:outline-none"
        >
          random <span className="material-icons">cached</span>
        </button>
      </header>

      <main className="w-1/2 mx-auto flex justify-center">{children}</main>

      <footer className="flex justify-center">
        <p className="mt-36 mb-4 font-mon text-gray-cA9A9A9 text-sm font-semibold">
          <a href="https://github.com/durashere">durashere</a> @{" "}
          <a href="https://devchallenges.io">DevChallenges.io</a>
        </p>
      </footer>
    </div>
  )
}

export default Layout
