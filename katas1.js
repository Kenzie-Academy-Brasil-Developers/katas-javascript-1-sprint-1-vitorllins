function oneThroughTwenty() {

    let contador = []
    for (let i = 1; i <= 20; i++){
      contador.push(i)

    }
    return contador 
}
console.log(oneThroughTwenty())


function evensToTwenty() {
   let contador = []
   for (let i = 1; i <= 20; i++){
     if (i % 2 == 0){
     contador.push(i)
   } 
  }
   return contador
}
console.log(evensToTwenty())


function oddsToTwenty() {
    let contador = []
    for (let i = 0; i <= 20; i++){
      if(i % 2 !== 0){
        contador.push(i)
      }

    }
   return contador
}
console.log(oddsToTwenty())
//call function oddsToTwenty

function multiplesOfFive() {
    let mults = []
    for (let i = 1; i <= 100; i++){
      if(i % 5 == 0){
        mults.push(i)
      }
    }
      return mults
}
      console.log(multiplesOfFive())


function squareNumbers() {
    let quadrados = []
    
    for(let i = 1; i <= 10; i++){
      let pow = i**2
      quadrados.push(pow)
    }
    return quadrados
}
console.log(squareNumbers())


function countingBackwards() {
    let reverso = []
    for (let i = 20; i >= 1; i--){
      reverso.push(i)
    }
    return reverso
}
console.log(countingBackwards())


function evenNumbersBackwards() {
    let pareverso = []
    for (let i = 20; i >= 1; i--){
      if(i % 2 == 0){
        pareverso.push(i)
      }
      
    }
    return pareverso
}
console.log(evenNumbersBackwards())


function oddNumbersBackwards() {
  let impareverso = []
  for (let i = 20; i >= 1; i--){
    if(i % 2 !== 0){
      impareverso.push(i)
    }
  }
  return impareverso

}

console.log(oddNumbersBackwards())

function multiplesOfFiveBackwards() {
    let fivereverse = []
    for (let i = 100; i >= 1; i--){
      if(i % 5 === 0){
        fivereverse.push(i)
      }
    }
    return fivereverse
}
console.log(multiplesOfFiveBackwards())


function squareNumbersBackwards() {
    let quadreverse = []
    for (let i = 10; i >= 1; i--){
      let pow = i**2
      quadreverse.push(pow)

    }
    return quadreverse
}
console.log(squareNumbersBackwards())

