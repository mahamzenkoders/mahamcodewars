function copyList(l){
    return [...l]
  }
  
  t = [1, 2, 3, 4]
  tCopy = copyList(t);
  t[1]+=5;
  console.log(tCopy)
  console.log(t)
  
  