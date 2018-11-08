export function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    //console.log('in counter js')
    return state + 1
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}