import Collage from "../Components/Collage";
import Hero from "../Components/Hero";
import Header from "../Components/Header"


const Welcome = () => {
  return (
    <>
    <header>
   <Header/>
    </header>

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
