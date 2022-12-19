- [x] The new table button
- [x] The instance number
- [x] Delete rows and columns
- [x] Rearrange rows and columns
- [x] duplicate, cut, paste
  - [x] Rows
  - [x] Columns
- [x] Context Menu
- [x] Menu Bar
- [ ] Create selected feature as hook for edit\insert functionality
- [ ] A repeat (macro) function

---

- [ ] Select value of column \ field type: string, number, array, object
- [ ] Transposition
- [ ] Render arrays as html lists
- [ ] Autosave to localstorage
- [ ] Add github link for bug\frature request link
- [ ] create wizard for adding instances
- [ ] Create infrastructure around the app:
  - [ ] Landing Page
  - [ ] Login Page
  - [ ] Backend authentication and storage ???
    - [ ] Limit size of tables to a certain kb or mb limit
    - [ ] Limit number of tables on cloud to 5 ???
- [ ] Add a schema builder. Think a modal that allows you to chose a name and type for each property field and automatically generates all columns
- [ ] User-created tiny widgets with inputs. (Think back to resumes and creating formation card like college or course)
- [ ] Combine two columns in one. The cell of the second column gets rendered in a row below the cell of the first
- [ ] Account management (password emails, updates, etc.)
- [ ] Use typescript. The interfaces thing seems pretty good.
- [ ] add Mongoose integration
- [ ] Add different exporting options
- [ ] Add undos and redos

GUI stuff

- [x] The ActionMenu stuff
  - [x] File
    - [ ] Different types of exporting
  - [ ] Edit
    - [ ] Select row\column\cell
  - [ ] Insert
- [x] Contextual Menu
  - [x] Headings (for columns and rows)
    - [x] Paste above\left
    - [x] Paste below\right
    - [x] copy
    - [x] cut
    - [x] delete
    - [x] duplicate

Refactors:

- [x] Rename EVERY row to instance and EVERY heading to property. The current naming is conceptually coupled — what if I transpose the table?
- [x] Clean up cell actions with context menus and action bar buttons
- [x] Create separate component for index th's called IndexCell
- [x] Use redux for state management
- [ ] Refactor Context Menu
  - [ ] Change it to DropdownMenu that happens to be used as context menu
  - [ ] Make DropdownMenu take an array of props to make buttons based upon.
  - [ ] Make DropdownMenu use a portal
- [ ] Fix preview
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
