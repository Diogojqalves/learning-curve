const { generateText } = require('./util');

//test = test runner; expect = assertion library
test('should output name and age', () => {// function from JEST
    // testing code
    const text = generateText('Max', 29);
    expect(text).toBe('Max (29 years old)');
});

// run on the terminal
//npm test