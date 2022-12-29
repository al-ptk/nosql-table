- [JSON Table Editor](#json-table-editor)
  - [About the App](#about-the-app)
  - [Technical Decisions](#technical-decisions)
    - [Conceptual Description](#conceptual-description)
    - [Component Tree Explained](#component-tree-explained)
    - [Redux](#redux)
    - [Code Repetition and Wet Code](#code-repetition-and-wet-code)
- [------------ Continue the work from here ------------------](#-------------continue-the-work-from-here-------------------)
    - [Styled-components](#styled-components)
  - [Workflow, tips and shortcuts — Future Tutorial](#workflow-tips-and-shortcuts--future-tutorial)
  - [Roadmap](#roadmap)

Se quiser ver a versão em português, clique [aqui](https://github.com/al-ptk/json-table-editor/blob/main/LEIAME.md).

To visit the site, click [>>> here <<<](https://al-ptk.github.io/json-table-editor/)

# JSON Table Editor

## About the App

The purpose of this app was to facilitate the creating of mock data for other projects.  
I wanted a way to quickly and easily mock a `json` list of objects, with a few values randomized here and there, and just plug it in the project being done.

Turns out, now we have [ChatGPT](https://openai.com/blog/chatgpt/), which renders this project largely outdated. But since I was done with a big part of project, I decided to finish it before moving on to other projects.

## Technical Decisions

### Conceptual Description

First, some conceptual definitions:

- `Instance`: Some javascript object.
- `Property`: A field belonging to an instance.
- `Table`: Both a mental model composed by two data structures, `schema` and `instances`, and the file that contain the data from them.
- `Schema`: Describes the name and `type` of each possible `property` found in the `instances`. Types can be **primitives**, like strings, date and numbers; **composed data**, like arrays and objects; or even **custom**, like user-made widgets.
- `Instances`: An array of objects that populate the table based on the properties each instance possesses. Not all instances have all schema properties, but the `schema` properties describe all possible properties of an instance.

### Component Tree Explained

The `App.js` is the main component, composed of a shell (`MenuBar.js` and `StyledFooter.js`) and the table (`JsonTable.js`).

The `MenuBar.js` is reponsible for showing all actions the user can perform.

The `JsonTable.js` contains the components `TableHead.js`, responsible for managing properties, and `TableBody.js`, responsible for managing the instances. Besides that, `JsonTable.js` possesses buttons for adding new instances and properties, as well as a button for transposing (rotating) the table.

At the root html file, besides the `#root` div (common to most create-react-app projects), there is a `#modal-portal` div. I use that together with `ReactDOM.createPortal` method to render all the modals. Some of the modals are:

- ExpandedCell: It magnifies the cell, making larger texts more readable.
- JSONPreview: It shows how the json file, which contains only `instances`, will look like.
- MassInsert: Allows mass insertion of values to a `property`.

### Redux

The usage of redux was initially was to create a more complex use of the useState hook. I wanted a list of functions that worked on the same state, with each change triggering a re-render. Passing all setters of state to the components was workful. `useContext` was considered, but I ended up with redux.

Picking redux was an error, but an instructive one. I've learned to use a very popular tool, that should help my career in a forseable future. However, if I were to rewrite the project, from scratch, I would use [jotai](https:/jotai.org) and create all atoms necessary.

And, because I've already picked redux, I kept using it for other shared state in the application.

Honorable mention: If [reduxjs-toolkit](https://redux-toolkit.js.org/) didn't exist, I probably would've abandoned redux.

### Code Repetition and Wet Code

There is a lot of repetition in my code. It was on purpose. Before I start to abstract anything I say in front of me, I decided to leave the code being more maleable, as I got to know and understood the project better.

I made the code dryer (DRY — don't repeat yourself) as I felt more confident about what I was doing, 

I took this way of doing things [from a guy much smarter than I.](https://www.deconstructconf.com/2019/dan-abramov-the-wet-codebase)

# ------------ Continue the work from here ------------------

### Styled-components

## Workflow, tips and shortcuts — Future Tutorial

- The mental model is this: You are creating a schema for a list of objects. Instances are each object created; Properties are the fields of each value. Not all properties are held by all instances.
- Double-click a cell to show it's expanded version
- Use 'Insert for all' to repeat or randomize values under a property

## Roadmap

Here is the roadmap (that I may follow after doing some other projects):
