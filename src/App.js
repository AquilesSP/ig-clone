import React from 'react'
import './Componentes/Estilos/Global.css'
import './Componentes/Estilos/Estructura.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { RoutesIgClone } from './Componentes/Navigator/Routes'

export default function App() {

  return (
    <Router>
      <Routes>
        {RoutesIgClone.map((ruta,r)=>
          <Route key={r} path={ruta.path} element={<ruta.main/>}/>
        )}
      </Routes>
    </Router>
)

  // return <Layout/>
}
