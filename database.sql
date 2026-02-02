-- ==========================================
-- SCRIPT DE CRIAÇÃO DO BANCO DE DADOS ANE 2026
-- Execute este arquivo no cPanel > phpMyAdmin
-- ==========================================

-- Tabela de Alunos Matriculados
CREATE TABLE IF NOT EXISTS matriculas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    
    -- Dados do Aluno
    nome_aluno VARCHAR(150) NOT NULL,
    data_nascimento DATE NOT NULL,
    escola VARCHAR(150) NOT NULL,
    turma VARCHAR(50) NOT NULL,
    turno ENUM('matutino', 'vespertino', 'noturno') NOT NULL,
    curso ENUM('violao', 'piano', 'teatro', 'coral', 'teoria') NOT NULL,
    contato_aluno VARCHAR(20),
    
    -- Dados do Responsável
    nome_responsavel VARCHAR(150) NOT NULL,
    contato_responsavel VARCHAR(20) NOT NULL,
    
    -- Endereço Residencial
    endereco VARCHAR(255) NOT NULL,
    bairro VARCHAR(100) NOT NULL,
    cidade VARCHAR(100) NOT NULL,
    estado VARCHAR(2) NOT NULL,
    cep VARCHAR(10) NOT NULL,
    
    -- Metadata
    data_matricula TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ip_address VARCHAR(45),
    status ENUM('pendente', 'confirmada', 'cancelada') DEFAULT 'pendente',
    
    INDEX (nome_aluno),
    INDEX (data_matricula),
    INDEX (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabela de Contatos (Formulário de Contato)
CREATE TABLE IF NOT EXISTS contatos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    
    nome VARCHAR(150) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(20),
    assunto VARCHAR(200) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    mensagem LONGTEXT NOT NULL,
    
    -- Metadata
    data_contato TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ip_address VARCHAR(45),
    status ENUM('nao_lido', 'lido', 'respondido') DEFAULT 'nao_lido',
    
    INDEX (data_contato),
    INDEX (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabela de Doações
CREATE TABLE IF NOT EXISTS doacoes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    
    nome_doador VARCHAR(150) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(20),
    valor DECIMAL(10, 2) NOT NULL,
    tipo ENUM('doacao', 'mensal', 'anual') DEFAULT 'doacao',
    mensagem LONGTEXT,
    anonimo BOOLEAN DEFAULT FALSE,
    
    -- Metadata
    data_doacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ip_address VARCHAR(45),
    status ENUM('pendente', 'confirmada', 'recusada') DEFAULT 'pendente',
    
    INDEX (data_doacao),
    INDEX (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabela de Usuários (para Acesso Interno)
CREATE TABLE IF NOT EXISTS usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    
    nome VARCHAR(150) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    tipo_usuario ENUM('aluno', 'professor', 'admin') DEFAULT 'aluno',
    ativo BOOLEAN DEFAULT TRUE,
    
    -- Metadata
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ultimo_acesso DATETIME,
    
    INDEX (email),
    INDEX (tipo_usuario)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabela de Cursos
CREATE TABLE IF NOT EXISTS cursos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    
    nome VARCHAR(100) NOT NULL,
    descricao LONGTEXT,
    tipo ENUM('violao', 'piano', 'teatro', 'coral', 'teoria') NOT NULL,
    instrutor VARCHAR(150),
    horario VARCHAR(100),
    turno ENUM('matutino', 'vespertino', 'noturno') NOT NULL,
    vagas INT DEFAULT 30,
    ativo BOOLEAN DEFAULT TRUE,
    
    -- Metadata
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    INDEX (tipo),
    INDEX (ativo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabela de Inscrições em Cursos
CREATE TABLE IF NOT EXISTS inscricoes_cursos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    
    usuario_id INT NOT NULL,
    curso_id INT NOT NULL,
    
    data_inscricao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status ENUM('ativa', 'concluida', 'cancelada') DEFAULT 'ativa',
    
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
    FOREIGN KEY (curso_id) REFERENCES cursos(id) ON DELETE CASCADE,
    INDEX (usuario_id),
    INDEX (curso_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabela de Eventos
CREATE TABLE IF NOT EXISTS eventos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    
    titulo VARCHAR(200) NOT NULL,
    descricao LONGTEXT,
    data_evento DATETIME NOT NULL,
    local VARCHAR(255),
    instrutor VARCHAR(150),
    ativo BOOLEAN DEFAULT TRUE,
    
    -- Metadata
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    INDEX (data_evento),
    INDEX (ativo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Inserir alguns cursos de exemplo
INSERT INTO cursos (nome, descricao, tipo, turno) VALUES
('Violão Básico', 'Aprenda os fundamentos da guitarra acústica', 'violao', 'matutino'),
('Violão Intermediário', 'Aprofunde seus conhecimentos em técnicas avançadas', 'violao', 'vespertino'),
('Piano Iniciante', 'Comece sua jornada musical no piano', 'piano', 'matutino'),
('Piano Avançado', 'Técnicas profissionais de piano', 'piano', 'noturno'),
('Teatro Iniciante', 'Expressão e interpretação cênica', 'teatro', 'vespertino'),
('Coral', 'Técnica vocal e harmonização em grupo', 'coral', 'noturno'),
('Teoria Musical', 'Fundamentos da música e composição', 'teoria', 'matutino');

-- ==========================================
-- FIM DO SCRIPT
-- ==========================================
