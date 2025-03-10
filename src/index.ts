let mensagem: string = "Olá, TypeScript!";
console.log(mensagem);

//exercício 1
//Crie um array de números e imprima a soma dos valores
let valores: number[] = [10, 20, 30];
let somaValores: number = valores.reduce((acc, val) => acc + val, 0);
console.log("Soma dos valores:", somaValores);

//exercício 2
//Crie uma função que recebe um nome e retorna uma mensagem personalizada
function mensagemPersonalizada(nome: string): string {
    return `Olá, ${nome}! Bem-vindo ao TypeScript.`;
}
console.log(mensagemPersonalizada("Ana"));

//exercício 3
//Crie uma classe Carro com atributos marca, modelo e ano. Instancie um objeto e exiba suas informações
class Carro1 {
    constructor(public marca: string, public modelo: string, public ano: number) { }
    detalhes(): string {
        return `${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
}
const carro1 = new Carro1("Toyota", "Corolla", 2022);
console.log(carro1.detalhes());