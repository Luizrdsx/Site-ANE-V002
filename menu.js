document.addEventListener("DOMContentLoaded", function() {
    const headerHTML = `
    <header class="main-header">
        <div class="header-container">
            <div class="brand-area">
                <img src="./img/logo-ane.png" alt="Logo ANE" class="logo">
            </div>
            
            <nav id="main-nav">
                <a href="index.html">Início</a>
                <a href="nucleos.html">Núcleos</a>
                <a href="quem-somos.html">Quem Somos</a>
                <a href="galeria.html">Galeria</a>
                <a href="contribua.html">Contribua</a>
                <a href="contato.html">Contato</a>
                <a href="acesso-interno.html">Reservas</a>
            </nav>

            <div class="action-area">
                <a href="matricule-se.html" class="btn-matricula">Matricule-se</a>
            </div>
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
            max-width: 1400px; /* Aumentado para dar mais respiro nas pontas */
            margin: 0 auto;
            width: 100%;
            padding: 0 30px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        /* Áreas Laterais com peso igual para forçar o centro do Nav */
        .brand-area, .action-area {
            flex: 1;
            display: flex;
            align-items: center;
        }

        .action-area {
            justify-content: flex-end;
        }

        .logo { width: 150px; height: 90px; object-fit: contain; }

        /* --- NAVEGAÇÃO CENTRALIZADA --- */
        nav { 
            display: flex; 
            gap: 0.2rem; 
            align-items: center;
            justify-content: center;
            flex: 2; /* Ganha mais espaço para garantir a centralização */
        }

        nav a {
            color: #0a3a70;
            text-decoration: none !important;
            padding: 0.5rem 0.8rem;
            position: relative;
            font-size: 1.02rem;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            height: 40px;
            white-space: nowrap;
        }

        /* Linha 1px Impecável */
        nav a:not(.btn-matricula)::after {
            content: '';
            position: absolute;
            bottom: 6px;
            left: 50%;
            transform: translateX(-50%);
            width: 0;
            height: 1px !important;
            transition: width 0.3s ease;
        }

        nav a:hover::after, 
        nav a.active::after { 
            width: 70% !important; 
        }

        /* Cores das Linhas */
        nav a:nth-child(1)::after { background: #d90429 !important; }
        nav a:nth-child(2)::after { background: #3a86ff !important; }
        nav a:nth-child(3)::after { background: #8338ec !important; }
        nav a:nth-child(4)::after { background: #ff006e !important; }
        nav a:nth-child(5)::after { background: #fb5607 !important; }
        nav a:nth-child(6)::after { background: #007f5f !important; }
        nav a:nth-child(7)::after { background: #000000 !important; }

        .btn-matricula {
            background: #0a3a70;
            color: white !important;
            padding: 0.6rem 1.2rem;
            border-radius: 6px;
            font-weight: 800;
            transition: 0.3s;
            text-decoration: none;
            font-size: 0.9rem;
        }

        .btn-matricula:hover {
            background: #0d4a8e;
            transform: translateY(-2px);
        }

        /* Ondas Dinâmicas */
        .waves {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            height: 80px; 
            transform: scaleY(-1);
            z-index: 101;
            pointer-events: none;
            margin-top: -2px;
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

    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});