
create redux folder

make store to import configureStore

wrap provider = store main.tsx

make counterSlice.ts at redux ---> feature ---> counter

make a slice

return counterSlice.reducer

import it into store

counterSlice convert into counterReducer

so you goto redux in chorme browser and vite+react and state

counter Slice like schema

make reducer

i need access to increase value where we can access

ans: counterSLice er increment e peye jabo

counterSlice e business logic write korechi

now make a action where we export and work this

we make dispatch at app.tsx

make a useSelector into app.tsx

now we can easily destructure and use it

differnece export const app export default app

dangerous wrong dispatch increment e must must () use korte hobe

app.tsx state er type error er jonno store type banate hobe

create hook.ts at redux folder beside store.ts

create useAppSelector hooks and use app.tsx useAppSelector insteaf useSelector

how to use payload

add counter slice action payload

counterSlice e console log ache second parameter payload

1. export {} must be given
2. use only the name

export default

1. use
2. use any name


<!-- 24-1 -->

Basics of Functional programming

<!-- pure function of example -->
<!-- input same output same -->
const add = (a,b) => a + b;

increment function pure function but state change. state update hoye joy

state = 0
state += payload
state = payload

<!-- impure function -->

<!-- input same but output difference -->

let total = 0

const addToTotal = (amount) => (total = total + amount)

total kintu function e nai but eke ami update korchi

2nd example

const updateDate = () =>{
    new.Date()
}

each milisecond e update hobe parameter jai hook na keno

3rd function

const randomNumber = (amount) =>{
     return amount + Math.random()
}


<!-- Mutation -->

asol face theke change hoye jawa

example

const employee = {name: "nafis", address:{country:"bangladesh", city:"dhaka"}},

const employee2 = employee

employee2.name = "ahamed"

here i change employee when we use emplyee2.name ="ahamed" beacuse both are use same memory

const employe2 = {
    ...employee,
    name:"ahamed"
}

now employee and employee2 address are difference

but there is jhamela

employee2.address.city = "khulna"

here employee.address are change

so it is mutated

how can i updated

const employe2 = {
     ...employee,
     "name":"ahamed",
     address: {...employee.address, city:"chitagong"}
}

now right


nested object must be copy korte hobe.


<!-- core logic -->

state ke mututable kora jabe na.

redux toolkit use immer package.

its work 

original object give then you mutution data ami deep copy and handle data ami korbo




<!-- how can work immer -->

import {procedure} from "immer"

const employee = {name: "nafis", address:{country:"bangladesh", city:"dhaka"}},

const employee2 = procedure(employee,(draft)=>{
    draft.name = "ahamed"
})

when we use immer data are not mutable employe and employe2 are difference

here i copy employee and make duplicate data


<!-- Function Currying -->

const add = (a,b) => a + b

jei function parameter joto kom seita toto valo

when currying

<!--Curried  -->

const add = (a) => (b) => a + b

add(3)(5)

function add (a) {
    return (b){
        return a + b
    }
}

what is its benefit

const totalPrice = (amount,discount) => amount - amount * discount

console.log(totalPrice(100, 0.3)) 30% discount

Now i buy another product i also sent 

totalPrice(60,0.3)
totalPrice(70,0.3)

to much boring

now i convert Currying function

const totalPrice = (discount) => (amount) => amount - amount * discount

const withdiscount = totalPrice(0.3)

console(withDiscount(100))
console(withDiscount(200))

function add(a){
    return function (b){
        return function (c){
            return a + b + c;
        }
    }
}

<!-- 24-4 middleware -->

create middleware folder

logger.ts ---> middileware 

now go store.ts and set middleware 

and write function getmiddleware

it connect store

now ami logger state action pacchi


shadcn Ui 

new york
neutral 
yes


react-router-dom setup

npm i react-router-dom react-hook-form

src --> routes ---> route.tsx

ta main e import korte hobe

<!-- handle dark mode 24-7 -->

implement dark mode shadcn

make provider folder then make theme-proider.tsx and set code

wrap themeProvider into main.tsx

for night light make mode-toggle.tsx and its give typescript error

useTheme import theme provider.tsx

now install dropdown menu



<!-- command -->

npx shadcn@latest add [dropdown menu]

mode toggle import at app.tsx

<!-- initial Todo Slice And initial state -->

redux toolkit er quick start

create task folder into redux ---> feature ---> task folder and create taskSlice.tsx

now create reducer

import it at store.ts

types.ts name ekta interface create kori

app.tsx e task ta kori

taskSlice selectTask name state create korechi

now we use app.tsx selectask which we made taskSlice.

tailwind-merge cls very popular

goto clsx documentation

shadcn Ui theke dialogue anchi

task er module addtask.tsx ene shadn ui code ta push kori

theme color change 

index.css replace korbo

change color code

shadcn ui basically hook form use kore

dialogue er majkhane hook form use kori

<!-- 25-1 -->

Create foem addTask.tsx

task SLice e reducer add korbo

addtask form er console log er data ami taskSlice addtask reducer e sent korbo

addTask er kaj complete kore eke export kore dibo

addTask.tsx e useAppdispatch ante hobe

form theke sent kore dite hobe AppDispatch er maddome

taskSlice e id add korechi

<!-- for differnet generate id we use uuid -->

<!-- TaskSlice do better option -->

TaskSilce e ekta draft make korbo

elta pick baniye sob niye asbo.

make createTask data

