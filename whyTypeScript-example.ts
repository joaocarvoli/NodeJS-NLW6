// For to type name:typeOfVariable
// The objective of TypeScript is to type objects to ease work with some function
// To use TypeScript is a good practice and it's used in development environment 
// The .ts is not recognize by Node so is necessary to convert it to .js

interface User {
    name: string, email:string, phone:number, older?:number // older is a optional param
}

function sendEmail({email, name, phone}:User){
    console.log(`Hello ${name}, your email is ${email} and your number is ${phone}`)
    // 
    // 
    // logic...
}

sendEmail({
    name:"Victor",
    email: "test@test.com.br", 
    phone: 999999999
})
