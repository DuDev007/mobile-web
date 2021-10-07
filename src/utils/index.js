export const getImage = (imagePath) => {
    // input uploads/2020-01-09T05:54:43.740ZiPhone-7-Plus-32GB-Rose-Gold.png
    // expectation: https://mobileshop.hungvu.net/2020-01-09T05:54:43.740ZiPhone-7-Plus-32GB-Rose-Gold.png
  
    const imageName = imagePath.replace('uploads/', '') // => 2020-01-09T05:54:43.740ZiPhone-7-Plus-32GB-Rose-Gold.png
  
    return `https://mobileshop.hungvu.net/${imageName}`
  }
