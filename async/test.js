console.log("1. Start of script")

Promise.resolve().then(() => {
  console.log("2. Inside first promise")
  return Promise.resolve("3. Resolved value from first promise")
})

setTimeout(() => console.log("4. Inside setTimeout"), 0)

const fs = require("fs")

fs.readFile('../user/user.txt', ()=> console.log("5. I/O operation completed"))

setImmediate(()=> console.log("6. Inside setImmediate"))

process.on('exit', (code)=>{
    console.log(`7. About to exit with code`)

})

console.log("8. End of script")