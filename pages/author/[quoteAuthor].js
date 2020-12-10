import Layout from "../../components/Layout/Layout"
import Quote from "../../components/Quote/Quote"

const Author = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div className>
        <h1 className="mb-36 font-ral font-bold text-4xl text-gray-c333333">
          {data.message}
        </h1>
        <div className="flex flex-col gap-36">
          {data.quotes.map((quote) => (
            <Quote key={quote._id}>{quote.quoteText}</Quote>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://quote-garden.herokuapp.com/api/v2/authors/${params.quoteAuthor}`
  )

  const data = await res.json()

  return { props: { data } }
}

export default Author
