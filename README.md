# [HAL](https://michaelmeow.github.io/beep_boop)

#### _A website that emulates AI antagonist HAL, 8/17/18_

#### By Michael Meow

## Description

The application takes a name and number and returns different messages depending on the inputs.  Back end logic includes functions using the .includes method to determine if a certain number is in a given input.

## BDD

_This is a list of expected behaviors order from simplest to most complex.  When the program meets these expectations the scope of the project has been met._

* The user enters a number and nothing is returned.
  *	Input Example: “0”
  *	Output Example: “”
*	The program will not allow non number inputs.
	* Input Example: “zero”
  *	Output Example: N/A
*	The program recognizes when the user inputs a string with a 0 in it and returns “Beep!”
	* Input Example: “0”
  *	Output Example: “Beep!”
*	The program recognizes when the user inputs a string with a 1 in it and returns “Boop!”, and overrides the output for 0.
  *	Input Example: “10”
  *	Output Example: “Boop!”
*	The program recognizes when the user inputs a string with a 3 in it and returns “I'm sorry, Dave. I'm afraid I can't do that.”, and overrides the output for 1 and 0.
  *	Input Example: “310”
  *	Output Example: “I'm sorry, Dave. I'm afraid I can't do that.”
*	The user will be able to enter a new number and get a new result repeatedly.
  *	Input Example: “10”, “0”
  *	Output Example:“Boop!”, “Beep!”
*	The program replaces Dave in answer when a 3 is present with a user entered name.
  *	Input Example: “310”, “Eritosthanes”
  *	Output Example: “I'm sorry, Eritosthanes. I'm afraid I can't do that.”


## Setup/Installation Requirements

* On GitHub, navigate to the main page of the repository.
* Under the repository name, click Clone or download.
* In the Clone with HTTPs section, click  to copy the clone URL for the repository.
* Open Terminal.
* Change the current working directory to the location where you want the cloned directory to be made.
* Type git clone, and then paste the URL you copied in Step 2.
* Press Enter. Your local clone will be created.
* Use a browser to open index.html.

Or, simply click the link at the top of the README to be redirected to the site on gh-pages.

## Known Bugs

There are no known bugs.

## Support and contact details

Please contact dearmichaelmeow@gmail.com with questions or comments.

## Technologies Used

This page uses Bootstrap CSS along with HTML and CSS.  It uses JS and JQuery.

### License

This site is licensed as CDL.

Copyright (c) 2018 Michael Meow
