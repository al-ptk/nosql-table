The point of this app was to facilitate the creating of mock data for other projects.
Turns out, I could've just use ChatGPT. But alas!

The usage of redux was initially was to create a more complex useState thing.  
I found out alternatives later (zustand, jotai), but I choose to stick with redux.  
I kept redux educational only — I wanted to practice redux.  
The redux toolkit also weighting in the continuity of redux usage — if I had to do the old school way, I've jumped ship to zustand.  
Some uses of redux was only to avoid prop drilling.

The lack of DRY-ness in the code is proposital: I want to get a better understanding of the application as a whole before I start DRY-ing all up.  
What if I need to add a component in the middle of something that was abstracted way? What if there is variants I haven't forseen?  
I made my code as DRY as I felt confident it was matured, no more.
(I took my reasoning from someone way smarter than me, so go watch what Dan Abramove said about wet code)

Here is the roadmap (that I may follow after doing some other projects):
