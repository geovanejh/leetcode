const isAlpha = (str: string) => /^[a-zA-Z]+$/.test(str);

function reverseOnlyLetters(s: string): string {
  let reversed = s.split("");
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (!isAlpha(s[left])) {
      left++;
      continue;
    }

    if (!isAlpha(s[right])) {
      right--;
      continue;
    }

    let temp = reversed[left];
    reversed[left] = reversed[right];
    reversed[right] = temp;
    left++;
    right--;
  }

  return reversed.join("");
}
