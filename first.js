//1. No array abaixo, qual o número que pega a Ferrari?
let carros = ['BMW', 'Ferrari', 'Mercedes'];
let x = 1;

console.log('1. ' + carros[x]);

//2.Troque a Ferrari por Audi

carros.pop();
carros.pop();
carros.push('Audi');
carros.push('Mercedes');
//ou, forma mais simples e correta seria:
carros[1]= 'Audi';
//
console.log('2. Lista com Audi: ');
console.log(carros);

//3. Adicione o Volvo a Lista

carros.push('Volvo');
console.log('3. Lista com Volvo: ');
console.log(carros);

//4. Exiba quantos itens tem no array

console.log(`4. Itens no array = ${carros.length}`);