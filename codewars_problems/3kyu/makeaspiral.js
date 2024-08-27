// Your task, is to create a NxN spiral with a given size.

// For example, spiral with size 5 should look like this:

// 00000
// ....0
// 000.0
// 0...0
// 00000
// and with the size 10:

// 0000000000
// .........0
// 00000000.0
// 0......0.0
// 0.0000.0.0
// 0.0..0.0.0
// 0.0....0.0
// 0.000000.0
// 0........0
// 0000000000
// Return value should contain array of arrays, of 0 and 1, with the first row being composed of 1s. For example for given size 5 result should be:




function spiralize (n) {
    let array=[]
    for(let i=0;i<=n;i++)
      {
        array.push(0)
        for(let j=0;j<=n;j++)
          {
            array.push(0)
          }
      }
      return array
  }



  console.log(spiralize(5))