// footer.js
const footerHTML = `
<footer>
    <div class="footer-content">
        <div class="footer-col">
            <div class="footer-brand">
                <img src="./img/logo-ane.png" alt="ANE Logo">
            </div>
            <p>Projeto sociocultural que democratiza o acesso à música e às artes, transformando vidas e comunidades.</p>
        </div>
        <div class="footer-col">
            <h4>Navegação</h4>
            <ul class="footer-links">
                <li><a href="index.html">Início</a></li>
                <li><a href="quem-somos.html">Quem Somos</a></li>
                <li><a href="contato.html">Contato</a></li>
                <li><a href="matricule-se.html">Matricule-se</a></li>
            </ul>
        </div>
        <div class="footer-col">
            <h4>Contato</h4>
            <ul class="footer-links">
                <li>Email: contato@contato.com.br</li>
                <li>Telefone: (48) 99146-8442</li>
                <li>Florianópolis/SC</li>
            </ul>
        </div>
        <div class="footer-col">
            <h4>Redes Sociais</h4>
            <p>Siga nossas redes sociais:</p>
            <a href="https://instagram.com/artenasescolas" target="_blank" style="color:#fff; text-decoration:none;">@artenasescolas</a>
            <div class="socials">
                <a href="#" aria-label="Instagram">IG</a>
                <a href="#" aria-label="Facebook">FB</a>
                <a href="#" aria-label="YouTube">YT</a>
            </div>
        </div>
    </div>
    <div class="footer-bottom">&copy; Arte Nas Escolas 2026 - Todos os direitos reservados</div>
</footer>
`;

// Insere o footer no final do body
document.body.insertAdjacentHTML('beforeend', footerHTML);