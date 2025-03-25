export function getFinalState(baseState, queue) {
  let finalState = baseState;

  for (let item of queue) {
    if (typeof item == "number") finalState = item;
    else finalState = item(finalState);
  }

  return finalState;
}
