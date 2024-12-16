export function dedup(nums) {
  const seen = new Set();
  const output = [];

  for (const num of nums) {
    if (!seen.has(num)) {
      seen.add(num);
      output.push(num);
    }
  }
  
  return output;
};