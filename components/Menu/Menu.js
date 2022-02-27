import React from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";


export default function Menu({menuColor}) {
 

  return (
    <header
    className="menu"
    style={{ backgroundColor: menuColor || "transparent" }}
  >

    <div className="barra">
      <ul>
        <li>
          <Link href="/">
                <a>
                    Inicio  
                </a>
          </Link>
        </li>
        <li>
        <Link href="/crear">
                <a>
                 Crea tu menu
                </a>
          </Link>
        </li>
      </ul>
      <input type="text" placeholder="Busca tu menu..." className="buscador"/>

      </div>
    
  </header>
  )
}


