let randomIndexArray = []
for (i=0; i<7; i++) {
    rn = Math.floor(Math.random() * 100)+1
  if (randomIndexArray.indexOf(rn) === -1) {
    randomIndexArray.push(rn)
  }
}
console.log(rn)