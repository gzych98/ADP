import Carousel2 from "@/components/Carousel2/carousel";
import NavBar from "@/components/Navbar/navbar";

const imagePaths = ['background1.png', 'background5.jpg', 'background6.jpg'];



export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="main">
        {/* <h1>h1 - Akademia Debat Profilaktycznych</h1>
        <h2>h2 - Taki fajny projekt</h2>
        <p>p - Lorem ipsum</p> */}
        <div className="section hero">
          <Carousel2 images={imagePaths} />;
        </div>
        <div className="section">
          <div className="table">
            <div className="table__column">
              <h1>Nasza misja</h1>
              <p>W obliczu wyzwań współczesnego świata, takich jak uzależnienia, kryzys ekologiczny czy społeczne nierówności, Akademia Debat Profilaktycznych stawia sobie za cel promowanie świadomości i aktywnego podejścia do tych problemów. Wierzymy, że debata oksfordzka, jako forma dialogu oparta na szacunku i merytorycznej wymianie argumentów, może być potężnym narzędziem profilaktyki społecznej.</p>
              <button>Dowiedz się więcej</button>
            </div>
            <div className="table__column">
              <img src="background1.png"></img>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
