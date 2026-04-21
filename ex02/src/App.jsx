import React from "react";
import Card from "./Cards/Card.jsx";
import "./css/App.css";
function App() {
    return (
        <>
         <div className="titulo">
             <h2>Acesso à informação</h2>
            <p>Veja dados de transparência e governança.</p>
         </div>
         <div>
             <Card />
         </div>
         </>
          );
}

export default App;