import * as Yup from "yup";

export const Formvalidation = Yup.object({
  name: Yup.string().min(2).required("Please Enter Your Name"),
  email: Yup.string().email().required("Please Enter Your Email"),
  phone: Yup.number().required("Please Enter Your Phone Number"),
  country: Yup.string().required("Please Enter Your Country Name"),
  city: Yup.string().required("Please Enter Your City Name"),
  comment: Yup.string(),
});
