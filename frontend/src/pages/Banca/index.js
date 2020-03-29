import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiPower, FiTrash2 } from "react-icons/fi";

import api from "../../services/api";

import logoImg from "../../assets/logo.svg";

import "./styles.css";

export default function Banca() {
  const [produtos, setProdutos] = useState([]);

  const nomeProdutor = localStorage.getItem("nome");
  const idProdutor = localStorage.getItem("id");

  useEffect(() => {
    api
      .get("banca", {
        headers: {
          Authorization: idProdutor
        }
      })
      .then(response => {
        setProdutos(response.data);
      });
  }, [idProdutor]);

  async function handelDelete(id) {
    try {
      await api.delete(`produtos/${id}`, {
        headers: {
          Authorization: idProdutor
        }
      });
      setProdutos(produtos.filter(produto => produto.id !== id));
    } catch (error) {
      alert("Deu erro. Tente novamente!");
    }
  }

  return (
    <div className="banca-container">
      <header>
        <img src={logoImg} alt="Produtores Unidos!" />
        <span>Bem vindo {nomeProdutor}</span>
        <Link className="button" to="/produto/novo">
          Novo produto
        </Link>
        <button type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Produtos cadastrados</h1>

      <ul>
        {produtos.map(produto => (
          <li key={produto.id}>
            <strong>Produto:</strong>
            <p>{produto.nome}</p>
            <strong>Descrição:</strong>
            <p>{produto.descricao}</p>
            <strong>Preço:</strong>
            <p>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(produto.valor)}
            </p>
            <button type="button" onClick={() => handelDelete(produto.id)}>
              <FiTrash2 size={20} color="#A8A8B3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
