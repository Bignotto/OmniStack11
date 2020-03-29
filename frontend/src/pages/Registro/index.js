import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";

import logoImg from "../../assets/logo.svg";

import "./styles.css";

export default function Registro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");

  const history = useHistory();

  async function handleRegistro(e) {
    e.preventDefault();

    const data = {
      nome,
      email,
      telefone,
      endereco,
      cidade,
      uf
    };

    try {
      const response = await api.post("produtor", data);
      alert(`Seu ID de acesso ${response.data.id}`);
      history.push("/");
    } catch (error) {
      alert("Deu erro, tente de novo!");
    }
  }

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
            <FiArrowLeft size={16} color="#E02041" />
            Voltar
          </Link>
        </section>
        <form onSubmit={handleRegistro}>
          <input
            placeholder="Seu nome"
            value={nome}
            onChange={e => setNome(e.target.value)}
          />
          <input
            placeholder="E-Mail"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            placeholder="Telefone"
            value={telefone}
            onChange={e => setTelefone(e.target.value)}
          />
          <input
            placeholder="Endereço"
            value={endereco}
            onChange={e => setEndereco(e.target.value)}
          />

          <div className="input-group">
            <input
              placeholder="Cidade"
              value={cidade}
              onChange={e => setCidade(e.target.value)}
            />
            <input
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </div>
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
