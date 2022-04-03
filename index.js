// Arrow Function
// Transforme as funções declarativas abaixo em Arrow Functions
// const upperName = function (name) { return name.toUpperCase(); };
const upperName = (name) => {
    return name.toUpperCase()
}
// console.log(upperName('uga'));

// function myFunction(p1, p2) { return p1 * p2; }
const myFunction = (p1, p2)=>{
    return p1 * p2
}
// console.log(myFunction(2, 2));

// function toCelsius(fahrenheit) { return (5 / 9) * (fahrenheit - 32); }
const toCelsius = (fahrenheit)=>{
    return (5/9) * (fahrenheit - 32);
}
// console.log(toCelsius(32));


// Destructuring - Desestruturação
// Tendo a função abaixo, usando destructuring, reescreva-a de modo que fique em apenas 2
// linhas de código

// function handleMouseMove(event) { 
//     const clientX = event.clientX; 
//     const clientY = event.clientY; 
//     console.log(clientX, clientY); 
// }

function handleMouseMove(event){
    const [clientX, clientY] = [event.clientX, event.clientY]
    console.log(clientX, clientY);
}


// A partir do objeto abaixo, instancie apenas uma variável que receba first utilizando
// destructuring

const obj = { first: 'Jane', last: 'Doe' };
const {first} = obj
// console.log(first);

// A partir do objeto abaixo, instancie uma variavel que receba name outra para colors
const company = { 
    name: 'ACME Corp',
    address: 'Nowhere st',
    products: {
        shirts: {
            colors: ['red', 'green', 'blue'],
        },
        socks: {
            colors: ['cyan', 'magenta', 'yellow'],
        }
    }
}

const {name} = company
const {colors} = company.products.shirts

// console.log(name);
// console.log(colors);

// Rest & Spread
// Utilizando um operador, clone o objeto clothes
const clothes = {
    pants: { colors: ['black', 'blue'] },
    shirts: { colors: ['white', 'red'] },
    socks: { colors: ['beige', 'gray'] }
};

const cloneClothes = {...clothes}
// console.log(cloneClothes);

// Novamente utilizando um operador, clone o objeto clothes acima e adicione a este clone:
// um objeto shoes com propriedade : colors: ['yellow', 'purple']
// De modo que fique igual aos objetos pants, shirts e socks

const cloneClothes2 = {shoes : {colors: ['yellow', 'purple']}, ...clothes}
// console.log(cloneClothes2);

// Arrays e seus métodos
// A partir da variável abaixo e utilizando um método de array, retorne a raiz quadrada de
// todos os valores do array original em um novo array

var numbers = [4, 9, 16, 25];

function sqrRoot(valores){
    return valores.map(Math.sqrt)
}
// console.log(sqrRoot(numbers));

// A partir da variável abaixo e utilizando um método de array, multiplique todos os valores
// do array por 10. Utilize arrow function.
var numbers = [65, 44, 12, 4];

const multiplicando = numbers.map((num)=>{
    return num * 10
})
// console.log(multiplicando);

// A partir da variável abaixo retorne um array com valores de age(idade) maiores ou iguais a
// 18 com arrow function e filter
var ages = [32, 33, 16, 40];

const filtro = ages.filter((idade)=> idade >= 18)
// console.log(filtro);

// A partir do objeto abaixo, retorne somente os nomes dos objetos do tipo cachorro ( type:
// dog)com filter
const data = [
    {
        name: 'Butters',
        age: 3,
        type: 'dog',
    },
    {
        name: 'Lizzy',
        age: 6,
        type: 'dog',
    },
    {
        name: 'Red',
        age: 1,
        type: 'cat',
    },
    {
        name: 'Joey',
        age: 3,
        type: 'dog',
    },
];

function filtrandoDogs(obj){
    if (obj.type === 'dog') {
        return obj
    } 
}

const dogFiltrados = data.filter(filtrandoDogs)
console.log(dogFiltrados);

// Por fim, ainda utilizando o array acima, retorne a soma da idade de todos os cachorros (
// type: dog)


let contador = 0
    
for (let i = 0; i < dogFiltrados.length; i++) {
    const element = dogFiltrados[i];
    contador += element.age
}

console.log(contador);
