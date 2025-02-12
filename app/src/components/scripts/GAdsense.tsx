import Script from "next/script";

const config = {
  src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5308266585816918",
};

export default function GAdsense() {
  if (process.env.NODE_ENV !== "production") {
    return null;
  }

  return <Script async crossOrigin="anonymous" src={config.src} />;
}