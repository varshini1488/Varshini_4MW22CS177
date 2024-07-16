let findMax = (arr) => {
    if (arr.length === 0) {
      return null;
    }
  
    let max = arr[0];
  
    for (const i in arr) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  
    return max;
  };
  
  let m = [3,4,6,1,4,7,9];
  let ans = findMax(m);
  console.log(ans); 