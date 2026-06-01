const animal = {
   nome: "thor" ,
   especie: "cachorro", //string
   idade: 4, //number
   vcinado: true, //boolean (true = vedairo e false = falso) 
   tutor: false
}

console.log(animal. vacinado);
//console.log(animal.idade);

animal.idade = 5;
animal.especie = "labrador";
animal.tutor = true;
console.log(animal.idade);
console.log(animal);

console.log(´o ${animal.especie} chama-se ${animal.nome}!´);
console.log('sua idaed e ${animal.idade} e sua vacina estaem dia: ${animal.vacinado}´);