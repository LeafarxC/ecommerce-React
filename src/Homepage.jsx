import React from 'react';
import './homepage.scss';

function Homepage() {
    return (
        <div className='homepage'>
            <div className='menu'>
              <div className='menu-item'>
                <div className='content'>
                  <h1 className='title'> Sapatilhas </h1>
                  <span className='sub-title'> Comprar Agora</span>
                </div>
              </div>
              <div className='menu-item'>
                <div className='content'>
                  <h1 className='title'> Camisolas </h1>
                  <span className='sub-title'> Comprar Agora</span>
                </div>
              </div>
              <div className='menu-item'>
                <div className='content'>
                  <h1 className='title'> Hoodies </h1>
                  <span className='sub-title'> Comprar Agora</span>
                </div>
              </div>
              <div className='menu-item'>
                <div className='content'>
                  <h1 className='title'> Homem </h1>
                  <span className='sub-title'> Comprar Agora</span>
                </div>
              </div>
              <div className='menu-item'>
                <div className='content'>
                  <h1 className='title'> Mulher </h1>
                  <span className='sub-title'> Comprar Agora</span>
                </div>
              </div>
            </div>  
        </div>
    )
}

export default Homepage

