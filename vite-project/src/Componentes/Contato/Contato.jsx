import { useState } from "react";
import "./Contato.css";
import PropTypes from "prop-types"; // Importe o PropTypes

export const Contato = ({ categoria }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      alert("Comentário Enviado");
      setNome("");
      setEmail("");
      setMensagem("");
    } catch (error) {
      console.error("Erro ao enviar comentário", error);
    }
  };

  return (
    <div id={categoria}>
      <div id="contato">
        <h3>Você pode deixar um comentário!</h3>
        <p>
          Preencha seu nome, e-mail e o comentário que deseja deixar para mim,
          responderei assim que possível. <br />
          Agradeço seu contato!
        </p>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Digite seu e-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="exemplo@Gmail.com"
            />
          </div>
          <div>
            <label htmlFor="mensagem">Comentário</label>
            <input
              type="text"
              id="mensagem"
              name="mensagem"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              required
            />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};
Contato.propTypes = {
  categoria: PropTypes.string.isRequired,
};