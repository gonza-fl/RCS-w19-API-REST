export const controladorUser = (req, res) => {
  console.log('ahora si');
  const { userId, firstName, lastName, dni } = req.body;
  res.json({
    message: 'User created successfully',
    userId,
    firstName,
    lastName,
    dni,
  });
};
