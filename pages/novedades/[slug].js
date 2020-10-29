import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

import { getAllPostsWithSlug, getPost } from "../../lib/api";
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
      <Header />
      <main className="flex flex-col items-center mt-8 mb-6">
        {router.isFallback ? (
          <h2>Loading...</h2>
        ) : (
          <article className="h-auto w-10/12 lg:w-1/2">
            <div>
              <figure>
                <img
                  className=""
                  src={postData.featuredImage.node.sourceUrl}
                  alt={postData.title}
                />
              </figure>
              <h1 className=" text-2xl lg:text-3xl mt-4">{postData.title}</h1>
              <p className="font-light mt-2 mb-3">
                {formatDate(postData.date)}
              </p>
            </div>
            <div
              className="font-light lg:text-lg leading-loose mt-6"
              dangerouslySetInnerHTML={{ __html: postData.content }}
            />
          </article>
        )}
        <p className="mt-6">
          <Link href="/novedades">
            <a className="underline">Volver a Novedades</a>
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
    fallback: true,
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
