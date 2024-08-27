function pointsNumber(radius){
    let count=0
    for(let x=-radius;x<=radius;x++)
    {
        for(let y=-radius;y<=radius;y++)
        {
            if(x*x+y*y<=radius*radius)
            {
                count++
            }

        }
    }
     return count;
   }


   console.log(pointsNumber(2))