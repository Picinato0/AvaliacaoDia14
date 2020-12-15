import React from  'react';
import Contatos from './Contatos';
import Redes from './Redes';
import './footer.css';

function Footer(){
    return(
        <footer className="containerFooter">
            <div className="Footer-content">
                <Contatos />
                <Redes />
            </div>
            <div className="copy">
                <p id="copyRight">© Copyright 2020 Have Fun. All rights reserved..</p>
            </div>
        </footer>
    );
}

export default Footer;