// Your task is to write a function which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step.

// Examples

// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)

const sequenceSum = (begin:number,end:number, step:number) => {
    let sum:number[]=[]
    let sumSequence:number=0;
    let i:number=0
    while(begin<=end)
    {
        sum.push(begin)
        begin+=step
        sumSequence+=sum[i]
        i++;
    }
    return sumSequence;
  };


  console.log(sequenceSum(2,2,2))      


