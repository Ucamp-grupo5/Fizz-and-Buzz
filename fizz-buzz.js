let numSle = [];
 
for (let i = 1; i <= 100; i++) {
  numSle.push(i)
  
}

console.log(numSle)

for (let i = 2; i <= numSle.length; i++ ) {
  numSle.fill('fizz' , i, i+1);
  i++
  i++
  
}
for (let i = 4; i < numSle.length; i++) {
  if (numSle[i] == 'fizz') {
    numSle.fill('fizzbuzz', i, i+1);
    i++
    i++
    i++
    i++
  }else{
    
    numSle.fill('buzz', i, i+1);
    i++
    i++
    i++
    i++
  }
  
}
  

  

document.write(numSle);