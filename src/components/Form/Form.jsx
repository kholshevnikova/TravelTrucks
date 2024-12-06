// import { Field, Formik } from "formik";
import { Field, Form, Formik } from "formik";
import css from "./Form.module.css";

export default function Booking() {
  return (
    <div className={css.formContainer}>
      <p className={css.formTitle}>Book your campervan now</p>
      <p className={css.formSupText}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form className={css.form}>
          <Field
            type="text"
            name="username"
            className={css.field}
            placeholder="Name*"
          ></Field>
          <Field type="email" name="email" className={css.field}></Field>
          <Field type="date" name="date" className={css.field}></Field>
          <Field type="text" name="comment" className={css.field}></Field>
          <button type="submit">Send</button>
        </Form>
      </Formik>
    </div>
  );
}
