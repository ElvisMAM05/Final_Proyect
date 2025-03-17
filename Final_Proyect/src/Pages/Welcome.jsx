import Collage from "../Components/Collage";
import Hero from "../Components/Hero";

const Welcome = () => {
  return (
    <>
      <main>
        <Hero />

        <div className="collage">
          <Collage />
        </div>
      </main>
    </>
  );
};
export default Welcome;
