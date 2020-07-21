const functions = {
  gradeClassifier: (grade) => {
    if(grade >= 95 && grade <= 100) return 'O: Outstanding'
    if(grade >= 90 && grade < 95) return 'V: Very Good'
    if(grade >= 85 && grade < 90) return 'G: Good'
    if(grade >= 80 && grade < 85) return 'S: Satisfactory'
    if(grade >= 75 && grade < 80) return 'N: Needs Improvement'
    if(grade >= 0 && grade < 75) return 'D: Did not Meet Expectation'
    return 'Invalid user input.'
  }
}

module.exports = functions;
