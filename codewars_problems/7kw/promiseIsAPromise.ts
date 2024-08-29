function promiseHelloWorld() {
    return Promise.resolve("Hello World!")
      }
  
  
promiseHelloWorld().then(value=>{
    console.log(value)
})  