# Conversor de Moedas

Este projeto é um conversor de moedas que permite converter valores para Real e adicionar moedas favoritas. Ele utiliza dados em tempo real para fornecer cotações atualizadas.

## Instalação

Para começar, siga estas etapas:

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Delei09/currencies_frontend
   cd currencies_frontend
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

## Uso

Para executar o aplicativo, use o seguinte comando:

```bash
npm start
```

Isso iniciará o aplicativo em modo de desenvolvimento. Você pode acessá-lo em [http://localhost:3000](http://localhost:3000).

## Funcionalidades

- **Conversão de Moedas:** Insira um valor em qualquer moeda e veja a conversão para Real.
- **Moedas Favoritas:** Você pode adicionar moedas à sua lista de favoritas para acesso rápido.
- **Dados em Tempo Real:** O aplicativo busca cotações atualizadas automaticamente.

## Adicionando Favoritos

1. Selecione uma moeda que você deseja adicionar aos favoritos.
2. Clique no botão "Adicionar aos Favoritos" ao lado da moeda.
3. Os favoritos serão salvos e estarão disponíveis na seção de moedas favoritas do aplicativo.

### Implementações pendentes

- Deixar responsivo
- Usar useMemo e useCallback para melhorar a performace
- Melhorar o design da tela
- Criar teste unitarios
- Criar app com react native
- Refatorar fluxo websocket e de token
- Configurar lint e prettier
