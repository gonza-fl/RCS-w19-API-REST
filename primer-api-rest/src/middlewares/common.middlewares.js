export const middleware2 = (_req, _res, next) => {
  console.log('2 bla 2 bla 2 bla');
  next();
};
export const middleware3 = (_req, _res, next) => {
  console.log('3 bla 3 bla 3 bla');
  next();
};
export const middleware4 = (_req, _res, next) => {
  console.log('4 bla 4 bla 4 bla');
  next();
};


export const commonMiddlewares = [
  middleware2,
  middleware3,
  middleware4
]
