const joi = require("joi");

const signupValidation = (req, res, next) => {
  const schema = joi.object({
    user: joi.string().min(4).max(30).required(),
    email: joi.string().email().required(),
    age: joi.number().min(10).max(80).required(),
    // password: joi.string().min(5).max(20).required(),
    interest: joi.array().items(joi.string()).required(),
    mobile: joi
      .string()
      .pattern(/^\d{10}$/)
      .required(),
  });

  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      message: "Validation failed: " + error.details[0].message,
    });
  }
  next();
};

// const loginValidation = (req, res, next) => {
//   const schema = joi.object({
//     email: joi.string().email().required(),
//     password: joi.string().min(5).max(20).required(),
//   });

//   const { error } = schema.validate(req.body);
//   if (error) {
//     return res.status(400).json({
//       success: false,
//       message: "Validation failed: " + error.details[0].message,
//     });
//   }
//   next();
// };

module.exports = signupValidation
