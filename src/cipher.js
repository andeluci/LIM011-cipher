window.cipher = {
  encode: (offset, string) => {
  let cifrado = '';
  let ubicar = 0; 
    for (let i = 0; i < string.length; i++){
      if (string.charCodeAt(i) >= 65  && string.charCodeAt(i) <= 90){
       ubicar=((string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65);
      } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122){
        ubicar=((string.charCodeAt(i) - 97 +  parseInt(offset)) % 26 + 97); 
      } else if (ubicar !== 32) {
        cifrado += ' ';
        } else {
        cifrado = string.charCodeAt(i);
      }
      let identificar = String.fromCharCode(ubicar);
      cifrado += identificar; 
       
  }  return cifrado;  }, 


  decode: (offset, string) => {
    let descifrado = '';
    let posicionar = 0;
    for (let i = 0; i < string.length; i++){
      if (string.charCodeAt(i) >=65 && string.charCodeAt(i) <=90){
        posicionar=((string.charCodeAt(i) + 65 - parseInt(offset)) % 26 + 65);
      } else if (string.charCodeAt(i) >=97 && string.charCodeAt(i) <=122) {
        posicionar=((string.charCodeAt(i) + 97 - parseInt(offset)) % 26 + 97);
      } else {
        descifrado = string.charCodeAt(i);
      } let establecer = String.fromCharCode(posicionar);
        descifrado += establecer;
    }
       return descifrado;  
  }
  };
