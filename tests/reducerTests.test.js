import mapAspectFilterReducer from '../client/dev/reducers/mapAspectFilterReducer'

test("Initial State of Map Aspect Filter should be all false", () => {
  const falsyState = {north: false,northEast: false,east: false,southEast: false,south: false,southWest: false,west: false,northWest: false}
  
  expect(mapAspectFilterReducer(undefined, {})).toEqual(falsyState);
})

test("Should return updated state when passed an argument", () => {
  const newState = {north: true,northEast: false,east: false,southEast: false,south: false,southWest: false,west: false,northWest: false}
  
  expect(mapAspectFilterReducer(undefined, {type: "CHANGE_FILTER", direction: "north"})).toEqual(newState);
})

test("Should update entire state, when server provides new state", () => {
  const newState = {north: true,northEast: true,east: true,southEast: true,south: true,southWest: true,west: true,northWest: true}
  
  expect(mapAspectFilterReducer(undefined, {type: "UPDATE_ALL", serverState: newState})).toEqual(newState);
})

test("Should toggle state true AND false", () => {
  const newState = {north: true,northEast: true,east: true,southEast: true,south: true,southWest: true,west: true,northWest: true}
  
  const updatedState = {north: false,northEast: true,east: true,southEast: true,south: true,southWest: true,west: true,northWest: true}
  
  let oldState = mapAspectFilterReducer(undefined, {type: "UPDATE_ALL", serverState: newState})
  
  expect(mapAspectFilterReducer(oldState, {type: "CHANGE_FILTER", direction: "north"})).toEqual(updatedState);
})