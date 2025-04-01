# 📌 API de Gerenciamento de Eventos

Esta API foi desenvolvida utilizando **NestJS** para criação de uma aplicação robusta e escalável com o banco de dados **MongoDB**. A API permite o gerenciamento de eventos, possibilitando operações como a criação de um evento através de um sistema **RESTful**.

![Conexão](image.png)

---

## 🚀 Tecnologias Utilizadas

- **NestJS**: Framework de Node.js para construir aplicações escaláveis e eficientes.
- **MongoDB**: Banco de dados NoSQL utilizado para armazenar as informações dos eventos.
- **Mongoose**: ODM (Object Document Mapping) para MongoDB e Node.js.
- **Postman**: Ferramenta para testar a API através de requisições HTTP.

![Solicitação POST](image-1.png)

---

## ⚡ Funcionalidades

A API oferece as seguintes funcionalidades:

- **Create Event**: Criação de eventos com informações como nome, data, hora, descrição e valor.

---

## 📋 Pré-requisitos

Antes de rodar o projeto, você precisa ter o seguinte instalado:

- **Node.js**: Instalar o [Node.js](https://nodejs.org/).
- **MongoDB**: Você pode usar uma instância local ou um serviço de MongoDB na nuvem, como o [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

---

## 📥 Instalação

### 1️⃣ Clone o repositório:
```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```

### 2️⃣ Instale as dependências:
Certifique-se de ter o Node.js instalado em sua máquina e depois execute:
```bash
npm install
```

### 3️⃣ Configuração do MongoDB:
Você pode usar uma instância local do MongoDB ou criar uma conta no MongoDB Atlas e obter uma URL de conexão. Caso esteja utilizando o MongoDB Atlas, altere a string de conexão em `app.module.ts`:
```typescript
MongooseModule.forRoot('mongodb+srv://username:password@cluster0.mongodb.net/dbname?retryWrites=true&w=majority')
```

### 4️⃣ Rodar a aplicação:
Para rodar a aplicação em desenvolvimento:
```bash
npm run start:dev
```
A aplicação estará rodando em **http://localhost:3000**.

---

## 🔗 Endpoints da API

### 1️⃣ Criar Evento

- **URL:** `/event/create`
- **Método:** `POST`
- **Body (JSON):**
```json
{
  "name": "Festa de Aniversário",
  "date": "2025-05-15T20:00:00.000Z",
  "hour": 20,
  "description": "Uma grande festa para comemorar o aniversário.",
  "value": 150.50
}
```
- **Resposta de Sucesso:**
```json
{
  "name": "Festa de Aniversário",
  "date": "2025-05-15T20:00:00.000Z",
  "hour": 20,
  "description": "Uma grande festa para comemorar o aniversário.",
  "value": 150.50
}
```
- **Resposta de Erro (Campos obrigatórios faltando):**
```json
{
  "statusCode": 400,
  "message": "Event validation failed: name: Path 'name' is required., ...",
  "error": "Bad Request"
}
```

---

## 📂 Estrutura do Projeto

```
├── src/
│   ├── event/
│   │   ├── controllers/
│   │   │   └── event.controller.ts
│   │   ├── interfaces/
│   │   │   └── iEventEntity.ts
│   │   ├── repositories/
│   │   │   └── createEvent.repository.ts
│   │   ├── services/
│   │   │   └── create-event.services.ts
│   │   ├── schemas/
│   │   │   └── event.schema.ts
│   │   └── event.module.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   └── app.service.ts
└── package.json
```

### 📌 Detalhes de Cada Pasta:

- **controllers**: Contém os controladores, responsáveis por manipular as requisições HTTP.
- **interfaces**: Define as interfaces utilizadas em todo o projeto.
- **repositories**: Contém os repositórios responsáveis pela interação com o banco de dados.
- **services**: Contém os serviços, que contêm a lógica de negócios.
- **schemas**: Define os esquemas do Mongoose, que representam os documentos no banco de dados.

---

## 🛠️ Testando a API

Use o **Postman** ou qualquer outro cliente HTTP para testar os endpoints da API.

### Exemplo de requisição:
- **URL:** `http://localhost:3000/event/create`
- **Método:** `POST`
- **Body (com o tipo raw e JSON):**
```json
{
  "name": "Festa de Aniversário",
  "date": "2025-05-15T20:00:00.000Z",
  "hour": 20,
  "description": "Uma grande festa para comemorar o aniversário.",
  "value": 150.50
}
```

---

## 🤝 Contribuição

Se você deseja contribuir com o projeto, siga os seguintes passos:

1. Faça um **fork** deste repositório.
2. Crie uma **branch** para suas modificações:
   ```bash
   git checkout -b feature/novos-recursos
   ```
3. Faça o **commit** das suas mudanças:
   ```bash
   git commit -m 'Adicionando novos recursos'
   ```
4. Faça o **push** para a branch:
   ```bash
   git push origin feature/novos-recursos
   ```
5. Abra uma **pull request**.

---

## 📜 Licença

Este projeto está licenciado sob a **MIT License**.

---

## 📖 Como Usar o Postman para Testar

1. **Abra o Postman**.
2. Selecione o método **POST** e insira a URL do endpoint: `http://localhost:3000/event/create`.
3. Na aba **Body**, selecione a opção **raw** e defina o tipo como **JSON**.
4. Cole o corpo da requisição no formato JSON, como mostrado acima.
5. Clique em **Send** para enviar a requisição.

---

🔹 **Desenvolvido com ❤️ e NestJS**
