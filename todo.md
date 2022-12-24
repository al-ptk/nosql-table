- [x] The new table button
- [x] The instance number
- [x] Delete rows and columns
- [x] Rearrange rows and columns
- [x] duplicate, cut, paste
  - [x] Rows
  - [x] Columns
- [x] Context Menu
- [x] Menu Bar
- [x] Fix edit functions
- [x] Create buttons for quick addition of instances and properties
- [x] Create selected feature as hook for edit\insert functionality
- [x] Add a modal with a bigger textbox for texts too large
- [x] A repeat (macro) function
- [x] Fix preview
- [x] Transposition
- [x] Add github link for bug\frature request link
- [x] Improve UI\UX:
  - [x] differentiate between editable headings and uneditable index
  - [x] Better spacing
  - [x] Center heading text
- [x] Disable multiple context menus from appearing — maybe create a centralized context menu state to only enable one?

MAJOR REFACTOR FOR RELEASE OF v1.0

- [ ] Redo all dropdown menus from the menu bar
- [ ] Make ContextMenu take a list of props
  - [ ] Also, it should take buttons that receive a closeMenu function as props
- [ ] Better modals
  - [ ] styling (make the background slight darker than body and rounded)
  - [ ] prepare

- [ ] Write readme (possibly, an 'Help' document also')
- [ ] Make shell for alanpatrick.net and link this project
- [ ] Publish on twitter\linkedin

And this marks the launch of version 1.0
After these, I only do bug fixes and will prepare for the next project.
Later, I will come back and add new features to this.

---

For the next version

- [ ] Render arrays as html lists
- [ ] Select value of column \ field type: string, number, array, object
- [ ] Add a schema builder. Think a modal that allows you to chose a name and type for each property field **and** automatically generates all columns
- [ ] User-created tiny widgets with inputs. (Think back to resumes and creating formation card like college or course)
- [ ] Iterate feature: same as repeat, but: (both strings and other types)
  - [ ] accept the index to change the value repeated
  - [ ] adds a random number
  - [ ] picks randomly from a list of options
- [ ] Autosave to localstorage
- [ ] create wizard for adding instances
- [ ] Backend authentication and storage ???
  - [ ] Limit size of tables to a certain kb or mb limit
  - [ ] Limit number of tables on cloud to 5 ???
  - [ ] add Mongoose integration
  - [ ] Account management (password emails, updates, etc.)
- [ ] Comments about the website on side-drawer menu
- [ ] Combine two columns in one. The cell of the second column gets rendered in a row below the cell of the first
- [ ] Use typescript. The interfaces thing seems pretty good.
- [ ] Add different exporting options
  - [ ] full file
  - [ ] only rows
  - [ ] html table
- [ ] Add undos and redos

Tutorial:

- [ ] Different orientations
- [ ] preview VS exporting
- [ ] Double-click to open modal of cell

GUI stuff

- [x] The ActionMenu stuff
  - [ ] File
    - [ ] Different types of exporting
    - [ ] Print
    - [ ] Close table
  - [ ] Edit
    - [ ] Select row\column\cell
  - [ ] Insert
    - [ ] insert all
  - [ ] User Menu
- [ ] Table
  - [ ] Move table to within a div
  - [ ] Add quick buttons for
    - [ ] Add instance\property
    - [ ] Delete instnace property
    - [ ] Select menu for type of property
- [x] Contextual Menu
  - [x] Headings (for columns and rows)
    - [x] Paste above\left
    - [x] Paste below\right
    - [x] copy
    - [x] cut
    - [x] delete
    - [x] duplicate
- [ ] Create views for the app:
  - [ ] Landing Page
  - [ ] Login Page

Refactors:

- [x] Rename EVERY row to instance and EVERY heading to property. The current naming is conceptually coupled — what if I transpose the table?
- [x] Clean up cell actions with context menus and action bar buttons
- [x] Create separate component for index th's called IndexCell
- [x] Use redux for state management
- [ ] Refactor Context Menu
  - [ ] Change it to DropdownMenu that happens to be used as context menu
  - [ ] Make DropdownMenu take an array of props to make buttons based upon.
  - [ ] Make DropdownMenu use a portal
- [ ] Make edit buttons become disables if the type selected does not support said operation — or if nothing is selected at at all
- [ ] Make selected thing be highlighted

Types of field to add:

- [ ] string
- [ ] number
- [ ] array - each element gets rendered as <li>
- [ ] bool - rendered as checklist
- [ ] date - rendered as date picker
- [ ] dropdown / select - gets a pool of strings to be selected
- [ ] links - gets rendered as link
- [ ] random picker - the user gives a pool of values (values must have same type and be string, number or bool) and a random value is assigned at creation of row
- [ ] Checklist - array made up of preset values
