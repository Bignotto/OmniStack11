import React from "react";
import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";

import "./styles.css";

export default function Banca() {
  return (
    <div className="banca-container">
      <header>
        <img src={logoImg} alt="Produtores Unidos!" />
        <span>Bem vindo Thiago</span>
        <Link className="button" to="/banca/novo">
          Novo produto
        </Link>
        <button type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>
      <h1>Produtos cadastrados</h1>
      <ul>
        <li>
          <strong>Produto:</strong>
          <p>Nome do produto</p>
          <strong>Descrição:</strong>
          <p>Descrição teste</p>
          <strong>Preço:</strong>
          <p>R$ 199,90</p>
          <button type="button">
            <FiTrash2 size={20} color="#A8A8B3" />
          </button>
        </li>
        <li>
          <strong>Produto:</strong>
          <p>Nome do produto</p>
          <strong>Descrição:</strong>
          <p>Descrição teste</p>
          <strong>Preço:</strong>
          <p>R$ 199,90</p>
          <button type="button">
            <FiTrash2 size={20} color="#A8A8B3" />
          </button>
        </li>
        <li>
          <strong>Produto:</strong>
          <p>Nome do produto</p>
          <strong>Descrição:</strong>
          <p>Descrição teste</p>
          <strong>Preço:</strong>
          <p>R$ 199,90</p>
          <button type="button">
            <FiTrash2 size={20} color="#A8A8B3" />
          </button>
        </li>
        <li>
          <strong>Produto:</strong>
          <p>Nome do produto</p>
          <strong>Descrição:</strong>
          <p>Descrição teste</p>
          <strong>Preço:</strong>
          <p>R$ 199,90</p>
          <button type="button">
            <FiTrash2 size={20} color="#A8A8B3" />
          </button>
        </li>
      </ul>
    </div>
  );
}
