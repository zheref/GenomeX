# Changelog

## Hey! It's Sergio
Here I present the complete changelog of the solution I created for you guys called GenomeX. It's a native approach using React Native framework (through Expo).  

In order to display my full stack skill-set I decided to go with technologies that appeal to both Web and mobile in order to create a native mobile app to show a user's bio along with some job that matches _any_ of their listed strengths.
Despite my already existing skill-set with Web technologies like ReactJS and Angular. I thought it would be great to provide a hand-held experience through an app that is nice, clean, easy to use and performant enough to run bio lookups.

I also have great ideas on what to do next with this app and how to make it an amazing product. Go to the bottom to check the backlog I would suggest for this product.


`Friday January 22, 21:00 - 00:30`  
- Initial analysis of requirements and project scope. Ask initial questions and set up Expo starter project using CLI.
- **Decided** to make use of TypeScript since it's a more robust superset of JavaScript to work with and make code safer and more maintainable.

`Saturday January 23, 8:40 - 10:00`  
- Study how REST API endpoints provided work and what the response looks like in order to come with a UX that matches the information we actually got.
- Set up public repository on **Github** and push initial revisions.

`Saturday January 23, 15:47 - 16:10`  
- Started with a very basic password-less authentication system making use of `AsyncStorage` dependency to persist and remember handle of identified user.
- **Notice** in regular circumstances we'd use OAuth, JWT, SSO and/or other practices to keep the information secure. This information was alredy public for any profile and we're not dealing with any sensitive data or updates, hence, this solution is more than enough for this case. Think of it as a lookup field if you want.

`Saturday January 23, 16:45 - 17:46`
- Set ground base for identity experience including an asynchronous way to persist the handle the user identifies with. I used AsyncStorage which will translate to UserDefaults, UserPreferences or Local Storage for iOS, Android and Web respectively making it automatically ready for most of platforms out there.
- Set reducer for auth and first installation of state management approach to create a store to keep and manage global state.

`Saturday January 23, 20:05 - 23:05`  
- Design initial identity screen using JSX.
- Create some helper components to make layout easier by decreasing opportunities to duplicate boilerplate code.
- Create some files to keep constant values regarding styles or keys. This helps with consistency and makes code less prone to errors.

`Sunday January 24, 06:01 - 06:30`  
- Enhance input elements on identity screen to play gracefully with keyboard behavior.

`Sunday January 24, 10:20 - 11:32`  
- Installed successfully React Native Dev Tools along with its plugin for Redux in order to debug gracefully against the current app state.
- Provide a way to keep nice fonts in place for each operating system.
- Decided to go with Roboto for Android and Avenir for iOS in order to set a familiar typography for user base on each platform.

`Sunday January 24, 11:32 - 12:39`
- Connect UI with store through reactive mappers. This will enable the UI to be re-rendered whenever any of the values from the state we're using do actually change. This will make the application performant at the same time efficient and easier to keep in place.

`Sunday January 24, 14:30 - 15-03`  
- Complete test environment for side effects (running asynchronous operations via thunks). By always doing this, the code will remain predictable by understanding what pure functions (actions) should be dispatched based on resolved data by this impure operations.
- Also write some unit tests for reducer based operations (pure functions) in order to ensure the different parts of the state are `mutated` as expected.
- Write tests for existing thunks.

`Sunday January 24, 15:03 - 16-30`
- Tweak and adapt `react-nativation` setup to match navigation expectation.

`Sunday January 24, 16:30 - 17:15`  
- Unit tests and complete auth workflow with persistence.

`Sunday January 24, 17:15 - 17:43`  
- Tweak bottom tab bar to match navigation expectation.

`Sunday January 24, 17:43 - 18:57`
- Tweak main screen containers layout.
- Provide sign out functionality in order to wrap up _'authentication'_ workflow.

`Sunday January 24, 21:38 - 22:30`    
- Complete bio fetch async operation.
- Set types, reducers and corresponding unit test for setting the bio given the handle once it arrives from corresponding service.

