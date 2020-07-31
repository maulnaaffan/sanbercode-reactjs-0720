// soal nomor 1
const newFunction = (firstName, lastName) => {
    return {
        firstName,
        lastName,
        fullName: () => {
            console.log(`${firstName} ${lastName}`)
        }
    }
}   
//Driver Code 
newFunction("William", "Imoh").fullName() 

// soal nomor 2
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}
const {firstName, lastName, destination, occupation, spell} = newObject

// Driver code
console.log(firstName, lastName, destination, occupation)

// soal nomor 3
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
//Driver Code
console.log(combined)