document.addEventListener("DOMContentLoaded", function() {
    const headerHTML = `
    <header class="main-header">
        <div class="header-container">
            <div class="brand-area">
                <img src="./img/logo-ane.png" alt="Logo ANE" class="logo">
            </div>
            
            <nav id="main-nav" class="desktop-only">
                <a href="index.html">Início</a>
                <a href="nucleos.html">Núcleos</a>
                <a href="quem-somos.html">Quem Somos</a>
                <a href="galeria.html">Galeria</a>
                <a href="contribua.html">Contribua</a>
                <a href="contato.html">Contato</a>
                <a href="acesso-interno.html">Reservas</a>
            </nav>

            <div class="action-area desktop-only">
                <a href="matricule-se.html" class="btn-matricula">Matricule-se</a>
            </div>

            <button class="mobile-toggle" id="openMobileMenu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </button>
        </div>

        <div class="mobile-overlay" id="overlay"></div>
        <nav class="mobile-nav" id="mobileMenu">
            <div class="mobile-nav-header">
                <img src="./img/logo-ane.png" alt="Logo" class="logo-mobile">
                <button class="close-btn" id="closeMobileMenu">&times;</button>
            </div>
            <div class="mobile-links">
                <a href="index.html">Início</a>
                <a href="nucleos.html">Núcleos</a>
                <a href="quem-somos.html">Quem Somos</a>
                <a href="galeria.html">Galeria</a>
                <a href="contribua.html">Contribua</a>
                <a href="contato.html">Contato</a>
                <a href="acesso-interno.html">Reservas</a>
                <a href="matricule-se.html" class="btn-matricula-mobile">Matricule-se</a>
            </div>
        </nav>

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
        .main-header {
            background: #ffb700;
            position: sticky;
            top: 0;
            z-index: 1000;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            height: 110px;
            display: flex;
            align-items: center;
        }

        .header-container {
            max-width: 1400px; margin: 0 auto; width: 100%; padding: 0 30px;
            display: flex; align-items: center; justify-content: space-between;
        }

        .brand-area, .action-area { flex: 1; display: flex; align-items: center; }
        .action-area { justify-content: flex-end; }
        .logo { width: 150px; height: 90px; object-fit: contain; }
        .logo-mobile { width: 120px; height: auto; }

        /* --- NAV DESKTOP --- */
        #main-nav { display: flex; gap: 0.2rem; align-items: center; justify-content: center; flex: 2; }
        #main-nav a {
            color: #0a3a70; text-decoration: none !important; padding: 0 0.8rem;
            position: relative; font-size: 1.02rem; font-weight: 600;
            white-space: nowrap; height: 40px; display: inline-flex; align-items: center;
        }
        #main-nav a::after {
            content: ''; position: absolute; bottom: 5px; left: 50%;
            transform: translateX(-50%); width: 0; height: 1px !important; transition: width 0.3s ease;
        }
        #main-nav a:hover::after, #main-nav a.active::after { width: 70% !important; }

        /* --- NAV MOBILE --- */
        .mobile-links a {
            color: #0a3a70; text-decoration: none; font-size: 1.2rem; font-weight: 700;
            padding: 10px 0; position: relative; display: inline-block; width: fit-content;
        }
        .mobile-links a::after {
            content: ''; position: absolute; bottom: 5px; left: 0; width: 0;
            height: 2px !important; transition: width 0.3s ease;
        }
        .mobile-links a.active::after { width: 100% !important; }

        /* --- CORES DAS BARRINHAS --- */
        #main-nav a:nth-child(1)::after, .mobile-links a:nth-child(1)::after { background: #d90429 !important; }
        #main-nav a:nth-child(2)::after, .mobile-links a:nth-child(2)::after { background: #3a86ff !important; }
        #main-nav a:nth-child(3)::after, .mobile-links a:nth-child(3)::after { background: #8338ec !important; }
        #main-nav a:nth-child(4)::after, .mobile-links a:nth-child(4)::after { background: #ff006e !important; }
        #main-nav a:nth-child(5)::after, .mobile-links a:nth-child(5)::after { background: #fb5607 !important; }
        #main-nav a:nth-child(6)::after, .mobile-links a:nth-child(6)::after { background: #007f5f !important; }
        #main-nav a:nth-child(7)::after, .mobile-links a:nth-child(7)::after { background: #000000 !important; }

        .btn-matricula {
            background: #0a3a70; color: white !important; padding: 0.6rem 1.2rem;
            border-radius: 6px; font-weight: 800; transition: 0.3s; text-decoration: none; font-size: 0.9rem;
        }

        /* --- MOBILE ESTRUTURA (EFEITO AERO) --- */
        .mobile-toggle { display: none; flex-direction: column; gap: 6px; background: none; border: none; cursor: pointer; }
        .mobile-toggle .bar { width: 30px; height: 3px; background: #0a3a70; border-radius: 2px; }
        
        .mobile-nav {
            position: fixed; top: 0; right: -100%; width: 280px; height: 100vh;
            /* Cor amarela com transparência + Desfoque Aero */
            background: rgba(255, 209, 94, 0.69); 
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px); 
            z-index: 2000; transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            padding: 40px 30px; box-shadow: -5px 0 15px rgba(0,0,0,0.1);
            border-left: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .mobile-nav.active { right: 0; }
        .mobile-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.3); z-index: 1999; display: none; opacity: 0; transition: 0.3s; }
        .mobile-overlay.active { display: block; opacity: 1; }
        .mobile-links { display: flex; flex-direction: column; gap: 15px; margin-top: 30px; }
        .btn-matricula-mobile { background: #0a3a70; color: white !important; text-align: center; border-radius: 6px; padding: 15px !important; margin-top: 20px; text-decoration: none; font-weight: 800;}
        .close-btn { font-size: 2.5rem; background: none; border: none; color: #0a3a70; cursor: pointer; }
        .mobile-nav-header { display: flex; justify-content: space-between; align-items: center; }

        @media (max-width: 1024px) {
            .desktop-only { display: none !important; }
            .mobile-toggle { display: flex; }
        }

        /* --- ESTILO DAS ONDAS (RESTAURADO) --- */
        .waves {
            position: absolute; top: 100%; left: 0; width: 100%; height: 80px; 
            transform: scaleY(-1); z-index: 101; pointer-events: none; margin-top: -2px;
        }
        .parallax > use {
            animation: move-forever 10s cubic-bezier(.55, .5, .45, .5) infinite;
        }
        .parallax > use:nth-child(1) { animation-duration: 5s; opacity: 0.7; }
        .parallax > use:nth-child(2) { animation-duration: 7s; opacity: 0.5; }
        .parallax > use:nth-child(3) { animation-duration: 9s; }

        @keyframes move-forever {
            0% { transform: translate3d(-90px, 0, 0); }
            100% { transform: translate3d(85px, 0, 0); }
        }
    </style>
    `;

    document.head.insertAdjacentHTML('beforeend', headerCSS);
    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    const btnOpen = document.getElementById('openMobileMenu');
    const btnClose = document.getElementById('closeMobileMenu');
    const menu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('overlay');

    const toggleMenu = () => {
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : 'auto';
    };

    [btnOpen, btnClose, overlay].forEach(el => el && el.addEventListener('click', toggleMenu));

    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll('#main-nav a, .mobile-links a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});