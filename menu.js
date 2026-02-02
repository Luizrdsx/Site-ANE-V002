document.addEventListener("DOMContentLoaded", function() {
    // 1. Definição do HTML do Header
    const headerHTML = `
    <header>
        <div class="brand">
            <img src="./img/logo-ane.png" alt="Logo ANE" class="logo"
                style="width: 150px; height: 100px; object-fit: contain;">
        </div>
        <nav id="main-nav">
            <a href="index.html">Início</a>
            <a href="nucleos.html">Núcleos</a>
            <a href="quem-somos.html">Quem Somos</a>
            <a href="galeria.html">Galeria</a>
            <a href="contribua.html">Contribua</a>
            <a href="contato.html">Contato</a>
            <a href="acesso-interno.html">Reservas</a>
            <a href="matricule-se.html" class="btn-matricula">Matricule-se</a>
        </nav>

        <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
            <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g class="parallax">
                <use xlink:href="#gentle-wave" x="48" y="0" />
                <use xlink:href="#gentle-wave" x="48" y="3" />
                <use xlink:href="#gentle-wave" x="48" y="5" />
            </g>
        </svg>
    </header>
    `;

    // 2. Definição do CSS do Header
    const headerCSS = `
    <style>
        header {
            background: #ffb700;
            color: #0a3a70;
            padding: 1rem 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 2rem;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            position: sticky;
            top: 0;
            z-index: 1000;
            position: relative;
        }
        .waves {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            height: 80px;
            margin-top: -1px;
            transform: scaleY(-1);
            z-index: 101;
        }
        .parallax>use {
            animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite;
        }
        .parallax>use:nth-child(1) { animation-delay: -2s; animation-duration: 7s; fill: #0083c3; }
        .parallax>use:nth-child(2) { animation-delay: -3s; animation-duration: 10s; fill: #f24c7c; }
        .parallax>use:nth-child(3) { animation-delay: -4s; animation-duration: 13s; fill: #ffb700; }
        @keyframes move-forever {
            0% { transform: translate3d(-90px, 0, 0); }
            100% { transform: translate3d(85px, 0, 0); }
        }
        .brand { display: flex; align-items: center; gap: 1rem; }
        .logo { width: 150px; height: 100px; object-fit: contain; }
        nav { display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; align-items: center; }
        nav a {
            color: #0a3a70; 
            text-decoration: none;
            padding: 0.5rem 0.8rem;
            position: relative;
            transition: color 0.3s;
            font-size: 0.9rem;
            font-weight: 600;
        }
        
        /* ESTILO DO SUBINHADO ATIVO */
        nav a.active::after {
            width: 100% !important;
        }

        nav a:not(.btn-matricula)::after {
            content: ''; position: absolute; width: 0; height: 2px; bottom: 0; left: 0;
            background-color: #0a3a70; transition: width 0.3s ease;
        }
        nav a:not(.btn-matricula):hover::after { width: 100%; }

        /* Cores específicas para o hover e para o estado ativo */
        nav a:nth-child(1):hover::after, nav a:nth-child(1).active::after { background-color: #d90429; }
        nav a:nth-child(2):hover::after, nav a:nth-child(2).active::after { background-color: #3a86ff; }
        nav a:nth-child(3):hover::after, nav a:nth-child(3).active::after { background-color: #8338ec; }
        nav a:nth-child(4):hover::after, nav a:nth-child(4).active::after { background-color: #ff006e; }
        nav a:nth-child(5):hover::after, nav a:nth-child(5).active::after { background-color: #fb5607; }
        nav a:nth-child(6):hover::after, nav a:nth-child(6).active::after { background-color: #007f5f; }
        nav a:nth-child(7):hover::after, nav a:nth-child(7).active::after { background-color: #000000; }

        .btn-matricula {
            background: #0a3a70; color: white !important; padding: 0.5rem 1.2rem;
            border-radius: 4px; font-weight: bold; transition: all 0.3s;
        }
        .btn-matricula:hover { background: #1a5a9f; transform: translateY(-2px); box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); }
        @media (max-width: 768px) {
            header { flex-direction: column; gap: 1rem; }
            nav { width: 100%; }
        }
    </style>
    `;

    // Inserção no documento
    document.head.insertAdjacentHTML('beforeend', headerCSS);
    // 3. Lógica para marcar o link ativo
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});
















