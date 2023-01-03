- [ ] The mental model is this: You are creating a schema for a list of objects. Instances are each object created; Properties are the fields of each value. Not all properties are held by all instances.
- [ ] Double-click a cell to show it's expanded version
- [ ] Use 'Insert for all' to repeat or randomize values under a property
- [ ] Different orientations
- [ ] preview VS exporting
- [ ] Double-click to open modal of cell

---

- Key features

- [ ] Expand cell: if the text gets too large, double click it to expand.
- [ ] Actions based on type: if you right-click the instance index, you get a context menu for instances. A different menu appears for properties.
- [ ] Menu bar is sensitive to selected type: the same way the context menus are different, so are the actions enabled at the menu bar.
- [ ] Mass insertion: if you right click the property cell, you get the option to repeat a value to all cells.
- [ ] Show preview: On the View menu, you can take a peek on how your JTE file will look like. 

- What formats are supported for importing?

Two types of format are accepted, both with .json extensions. One is a JTE file — created by the app itself. The other is an JSON array of objects.

- How to use the exported file?

There are  currently two options of exporting: full file and instances only.  The full file is a json object with three fields: title, schema and instances. This is useful if you want to reupload the table in the future and retain it's schema.  The instances-only file is a json array with all instances created on the app.

If you need quick access to the instances, use instances only. If you want to have persistency, download the full file. I'm will be working on cloud storage soon.



