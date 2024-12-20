// import { Field, Formik } from "formik";
import { Field, Form, Formik } from "formik";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import css from "./Form.module.css";
import "../../styles/react-datepicker-overrides.css";
import { useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

export default function Booking() {
  const [startDate, setStartDate] = useState(null);
  const [placeholder, setPlaceholder] = useState("Booking date*");
  const { id } = useParams();

  const handleDateFocus = () => {
    setPlaceholder("Select a date between today");
  };
  const handleDateBlur = () => {
    setPlaceholder("Booking date*");
  };
  const handleSubmit = (values) => {
    try {
      localStorage.setItem(`bookingCamper${id}`, JSON.stringify(values));
      toast.success("Booking form sent successfully!");
    } catch (error) {
      toast.error("Something went wrong. Try again later.", error);
    }
  };
  return (
    <div className={css.formContainer}>
      <p className={css.formTitle}>Book your campervan now</p>
      <p className={css.formSupText}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={{ username: "", email: "", date: null, comment: "" }}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form className={css.form}>
            <Field
              type="text"
              name="username"
              className={css.field}
              placeholder="Name*"
            ></Field>
            <Field
              type="email"
              name="email"
              className={css.field}
              placeholder="Email*"
            ></Field>
            <div className={css.datePickerWrapper}>
              <DatePicker
                selected={startDate}
                onChange={(date) => {
                  setStartDate(date);
                  setFieldValue("date", date);
                }}
                onFocus={handleDateFocus}
                onBlur={handleDateBlur}
                dateFormat="MMMM d, yyyy"
                minDate={new Date()}
                placeholderText={placeholder}
                className={`${css.field} ${css.datePicker}`}
                popperClassName={css.datePickerPopper}
              />
            </div>
            <Field
              as="textarea"
              name="comment"
              className={`${css.field} ${css.textarea}`}
              placeholder="Comment"
            ></Field>
            <button type="submit" className={css.formButton}>
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
