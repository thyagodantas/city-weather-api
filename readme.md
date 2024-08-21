# City Weather API

City Weather API é uma API construída com Node.js e TypeScript para fornecer informações sobre o clima de cidades específicas. A API utiliza a arquitetura Vertical Slice para uma separação clara das funcionalidades e facilita a manutenção e expansão.

## Funcionalidades

- **Obter Clima de Cidades**: Fornece informações sobre o clima atual de uma cidade pesquisada.
- **Armazena IP e Pesquisas**: Registra o endereço IP de quem fez a requisição e as cidades pesquisadas.

## Tecnologias Usadas

- **Node.js**
- **Express**
- **TypeScript**
- **SQLite**
- **Axios**

## Arquitetura

Este projeto segue a arquitetura Vertical Slice, o que significa que cada funcionalidade é organizada em "fatias" verticais que contêm tudo o que é necessário para funcionar, incluindo a lógica de negócios, acesso a dados e controladores.

## Requisitos

- **Node.js** (v14 ou superior)
- **npm** (v6 ou superior)

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/city-weather-api.git
   cd city-weather-api
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Crie o banco de dados SQLite:

   ```bash
   npx ts-node src/database.ts
   ```

4. Adicione sua chave de API ao serviço:
   - Substitua `YOUR_API_KEY` pela sua chave de API de clima no arquivo `CityWeatherService`.

## Executando o Projeto

### Em Modo de Desenvolvimento

Para rodar o projeto em modo de desenvolvimento, use o comando:

```bash
npm run dev
```

O servidor será iniciado em http://localhost:3000.

### Em Modo Produção

Para rodar o projeto em modo de produção:

1. Compile o projeto:

```bash
npm run build
```

2. Inicie o servidor

```bash
npm start
```

## Endpoints Disponíveis

### `GET /api/weather`

**Descrição:**  
Este endpoint retorna informações sobre o clima atual de uma cidade específica.

**Parâmetros de Query:**

- `cityName` (string, obrigatório): O nome da cidade para a qual deseja obter as informações de clima.
- `country` (string, obrigatório): O código do país em formato ISO 3166-1 alpha-2, para especificar a localização da cidade.

**Exemplo de Requisição:**

```bash
curl "http://localhost:3000/api/weather?cityName=Recife&country=BR"
```

Exemplo de Resposta:

```bash
{
  "cityName": "Recife",
  "country": "BR",
  "temperature": 28.3,
  "description": "céu limpo",
  "ipAddress": "192.168.1.1",
  "searchDate": "2023-08-21T15:45:00.000Z"
}
```

Códigos de Status:

200 OK: A requisição foi bem-sucedida, e os dados do clima foram retornados.
400 Bad Request: Os parâmetros de query estão ausentes ou são inválidos.
500 Internal Server Error: Ocorreu um erro no servidor ao processar a requisição.
