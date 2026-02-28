# Users API - Arquitetura Hexagonal

API RESTful para gerenciamento de usuários, construída com Node.js, Express e PostgreSQL. O projeto foi desenhado e refatorado seguindo os princípios da **Arquitetura Hexagonal (Ports and Adapters)** e **Domain-Driven Design (DDD)**, garantindo uma clara separação de responsabilidades, injeção de dependências e alta testabilidade.

## 🛠️ Stack Tecnológica
- Node.js + Express
- PostgreSQL (pg)
- Docker + Docker Compose

## 🚀 Como Rodar o Projeto

A infraestrutura é 100% containerizada com Docker. Certifique-se de ter o Docker, Docker Compose e o Make instalados na sua máquina.

**1. Para subir a infraestrutura e a API:**
\`\`\`bash
make up
\`\`\`

**2. Para visualizar os logs da aplicação em tempo real:**
\`\`\`bash
make logs
\`\`\`

**3. Para reiniciar os containers:**
\`\`\`bash
make restart
\`\`\`

O servidor estará disponível localmente na porta configurada (Padrão: **3000**).

## 📌 Endpoints da API

A API segue a semântica REST padrão.

### Health Check
- **GET /health**
  - **Descrição:** Monitoramento do status do container.
  - **Retorno (200 OK):** `{ "status": "ok" }`

### Usuários
- **POST /users**
  - **Descrição:** Cria um novo usuário com autovalidação de domínio e tratamento de conflitos na infraestrutura (ex: e-mail duplicado).
  - **Payload (JSON):**
    \`\`\`json
    {
      "name": "João Silva",
      "email": "joao@email.com"
    }
    \`\`\`
  - **Retorno de Sucesso:** `201 Created`
  - **Retornos de Erro:** `400 Bad Request` (Validação) ou `409 Conflict` (E-mail já existe).

- **GET /users**
  - **Descrição:** Busca e lista todos os usuários cadastrados.
  - **Retorno (200 OK):**
    \`\`\`json
    [
      {
        "id": 1,
        "name": "João Silva",
        "email": "joao@email.com"
      }
    ]
    \`\`\`

---
**Comandos úteis do Makefile disponíveis:** `make up`, `make down`, `make restart`, `make logs`.
