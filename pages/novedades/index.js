import Head from "next/head";
import Link from "next/link";

import Menu from "../../components/layout/Menu";
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
    <Menu />
    <Header title="Últimas Novedades" />
    <main className="container mx-auto px-4 py-8 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {edges.map(({ node }) => (
          <div key={node.id} className="shadow-xl rounded-2xl">
            <div>
              <figure>
                <img src={node.featuredImage.node.sourceUrl} alt={node.title} className="rounded-t-2xl" />
              </figure>
            </div>
            <div className="flex lg:block flex-col items-center p-6">
              <h2 className="text-2xl font-semibold mb-2 text-center">{node.title}</h2>
              <div className="font-light mb-6 w-full" dangerouslySetInnerHTML={{ __html: node.excerpt }}></div>
              <p className="text-center">
              <Link href={`/novedades/${node.slug}`}>
                <a className="bg-primary hover:bg-mbutton inline-block text-white text-sm px-3 py-1 rounded-full transition-all duration-300">Read more</a>
                </Link>
                </p>
            </div>
          </div>
        ))}
      </div>
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
