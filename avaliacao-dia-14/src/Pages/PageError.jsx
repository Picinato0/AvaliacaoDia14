import React from 'react';
import './pagerror.css';
import pageNotFound from '../public/page-not-found.svg';

function PageError(){
    return(
        <section>
            <div clasName="ErrorContainer">
                <div className="ImgError">
                    <img src={pageNotFound} alt="error" width="400px" />
                </div>
                <div class="wrapper">
                    <h1>404 Página não encontrada</h1>
                    <p class="message">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id sit inventore eveniet cumque alias.</p>
                </div>
            </div>
        </section>
    );
}
export default PageError;