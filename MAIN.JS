const texto = document.querySelector('.texto');
const texto1 = document.querySelector('.texto1');
const forma = document.querySelector('.forma');
let S = ['AB'];
let A = ['aB'];
let B = ['bbB', 'b'];

texto.innerHTML += 
texto1.innerHTML += `<p> Gramatica a ser transforma em forma normal de Greibach <br> <br> S -> ${S} <br> A -> ${A} <br> B -> ${B}</p>`;

function substituirSimbolos(texto) {
  let resultado = '';

  for (let i = 0; i < texto.length; i++) {
    let simbolo = texto.charAt(i);

    if (simbolo === 'S') {
      resultado += 'A1';
    } else if (simbolo === 'A') {
      resultado += 'A2';
    } else if (simbolo === 'B') {
      resultado += 'A3';
    } else {
      resultado += simbolo;
    }
  }

  return resultado;
}

function adicionarLetraMinusculaNaFrente(palavra) {
  if (palavra.length > 0 && /^[A-Z]+$/.test(palavra.charAt(0))) {
    let primeiraLetraMinuscula = palavra.charAt(0).toLowerCase();
    palavra = primeiraLetraMinuscula + palavra;
  }

  return palavra;
}

let A1 = [] ,A2 = [], A3 = [];
for (let index = 0; index < S.length; index++) {

  A1.push(substituirSimbolos(S[index]));
  

}

for (let index = 0; index < A.length; index++) {

  A2.push(substituirSimbolos(A[index]));  

}

for (let index = 0; index < B.length; index++) {

  A3.push(substituirSimbolos(B[index]));

}


A1 =   adicionarLetraMinusculaNaFrente(A1[0]);

forma.innerHTML += `<p> Gramatica transformada em forma normal de Greibach <br> <br> A1 -> ${A1} <br> A2 -> ${A2} <br> A3 -> ${A3}</p>`;



console.log(A1)







