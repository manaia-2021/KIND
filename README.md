# JV Review
- good start on the tests and nice work on keeping dev green
- linting broken in dev, needs fixing
- good test coverage for the files you tested, try running `npx jest --coverage` to see where it can be imprved
- the status field in your api routes is redundant as it can be inferred from the status code of the response 
- I would delete the store and reducers if you aren't using them - commented outu code should be avoided
- Umm, anyone feel like testing components?

# Fullstack boilerplate

## Getting Started

### From the Github UI
See the instructions [here](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) to use Github's feature to create a new repo from a template.

### From the command line

```
git clone https://github.com/dev-academy-challenges/boilerplate-fullstack [your-project-name]
cd [your-project-name]
npm install # to install dependencies
npm run dev # to start the dev server
```

You can find the server running on [http://localhost:3000](http://localhost:3000).

## Details

This repo includes:

* a single, simple API endpoint (`/api/v1/fruits`)
* a single React component (`<App />`)
* an example database module (`server/db/fruits.js`)
* an API client module (`client/apis/fruits.js`)
* configuration for Jest and testing library
* configuration for server-side debugging in VS Code
* a single client-side test (`client/components/App.test.js`)
