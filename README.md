# Getting Started

- Please read the INSTRUCTIONS.md first
- For any questions around Create React App (CRA), reference
  CRA_DOCUMENTATION.md

# Code and Design Decisions

There are various things I did not implement becuase of time constraints:
0) In general, I prioritized trying to complete all the functionality over matching the Figma design pixel-for-pixel
1) data validation - I am parsing the raw data from the API without any validation or safe defaults, which I would never do in a production application.
2) I did not have time to implement any error handling for data fetching.
3) I opted to use Tailwind CSS because it is very fast for prototyping. At points I ran into issues where the utilitiy classes didn't exist for some reason. In these instances, I opted to simply use inline styling rather than spend time debugging the issue
4) Unit tests - I wrote some basic tests for the header component, but did not have time for anything more than that.
5) I would add linting rules to enforce things like consistent whitespace
6) Regarding the 'useFavorite()' custom hook used in the ListingCard component - the implementation could be much cleaner here and I am aware that there is a bug in the behavior. I could fix it with some fresh eyes - but alas I have run out of time 

Some other things I would add if I had more time:
-dedicated route functions as an abstraction layer to handle route level business logic, i.e. authorization for protected routes
-constants files for strings and other values that should not be hard-coded
-a more robust approach to REST behavior - either utilize a global state management tool or a dedicated library such as React Query

