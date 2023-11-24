## Readme Language Versionss

- [English](#english-readme)
- [Português](#portuguese-readme)

---

# NodeNinjas PDV Challenge

![](https://projeto-m05-t06.s3.us-east-005.backblazeb2.com/banner-email.jpg)
![NodeNinjas PDV](https://i.imgur.com/xG74tOh.png)

## English <a name="english-readme"></a>

- [Português](#portuguese-readme)

## Overview

Welcome to the NodeNinjas PDV (Point of Sale) challenge! This project, completed in a span of 3 weeks, involved the development of a robust API for a Frontend Cashier system. As the team leader of NodeNinjas, I collaborated with talented individuals to bring this project to life.

## Team Members

- [Tone Lopes](https://github.com/tonelopes-dev)
- [Alberto Paim](https://github.com/AlbertoPaim)
- [MatheusSegundo](https://github.com/Matheusfllps)
- [Matheus F S Barreto](https://github.com/matheusfsbarreto)
- [Renan](https://github.com/nanerseasac)
- [Thiago Maia](https://github.com/thiagokcio)

## Project Description

The NodeNinjas PDV project aimed to create a comprehensive API for a Point of Sale system. The challenge encompassed multiple sprints, each focusing on specific functionalities and database requirements. Here's a brief breakdown of the main features:

### 1st Sprint

- **Database Setup:**

  - Created PostgreSQL database named `pdv`.
  - Tables: `usuarios` and `categorias`.

- **List Categories:**

  - Implemented `GET` `/categoria` endpoint to list all categories.

- **User Registration:**

  - Created `POST` `/usuario` endpoint for user registration.
  - Validated mandatory fields and ensured unique email entries.

- **User Login:**

  - Implemented `POST` `/login` endpoint for user authentication.
  - Generated authentication tokens for users.

- **User Profile:**

  - Created `GET` and `PUT` `/usuario` endpoints for viewing and updating user profiles.
  - Ensured secure password encryption.

- **Deployment:**
  - Deployed the project and provided the deployment URL.

### 2nd Sprint

- **Database Update:**

  - Expanded the database with tables: `produtos` and `clientes`.

- **Product Operations:**

  - Implemented CRUD operations for products (`POST`, `PUT`, `GET`, `DELETE`).
  - Validated product data and ensured category existence.

- **Client Operations:**
  - Implemented CRUD operations for clients (`POST`, `PUT`, `GET`).
  - Ensured unique email and CPF for clients.

### 3rd Sprint

- **Database Expansion:**

  - Added tables: `pedidos`, `pedido_produtos`, and `produtos_produto_imagem`.

- **Order Management:**

  - Created `POST` `/pedido` endpoint for order creation.
  - Validated order data, product existence, and stock availability.
  - Sent email notifications to clients upon successful order placement.

- **List Orders:**

  - Implemented `GET` `/pedido` endpoint to list orders.
  - Allowed filtering by `cliente_id`.

- **Product Image Enhancement:**

  - Enhanced product operations to support product images.
  - Implemented image upload and storage on external servers.
  - Updated product creation and update responses to include image URLs.

- **Product Deletion Improvement:**
  - Implemented a rule preventing the deletion of products associated with orders.
  - Ensured removal of associated images on product deletion.

## Status Codes

The API adheres to standard HTTP status codes:

- `200 (OK)`: Successful request.
- `201 (Created)`: Successful request, and something was created.
- `204 (No Content)`: Successful request, no content in the response body.
- `400 (Bad Request)`: Server did not understand the request due to invalid syntax/format.
- `401 (Unauthorized)`: User is not authenticated.
- `403 (Forbidden)`: User does not have permission to access the requested resource.
- `404 (Not Found)`: Resource not found.
- `500 (Internal Server Error)`: Unexpected server error.

Feel free to explore the API and contribute to the NodeNinjas legacy!

## Português <a name="portuguese-readme"></a>

- [Inglês](#english-readme)

---

# Desafio NodeNinjas PDV

## Visão Geral

Bem-vindo ao desafio NodeNinjas PDV (Ponto de Venda)! Este projeto, concluído em um período de 3 semanas, envolveu o desenvolvimento de uma API robusta para um sistema de Caixa Frontend. Como líder da equipe NodeNinjas, colaborei com indivíduos talentosos para dar vida a este projeto.

## Membros da Equipe

- [Tone Lopes](https://github.com/tonelopes-dev)
- [Alberto Paim](https://github.com/AlbertoPaim)
- [MatheusSegundo](https://github.com/Matheusfllps)
- [Matheus F S Barreto](https://github.com/matheusfsbarreto)
- [Renan](https://github.com/nanerseasac)
- [Thiago Maia](https://github.com/thiagokcio)

## Descrição do Projeto

O projeto NodeNinjas PDV teve como objetivo criar uma API abrangente para um sistema de Ponto de Venda. O desafio envolveu várias sprints, cada uma focada em funcionalidades específicas e requisitos de banco de dados. Aqui está uma breve explicação das principais características:

### 1ª Sprint

**Configuração do Banco de Dados:**

- Criado banco de dados PostgreSQL chamado `pdv`.
- Tabelas: `usuarios` e `categorias`.

**Listar Categorias:**

- Implementado o endpoint `GET /categoria` para listar todas as categorias.

**Cadastro de Usuários:**

- Criado o endpoint `POST /usuario` para cadastro de usuários.
- Validados campos obrigatórios e garantida a unicidade dos e-mails.

**Login de Usuários:**

- Implementado o endpoint `POST /login` para autenticação de usuários.
- Gerados tokens de autenticação para os usuários.

**Perfil do Usuário:**

- Criados os endpoints `GET` e `PUT` `/usuario` para visualização e atualização de perfis de usuários.
- Garantida a criptografia segura de senhas.

**Deploy:**

- Projeto implantado e URL de implantação fornecida.

### 2ª Sprint

**Atualização do Banco de Dados:**

- Expandido o banco de dados com tabelas: `produtos` e `clientes`.

**Operações de Produto:**

- Implementadas operações CRUD para produtos (`POST`, `PUT`, `GET`, `DELETE`).
- Validados dados do produto e garantida a existência da categoria.

**Operações de Cliente:**

- Implementadas operações CRUD para clientes (`POST`, `PUT`, `GET`).
- Garantida a unicidade de e-mails e CPFs para clientes.

### 3ª Sprint

**Expansão do Banco de Dados:**

- Adicionadas tabelas: `pedidos`, `pedido_produtos` e `produtos_produto_imagem`.

**Gestão de Pedidos:**

- Criado o endpoint `POST /pedido` para criação de pedidos.
- Validados dados do pedido, existência do produto e disponibilidade em estoque.
- Enviadas notificações por e-mail aos clientes após o sucesso do pedido.

**Listar Pedidos:**

- Implementado o endpoint `GET /pedido` para listar pedidos.
- Permitida a filtragem por `cliente_id`.

**Melhoria na Imagem do Produto:**

- Aprimoradas operações de produto para suportar imagens.
- Implementado upload e armazenamento de imagens em servidores externos.
- Atualizadas respostas de criação e atualização de produtos para incluir URLs de imagens.

**Melhoria na Exclusão de Produtos:**

- Implementada uma regra que impede a exclusão de produtos associados a pedidos.
- Garantida a remoção de imagens associadas na exclusão do produto.

## Códigos de Status

A API segue os códigos de status HTTP padrão:

- `200 (OK)`: Solicitação bem-sucedida.
- `201 (Criado)`: Solicitação bem-sucedida, e algo foi criado.
- `204 (Sem Conteúdo)`: Solicitação bem-sucedida, sem conteúdo no corpo da resposta.
- `400 (Requisição Inválida)`: O servidor não entendeu a solicitação devido a sintaxe/formato inválido.
- `401 (Não Autorizado)`: O usuário não está autenticado.
- `403 (Proibido)`: O usuário não tem permissão para acessar o recurso solicitado.
- `404 (Não Encontrado)`: Recurso não encontrado.
- `500 (Erro Interno do Servidor)`: Erro inesperado do servidor.

Sinta-se à vontade para explorar a API e contribuir para o legado NodeNinjas!
