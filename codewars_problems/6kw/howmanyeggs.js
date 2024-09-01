// Ronald's uncle left him 3 fertile chickens in his will. When life gives you chickens, you start a business selling chicken eggs which is exactly what Ronald decided to do.

// A chicken lays 300 eggs in its first year. However, each chicken's egg production decreases by 20% every following year (rounded down) until when it dies (after laying its quota of eggs).

// After his first successful year of business, Ronald decides to buy 3 more chickens at the start of each year.


// Your Task:

// For a given year, and life span of chicken span, calculate how many eggs Ronald's chickens will lay him that year, whereby year=1 is when Ronald first got his inheritance and span>0.

// If year=0, make sure to return "No chickens yet!".


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
