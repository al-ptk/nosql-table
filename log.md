## Day 1

I decided to take a more free flow style to coding because I had problems with my last project and I wanted to explore what refactoring is like. It's quite the change!  
I forgot about atomic commits, so I shall bring them back tomorrow.  
I also realized that the pre-planning I did before was very useful as a tasks-to-do record. Maybe I can combine both free-flow and pre-planned approached, where I set the basic idea on the planning tool, start coding and, instead of writing everything before-hand, I use the planning as a record-and-tracking tool. Something to experiment and see!  
Lastly, I'm glad to be back coding. Life has been a bit crazy lately.

## Day 2

As I feared, it all goes back to a dauting spaghetti web. It is very easy to lose track of what to do and how to proceed. Plus, there is the constant concern of "not doing things right."  
I feel like this project must be an experiment: Allow myself to just be bad and see how it goes. Not doing so blocks me up and I become unproductive.  
I should not be afraid of the dumb solution. If I must rewrite, I shall rewrite. If I must change the structure later, I shall do so. I must stupidly and bravely move foward so I do not get bog down by analysis paralysis.  
There will be tons of books later teaching me to become better, but I need some experience being a bad coder and just moving on.

## Day 3

I thought of a new way of solving the issue. This wouldn't have happened if I didn't have the experience of just improvising as I go. Now I wonder if there is a cheaper and quicker way of trying solutions before implementing them. Maybe a javscript pseudocode?  
Regardless, this experience proves a point: I need more experience in general, and need to change my mind around certain ideas I have about coding. Perhaps it is perfectly fine to just do stuff until you have a better way of solving the issue, then spending more time to rewrite code. Modular code seems like a pretty good approach — in webdesign terms, decoupling the style from the functionality is automatically done because of the separate languages, CSS and JS.

I realize now: I never tried to solve the problem on paper, before attempting to implement it. I mentioned pseudocode before — I should've just done that... right? Maybe. I did not have in mind before that html creates tables by rows, not columns. I could create my own custom table, but using the default one seem better...

I have relearned my lesson. Coding is hard. There is a reason why copying from stack overflow is such a popular meme, and that is because "cheating" can be quite the temptation when facing a confusing problem.

## Day 4

Current status of the project:

- I do not like how I manage the state of the table.
- The whole table rendering revolves around the modelling of the data, which complicates things further.
- The html table is counter intuitive to what I am trying to do.

This is a hard problem, one that is requiring many iterations, and that frustrastes me. The temptation is just to scrap it all and start anew, but I do not like this impulse. Nevertheless, I will scrape it all and try again from a clean slate.

## Day 5

How do I solve that issue without react?  
Updating the data seems like the most problematic part of designing this app. If I remove react from the equation, would I be able to find some inspiration for a solution?

--- time skip ---

Turns out, after trying to do thing without react, I can see that react was the main culprit of my confusion. If I do not try to keep the whole table's state under one variable, things get simpler.

The main lesson is that **sometimes, when trying to reduce the problem to better solve it, the obstacle to be (temporarily, at lest) removed is the tool itself.** The tools you choose to solve a problem become part of the problem. 

--- time skip ---

Instead of blaming the tool, I may blame myself for not understanding the tool. I wasn't thinking from a react perspective at all!
