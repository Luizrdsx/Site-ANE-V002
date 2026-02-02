<?php
/**
 * Configuração do banco de dados
 * Para HostGator, altere conforme suas credenciais
 */

// Dados de conexão ao MySQL
define('DB_HOST', 'localhost');        // Host do banco (HostGator: localhost)
define('DB_USER', 'seu_usuario');      // Seu usuário do cPanel
define('DB_PASS', 'sua_senha');        // Sua senha do cPanel
define('DB_NAME', 'seu_banco_dados');  // Nome do banco criado no cPanel

// Criar conexão
try {
    $mysqli = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
    
    // Verificar conexão
    if ($mysqli->connect_error) {
        die('Erro na conexão: ' . $mysqli->connect_error);
    }
    
    // Definir charset
    $mysqli->set_charset('utf8mb4');
    
} catch(Exception $e) {
    die('Erro ao conectar ao banco de dados: ' . $e->getMessage());
}

// Função para sanitizar dados
function sanitize($data) {
    global $mysqli;
    return $mysqli->real_escape_string(trim($data));
}

// Função para retornar JSON
function json_response($success, $message = '', $data = null) {
    header('Content-Type: application/json');
    echo json_encode([
        'success' => $success,
        'message' => $message,
        'data' => $data
    ]);
    exit;
}
?>
