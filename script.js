
const obj = {
    grere: "wcvwdc",
    ojtoevj: "vjdoijoc"
}
console.log("загрузка данных");
const promise = new Promise((resolve, reject) => {
const test = false
    const jsonData = JSON.stringify(obj)
   if(!test){
    setTimeout(() => {
        console.log(
            'передача данных'
        );

        resolve(jsonData)
     
    }, 2000)

   }
   else{
    reject("Error")
   }
}).then((jsonData) => {
    
 

           const jsData = JSON.parse(jsonData)
    setTimeout(() => {
        console.log('завершение работы');
        console.log(jsData);

    }, 2000)

    
 
})
promise.catch((reject) => {
    console.error(reject);
    alert (reject) 
})