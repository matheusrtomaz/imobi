import React from 'react';
import { Container, Menu } from '../Nav/styles';
import { LuHouse, LuCarFront, LuUsers, LuNewspaper } from "react-icons/lu";

const Nav = () => {
  return (
    <Container>
      <Menu>
          <ul>
            <li><span><LuHouse />Início</span></li>
            <li><span><LuCarFront />Estoque</span></li>
            <li><span><LuUsers />Clientes</span></li>
            <li><span><LuNewspaper />Contratos</span></li>
          </ul>
      </Menu>
    </Container>
  )
}

export default Nav;