// componentes.js - Header e Footer unificados para todas as páginas

function carregarHeader() {
    const headerHTML = `
    <header>
        <div class="brand" style="display: flex; align-items: center; gap: 1rem; margin-left: 150px; margin-top: -10px;">
            <img src="./img/logo-ane.png" alt="Logo ANE" class="logo"
                style="width: 150px; height: 100px; object-fit: contain;">
        </div>
        <nav>
            <a href="index.html">Início</a>
            <a href="nucleos.html">Núcleos</a>
            <a href="quem-somos.html">Quem Somos</a>
            <a href="galeria.html">Galeria</a>
            <a href="contribua.html">Contribua</a>
            <a href="contato.html">Contato</a>
            <a href="acesso-interno.html">Reservas</a>
            <a href="matricule-se.html" class="btn-matricula">Matricule-se</a>
        </nav>
        
        <!-- ONDAS SVG -->
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

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    marcarLinkAtivo();
}

function carregarFooter() {
    const footerHTML = `
    <footer>
        <div class="footer-content">
            <div class="footer-col">
                <div class="footer-brand">
                    <img src="assets/logo.png" alt="ANE Logo">
                    <div>
                        <h4>ANE 2026</h4>
                        <p>Arte nas Escolas</p>
                    </div>
                </div>
                <p>Projeto sociocultural que democratiza o acesso à música e às artes, transformando vidas e comunidades.</p>
            </div>
            <div class="footer-col">
                <h4>Navegação</h4>
                <ul class="footer-links">
                    <li><a href="index.html">Início</a></li>
                    <li><a href="nucleos.html">Núcleos</a></li>
                    <li><a href="quem-somos.html">Quem Somos</a></li>
                    <li><a href="galeria.html">Galeria</a></li>
                    <li><a href="contribua.html">Contribua</a></li>
                    <li><a href="contato.html">Contato</a></li>
                    <li><a href="acesso-interno.html">Reservas</a></li>
                    <li><a href="matricule-se.html">Matricule-se</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Contato</h4>
                <ul class="footer-links">
                    <li>Email: contato@ane2026.com.br</li>
                    <li>Telefone: (48) 99146-8442</li>
                    <li>Florianópolis/SC</li>
                    <li>São José/SC • Chapecó/SC • Irecê/BA</li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Redes Sociais</h4>
                <p>Siga nosso Instagram:</p>
                <a href="https://instagram.com/artenasescolas" target="_blank" style="color:#fff; text-decoration:none;">@artenasescolas</a>
                <div class="socials">
                    <a href="#" aria-label="Instagram">IG</a>
                    <a href="#" aria-label="Facebook">FB</a>
                    <a href="#" aria-label="YouTube">YT</a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">&copy; 2024 ANE 2026 - Todos os direitos reservados</div>
    </footer>
    `;

    document.body.insertAdjacentHTML('beforeend', footerHTML);
}

function marcarLinkAtivo() {
    const paginaAtual = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('header nav a');
    
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href === paginaAtual) {
            link.classList.add('ativo');
        }
    });
}

// Carrega os componentes quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    carregarHeader();
    carregarFooter();
});