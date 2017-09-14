How to reproduce:
- `yarn install` - install dependencies
- `yarn start` - run the project localy
- open `http://localhost:3000/` in a browser (the page should be opened automatically)
- create an account: enter your email and any password to the form on the top of the page
- enter your email to the `forgot password` form and press the `Restore button`
- check your mailbox

The continue url is `https://google.com` now. `src/App.js` file contains the logic.
