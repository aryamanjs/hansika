import { GoogleAnalytics } from "@next/third-parties/google";

const config = {
  // src: "https://www.googletagmanager.com/gtag/js?id=G-F0VE77G2Q9",
  id: "G-F0VE77G2Q9",
};

export default function GTag() {
  return (
    <>
      <GoogleAnalytics gaId={config.id} />
    </>
  );
}