`Monday January 25, 23:21 - 01:02`
- Complete full loading, serialization and installation of data onto global state for given bio.
- Provide progress feedback to users through Activity Indicator.

`Monday January 25, 19:38 - 11:44`
- Layout bio page and render basic person information.
- Connect state reactively to consume already installed data per previous operation handled by thunk.

`Monday January 25, 11:56 - 00:36`
- Layout and design link icons and render per state.
- Have them navigate to their corresponding URIs.

`Tuesday January 27, 14:52 - 16:15`  
- Create selector to consume experiences that correspond to jobs filtering from the state every single time any of its dependencies change.
- Render FlatList and refactor layout to match new virtualized experience with both fixed and custom views.
- Render each job experience by consuming selector.

`Tuesday January 27, 16:15 - 17:40`
- Tweak and enhance genome screen and experiences.

`Tuesday January 27, 17:40 - 18:04`
- Handle workflow properly if when trying to fecth bio, it is found the handle does not correspond to any actual profile.

`Tuesday January 27, 20:43 - 21:26`
- Redesign concept of tab bar to match own expectations on inverted design based on currently standing screen.

`Tuesday January 27, 23:03 - 01:40`
- Initial setup of back end using NestJS.
- Use pipes to map and filter data providing a `mix & match` solution to get matching opportunities for a given profile.
- **Decided** to use NestJS because it's an Express based super framework for building Web Apps, allowing this to be used as a stack for several functions and pages related to this product. Yet, the main reason is NestJS is actually very aligned with the most relevent industry-class practices in the market like reactive and functional programming. Allowing developers to leverage this techniques to build streamlined more predicable solutions.
- Deploy newly created REST API onto Heroku.
- **Decided** to use Heroku because it's a free, easy and fast to set up platform to deploy Node based apps.
- **NOTE:** I only created another back-end in order to show my experise on the full stack. However bypassing data from another REST API onto our own to process data is a practice I strongly discourage. There may be cases when this practice is rendered necessary due to constraints or limitations. Yet, if possible there should be a unique REST interface accessing directly the sources of data right from the hardware with the minimum amount of latency possible. Using another REST API as a middleware to process data might seem to work, but the performance impact is gigantic. In order to mitigate this problem in a production based solution, caching through Redis or simple memory based cache (built-in supported by NestJS) should be a must in order to dismiss as possible the time taken to consume the third party again.

`Wednesday January 27, 01:57 - 03:59`
- Create service consuming Heroku based REST API already deployed.
- Create service, thunks and new state slice to take and handle best chances (job opportunities).
- Render list of job best chances on second tab by consuming newly installed state slice.

### Things I would have loved to cover given more time
- The app right now does not have a way to provide error feedback whatsoever. Given enough time, that's vital.
- Despite Expo promises to be able to run app on Web browsers as well, the style mapping is not even close as expected. Yet by using a system called _Styled Components_ this can be achieved by using precise CSS syntax withing JSX that will be translated all the same to every single platform. Still have to check that out but that's what they promise: [Link Here!](https://docs.expo.io/guides/using-styled-components/).
- Navigate to bio, job experiences and job opportunities details.
- Set up CI/CD to automate frequently performed Dev Ops like analysis, testing, deploymen/distribution. I strongly recommend CircleCI and Bitrise.

## Backlog and Roadmap Suggestion
- Of course access a fairly secured authentication system to allow users to sign in and update their bio information right from the app.
- To improve the algorithm and UX to offer the user a way to find opportunities based on certain amount of skill set or for a given amount of years of experience.
- A search field to do the actual people lookup.
- A search field for looking for opportunities for a set of keywords.
- Yet the idea that excites me the most is to be able to create an application process system so that both companies and workers can follow and manage a hiring process to the very end, wherever it ends.

## Bottom line
I hope you like it. Hopefully I didn't miss any important information that allow you guys to see the whole spectrum of my knowledge, versatility and experience coming from many years of love for this profession. If you have any question, please let me know right away. I will be following process this very closely.