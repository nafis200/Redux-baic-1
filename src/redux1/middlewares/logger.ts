


// const logger = (state) => (next) => (action) => {
//   console.log(state.getState(),"state");
//   console.log(action,"action");
//   return next(action)
// };

// export default logger;

const logger = (state) => (next) => (action) => {
  console.group(state.getState(),"state");
  console.info(action,"action");
  const result = next(action)
  console.info("Next state", state.getState())
  console.groupEnd()
  return result
};

export default logger;


