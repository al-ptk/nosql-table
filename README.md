- [JSON Table Editor](#json-table-editor)
  - [About the App](#about-the-app)
  - [Technical Decisions](#technical-decisions)
    - [Conceptual Description](#conceptual-description)
    - [Component Tree Explained](#component-tree-explained)
    - [React Tablle](#react-tablle)
    - [Redux](#redux)
    - [Code Repetition and Wet Code](#code-repetition-and-wet-code)
    - [Styled-components](#styled-components)
    - [Translation solution](#translation-solution)
    - [Test-Driven Development](#test-driven-development)
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

And about @ notes:

- @todo: A feature to be added or some general task to be done.
- @dryup: I believe that the code could be simplified\abstracted, but I dare not to yet. (The reason for this postponement can be found under the [Code Repetition and Wet Code](#code-repetition-and-wet-code) section.) (Also, [grug said so](https://grugbrain.dev/#grug-on-factring-your-code).)

@todo update leiame

### Component Tree Explained

The `App.js` is the main component, composed of a shell (`MenuBar.js` and `StyledFooter.js`) and the table (`JsonTable.js`).

The `MenuBar.js` is reponsible for showing all actions the user can perform.

The `JsonTable.js` contains the components `TableHead.js`, responsible for managing properties, and `TableBody.js`, responsible for managing the instances. Besides that, `JsonTable.js` possesses buttons for adding new instances and properties, as well as a button for transposing (rotating) the table.

At the root html file, besides the `#root` div (common to most create-react-app projects), there is a `#modal-portal` div. I use that together with `ReactDOM.createPortal` method to render all the modals. Some of the modals are:

- ExpandedCell: It magnifies the cell, making larger texts more readable.
- JSONPreview: It shows how the json file, which contains only `instances`, will look like.
- MassInsert: Allows mass insertion of values to a `property`.

### React Tablle

Yes, I know it exists now. I wish I've known before. Major rewrite someday?

### Redux

The usage of redux was initially was to create a more complex use of the useState hook. I wanted a list of functions that worked on the same state, with each change triggering a re-render. Passing all setters of state to the components was workful. `useContext` was considered, but I ended up with redux.

Picking redux was an error, but an instructive one. I've learned to use a very popular tool, that should help my career in a forseable future. However, if I were to rewrite the project, from scratch, I would use [jotai](https:/jotai.org) and create all atoms necessary.

And, because I've already picked redux, I kept using it for other shared state in the application.

Honorable mention: If [reduxjs-toolkit](https://redux-toolkit.js.org/) didn't exist, I probably would've abandoned redux.

### Code Repetition and Wet Code

There is a lot of repetition in my code. It was on purpose. Before I start to abstract anything I say in front of me, I decided to leave the code being more maleable, as I got to know and understood the project better.

I made the code dryer (DRY — don't repeat yourself) as I felt more confident about what I was doing,

I took this way of doing things [from a guy much smarter than I.](https://www.deconstructconf.com/2019/dan-abramov-the-wet-codebase)

### Styled-components

This library was chosen as the css solution because I had found out about it as a few week before starting this project. I do have concerns about package size, but these concerns are simply a result of my inexperience about handling performance (reads: I am a noob and have no idea what I'm talking about). I do like the power styled-components gives me, though.

I did adopt a pattern for style organization in the later stages development: component keyring. These work by putting all subcomponents under the namespace of a reusable component. Something like this:

```javascript
import styled from 'styled-components';

const Modal = {
  Container: styled.div``
  Title: styled.h1``,
  Button: styled.button``
}

```

The consumption is rather straightforward — simply do a `<Modal.Container>` to access the container. To use other components, use other keys.

The benefits? Other than an easier time importing elements, using a system that resembles [BEM](https://getbem.com/) and making me feel clever for a silly reason, there isn't any clear benefits. But I did like this approach, so I plan to stick with it when using styled-components in future projects.

**Edit:** I will probably not do this anymore. [Another person much smarter than me](https://www.youtube.com/watch?v=M3BM9TB-8yA) cautioned me about "cute, unnecessary things." But maybe it is a good idea? We will see.

### Translation solution

This one came late.

### Test-Driven Development

I didn't do it. "It's a small project", I thought. I was wrong. Things get out of hand fast.

TDD and @ notes are both important things in order to keep the code managable for me.

## Roadmap

Here is the roadmap (that I may follow after doing some other projects):
