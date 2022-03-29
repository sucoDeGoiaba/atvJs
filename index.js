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