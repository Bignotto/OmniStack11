import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

import "./styles.css";

export default function Registro() {
  return (
    <div className="novo-produto-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Produtores Unidos!" />
          <h1>Novo Produto</h1>
          <p>Descreva seu produto com todos os detalhes.</p>
          <Link to="/banca" className="text-link">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar
          </Link>
        </section>
        <form>
          <input placeholder="Nome do Produto" />
          <textarea placeholder="Descrição" type="email" />
          <input placeholder="Preço" />
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
