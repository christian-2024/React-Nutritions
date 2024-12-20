# React Nutritions

Este projeto é um exemplo de aprendizado em React.js que consome uma API de nutrição. Ele exibe uma lista de artigos sobre nutrição com informações como título, imagem, subtítulo e categoria.

## Funcionalidades

- Consumo de dados de uma API externa.
- Exibição de lista de artigos com detalhes como:
  - Título
  - Imagem
  - Subtítulo
  - Categoria
- Estilização simples utilizando CSS.

## Tecnologias Utilizadas

- React.js
- CSS
- Fetch API

## Como Executar o Projeto

1. Clone este repositório:

   ```bash
   git clone https://github.com/christian-2024/react-nutritions.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd react-nutritions
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

5. Abra o navegador e acesse `http://localhost:3000` para visualizar o projeto.

## Estrutura do Projeto

```
react-nutritions/
|-- public/
|-- src/
|   |-- App.js          # Componente principal
|   |-- style.css       # Estilo do projeto
|   |-- index.js        # Ponto de entrada da aplicação
|-- package.json        # Dependências e scripts
```

## API Utilizada

Os dados dos artigos são consumidos da seguinte API:

**URL:** [https://sujeitoprogramador.com/rn-api/?api=posts](https://sujeitoprogramador.com/rn-api/?api=posts)

### Exemplo de Resposta da API

```json
[
  {
    "id": 1,
    "titulo": "Refeições proteicas para fazer antes de dormir",
    "capa": "https://sujeitoprogramador.com/nutriapp/wp-content/uploads/2017/12/Screenshot_3-2.jpg",
    "subtitulo": "O que acontece com nossos músculos quando estamos dormindo...",
    "categoria": "Dieta"
  }
]
```

## Estilização

Os estilos do projeto estão definidos no arquivo `style.css`. Certifique-se de ajustar conforme necessário para personalizar o visual.

## Autor

Este projeto foi desenvolvido como parte do meu aprendizado em React.js. Fique à vontade para contribuir ou deixar sugestões!

## Licença

Este projeto é livre para uso e aprendizado.
