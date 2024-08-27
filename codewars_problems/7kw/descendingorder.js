function descendingOrder(n){
    let string=n.toString()
    let sortedString = string
    .split("")
    .sort((a, b) => b - a)
    .join("");

    return sortedString;
  }

  console.log(descendingOrder(123455))