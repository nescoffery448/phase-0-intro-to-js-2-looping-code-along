function writeCards(names, eventName) {
    let newarray = []
    for (let i = 0; i < names.length; i++) {
        newarray.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    
      }
      return newarray

}

  function countDown(startingNumber) {
    while (startingNumber >= 0) {
        console.log(startingNumber --)

    }
  }

  countDown(4)