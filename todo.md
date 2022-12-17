- [x] The new table button
- [x] The instance number
- [x] Delete rows and columns
- [x] Rearrange rows and columns
- [x] duplicate, cut, paste
  - [x] Rows
  - [x] Columns
- [ ] A repeat (macro) function
- [ ] Select value of column \ field type: string, number, array, object
- [ ] Transposition
- [ ] Render arrays as html lists
- [ ] Autosave to localstorage
- [ ] Sticky headings bar
- [ ] Add github link for bug\frature request link
- [ ] create wizard for adding rows
- [ ] Create infrastructure around the app:
  - [ ] Landing Page
  - [ ] Login Page
  - [ ] Backend authentication and storage ???
    - [ ] Limit size of tables to a certain kb or mb limit
    - [ ] Limit number of tables on cloud to 5 ???

GUI stuff

- [x] The ActionBar stuff
  - [ ] File
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
- [ ] Clean up cell actions with context menus and action bar buttons
- [ ] Create separate component for index th's called IndexCell
- [x] Use redux for state management

Branch out - a real data bank:

- [ ] Add a schema builder. Think a modal that allows you to chose a name and type for each property field and automatically generates all columns

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

Maybe, maybe, maybe:

- [ ] User-created tiny widgets with inputs. (Think back to resumes and creating formation card like college or course)
- [ ] Combine two columns in one. The cell of the second column gets rendered in a row below the cell of the first
- [ ] Account management (password emails, updates, etc.)
- [ ] Use typescript. The interfaces thing seems pretty good.
- [ ] add Mongoose integration

Legend:  
??? — questionable
