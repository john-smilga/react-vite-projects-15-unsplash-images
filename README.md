#### Elements Property

The elements property of the event.target object in the handleSubmit function refers to an HTMLCollection containing all the form controls (i.e., input, select, textarea, button, etc.) inside the <form> element.

This is useful because you can use the elements collection to get the values of the form controls when the form is submitted. For example, e.target.elements.search.value would give you the value of the search input field when the form is submitted.

#### Vite ENV Vars

- .env.local - works locally but fails on Netlify
- .env - works locally but must be included in .gitignore
