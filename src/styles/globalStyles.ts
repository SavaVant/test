import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
   @font-face {
	   font-family: 'Roboto';
	   src: url('../../public/assets/fonts/Roboto/Roboto-Regular.ttf') format('truetype');
	   font-weight: normal;
	   font-style: normal;
   }


  body {
    font-family: "Roboto", sans-serif;
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
	  font-family: "Roboto", sans-serif;
  }

  html,
  body,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-size: 100%;
    font-family: inherit;
    vertical-align: baseline;
    letter-spacing: normal;
  }

  /* HTML5 display-role reset for older browsers */

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    line-height: 1;
  }

  html,
  body {
    height: 100%;
  }

  ol,
  ul {
    list-style: none;
  }

  li {
    list-style-type: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote {
    &:before,
    &:after {
      content: "";
    }
  }

  q {
    &:before,
    &:after {
      content: "";
    }
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    text-decoration: none;
  }

  p {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
  }
`;

export default GlobalStyles;
