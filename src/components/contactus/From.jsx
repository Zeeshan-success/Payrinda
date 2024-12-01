import { useFormik } from "formik";
import { Formvalidation } from "../formvalidationscehma/Formvalidation";
import axios from "axios";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  country: "",
  city: "",
  comment: "",
};
const From = () => {
  const { values, touched, errors, handleBlur, handleSubmit, handleChange } =
    useFormik({
      initialValues: initialValues,
      validationSchema: Formvalidation,
      onSubmit: async (value) => {
        console.log("hello", value.city);

        try {
          const response = await fetch("http://localhost:3000/api/customer", {
            method: "POST",
            headers: {
              "Content-Type": "application/json", // Ensure the server knows you're sending JSON
            },
            body: JSON.stringify(value),
          });

          const data = await response.json(); // Properly await the JSON response

          if (response.ok) {
            // Check if the status is in the 200-299 range
            alert(
              "Successfully added! Comapny will contact you as soon as posible"
            );
          } else {
            alert(data.message || "There was an error, please try again.");
          }
        } catch (error) {
          console.error("Error:", error);
          alert(
            "An unexpected error occurred. Please try again. Or may be Email or Phone number already used kindly used another Number or Email"
          );
        }
      },
    });

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid">
          <label className="text-lg my-2" htmlFor="name">
            Name*
          </label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            name="name"
            type="text"
            id="name"
            placeholder="Enter Your Name"
            className="w-full shadow-inner border-none rounded-full h-10 outline-none   focus:ring-4  pl-5 bg-[#F5F5F5]"
          />

          {errors.name && touched.name ? (
            <p className="text-red-600">{errors.name}</p>
          ) : null}
        </div>
        <div className="grid">
          <label className="text-lg my-2" htmlFor="Email">
            Email ID*
          </label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            name="email"
            type="email"
            id="Email"
            placeholder="Enter Your Email Address"
            className="w-full shadow-inner border-none rounded-full h-10 outline-none   focus:ring-4  pl-5 bg-[#F5F5F5]"
          />
          {errors.email && touched.email ? (
            <p className="text-red-600">{errors.email}</p>
          ) : null}
        </div>
        <div className="grid">
          <label className="text-lg my-2" htmlFor="phone">
            Phone Number*
          </label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phone}
            name="phone"
            type="number"
            id="phone"
            placeholder="Enter Your Phone Number"
            className="w-full shadow-inner border-none rounded-full h-10 outline-none   focus:ring-4  pl-5 bg-[#F5F5F5]"
          />
          {errors.phone && touched.phone ? (
            <p className="text-red-600">{errors.phone}</p>
          ) : null}
        </div>
        <div className="grid">
          <label className="text-lg my-2" htmlFor="country">
            Country Name*
          </label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.country}
            name="country"
            type="text"
            id="country"
            placeholder="Enter Your Country Name"
            className="w-full shadow-inner border-none rounded-full h-10 outline-none   focus:ring-4  pl-5 bg-[#F5F5F5]"
          />
          {errors.country && touched.country ? (
            <p className="text-red-600">{errors.country}</p>
          ) : null}
        </div>
        <div className="grid">
          <label className="text-lg my-2" htmlFor="city">
            City Name*
          </label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.city}
            name="city"
            type="text"
            id="city"
            placeholder="Enter Your City Name"
            className="w-full shadow-inner border-none rounded-full h-10 outline-none   focus:ring-4  pl-5 bg-[#F5F5F5]"
          />
          {errors.city && touched.city ? (
            <p className="text-red-600">{errors.city}</p>
          ) : null}
        </div>
        <div className="grid">
          <label className="text-lg my-2" htmlFor="comment">
            Comments (optional)
          </label>
          <textarea
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.comment}
            name="comment"
            rows="5"
            cols="50"
            placeholder="Leave Your Comments Here"
            id="comment"
            className="shadow-inner border-none rounded-3xl pt-2  outline-none   focus:ring-4  pl-5 bg-[#F5F5F5]"
          ></textarea>
        </div>
        <div className="w-full ">
          <button
            type="submit"
            className="w-full my-5 p-2 text-lg font-semibold border-none text-white bg-[#000080] rounded-full"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </>
  );
};

export default From;
