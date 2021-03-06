#Etch-A-Scetch Project for the Odin Project

The goal of this project was to create game similar to etch-a-scetch, using only DOM methods.

It had to meet the following criteria:

- create a grid of divs
- when the mouse enters each div, they change color
- a reset button that when clicked, clears all color changes and prompts the user for the grid size that they would like, whilst enforcing certain paramaters.
- the grid area should remain the same at all times regardless of hov many divs are created

This project allowed me to deep dive into many aspects of dom manipulation. My personal goal was to keep the code as clean an minimal as possible whilst still achieving all of the above criteria.

Areas that i struggled with:

Resizing the grid to what the user inputs was a bit of an obstacle for me as intially after the user prompt, the makeGrid function just added extra divs. To solve this I had to remove the existing divs to essentailly wipe the slate clean and start again. This took me a while to figure out.

Still left to-do:

the last optional criteria of the project was to increment the opacity of the backgroud-color by 10% every time the mouse enters the div. Unsure of the best way to do this at present as my method of changing the background-color is to add a class. Requires a little extra thinking.
