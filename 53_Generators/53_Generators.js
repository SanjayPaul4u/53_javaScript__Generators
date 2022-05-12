console.log("Generator tutorial");

//Generators in javaScript...
//first: initialize all data
function* numbersGenerator(){

    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const gen = numbersGenerator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next().value);
console.log(gen.next());
console.log(gen.next());

//second: don't need initialize data
function* numbersGen2(){
    let i  = 0;
    while(true){
        // yield i++;
        yield (i++).toString();
    }
}

const gen2 = numbersGen2();
console.log(gen2.next());
console.log(gen2.next().value);
console.log(gen2.next().value);