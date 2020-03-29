import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import api from "../../services/api";

import herosImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";

import "./styles.css";

export default function Logon() {
  const [id, setId] = useState("");
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("sessao", { id });

      localStorage.setItem("id", id);
      localStorage.setItem("nome", response.data.nome);

      history.push("/banca");
    } catch (error) {
      alert("ID inexistente!");
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Produtores Unidos!" />

        <form onSubmit={handleLogin}>
          <h1>Entrar</h1>

          <input
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />

          <button className="button" type="submit">
            Entrar
          </button>

          <Link to="/registro" className="text-link">
            <FiLogIn size="16" color="#E02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={herosImg} alt="Heroes" className="" />
    </div>
  );
}
