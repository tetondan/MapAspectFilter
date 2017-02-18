# MapAspectFilter

Using React and Redux, design and build a component to filter map attributes by aspect.
Filtered selections must persist on the backend.

## Three Design Options:

### Option One:

![figure one](https://github.com/tetondan/MapAspectFilter/blob/master/sampleImages/figureOne.jpg)

A play on the original component to be replaced, users can click either on the piece of the compass they want to select or the direction.

Pros:

  - Very similar to legacy component, old users will have no trouble using it. 
  - Is a compass, anyone who's used a map can figure it out.

Cons:
  
  - Too similar to legacy design, users might be confused it isn't working the way it used to. 
  - Not intuitive enough to use without some sort of instruction.
  
### Option Two:

![figure two](https://github.com/tetondan/MapAspectFilter/blob/master/sampleImages/figureTwo.jpg)

A Simple compass rose, users may select either the piece of the compass cooresponding to the direction, or the direction itself. Multi-select using all different aspects, not just ranges, available. 

Pros: 

  - Uses compass rose, the universal sign for directions.
  - Intuitive design, can tell that the items are clickable
  - Users can filter by individual aspects not just a range.
  
Cons:
  
  - Slight departure from legacy in that users can select any aspect, not just a range. May confuse legacy users.
  
### Option Three:

![figure three](https://github.com/tetondan/MapAspectFilter/blob/master/sampleImages/figureThree.jpg)

Using range sliders, the top being the left side of the range and the bottom being the right side of the range. 

Pros:
  
  - Intuitive range sliders, most users have used before.
  
Cons:
  
  - Complete departure from legacy component, all users will need to re-learn.
  - Not a compass, users may be confused as to what it controls or filters without further instruction.
  
  
### My Choice: #2


## Execution:

I built the compass rose using an inline SVG. This gave me the ability to scale to any size nessesary while maintaining the proportions and resolution. It also allowed me to control each piece of the compass as I pleased, allowing me to set custom click handlers and classes on each piece. This is a standalone component and can be plugged into any other component and scaled as necessary. 

The App is built on a mock drop down menu with the Compass component rendered inside of it, it also utilizes a seperate component to display the current selections. 

I built a Node.js backend to serve the static files, and also built a small API to persist state on the backend. The "Database" is a simple JavaScript Object, that is updated per the API, this can easily be swapped out with a real database to persist the data between clusters, and in the event of server failure.

Webpack and Babel are doing all of the Transpiling on the front end, and the JS is being served as a single static file.


## Instructions:

  - If you do not have Webpack 2.0 installed globally on your machine:
    - "npm install -g webpack"
  - clone repository
  - From the root file of the repository
    - "npm install"
    - "npm run build"
    - "npm start"
  - Direct your browser to http://localhost:3000
  
  - To run tests:
    - "npm test"
  
