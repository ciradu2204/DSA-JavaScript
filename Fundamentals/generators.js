
function* generatorFunction(){
    yield "Hello"
    yield "World"
}

const iterable = generatorFunction()

for(const word of iterable){
    console.log(word)
}