function pyramid(stones) {
  if (!stones || stones.length < 6) {
    return null; // Not enough stones to form a pyramid
  }

  // Count occurrences of each stone
  const stoneCounts = stones.reduce((acc, stone) => {
    acc[stone] = (acc[stone] || 0) + 1;
    return acc;
  }, {});

  // Convert to array of [stone, count] pairs and sort by stone value in descending order
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
      break; // We've found valid stones for all layers
    }
  }

  if (x === null || y === null || z === null) {
    return null; // Couldn't find valid stones for all layers
  }

  const totalValue = x + 2 * y + 3 * z;
  return totalValue;
}

console.log(pyramid([1,1,1,2,2,3,3,3])); // Expected output: 14
