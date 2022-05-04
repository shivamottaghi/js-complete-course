# READ IT
## EX 09
* Notice how the 2 map functions are attached to eachother, this is called 'method chaining'
* What does the parseTitle function do exactly?
* Notice how all the code is in the shape of functions.

The first map creates an array with all the movies' name in lowercase except the ones which start
with 'the'(created by the parsTitle function) and the second map gets that array and creates a
new one with all the movies' name wrapped inside the li tag. using join() they all make a string with
no separators and eventually get returned wrapped inside the ol tag.