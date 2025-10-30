# 🧮 Calculadora com React

Um projeto de calculadora simples desenvolvido com React.js e Styled Components, focado na componentização e no uso de estado (Hooks) para gerenciar a lógica das operações.

![projeto](https://github.com/eumatoliveira/calculator-in-react/blob/main/Screenshot.png)

## ✨ Funcionalidades

* Operações aritméticas básicas: Adição (+), Subtração (-), Multiplicação (x) e Divisão (/)
* Limpar o visor e a memória (AC)
* Suporte para números decimais (.)
* Exibição do valor atual e dos resultados

## 🚀 Tecnologias Utilizadas

* **[React.js](https://reactjs.org/):** Biblioteca principal para a construção da interface.
* **[Styled Components](https://styled-components.com/):** Para estilização dos componentes (CSS-in-JS).
* **[React Hooks](https://reactjs.org/docs/hooks-intro.html):** (`useState`) para gerenciamento do estado da aplicação.

## 📂 Estrutura de Arquivos

O projeto está estruturado com uma separação clara dos componentes `Button` e `Input`, cada um contendo sua própria lógica (`index.js`) e estilos (`styles.js`).

![estrutura](https://github.com/eumatoliveira/calculator-in-react/blob/main/Screenshot_29.png)_

##

calculadora-react/ ├── src/ │ ├── components/ │ │ ├── Button/ │ │ │ ├── index.js │ │ │ └── styles.js │ │ └── input/ │ │ ├── index.js │ │ └── styles.js │ │ │ ├── App.js (Lógica principal e layout) │ ├── global.js (Estilos globais) │ └── index.js (Ponto de entrada) │ ├── package.json └── README.md


## 📦 Como Executar o Projeto

Siga os passos abaixo para rodar o projeto localmente.

1.  **Clone o repositório:**
    *(Lembre-se de alterar para a URL do seu repositório)*
    ```bash
    git clone [https://github.com/SEU_USUARIO/calculadora-react.git](https://github.com/SEU_USUARIO/calculadora-react.git)
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd calculadora-react
    ```

3.  **Instale as dependências:**
    (Isso instalará o React, `styled-components` e outras bibliotecas necessárias)
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm start
    ```

5.  Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver a aplicação.

##

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
