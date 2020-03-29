import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";

import logoImg from "../../assets/logo.svg";

import "./styles.css";

export default function Registro() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");

  const history = useHistory();
  const idProdutor = localStorage.getItem("id");

  async function handleCadastro(e) {
    e.preventDefault();

    const data = {
      nome,
      descricao,
      valor
    };

    try {
      await api.post("produtos", data, {
        headers: {
          Authorization: idProdutor
        }
      });

      history.push("/banca");
    } catch (error) {
      alert("Erro!");
    }
  }

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
        <form onSubmit={handleCadastro}>
          <input
            placeholder="Nome do Produto"
            value={nome}
            onChange={e => setNome(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={descricao}
            onChange={e => setDescricao(e.target.value)}
          />
          <input
            placeholder="Preço"
            value={valor}
            onChange={e => setValor(e.target.value)}
          />
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
