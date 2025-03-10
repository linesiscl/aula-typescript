//interfaces
//exercício 1
interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    motor?: string;
}
const meuCarro: Carro = {
    marca: "Hyundai",
    modelo: "HB20",
    ano: 2023

};
console.log("Meu carro: ", meuCarro);

//exercicio 2
interface Multiplicacao {
    (a: number, b: number): number;
}
const multiplicar: Multiplicacao = (x, y) => x * y;
console.log(multiplicar(2,4));
console.log(multiplicar(50, 14));
console.log(multiplicar(3,9));

//generics
//exercicio 3
function inverterArray<T>(array: T[]): T[] {
    return array.reverse();
}

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const texto = ["teste de generics", "aula Typescript"];
console.log(inverterArray(num));
console.log(inverterArray(texto));

//exercicio 4
interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
}
class UsuarioRepositorio implements Repositorio<{ nome: string; email: string }> {
    private usuarios: { nome: string; email: string }[] = [];
    salvar(dado: { nome: string; email: string }): void {
        this.usuarios.push(dado);
    }
    obterTodos(): { nome: string; email: string }[] {
        return this.usuarios;
    }
}

const repositorio = new UsuarioRepositorio();
repositorio.salvar({ nome: "Aline", email: "alinef@email.com" });
repositorio.salvar({ nome: "Matheus", email: "matheusm@email.com" });
console.log("Lista de usuários:", repositorio.obterTodos());

//manipulação avançada de dados
//exercicio 5
type RespostaServidor = string | boolean;
function processarResposta(resposta: RespostaServidor): void {
    if (typeof resposta === "string") {
        console.log(`Resposta do servidor: ${resposta}`);
    } else if (typeof resposta === "boolean") {
        console.log(`A operação foi bem-sucedida? ${resposta ? "Sim" : "Não"}`);
    }
}

processarResposta("Seus dados foram processados corretamente!");
processarResposta(true);
processarResposta(false);

//exercicio 6
type Estudante = {
    nome: string;
    curso: string;
};
type Trabalhador = {
    empresa: string;
    cargo: string;
};
type EstudanteTrabalhador = Estudante & Trabalhador;
const estudanteTrabalhador: EstudanteTrabalhador = {
    nome: "Camilly",
    curso: "Engenharia de Software",
    empresa: "Fiap",
    cargo: "Estagiária"
};
console.log("Estudante Trabalhador:", estudanteTrabalhador);