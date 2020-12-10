import { useState } from "react"
import Layout from "../components/Layout/Layout"
import Link from "next/link"
import Quote from "../components/Quote/Quote"

export default function Home({ data }) {
  const [button, setButton] = useState(false)

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center gap-16">
        <Quote>{data.quote.quoteText}</Quote>
        <Link href={`/author/${data.quote.quoteAuthor}`}>
          <button
            onMouseOver={() => setButton(true)}
            onMouseOut={() => setButton(false)}
            className="w-full px-8 py-4 self-start flex hover:bg-gray-c333333 focus:outline-none"
          >
            <div className="w-full flex items-center justify-between">
              <div>
                <p
                  className={`text-left font-ral font-bold text-2xl ${
                    button ? "text-gray-cF2F2F2" : "text-gray-c4F4F4F"
                  }`}
                >
                  {data.quote.quoteAuthor}
                </p>
                <p className="text-left font-ral font-medium text-sm text-gray-c828282">
                  {data.quote.quoteGenre}
                </p>
              </div>
              {button && (
                <span className="text-gray-cF2F2F2 material-icons">
                  arrow_right_alt
                </span>
              )}
            </div>
          </button>
        </Link>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await fetch(
    `https://quote-garden.herokuapp.com/api/v2/quotes/random`
  )

  const data = await res.json()

  return { props: { data } }
}
