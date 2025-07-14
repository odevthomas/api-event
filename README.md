
# 📌 API de Gerenciamento de Eventos

Esta aplicação é uma **API RESTful desenvolvida com NestJS e MongoDB**, com o objetivo de simular um sistema funcional de cadastro de eventos — simples, escalável e voltado para fins de aprendizado e prática profissional.

O projeto foi criado para exercitar conceitos de arquitetura limpa, separação de responsabilidades, e integração com banco de dados NoSQL usando **Mongoose**. A ideia é que, mesmo sendo simples, ele siga um padrão real de estrutura de software backend moderno.

---

## 💡 Por que este projeto?

Desenvolver APIs simples com boas práticas é um dos melhores caminhos para se tornar um desenvolvedor backend completo. Esse projeto nasceu com três objetivos:

1. **Aplicar os fundamentos do NestJS na prática**
2. **Conectar a API com o MongoDB usando Mongoose**
3. **Criar um sistema simples de criação de eventos com tratamento de erros e validação**

📸 Prints da aplicação rodando:

![image](https://github.com/user-attachments/assets/e3571493-292e-431d-a495-3f3875a16f57)
![image](https://github.com/user-attachments/assets/58d064b9-2353-4d51-a0bd-245847dd633d)

---

## 🚀 Tecnologias Utilizadas

- **NestJS** – framework robusto para Node.js com arquitetura modular
- **MongoDB** – banco de dados NoSQL para armazenar os eventos
- **Mongoose** – ODM para definir os esquemas e conectar com o banco
- **Postman** – utilizado para testar os endpoints durante o desenvolvimento

---

## ⚙️ Funcionalidade Implementada

- **POST /event/create**  
  Permite o cadastro de um evento com:
  - nome
  - data
  - hora
  - descrição
  - valor

Essa operação realiza validação dos campos e retorna mensagens claras em caso de erro.

---

## 📋 Pré-requisitos

Antes de iniciar o projeto, você precisa ter instalado:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community) (local) ou [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

---

## 📦 Instalação e Execução

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/api-eventos.git
cd api-eventos
````

2. Instale as dependências:

```bash
npm install
```

3. Configure a conexão com MongoDB no arquivo `app.module.ts`:

```typescript
MongooseModule.forRoot('mongodb+srv://<user>:<password>@cluster.mongodb.net/<dbname>')
```

4. Execute a aplicação:

```bash
npm run start:dev
```

5. Acesse: [http://localhost:3000](http://localhost:3000)

---

## 📮 Endpoint Implementado

### ➕ Criar Evento

* **Endpoint:** `/event/create`
* **Método:** `POST`
* **Body (JSON):**

```json
{
  "name": "Festa de Aniversário",
  "date": "2025-05-15T20:00:00.000Z",
  "hour": 20,
  "description": "Uma grande festa para comemorar o aniversário.",
  "value": 150.50
}
```

* **Resposta de sucesso:**

```json
{
  "name": "Festa de Aniversário",
  "date": "2025-05-15T20:00:00.000Z",
  "hour": 20,
  "description": "Uma grande festa para comemorar o aniversário.",
  "value": 150.50
}
```

* **Resposta de erro (exemplo):**

```json
{
  "statusCode": 400,
  "message": "Event validation failed: name: Path 'name' is required.",
  "error": "Bad Request"
}
```

---

## 🧱 Estrutura de Pastas

```
src/
│
├── event/
│   ├── controllers/         # Controladores das rotas
│   ├── interfaces/          # Interface do modelo Event
│   ├── repositories/        # Camada de acesso ao banco
│   ├── services/            # Regras de negócio
│   ├── schemas/             # Schema Mongoose
│   └── event.module.ts
│
├── app.controller.ts
├── app.module.ts
└── app.service.ts
```

---

## 🧪 Testando com o Postman

1. Abra o **Postman**
2. Configure uma requisição `POST` para:
   `http://localhost:3000/event/create`
3. Vá na aba **Body > raw > JSON**
4. Insira um corpo como este:

```json
{
  "name": "Meetup de Tecnologia",
  "date": "2025-10-01T18:30:00.000Z",
  "hour": 18,
  "description": "Evento para networking e palestras.",
  "value": 0
}
```

5. Envie a requisição e veja a resposta

---

## 🙌 Contribuindo

Contribuições são bem-vindas! Siga os passos:

```bash
# Fork o repositório
# Crie uma nova branch
git checkout -b feature/minha-feature

# Faça commit
git commit -m 'feat: adicionando nova validação'

# Faça push e abra um pull request
```

---

## 📜 Licença

Distribuído sob a licença **MIT**.

---

## ✉️ Contato

Desenvolvido por **Thomas Eduardo**
🔗 [thomaseduardo.online](https://thomaseduardo.online)
📧 [thmedu@outlook.com](mailto:thmedu@outlook.com)
📱 (19) 9 9904-2072

---

🔧 Projeto criado para fins educacionais, seguindo boas práticas de API com NestJS + MongoDB.

```

