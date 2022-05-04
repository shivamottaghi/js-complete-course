# READ IT
## EX 08
* Look at the documentation of the join() function. Explain how it is used here.
join function returns an array as a string. In this case wrappedMovies is an array containing the movies' name
wrapped inside li tags. so by using join() with no separators we will have a long string with movie
names inside li tags which will get wrapped inside the ol tag. in the end they all get written inside
the document.