function egged(year,span) { 
    if (year === 0) {
        return "No chickens yet!";
    }
    
    let chickens = [];
    let totalEggsForTheYear = 0;
    
    for (let currentYear = 1; currentYear <= year; currentYear++) {
        for (let i = 0; i < 3; i++) {
            chickens.push({ age: 0, eggs: 300 });
        }
        
        let eggsThisYear = 0;
        
        for (let i = 0; i < chickens.length; i++) {
            let chicken = chickens[i];
            if (chicken.age < span) {
                eggsThisYear += chicken.eggs;
                chicken.age++;
                chicken.eggs = Math.floor(chicken.eggs * 0.8);
            }
        }
        
        totalEggsForTheYear = eggsThisYear;
    }
    
    return totalEggsForTheYear;
}


console.log(egged(2,1))
