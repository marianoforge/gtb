import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

import { getAllPostsWithSlug, getPost } from "../../lib/api";
import Menu from "../../components/layout/Menu";
import Header from "../../components/Novedades/Header";
import Footer from "../../components/layout/Footer";

export default function Post({ postData }) {
  const router = useRouter();

  if (!router.isFallback && !postData?.slug) {
    return <p>Looks like an Error</p>;
  }

  const formatDate = (date) => {
    const newDate = new Date(date);

    return `${newDate.getDate()}/${
      newDate.getMonth() + 1
    }/${newDate.getFullYear()}`;
  };

  return (
    <div>
      <Head>
        <title>{postData.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <Header title={postData.title} />
      <main className="container mx-auto px-4 py-8 lg:py-16">
        {router.isFallback ? (
          <h2>Loading...</h2>
        ) : (
            <article className="w-full lg:w-6/12 mx-auto">
              <p className="font-light text-sm text-orange-500">
                {formatDate(postData.date)}
              </p>
              <h2 className=" text-2xl font-semibold text-gray-900 lg:text-3xl mb-4">{postData.title}</h2>
              <figure className="mb-3">
                <img
                  className="rounded-xl"
                  src={postData.featuredImage.node.sourceUrl}
                  alt={postData.title}
                />
              </figure>
            <div
              className="font-light text-base lg:text-lg leading-loose text-gray-900 mb-8"
              dangerouslySetInnerHTML={{ __html: postData.content }}
            />
          </article>
        )}
        <p className="text-center">
          <Link href="/novedades">
            <a className="bg-primary hover:bg-mbutton inline-block text-white text-sm px-4 py-2 rounded-full transition-all duration-300">Volver a Novedades</a>
          </Link>
        </p>
        <div className="w-1/2 mt-4"></div>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => `/novedades/${node.slug}`) || [],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await getPost(params.slug);

  return {
    props: {
      postData: data.post,
    },
  };
}
