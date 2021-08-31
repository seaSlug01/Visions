import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*, *::after, *::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background: #1b1b1b;
  font-family: 'Inter', sans-serif;
}

button {
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 3px solid #23d997;
  background: transparent;
  color: white;
  transition: all 0.5s ease;
  font-family: 'Inter', sans-serif;
  
  &:hover {
    background-color: #23d997;
    text-shadow: -1px 2px 3px #0000009c;
  }
}

h2 {
    font-weight: lighter;
    font-size: 4rem;
  }

  h4 {
    font-weight: bold;
  }

  span {
    font-weight: bold;
    color: #23d997;
  }

  a {
    font-size: 1.1rem;
  }

  h3 {
    color: white;
  }

  p {
    padding: 3rem 0rem;
    color: #cecece;
    font-size: 1.4rem;
  }

`;

export default GlobalStyle;
