import * as Yup from 'yup';

export const searchSchema = Yup.object({
  searchImage: Yup.string()
    .required('Field is required')
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must be less then 50 characters'),
});
