import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

import "./styles.css";

export default function Registro() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Produtores Unidos!" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e divulgue seus produtos!
          </p>
          <Link to="/" className="text-link">
            <FiArrowLeft size="16" color="#E02041" />
            Voltar
          </Link>
        </section>
        <form>
          <input placeholder="Seu nome" />
          <input placeholder="E-Mail" type="email" />
          <input placeholder="Telefone" />

          <div className="input-group">
            <input placeholder="Cidade" />
            <input placeholder="UF" style={{ width: 80 }} />
          </div>
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
