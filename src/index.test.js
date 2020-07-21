const { gradeClassifier } = require('./index');

// TODO: Write unit tests here
describe('Letter Grade Module', () => {
  it('The user inputs a number grade, then the output should be the corrseponding letter grade', () => {
    // Arrange
      var testO = 98
      var testV = 92
      var testG = 86
      var testS = 83
      var testN = 79
      var testD = 62
      var testError = -1

    // Act
      var outputO = gradeClassifier(testO)
      var outputV = gradeClassifier(testV)
      var outputG = gradeClassifier(testG)
      var outputS = gradeClassifier(testS)
      var outputN = gradeClassifier(testN)
      var outputD = gradeClassifier(testD)
      var outputError = gradeClassifier(testError)

    // Assert
      expect(outputO).toEqual('O: Outstanding')
      expect(outputV).toEqual('V: Very Good')
      expect(outputG).toEqual('G: Good')
      expect(outputS).toEqual('S: Satisfactory')
      expect(outputN).toEqual('N: Needs Improvement')
      expect(outputD).toEqual('D: Did not Meet Expectation')
      expect(outputError).toEqual('Invalid user input.')
  });
});
