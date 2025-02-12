import Script from "next/script";

const config = {
  id: 'valentine-google-adsense',
  src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5308266585816918",
};

export default function GAdsense() {
  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  return (
    <>
      <meta name="google-adsense-account" content="ca-pub-5308266585816918" />
      <Script
        id={config.id}
        async
        crossOrigin="anonymous"
        src={config.src}
        strategy="afterInteractive"
      />
    </>
  );
}
