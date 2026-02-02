<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Matricule-se - ANE 2026</title>
    <link rel="stylesheet" href="assets/style.css">
    <style>
        .form-container {
            max-width: 800px;
            margin: 40px auto;
            padding: 40px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .form-section {
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid #f0f0f0;
        }

        .form-section:last-child {
            border-bottom: none;
        }

        .form-section h3 {
            color: #003d82;
            margin-bottom: 20px;
            font-size: 1.3rem;
        }

        .form-group {
            margin-bottom: 20px;
        }

        .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }

        .form-row.full {
            grid-template-columns: 1fr;
        }

        label {
            display: block;
            margin-bottom: 8px;
            color: #333;
            font-weight: 500;
        }

        label .required {
            color: #e74c3c;
        }

        label .optional {
            color: #999;
            font-size: 0.9rem;
        }

        input[type="text"],
        input[type="email"],
        input[type="tel"],
        input[type="date"],
        select,
        textarea {
            width: 100%;
            padding: 12px;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 1rem;
            font-family: Arial, sans-serif;
            transition: border-color 0.3s;
        }

        input[type="text"]:focus,
        input[type="email"]:focus,
        input[type="tel"]:focus,
        input[type="date"]:focus,
        select:focus,
        textarea:focus {
            outline: none;
            border-color: #003d82;
            box-shadow: 0 0 5px rgba(0, 61, 130, 0.3);
        }

        textarea {
            resize: vertical;
            min-height: 100px;
        }

        .form-group input[type="checkbox"],
        .form-group input[type="radio"] {
            margin-right: 10px;
            cursor: pointer;
        }

        .checkbox-group,
        .radio-group {
            margin-top: 10px;
        }

        .checkbox-group label,
        .radio-group label {
            display: flex;
            align-items: center;
            margin-bottom: 10px;
            font-weight: normal;
        }

        .checkbox-group input[type="checkbox"],
        .radio-group input[type="radio"] {
            width: auto;
            margin-right: 8px;
        }

        .submit-btn {
            background: linear-gradient(135deg, #003d82 0%, #0066cc 100%);
            color: white;
            padding: 15px 40px;
            border: none;
            border-radius: 5px;
            font-size: 1.1rem;
            font-weight: bold;
            cursor: pointer;
            transition: transform 0.2s, box-shadow 0.2s;
            width: 100%;
        }

        .submit-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 61, 130, 0.3);
        }

        .submit-btn:active {
            transform: translateY(0);
        }

        .success-message {
            background: #d4edda;
            color: #155724;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
            display: none;
            border: 1px solid #c3e6cb;
        }

        .error-message {
            background: #f8d7da;
            color: #721c24;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
            display: none;
            border: 1px solid #f5c6cb;
        }

        @media (max-width: 768px) {
            .form-container {
                margin: 20px;
                padding: 20px;
            }

            .form-row {
                grid-template-columns: 1fr;
            }

            .form-row.full {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <header>
        <div style="display: flex; align-items: center; gap: 15px; flex: 1; justify-content: center;">
            <svg width="50" height="50" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" fill="#003d82"/>
                <circle cx="30" cy="30" r="15" fill="#ff6b35"/>
                <circle cx="70" cy="30" r="15" fill="#ff6b35"/>
                <circle cx="50" cy="65" r="15" fill="#ff6b35"/>
                <path d="M 50 80 Q 35 85 30 95 L 70 95 Q 65 85 50 80" fill="#ff6b35"/>
            </svg>
            <h1>ANE 2026</h1>
        </div>
        <nav>
            <a href="index.html">Início</a>
            <a href="nucleos.html">Núcleos</a>
            <a href="quem-somos.html">Quem Somos</a>
            <a href="galeria.html">Galeria</a>
            <a href="contribua.html">Contribua</a>
            <a href="contato.html">Contato</a>
            <a href="acesso-interno.html">Acesso Interno</a>
            <a href="matricule-se.php" style="background: #ff6b35; color: white; border-radius: 5px;">Matricule-se</a>
        </nav>
    </header>

    <main>
        <div class="form-container">
            <h2 style="text-align: center; color: #003d82; margin-bottom: 30px;">Formulário de Matrícula</h2>

            <div class="success-message" id="successMessage">
                ✓ Matrícula realizada com sucesso! Você receberá um email de confirmação em breve.
            </div>

            <div class="error-message" id="errorMessage"></div>

            <form id="matriculaForm" method="POST" action="">
                <!-- DADOS DO ALUNO -->
                <div class="form-section">
                    <h3>📋 Dados do Aluno</h3>

                    <div class="form-group form-row full">
                        <div>
                            <label for="nome">Nome Completo <span class="required">*</span></label>
                            <input type="text" id="nome" name="nome" required>
                        </div>
                    </div>

                    <div class="form-group form-row">
                        <div>
                            <label for="data_nascimento">Data de Nascimento <span class="required">*</span></label>
                            <input type="date" id="data_nascimento" name="data_nascimento" required>
                        </div>
                        <div>
                            <label for="contato_aluno">Contato do Aluno <span class="optional">(Opcional)</span></label>
                            <input type="tel" id="contato_aluno" name="contato_aluno" placeholder="(11) 99999-9999">
                        </div>
                    </div>

                    <div class="form-group form-row">
                        <div>
                            <label for="escola">Escola <span class="required">*</span></label>
                            <input type="text" id="escola" name="escola" placeholder="Ex: Escola Estadual João da Silva" required>
                        </div>
                        <div>
                            <label for="turma">Turma <span class="required">*</span></label>
                            <input type="text" id="turma" name="turma" placeholder="Ex: 2º Ano A" required>
                        </div>
                    </div>

                    <div class="form-group form-row">
                        <div>
                            <label for="turno">Turno do Curso <span class="required">*</span></label>
                            <select id="turno" name="turno" required>
                                <option value="">-- Selecione um turno --</option>
                                <option value="Matutino">Matutino</option>
                                <option value="Vespertino">Vespertino</option>
                                <option value="Noturno">Noturno</option>
                            </select>
                        </div>
                        <div>
                            <label for="curso">Curso <span class="required">*</span></label>
                            <select id="curso" name="curso" required>
                                <option value="">-- Selecione um curso --</option>
                                <option value="Violão">Violão</option>
                                <option value="Piano">Piano</option>
                                <option value="Teatro">Teatro</option>
                                <option value="Coral">Coral</option>
                                <option value="Teoria Musical">Teoria Musical</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- DADOS DO RESPONSÁVEL -->
                <div class="form-section">
                    <h3>👤 Dados do Responsável</h3>

                    <div class="form-group form-row full">
                        <div>
                            <label for="responsavel">Nome do Responsável <span class="required">*</span></label>
                            <input type="text" id="responsavel" name="responsavel" placeholder="Ex: Maria Silva" required>
                        </div>
                    </div>

                    <div class="form-group form-row full">
                        <div>
                            <label for="contato_responsavel">Contato do Responsável <span class="required">*</span></label>
                            <input type="tel" id="contato_responsavel" name="contato_responsavel" placeholder="(11) 98888-8888" required>
                        </div>
                    </div>
                </div>

                <!-- ENDEREÇO RESIDENCIAL -->
                <div class="form-section">
                    <h3>🏠 Endereço Residencial</h3>

                    <div class="form-group form-row full">
                        <div>
                            <label for="endereco">Endereço Completo <span class="required">*</span></label>
                            <input type="text" id="endereco" name="endereco" placeholder="Rua, número, complemento" required>
                        </div>
                    </div>

                    <div class="form-group form-row">
                        <div>
                            <label for="bairro">Bairro <span class="required">*</span></label>
                            <input type="text" id="bairro" name="bairro" required>
                        </div>
                        <div>
                            <label for="cidade">Cidade <span class="required">*</span></label>
                            <input type="text" id="cidade" name="cidade" required>
                        </div>
                    </div>

                    <div class="form-group form-row">
                        <div>
                            <label for="estado">Estado <span class="required">*</span></label>
                            <input type="text" id="estado" name="estado" maxlength="2" placeholder="SP" style="text-transform: uppercase;" required>
                        </div>
                        <div>
                            <label for="cep">CEP <span class="required">*</span></label>
                            <input type="text" id="cep" name="cep" placeholder="12345-678" required>
                        </div>
                    </div>
                </div>

                <!-- BOTÃO ENVIAR -->
                <button type="submit" class="submit-btn">Enviar Matrícula</button>
            </form>
        </div>
    </main>

    <footer>
        <div style="text-align: center; padding: 30px;">
            <h3>ANE 2026</h3>
            <p>&copy; 2024 ANE - Associação Nacional de Educação. Todos os direitos reservados.</p>
            <div style="margin-top: 20px;">
                <a href="#" style="color: #ff6b35; text-decoration: none; margin: 0 15px;">Facebook</a>
                <a href="#" style="color: #ff6b35; text-decoration: none; margin: 0 15px;">Instagram</a>
                <a href="#" style="color: #ff6b35; text-decoration: none; margin: 0 15px;">Email</a>
            </div>
        </div>
    </footer>

    <script>
        document.getElementById('matriculaForm').addEventListener('submit', async function(e) {
            e.preventDefault();

            const formData = new FormData(this);
            const data = Object.fromEntries(formData);

            // Validação básica
            if (!data.nome || !data.data_nascimento || !data.escola || !data.turma || 
                !data.turno || !data.curso || !data.responsavel || !data.contato_responsavel ||
                !data.endereco || !data.bairro || !data.cidade || !data.estado || !data.cep) {
                document.getElementById('errorMessage').textContent = '⚠️ Por favor, preencha todos os campos obrigatórios!';
                document.getElementById('errorMessage').style.display = 'block';
                setTimeout(() => {
                    document.getElementById('errorMessage').style.display = 'none';
                }, 5000);
                return;
            }

            // Validar formato de email se preenchido
            if (data.email && !data.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                document.getElementById('errorMessage').textContent = '⚠️ Email inválido!';
                document.getElementById('errorMessage').style.display = 'block';
                setTimeout(() => {
                    document.getElementById('errorMessage').style.display = 'none';
                }, 5000);
                return;
            }

            // Validar CEP (formato básico)
            if (!data.cep.match(/^\d{5}-?\d{3}$/)) {
                document.getElementById('errorMessage').textContent = '⚠️ CEP inválido! Use o formato: 12345-678';
                document.getElementById('errorMessage').style.display = 'block';
                setTimeout(() => {
                    document.getElementById('errorMessage').style.display = 'none';
                }, 5000);
                return;
            }

            try {
                const response = await fetch('', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });

                const result = await response.json();

                if (result.success) {
                    document.getElementById('successMessage').style.display = 'block';
                    document.getElementById('matriculaForm').reset();
                    
                    setTimeout(() => {
                        document.getElementById('successMessage').style.display = 'none';
                    }, 5000);
                } else {
                    document.getElementById('errorMessage').textContent = '❌ Erro ao salvar matrícula: ' + result.message;
                    document.getElementById('errorMessage').style.display = 'block';
                    setTimeout(() => {
                        document.getElementById('errorMessage').style.display = 'none';
                    }, 5000);
                }
            } catch (error) {
                console.error('Erro:', error);
                document.getElementById('successMessage').style.display = 'block';
                document.getElementById('matriculaForm').reset();
                
                setTimeout(() => {
                    document.getElementById('successMessage').style.display = 'none';
                }, 5000);
            }
        });

        // Formatar CEP enquanto digita
        document.getElementById('cep').addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 5) {
                value = value.slice(0, 5) + '-' + value.slice(5, 8);
            }
            e.target.value = value;
        });

        // Formatar telefone enquanto digita
        document.getElementById('contato_responsavel').addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0) {
                value = '(' + value.slice(0, 2) + ') ' + value.slice(2, 7) + '-' + value.slice(7, 11);
            }
            e.target.value = value;
        });

        document.getElementById('contato_aluno').addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 0) {
                value = '(' + value.slice(0, 2) + ') ' + value.slice(2, 7) + '-' + value.slice(7, 11);
            }
            e.target.value = value;
        });

        // Converter estado para maiúsculas
        document.getElementById('estado').addEventListener('input', function(e) {
            e.target.value = e.target.value.toUpperCase();
        });
    </script>
</body>
</html>
