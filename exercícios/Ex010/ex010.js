//Array

let alunos = [{nome: "Lucas", idade: 75}, {nome: "Yasmin", idade: 17}, {nome: "Maria", idade: 34}, {nome: "Roberto", idade: 16}, {nome: "Miguel", idade: 47}];

console.log(alunos[1].idade)

let alunosFiltro = alunos.filter((alunos) => alunos.idade >= 18)
console.table(alunosFiltro)

let alunoRoberto = alunos.find((alunos) => alunos.nome == "Roberto")
console.log(alunoRoberto)

let alunoRobertoIndex = alunos.findIndex((alunos) => alunos.nome == "Roberto")
console.log(alunoRobertoIndex)

let idades = alunos.reduce((acc, alunos) => {return acc + alunos.idade;}, 0);
console.log(idades);

let acimadeNove = alunos.some((alunos) => alunos.idade < 10);
console.log(acimadeNove)

let menorqueNovente = alunos.every((alunos) => alunos.idade <=  90)
console.log(menorqueNovente);