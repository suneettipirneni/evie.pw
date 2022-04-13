import Head from "next/head";

interface IOpenGraph {
  title?: string;
  url: string;
  image?: string;
  description?: string;
}

export default function OpenGraph({
  title,
  url,
  image,
  description
}: IOpenGraph) {
  return (
    <Head>
      <meta property="og:type" content="website" />
      {title && <meta property="og:title" content={title} />}
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}
      {description && <meta property="og:description" content={description} />}
    </Head>
  );
}
