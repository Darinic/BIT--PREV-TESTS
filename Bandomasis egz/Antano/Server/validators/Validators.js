import Joi from 'joi';

const schema = Joi.object({
    story: Joi.string().required(),
    targetAmount: Joi.string().required(),
    photo: Joi.any().required()
  }
).options({ stripUnknown: true });

// middleware function
export async function isStoryRequestValid(req, res, next) {
  const request = {...req.body, ...req.files};
  const {error} = schema.validate(request);
  let isFormValid = error === undefined;
  let errorText = !isFormValid ? error.message : '';
  if (!isFormValid) {
    res.statusMessage = errorText;
    res.status(400);
    res.end();
    return;
  }
  next();
}

