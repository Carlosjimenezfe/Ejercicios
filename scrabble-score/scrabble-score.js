export const score = (word) => {
  let score = 0;
  for (let i = 0; i < word.length; i++) {
    if ('aeioulnrst'.indexOf(word[i].toLowerCase()) > - 1)
      score++;
    else if ('dg'.indexOf(word[i].toLowerCase()) > - 1)
      score += 2;
    else if ('bcmp'.indexOf(word[i].toLowerCase()) > - 1)
      score += 3;
    else if ('fhvwy'.indexOf(word[i].toLowerCase()) > - 1)
      score += 4;
    else if ('k' == word[i].toLowerCase())
      score += 5;
    else if ('jx'.indexOf(word[i].toLowerCase()) > - 1)
      score += 8;
    else if ('qz'.indexOf(word[i].toLowerCase()) > - 1)
      score += 10;
  }
  return score;
};