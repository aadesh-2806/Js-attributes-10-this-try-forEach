///////////////////////////////////////////////////this keyword////////////////////////////////////////////

/*
const myir={
    PI:3.141,
    co(){
       console.log(`${this.PI} says Pi`);
    }
}

myir.co()
VM4400:4 3.141 says Pi                              //this depend on func it is present in

const meow=myir.co
undefined

meow()
VM4400:4 undefined says Pi                          //because of linking in windows as meow find this to window not myir

myir.co()
VM4400:4 3.141 says Pi
*/
////////////////////////////////////////////////////////try and catch/////////////////////////////////////////////////

/*
function yell(msg)
{
    try{
        console.log(msg.toUpperCase().repeat(3));
    }catch(e){
            console.log('please pass a stroing');
        }
}
undefined

yell('helldo')
VM4996:4 HELLDOHELLDOHELLDO

yell('')
VM4996:4 
undefined

yell()
VM4996:6 please pass a stroing
undefined
*/
////////////////////////////////////////////////////////forEach////////////////////////////////////////////////

/*
const number=[1,2,3,4,5,6,7]
undefined

function print(element) {
    console.log(element)
}
undefined

print(number[0])
VM5293:2 1

number.forEach(print)
VM5293:2 1
VM5293:2 2
VM5293:2 3
VM5293:2 4
VM5293:2 5
VM5293:2 6
VM5293:2 7
undefined

//or--------

number.forEach( function print(element) {
    console.log(element)})
VM5442:2 1
VM5442:2 2
VM5442:2 3
VM5442:2 4
VM5442:2 5
VM5442:2 6
VM5442:2 7
undefined

movies=[
    {
        title:'abraham',
        score: 99
    },
    {
        title:'abraha',
        score: 98
    },
    {
        title:'abrah',
        score: 97
    },
]
(3) [{…}, {…}, {…}]0: {title: "abraham", score: 99}1: {title: "abraha", score: 98}2: {title: "abrah", score: 97}length: 3__proto__: Array(0)

movies.forEach(function (movies){
    console.log(`${movies.title} - ${movies.score}/100`)
})
VM5729:2 abraham - 99/100
VM5729:2 abraha - 98/100
VM5729:2 abrah - 97/100
*/