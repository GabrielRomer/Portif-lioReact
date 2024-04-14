import IconeGithub from "./img/icons8-github.gif";
import IconeFb from "./img/icons8-facebook.gif";
import Iconeinstagram from "./img/icons8-instagram.gif";
import IconeLinkedin from "./img/icons8-linkedin.gif";
import imagemdev from "./img/eu.jpg";


function App() {
  return (
    <><main>
      <section className="home">
        <h1>
          Olá, meu nome é Gabriel Römer! <h1></h1>Seja Bem-vindo ao meu
          portifólio
        </h1>
        <p>O sucesso é a soma de pequenos esforços Repetidos diariamente!</p>
        <p className="eu">Acesse minhas redes </p>
        <div id="rede-sociais">
          <a href="https://github.com/GabrielRomer">
            <img src={IconeGithub} alt="" srcSet="" />
          </a>
          <a href="https://www.facebook.com/debendersky">
            <img src={IconeFb} alt="" srcSet="" />
          </a>
          <a href="https://www.instagram.com/benderskygabriel/">
            <img src={Iconeinstagram} alt="" srcSet="" />
          </a>
          <a href="https://www.linkedin.com/in/gabriel-r%C3%B6mer-4b374922b/">
            <img src={IconeLinkedin} alt="" srcSet="" />
          </a>
        </div>

        <a href="#resumo">
          <button>Mais Sobre mim</button>
        </a>
      </section>
      <section>
        <img id="imagemDev" src={imagemdev} />

      </section>
    </main> </>
  );
  
}

export default App;
