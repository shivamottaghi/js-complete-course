# READ IT
## Excercise 05
* The for-loop is no longer present. 
  What was it replaced with? How does this work?

was replaced with foreach. for each index in movie array, It calls tha parsTitle function.

* What does the function 'parseTitle' do? 
  What parameter do we pass to this function?

This function gets one parameter which is the movie name, lower case it, send it to WrapWithTag and save the result into tha const var called wrap then write it on the document.

* What does the function 'wrapWithTag' do? 
  Why are the parameters placed between brackets?
This func gets two parameters. one is the content which is the movie name in lowercase and the other is the tag name
which in this case is the 'li'. using template literals it interpolate the varibales to create a whole html list item and retur it to parsTitle. 