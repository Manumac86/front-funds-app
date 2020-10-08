# The Development Process
Hey! We're glad you're interested in our development process! 

We've made this app as an web interface to interact with our donors.
In the following lines we'll try to explain why we made some desitions around this app.

## ReactJS as Frontend of a MERN App.
The main advantage for developers using the MERN stack is that every line of code is written in JavaScript. This is a programming language that's used everywhere, both for client-side code and server-side code. With one language across tiers, there's no need for context switching. Overall, using the MERN stack enables us to build highly efficient web applications.

Also, is a light library so the performance is not compromised with good practices and give us all the tools we need for this app. 

Using a library like React versus a Framework like Angular let us choose the project structure acording to our needs, and doesn't make desitions for us. If we were building a bigger app, maybe we would consider implement a Framework like Angular or NextJS, that give us more tools and and some guidelines around project structuring to make our apps highly scalables and maintainables, but for this kind of apps, React has all that we need in a very quick and easy way to implement. 

Said that, we've chosen React as our main dependency for our FrontEnd app. 

## Project Structure
We truely believe that a good project structure can save us from painfull code maintainance. That is why we've structured our components dividing them in Components and Containers. 

- The Components are more presentational React Components and they are responsible of presenting the data. Each component is placed in a folder along it Stylesheet. This way is more easy to find the styles for a component rather than group all styles in a single folder.
- The Containers are the ones that manage the business logic and almost nothing of styling and presentational stuff.
- We've also separated the assets, like fonts in their own folder, to make them easy to find.
- The translation languages has their own folder too, in order to make easy to find and add/remove.
- Finally, we have a config folder with a file that export all our env variables to easy import in the components that need them.

## Axios
To make the requests to the API, we've used the [Axios](https://github.com/axios/axios) package, not only because is easy to use and implement but also it parse the responses to JSON format and we avoir to do it within the code.

## Language Translations
To make possible to the user to choose between various languages, we've created a `LanguageContext` component that exports a Provider to wrap our entire application. It comes built in React and no need to use Redux or others global state managers.
React Context give us the power to create global states to manage all the translations with a few more lines of code.
In each component that uses those translations, we've imported `useContext` method and the `LanguageContext` to access the global state and show the different languages versions of the app. 

## Email verification
In order to make sure that the data gets to the API with valid format, we've added email validation using RegEx templates. This way, we avoid sending invalid data to the backend. 

## Error Handling
When an error ocurs, we inform to the user using modals that pop with the error and a nice UX messages in order to ask the user that try again.
