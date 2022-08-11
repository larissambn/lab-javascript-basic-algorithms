
let hacker1 = `Windows`;
console.log (`The drivers name is ${hacker1}`); 

let hacker2 = `Chrome`;
console.log (`The navigator's name is ${hacker2}`)

console.log (hacker1.length);
console.log (hacker2.length);

if (hacker1.length > hacker2.length) 
{console.log (`The driver has the longest name, it has ${hacker1.length} caracteres`)} else { (hacker2.length > hacker1.length) 
{console.log (`It seems the navigator has the longest name, it has ${hacker2.length} caracteres`);} 
 } 

if (hacker2.length = hacker1.length) 
{console.log (`Wow, you both equally have long names, ${hacker2.length} caracteres`);}

const hacker3 = hacker1.split('').join(' ').toUpperCase();
console.log(hacker3); 




let hacker1second="";                        // Cria uma variável para cada nome.
let hacker2second="";

for (let i=0;i<hacker1.length;i++){         // cria um loop que tem o tamanho da string.
    hacker1second+=hacker1.charAt(i)+" ";    // a cada iteração é acrescentado na variável a letra da posição e um string " "
}

console.log(hacker1second.toUpperCase());    // mostra a variavel em letras maiusculas.


for (let i=0;i<hacker2.length;i++){
    hacker2second+=hacker2.charAt(i)+" ";
}

console.log(hacker2second.toUpperCase());




let hacker1Inv=""                               // Cria variavel do nome invertido

for (let i=(hacker1.length-1);i>-1;i--){        // Cria um loop que vai do maior indice até 0
    hacker1Inv+=hacker1.charAt(i);              // Acrescenta o indice da string na variavel do nome invertido
}

console.log(hacker1Inv);                        // Mostra a variavel do nome invertido.




let hacker2Inv=""                               // Cria variavel do nome invertido

for (let i=(hacker2.length-1);i>-1;i--){        // Cria um loop que vai do maior indice até 0
    hacker2Inv+=hacker2.charAt(i);              // Acrescenta o indice da string na variavel do nome invertido
}

console.log(hacker2Inv);                        // Mostra a variavel do nome invertido.



if  (hacker1<hacker2) {                                         // Compara as strings lexicalmente. Se hacker1 é menor então executa.
    console.log(`The driver's name goes first.`);               // Retorna a variavel hacker1.
} else if (hacker1>hacker2) {                                   // Compara as strings lexicalmente. Se hacker1 é maior então executa.
    console.log(`Yo, the navigator goes first definitely.`)
} else {                                                        // Sem pestanejar, aceita qualquer coisa e retorna abaixo.
    console.log(`What?! You both have the same name?`) }