import Head from "next/head";
import Link from "next/link";

import Header from "../../components/Novedades/Header";
import Footer from "../../components/layout/Footer";

// data
import { getAllPosts } from "../../lib/api";

// styles

const Novedades = ({ allPosts: { edges } }) => (
  <div>
    {/* {console.log(edges.node.id)} */}
    <Head>
      <title>Global Trade Box - Novedades</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <main className="flex flex-col items-center mt-12">
      <h1 className="lg:text-4xl text-2xl mr-1 mb-6">Últimas Novedades</h1>
      <hr />
      <section className="lg:w-2/4 w-10/12 mb-10">
        {edges.map(({ node }) => (
          <div key={node.id} className="mb-8">
            <div>
              <figure className="mb-4">
                <img src={node.featuredImage.node.sourceUrl} alt={node.title} />
              </figure>
            </div>
            <div className="flex lg:block flex-col items-center mb-6">
              <h2 className="text-xl mb-2">{node.title}</h2>
              <p className="font-light mb-3 w-full">{node.excerpt}</p>

              <Link href={`/novedades/${node.slug}`}>
                <a className="underline">Read more</a>
              </Link>
            </div>
            <hr />
          </div>
        ))}
      </section>
    </main>
    <Footer />
  </div>
);

export default Novedades;

export async function getStaticProps() {
  const allPosts = await getAllPosts();
  return {
    props: {
      allPosts,
    },
  };
}
