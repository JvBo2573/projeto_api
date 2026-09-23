DROP TABLE IF EXISTS produtos;

CREATE TABLE produtos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    preco DECIMAL(10, 2) NOT NULL,
    descricao TEXT
);

-- Inserindo um lote de dados iniciais para teste (Mock Data)
INSERT INTO produtos (nome, preco, descricao) VALUES 
('Teclado Mecânico', 250.00, 'Teclado mecânico switch blue com LED RGB.'),
('Mouse Gamer', 120.50, 'Mouse com 3200 DPI e botões laterais programáveis.'),
('Monitor 24" Full HD', 850.00, 'Monitor LED IPS 75Hz com bordas ultrafinas.'),
('Headset Gamer', 180.90, 'Headset com microfone com cancelamento de ruído e som surround 7.1.'),
('Cadeira Gamer', 1250.00, 'Cadeira ergonômica reclinável com almofadas lombar e cervical.'),
('SSD 1TB NVMe', 450.00, 'SSD de altíssima velocidade para leitura e gravação.'),
('Placa de Vídeo RTX 3060', 2100.00, 'Placa de vídeo de 12GB GDDR6 para jogos em alta resolução.'),
('Gabinete ATX', 300.00, 'Gabinete mid-tower com lateral de vidro temperado e 3 fans inclusos.'),
('Fonte 650W', 380.00, 'Fonte de alimentação com certificação 80 Plus Bronze.'),
('Webcam Full HD', 150.00, 'Webcam 1080p com microfone embutido para videoconferências.');

DROP TABLE IF EXISTS pessoas;

CREATE TABLE pessoas (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    telefone VARCHAR(20),
    cpf VARCHAR(14) UNIQUE NOT NULL,
    senha VARCHAR(100) NOT NULL
);

INSERT INTO pessoas (nome, email, telefone, cpf, senha) VALUES 
('João Silva', 'joao.silva@email.com', '(11) 98765-4321', '125.959.743-19', 'senha123'),
('Maria Oliveira', 'maria.oliveira@email.com', '(21) 99876-5432', '532.505.593-34', 'maria456'),
('Carlos Souza', 'carlos.souza@email.com', '(31) 97654-3210', '986.333.759-58', 'carlos2026'),
('Ana Costa', 'ana.costa@email.com', '(41) 98888-7777', '963.382.240-80', 'senhaAna!'),
('Lucas Pereira', 'lucas.pereira@email.com', '(51) 99999-0000', '772.457.851-63', 'lucasPass'),
('Fernanda Lima', 'fernanda.lima@email.com', '(81) 97777-5555', '464.009.968-18', 'fer1234'),
('Rafael Mendes', 'rafael.mendes@email.com', '(71) 96666-4444', '978.970.417-86', 'rafaSenha'),
('Juliana Castro', 'juliana.castro@email.com', '(61) 95555-3333', '607.765.965-78', 'ju2026'),
('Marcos Almeida', 'marcos.almeida@email.com', '(91) 94444-2222', '540.874.571-68', 'marcos!@#'),
('Patrícia Rocha', 'patricia.rocha@email.com', '(85) 93333-1111', '016.401.545-07', 'patiPass');