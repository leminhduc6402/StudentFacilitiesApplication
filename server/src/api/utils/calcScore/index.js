export const calcScore10 = (midExamScore, finalExamScore) =>
  parseFloat(midExamScore) * 0.5 + parseFloat(finalExamScore) * 0.5;

export const calcScore4 = (score10) => {
  if (score10 >= 8.5) return 4;
  else if (score10 >= 8.0) return 3.5;
  else if (score10 >= 7.5) return 3.0;
  else if (score10 >= 7.0) return 3.0;
  else if (score10 >= 6.5) return 2.5;
  else if (score10 >= 6.0) return 2.0;
  else if (score10 >= 5.0) return 1.5;
  else return 1.0;
};

export const calcScoreC = (score10) => {
  if (score10 >= 9.0) return 'A+';
  else if (score10 >= 8.5) return 'A';
  else if (score10 >= 8.0) return 'B+';
  else if (score10 >= 7.5) return 'B';
  else if (score10 >= 6.5) return 'C+';
  else if (score10 >= 6.0) return 'C';
  else if (score10 >= 5.0) return 'D+';
  else return 'D';
};
