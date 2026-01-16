export const userMiddleware = (req, res, next) => {
  console.log('MIDDLEWARE', req.body);

  if (req.body.userId === 0) return res.send('<h1>NOOOOOOOOOOOOOOOO</h1>');

  console.log('bla bla bla');
  next();
};
