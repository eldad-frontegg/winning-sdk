// import React from 'react';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { StylesProvider, jssPreset } from '@mui/styles';
// import { CacheProvider } from '@emotion/react';
// import createCache from '@emotion/cache';
// import { create } from 'jss';
// import { render } from 'react-dom';
//
//
// class MyWebComponent extends HTMLElement {
//   connectedCallback() {
//     const shadowRoot = this.attachShadow({ mode: 'open' });
//     const emotionRoot = document.createElement('style');
//     const mountPoint = document.createElement('div');
//     shadowRoot.appendChild(emotionRoot);
//     const reactRoot = shadowRoot.appendChild(mountPoint);
//
//     const jss = create({
//       ...jssPreset(),
//       insertionPoint: reactRoot,
//     });
//
//     const cache = createCache({
//       key: 'css',
//       prepend: true,
//       container: emotionRoot,
//     });
//
//     render(
//       <StylesProvider jss={jss}>
//         <CacheProvider value={cache}>
//           <ThemeProvider theme={theme}>
//             <Demo />
//           </ThemeProvider>
//         </CacheProvider>
//       </StylesProvider>,
//       mountPoint
//     );
//   }
// }
// if (!customElements.get('my-element')) {
//   customElements.define('my-element', MyWebComponent);
// }

export const y = 5
