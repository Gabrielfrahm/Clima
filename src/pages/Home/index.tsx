import React from 'react';
import './style.css';
import { FiLogIn } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'


const Home = () => {
    return (
        <>
            <div id='page-home'>
                <div className='content'>
                    <header>
                        <img src={Logo} alt="CLimax" width="100" />
                    </header>
                    <main>
                        <h1>Bem vindo ao seu clima</h1>
                        <p>Pesquise sobre o clima em sua cidade.</p>

                        <Link to='/Search-for' >
                            <span>
                                <FiLogIn />
                            </span>
                            <strong>Procurar</strong>
                        </Link>
                    </main>
                </div>

            </div>
        </>
    );
}

export default Home;