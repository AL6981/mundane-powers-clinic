We're building an application that allows you to add mundane super powers to your skill set!

### Learning Objectives

- Build an Express application to serve dynamically generated HTML
- Understand the role of the server and views in a Express application and how they interact

## Navigating the application

#### Server

The `src/app.js` is where you will be writing code to configure the logic for each of the paths a user visits. Specifically, this is where you will prepare the data needed for a specific webpage and specify which handlebars template should be used. This will be the first step in setting up each webpage, and will determine which paths are available in your app.

#### Public

Unless you wish to configure client-side JavaScript or styling, you will not need to edit the files in the `public` folder.

## Instructions

Build a web application that has a homepage welcoming me to the website, a powers _index_ page that lists our favorite mundane powers, and _show_ pages presenting each individual mundane power.

Tackle these user stories in the order that they're presented.

## User Stories

### Part 1

```no-highlight
Being super pumped about gaining more mundane powers
I want to arrive at a welcome page when I navigate to the root path
So that I can get extra amped!
```

Acceptance Criteria:

- When I visit `/`, I can see a header with a welcome message to the website reading "Mundane Powers Resource App"
- Below the header is a short paragraph description of the website.


### Part 2

```no-highlight
To learn more about the available mundane powers
I want to view a page with the skill of each mundane power
So that I can remember which mundane powers are known to the world
```

Acceptance Criteria:

- When I visit `/powers` I can see list of all the mundane power names
- Each name shown is a link to a mundane power's show page
- The list of mundane powers should come from the `powers` array, which has already been provided

### Part 3

```no-highlight
As a huge fan of mundane powers
I want to view additional information about a power
So that I can learn more about that power
```

Acceptance Criteria:

- I can navigate to a distinct url and web page for each mundane power. Specifically, navigating to `/powers/refresh` should bring bring me to a refresh show page
- Each power page displays the power's skill and mundane ability

#### Part 4

We are huge fans of object-oriented programming in the mundane world, so we use objects to represent each of our powers in our Express application.

**Define a `MundanePower` class that has the following aspects:**

- takes in a `skill` as an argument, and a `description` as a second argument, and an `useful` as an optional third argument
- has a method `isUseful`, that returns true if the power's age is 2 or false if it 1.

_Note: You can create your `MundaneCreature` class in `src`.


- When navigating to `/powers` you should initialize a `MundaneCreature` object for each power in the array `powers`. Use these mundane power objects to help render information to the screen.
- When navigating to `/powers/:power_name` (show page), initialize a `MundaneCreature` object that corresponds with name featured in your dynamic `params` JSON object. Use the `powers` array to help you create a `MundaneCreature` object with the right attributes.
- Navigating to a power's show page should now also show whether or not the animal is ancient, depending on their age.

#### Part 6

Write unit tests for your new functionality in `src/__tests__/MundaneCreature.test.js`. You should be testing any methods you define.
