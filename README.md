- [About the App](#about-the-app)
  - [Conceptual Description](#conceptual-description)
- [Technical Decisions](#technical-decisions)
  - [Component Tree Explained](#component-tree-explained)
  - [Redux](#redux)
  - [Wet code](#wet-code)
- [Workflow, tips and shortcuts](#workflow-tips-and-shortcuts)
- [Roadmap](#roadmap)

## About the App

The point of this app was to facilitate the creating of mock data for other projects.  
I wanted a way to quickly and easily mock a list of objects in json, with a few values randomized here and there, and just plug it in the project being done.  
Turns out, I could've just use ChatGPT. But alas!
At the time of this writing, one of the "hook" features is here (Mass Insertion), but not the other (Local Randomization).
There are also features that crept into my mind and added to the backlog.

### Conceptual Description

First, some conceptual definitions:

- Table: Data type meant to encapsulate two other types (instances and schema). A table is a json file to be used by other appplications, like database-populating scripts.
- Schema: Describes the name and type of all possible fields found in each element of instances. Types can be primitives, like strings, date and numbers; composed, like arrays and objects; or even custom, like user-made widgets.
- Instances: An array of objects that populate the table based on the fields each instance possesses. Instance here is can be read the same as "instance of an object." Not all instances have all schema properties, but schema properties describe all possible fields of an instance.

## Technical Decisions

### Component Tree Explained

The main App is composed of a shell (MenuBar.js and StyledFooter.js) and the table (JsonTable).

MenuBar is reponsible for being — you guessed it — a menu bar! It shows all actions the user can perform.

JsonTable is composed by TableHead and TableBody. TableHead holds the properties, TableBody holds the instances.

At the html file, besides the App's root div, there is a modal-portal div. I use that together with ReactDOM.createPortal to add all the modals. There are a few modals and more coming!:

- Expanded Cell: It magnifies the cell to present the text that may have been clipped by the tiny cell
- JSONPreview: It shows how the file will look like. (At the time of this writing, the preview only shows the instance — the json array — byt the actual file has some metadata — schema and title. This discrepancy shall be addressed soon!)
- MassInsert: Allows to add the same text to a field of all instances

### Redux

The usage of redux was initially was to create a more complex useState thing.  
I found out alternatives later (zustand, jotai), but I choose to stick with redux.  
I kept redux educational only — I wanted to practice redux.  
The redux toolkit also weighting in the continuity of redux usage — if I had to do the old school way, I've jumped ship to zustand.  
Some uses of redux was only to avoid prop drilling.

### Wet code

The lack of DRY-ness in the code is proposital: I want to get a better understanding of the application as a whole before I start DRY-ing all up.  
What if I need to add a component in the middle of something that was abstracted way? What if there is variants I haven't forseen?  
I made my code as DRY as I felt confident it was matured, no more.
(I took my reasoning from someone way smarter than me, so go watch what Dan Abramove said about wet code)

## Workflow, tips and shortcuts

- The mental model is this: You are creating a schema for a list of objects. Instances are each object created; Properties are the fields of each value. Not all properties are held by all instances.
- Double-click a cell to show it's expanded version
- Use 'Insert for all' to repeat or randomize values under a property

## Roadmap

Here is the roadmap (that I may follow after doing some other projects):
