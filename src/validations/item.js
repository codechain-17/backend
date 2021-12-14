import Joi from 'joi'

export const validateNewEntrepreneurship = item => {
    const itemSchema = Joi.object({
        email: Joi.string().required(),
        representativeName: Joi.string().required(),
        representativeEmail: Joi.string().required(),
        name: Joi.string().required(),
        description: Joi.string().required(),
        confirmWorkshop: Joi.bool().required(),

    });

    const { error } = itemSchema.validate(item);

    if (error) {
        return { result: false, error }
    } else {
        return { result: true }
    }

}

