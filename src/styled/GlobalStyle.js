import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  margin-top: 25px;
  background-color: #F3F7FA;
  min-height: 100vh;
}

@media (max-width: 767px) {
  .row {
    flex-direction: column;
  }
}
`;

export default GlobalStyle;
