window.cipher = {
  encode: (offset, string) => {
    /* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
    let cifrado = '';
    for (let i = 0; i < string.length; i++) {
      const ubicar = string.charCodeAt(i);
      if (ubicar >= 65 && ubicar <= 90) {
        cifrado += String.fromCharCode(((ubicar - 65 + parseInt(offset, 10)) % 26) + 65);
      } else if (ubicar >= 97 && ubicar <= 122) {
        cifrado += String.fromCharCode(((ubicar - 97 + parseInt(offset, 10)) % 26) + 97);
      } else {
        cifrado += string.charAt(i);
      }
    } return cifrado;
  },

  decode: (offset, string) => {
    let descifrado = '';
    for (let i = 0; i < string.length; i++) {
      const posicionar = string.charCodeAt(i);
      if (posicionar >= 65 && posicionar <= 90) {
        descifrado += String.fromCharCode(((posicionar + 65 - parseInt(offset, 10)) % 26) + 65);
      } else if (posicionar >= 97 && posicionar <= 122) {
        descifrado += String.fromCharCode(
          ((posicionar - 97 - parseInt(offset, 10) + 52) % 26) + 97,
        );
      } else {
        descifrado += string.charAt(i);
      }
    } return descifrado;
  },
};
