export const generateRandomNumber = (req, res, next) => {
  // Generate a random number between 1 and 10
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  // Set this number as a cookie named 'randomNumber' with a 1-day expiration
  res.cookie("randomNumber", randomNumber, {
    maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
    httpOnly: true // Ensures the cookie is not accessible via client-side scripts
  });

  // Set attemptsLeft cookie for guessing, if not already set
  if (!req.cookies.attemptsLeft) {
    res.cookie('attemptsLeft', 2, {
      maxAge: 24 * 60 * 60 * 1000, // 1 day expiration
      httpOnly: true
    });
  }

  // Proceed to the next middleware or route handler
  next();
};