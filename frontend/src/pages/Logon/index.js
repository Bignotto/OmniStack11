import React from "react";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import herosImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";

import "./styles.css";

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Produtores Unidos!" />
        <form>
          <h1>Entrar</h1>
          <input placeholder="Sua ID" />
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
