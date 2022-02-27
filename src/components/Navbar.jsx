import React, { useState } from 'react';
import styled from 'styled-components';
import MenuHamburguesa from './MenuHamburguesa';

const Navbar = () => {
  const [click, setclick] = useState(false);

  const handleClick = () => {
    setclick(!click);
  };
  return (
    <NavContainer>
      <h2>
        Navbar <span>Responsive</span>
      </h2>
      <div className={`links ${click ? 'active' : ''}`}>
        <a onClick={handleClick} href="#">
          Inicio
        </a>
        <a onClick={handleClick} href="#">
          Productos
        </a>
        <a onClick={handleClick} href="#">
          Galeria
        </a>
        <a onClick={handleClick} href="#">
          Sobre Nosotros
        </a>
        <a onClick={handleClick} href="#">
          Contacto
        </a>
      </div>
      <div className="KK">
        <MenuHamburguesa click={click} handleClick={handleClick} />
      </div>
      <Bg className={`${click ? 'active' : ''}`}></Bg>
    </NavContainer>
  );
};

export default Navbar;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.4rem;
  background-color: #333;
  width: 100vw;

  h2 {
    color: #fff;
    font-weight: 400;
    span {
      font-weight: bold;
    }
  }

  a {
    color: #fff;
    text-decoration: none;
    margin-left: 1rem;
  }

  @media (max-width: 768px) {
    .links {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      top: -700px;
      left: -800px;
      transition: transform 0.8s ease;
    }

    .links.active {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transform: translate(800px, 900px);

      a {
        margin-top: 20px;
        font-size: 1.5rem;
        color: #fff;
      }
    }
  }

  .KK {
    @media (min-width: 768px) {
      display: none;
    }
  }
`;

const Bg = styled.div`
  @media (max-width: 768px) {
    position: absolute;
    background-color: #444;
    top: -1000px;
    left: -1000px;
    width: 100vw;
    height: 100vh;
    transition: 0.5s ease-in;
    z-index: -1;
    &.active {
      border-radius: 0 0 80% 0;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
    }
  }
`;
