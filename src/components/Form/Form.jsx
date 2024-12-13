// import { Field, Formik } from "formik";
import { Field, Form, Formik } from "formik";
import css from "./Form.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

export default function Booking() {
  const [startDate, setStartDate] = useState(null);
  const [placeholder, setPlaceholder] = useState("Booking date*");

  const handleDateFocus = () => {
    setPlaceholder("Select a date between today");
  };
  const handleDateBlur = () => {
    setPlaceholder("Booking date*");
  };
  return (
    <div className={css.formContainer}>
      <p className={css.formTitle}>Book your campervan now</p>
      <p className={css.formSupText}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={{ username: "", email: "", date: null, comment: "" }}
        onSubmit={(vaues) => {
          console.log(vaues);
        }}
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
            {/* <Field
            type="date"
            name="date"
            className={css.field}
            placeholder="Booking date*"
          ></Field> */}
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
                className={css.field}
              />
            </div>
            <Field
              as="textarea"
              name="comment"
              className={css.field}
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
