import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <img src="https://fontmeme.com/images/Pokemon-Logo.jpg" alt="pokemon" />
      <button
        onClick={() => {
          navigate("/Dex");
        }}
      >
        포켓몬 도감 시작하기
      </button>
    </div>
  );
};

export default Home;
