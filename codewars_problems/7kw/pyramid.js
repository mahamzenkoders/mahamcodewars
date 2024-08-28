// Pyramid building in Egypt
// You are a Pharaoh in ancient Egypt, and you want to build the perfect pyramid for yourself. There's only a limited number of stones, however, and different kinds of stones vary in their value. You want to maximize the value of your pyramid while keeping it exactly three layers high.

// In essence, you're given an array of integers, which represent the stones, and your task is to assemble the highest-value pyramid from them. The pyramid is made out of exactly three layers, containing:

// Top layer: 1 integer
// Middle layer: 2 identical integers
// Bottom layer: 3 identical integers
// Additionally, no integer can appear in two or more layers. That is, each layer is made from stones of the same value, and stones of the same value can be used at most in one layer.

// Graphically, the structure of the pyramid looks like this, where 
// x ≠ y ≠ z



function pyramid(stones) {
  if (!stones || stones.length < 6) {
    return null; 
  }


  const stoneCounts = stones.reduce((acc, stone) => {
    acc[stone] = (acc[stone] || 0) + 1;
    return acc;
  }, {});

 
  const sortedStones = Object.entries(stoneCounts).sort((a, b) => b[0] - a[0]);

  let x = null, y = null, z = null;

  for (let [stone, count] of sortedStones) {
    stone = parseInt(stone);
    if (count >= 3 && z === null) {
      z = stone;
    } else if (count >= 2 && y === null) {
      y = stone;
    } else if (count >= 1 && x === null) {
      x = stone;
    }

    if (x !== null && y !== null && z !== null) {
      break;
    }
  }

  if (x === null || y === null || z === null) {
    return null; 
  }

  const totalValue = x + 2 * y + 3 * z;
  return totalValue;
}

console.log(pyramid([1,1,1,2,2,3,3,3])); 