// MENU MOBILE - LOGO CENTRALIZADO + EFEITO AERO + FIX HAMBURGER
document.addEventListener("DOMContentLoaded", function() {
    const headerHTML = `
    <header>
        <div class="header-container">
            <div class="brand-container">
                <img src="./img/logo-ane.png" alt="Logo ANE" class="logo">
            </div>
            
            <button class="mobile-menu-icon" aria-label="Abrir menu">
                <div class="hamburger-box">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>

            <nav id="main-nav">
                <div class="aero-blur-bg"></div>
                
                <div class="nav-links-wrapper">
                    <div class="menu-header-aero">
                        <small>NAVEGAÇÃO</small>
                    </div>
                    <a href="index.html" style="--d:1">Início</a>
                    <a href="nucleos.html" style="--d:2">Núcleos</a>
                    <a href="quem-somos.html" style="--d:3">Quem Somos</a>
                    <a href="galeria.html" style="--d:4">Galeria</a>
                    <a href="contribua.html" style="--d:5">Contribua</a>
                    <a href="contato.html" style="--d:6">Contato</a>
                    <a href="acesso-interno.html" style="--d:7">Reservas</a>
                    <a href="matricule-se.html" class="btn-matricula-final" style="--d:8">Matricule-se</a>
                </div>
            </nav>
        </div>

        <svg class="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
            <defs>
                <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g class="parallax">
                <use href="#gentle-wave" x="48" y="0" fill="#0083c3" />
                <use href="#gentle-wave" x="48" y="3" fill="#f24c7c" />
                <use href="#gentle-wave" x="48" y="5" fill="#ffb700" />
            </g>
        </svg>
    </header>
    `;

    const headerCSS = `
    <style>
        header { 
            background: #ffb700; 
            position: sticky; 
            top: 0; 
            z-index: 1000; 
            min-height: 110px; /* Aumentado de 90px para 110px para acomodar o logo maior */
        }
        
        .header-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0.5rem 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            box-sizing: border-box;
        }

        .brand-container {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
        }

        /* AJUSTE DO LOGO (DESKTOP) */
        .logo { 
            width: 180px;  /* Aumentado de 130px para 180px // <--- AQUI */
            height: 100px; /* Aumentado de 80px para 100px // <--- AQUI */
            object-fit: contain; 
            display: block;
            transition: 0.3s;
        }

        .mobile-menu-icon {
            display: none;
            background: #0a3a70;
            border: none;
            padding: 0;
            width: 42px;
            height: 42px;
            border-radius: 8px;
            cursor: pointer;
            z-index: 1100;
            position: absolute;
            right: -90px; 
            top: 40%;
            transform: translateY(-50%);
            transition: 0.3s;
            flex-shrink: 0;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .hamburger-box { width: 22px; height: 18px; position: relative; display: block; }
        .hamburger-box span { position: absolute; width: 100%; height: 3px; background: #fff; left: 0; transition: 0.3s; border-radius: 2px; }
        .hamburger-box span:nth-child(1) { top: 0; }
        .hamburger-box span:nth-child(2) { top: 7.5px; }
        .hamburger-box span:nth-child(3) { top: 15px; }

        .mobile-menu-icon.open span:nth-child(1) { transform: rotate(45deg); top: 7.5px; }
        .mobile-menu-icon.open span:nth-child(2) { opacity: 0; }
        .mobile-menu-icon.open span:nth-child(3) { transform: rotate(-45deg); top: 7.5px; }

        .waves { position: absolute; top: 100%; left: 0; width: 100%; height: 40px; transform: scaleY(-1); z-index: 101; pointer-events: none; }
        .parallax>use { animation: move-forever 20s cubic-bezier(.55, .5, .45, .5) infinite; }
        @keyframes move-forever { 0% { transform: translate3d(-90px, 0, 0); } 100% { transform: translate3d(85px, 0, 0); } }

        @media (max-width: 1024px) {
            .mobile-menu-icon { display: flex; }
            
            /* AJUSTE DO LOGO (MOBILE) */
            .logo { 
                width: 150px; /* Aumentado de 110px para 150px // <--- AQUI */
            }

            #main-nav {
                position: fixed;
                top: 0;
                right: -100%;
                width: 300px;
                height: 100vh;
                z-index: 1050;
                transition: 0.6s cubic-bezier(0.8, 0, 0.2, 1);
                display: flex;
                flex-direction: column;
            }

            #main-nav.open { right: 0; }

            .aero-blur-bg {
                position: absolute;
                top: 0; left: 0; width: 100%; height: 100%;
                background: rgba(255, 255, 255, 0.45);
                backdrop-filter: blur(25px) saturate(160%);
                -webkit-backdrop-filter: blur(25px) saturate(160%);
                border-left: 1px solid rgba(255, 255, 255, 0.3);
                z-index: -1;
                box-shadow: -10px 0 30px rgba(0,0,0,0.1);
            }

            .nav-links-wrapper { padding: 60px 20px; display: flex; flex-direction: column; align-items: stretch; }
            .menu-header-aero { margin-bottom: 20px; padding: 0 10px 10px 10px; border-bottom: 1px solid rgba(10, 58, 112, 0.1); }
            .menu-header-aero small { color: #0a3a70; font-weight: 800; letter-spacing: 1px; opacity: 0.6; }

            #main-nav a {
                display: block;
                padding: 15px 15px;
                color: #0a3a70;
                text-decoration: none;
                font-weight: 700;
                font-size: 1.15rem;
                border-radius: 10px;
                margin-bottom: 4px;
                transform: translateX(20px);
                opacity: 0;
                transition: all 0.4s ease;
                text-align: left;
            }

            #main-nav a.active-page {
                background: rgba(255, 183, 0, 0.25);
                color: #0a3a70;
                border-left: 5px solid #ffb700;
                backdrop-filter: blur(5px);
                padding-left: 20px;
            }

            #main-nav.open a { transform: translateX(0); opacity: 1; transition-delay: calc(0.08s * var(--d)); }

            .btn-matricula-final {
                background: #0a3a70 !important;
                color: #fff !important;
                text-align: center !important;
                margin-top: 25px;
                border-radius: 12px !important;
                padding: 18px !important;
                border: none !important;
                box-shadow: 0 5px 15px rgba(10, 58, 112, 0.2);
            }
        }

        @media (min-width: 1025px) {
            .header-container { justify-content: space-between; }
            .brand-container { width: auto; justify-content: flex-start; }
            .mobile-menu-icon { display: none; }
            nav { display: flex; }
            .nav-links-wrapper { display: flex; gap: 0.5rem; padding: 0; }
            nav a { color: #0a3a70; text-decoration: none; font-weight: 700; font-size: 0.85rem; padding: 0.5rem 0.8rem; border-radius: 4px; }
            nav a.active-page { background: rgba(10, 58, 112, 0.1); }
            .btn-matricula-final { background: #0a3a70; color: #fff !important; }
            .aero-blur-bg, .menu-header-aero { display: none; }
        }
    </style>
    `;

    document.head.insertAdjacentHTML('beforeend', headerCSS);
    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    const menuIcon = document.querySelector('.mobile-menu-icon');
    const nav = document.querySelector('#main-nav');
    const navLinks = document.querySelectorAll('#main-nav a');

    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active-page');
        }
    });

    function toggleMenu() {
        menuIcon.classList.toggle('open');
        nav.classList.toggle('open');
        document.body.style.overflow = nav.classList.contains('open') ? 'hidden' : 'auto';
    }

    menuIcon.addEventListener('click', toggleMenu);
});