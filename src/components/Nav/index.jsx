import React from 'react';
import { Container, Menu } from '../Nav/styles';
import { LuHouse, LuCarFront, LuUsers, LuNewspaper } from "react-icons/lu";
import { Button } from '@/components/ui/button';
import {  } from "@/components/ui/sidebar";

const Nav = () => {
  return (
    <Container>
      <Menu>

          

          <ul>
            <li><span><LuHouse />Início</span></li>
            <li><span><LuCarFront />Estoque</span></li>
            <li><span><LuUsers />Clientes</span></li>
            <li><span><LuNewspaper />Contratos</span></li>
            <li><Button>Oi</Button></li>
          </ul>
      </Menu>
    </Container>
  )
}

export default Nav;