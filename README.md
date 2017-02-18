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

Pros: 

  - Uses compass rose, the universal sign for directions.
  - Intuitive design, can tell that the items are clickable
  - Users can filter by individual aspects not just a range.
  
Cons:
  
  - Slight departure from legacy in that users can select any aspect, not just a range.
  
### Option Three:

![figure three](https://github.com/tetondan/MapAspectFilter/blob/master/sampleImages/figureThree.jpg)

Pros:
  
  - Intuitive range sliders, most users have used before.
  
Cons:
  
  - Complete departure from legacy component, all users will need to re-learn.
  - Not a compass, users may be confused as to what it controls or filters without further instruction.
  
  
### My Choice: #2
