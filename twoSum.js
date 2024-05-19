const twoSum = (numbers, target) => {
  if (!numbers || numbers.length === 0) return;
  if (!target) return;

  let low = 0;
  let high = numbers.length - 1;

  while (low < high) {
    const currentSum = numbers[low] + numbers[high];

    if (currentSum > target) {
      high--;
    } else if (currentSum < target) {
      low++;
    } else {
      return [low + 1, high + 1];
    }
  }
};

console.log(twoSum([4, 11, 17, 25], 21));
console.log(twoSum([0, 1, 2, 2, 3, 5], 4));
console.log(twoSum([-1, 0], -1));
