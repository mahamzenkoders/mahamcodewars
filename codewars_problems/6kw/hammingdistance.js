// The Hamming Distance is a measure of similarity between two strings of equal length. Complete the function so that it returns the number of positions where the input strings do not match.

// Examples:

// a = "Hello World"
// b = "Hello World"
// Result: 0

// a = "espresso"
// b = "Expresso"
// Result: 2


function hamming(a, b) {
	let firstString=a.toLowerCase().split("")
    let secondString=b.toLowerCase().split("")
    if(firstString.length==secondString.length)
    {
        for(let i=0;i<firstString.length;i++)
        {
            if(firstString[i]!=secondString[i])
                {
                    firstString=a.split(" ");
                    secondString=b.split(" ");
                    return i+1;
                }
            
        }
        return 0;
    }
    else{
        return 0;
    }
   
}

a = "espresso"
b = "Expresso"


console.log(hamming(a,b))

