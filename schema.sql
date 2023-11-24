  -- Criação da tabela 'usuarios'

create table usuarios (
id serial primary key,
nome text not null,
email text not null unique,
senha text not null
);

-- Criação da tabela 'categorias'
create table categorias (
id serial primary key,
descricao text not null
);

-- adicionando categorias
insert into categorias (descricao)
values
  ('Informática'),
  ('Celulares'),
  ('Beleza e Perfumaria'),
  ('Mercado'),
  ('Livros e Papelaria'),
  ('Brinquedos'),
  ('Moda'),
  ('Bebê'),
  ('Games');

  -- Criação da tabela 'produtos'
CREATE TABLE produtos (
  id SERIAL PRIMARY KEY,
  descricao TEXT NOT NULL,
  quantidade_estoque INT NOT NULL,
  valor INT NOT NULL,
  categoria_id INTEGER,
  FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

-- Criação da tabela 'clientes'

CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    cpf TEXT UNIQUE NOT NULL,
    cep TEXT,
    rua TEXT,
    numero TEXT,
    bairro TEXT,
    cidade TEXT,
    estado TEXT
);

-- Criação da tabela 'pedidos'
CREATE TABLE pedidos (
    id serial primary key,
    cliente_id INT,
    observacao TEXT,
    valor_total INT,
    FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);

-- Criação da tabela 'pedido_produtos'
CREATE TABLE pedido_produtos (
    ID SERIAL PRIMARY KEY,
    pedido_id INT,
    produto_id INT,
    quantidade_produto INT,
    valor_produto INT,
    FOREIGN KEY (pedido_id) REFERENCES pedidos(id),
    FOREIGN KEY (produto_id) REFERENCES produtos(id)
);

-- Adicionando uma nova coluna à tabela 'produtos'
ALTER TABLE produtos
ADD COLUMN produto_imagem TEXT;
