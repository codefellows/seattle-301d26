// Resource: Regex Sandbox http://regex101.com
let test

// Basics of building a pattern
test = /./g.test('hello world! I am a universal match!')
console.log('universal select first anything', test); // => true
test = /./g.test('hello world! I am a universal match!')
console.log('universal select all', test); // => true

// Integer tests
test = /\d/g.test(1234)
console.log('any amount of digits', test); // => true
test = /\d/g.test('abcd')
console.log('won\'t match letters', test); // => false

test = /[0-9]/g.test(01234)
console.log('any number of digits in range 0-9', test) // => true
test = /[3-5]/g.test(3453)
console.log('any number of digits in range 3-5', test) // => true
test = /[3-5]/g.test(9999)
console.log('any number of digits in range 3-5', test) // => false

test = /[0-1][0-9]/.test(19)
console.log('any number in range 0-19', test) // => true

// Letter tests
test = /\w/g.test('abcd')
console.log('any amount of letters', test); // => true
test = /\w/g.test(1234)
console.log('won\'t match digits', test); // => false

test = /[a-z]/g.test('abcxyz')
console.log('any number of letters in range a-z', test) // => true
test = /[A-Z]/g.test('ABCXYZ')
console.log('any number of letters in range A-Z', test) // => true
test = /[A-Za-z]/g.test('aBcXyZ')
console.log('any number of letters in range a-z and A-Z', test) // => true

test = /[A-B]e/.test('The Best of All Time.')
console.log('first combination of Ae-Be', test) // => true


// REGEX101 Examples
let pattern
  // Phone numbers
pattern = /\(?\d{3}\)?\s?-?\.?\d{3}\s?-?\.?\d{4}/g
console.log('matching', '2062509329'.match(pattern))
console.log('matching', '206 250 9329'.match(pattern))
console.log('matching', '206-250-9329'.match(pattern))
console.log('matching', '206.250.9329'.match(pattern))
console.log('matching', '(206) 250-9329'.match(pattern))
console.log('matching', '(206)250-9329'.match(pattern))

  // Emails
pattern = /\w+\.?\w+@\w+\.\w+/g
console.log('matching', 'wat@wat.com'.match(pattern))
console.log('matching', 'hello@example.io'.match(pattern))
console.log('matching', 'who@why.where'.match(pattern))
console.log('matching', 'wat.watman@manofwat.wat'.match(pattern))
