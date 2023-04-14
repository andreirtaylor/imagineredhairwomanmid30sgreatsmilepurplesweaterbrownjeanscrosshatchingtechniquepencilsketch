export default function Home({ currentImage }) {
  return (
    <div
      className="flex items-center justify-center h-screen w-screen"
      style={{
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: currentImage ? `url(${currentImage})` : "",
      }}
    ></div>
  );
}

export async function getServerSideProps() {
  const dataUris = (await import("../data_uris")).default;
  const randomIndex = Math.floor(Math.random() * dataUris.length);
  const currentImage = dataUris[randomIndex];

  return {
    props: {
      currentImage,
    },
  };
}
