const binaryArrayToNumber = arr => {
    let total=0
  for(let i=0;i<arr.length;i++)
  {
    if(arr[i]==1&&i==0)
    {
        total+=8
    }
    else if(arr[i]==1&&i==1)
    {
        total+=4
    }
    else if(arr[i]==1&&i==2)
    {
        total+=2
    }
    else if(arr[i]==1&&i==3)
    {
        total+=1
    }
  }
  return total
};

console.log(binaryArrayToNumber([1,1,1,1]))