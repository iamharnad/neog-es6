const defaultExample = (a, b) => {
    if (b === undefined) {
      b = 5
    }
    return a + b
  }
  
  // Instead
  const defaultExample2 = (a, b = 5) => a + b
  
  console.log(defaultExample(2, 4))
  console.log(defaultExample2(3))