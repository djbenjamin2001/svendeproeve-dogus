"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import * as Yup from "yup";
const RegisterPage = () => {
  const router = useRouter();
  const registerSchema = Yup.object().shape({
    name: Yup.string().required("write your name."),
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email is required."),
    password: Yup.string()
      .min(6, "Password is too short")
      .required("Password is required."),
    confirmPassword: Yup.string()
      .required("please confirm your password ")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });
  return (
    <article className="relative text-center py-5  bg-[url('/assets/bg/pattern_bg.jpg')]">
    <h1 className="text-2xl">NIGHTCLUB IS MEMBERS ONLY</h1>
    <p>Fill out the form below to register a menbership.</p>
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={registerSchema}
      onSubmit={(values, { setStatus, setSubmitting }) => {
        fetch("http://localhost:4000/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            password: values.password,
          }),
        })
          .then((res) => {
            if (!res.ok) {
              setStatus(res.json());
              setSubmitting(false);
            } else {
              return res.json();
            }
          })
          .then((data) => {
            setCookie("token", data.accessToken, {
              sameSite: "lax",
              maxAge: 3600,
            });
            router.push("/");
          });
      }}
    >
      {({ status }) => (
        <Form className="flex flex-col mx-auto  p-10 w-[30rem] text-white gap-4">
          <Field className="border p-3 border-white bg-transparent" name="name" type="text" />
          <ErrorMessage name="name" component={"p"} className="text-red-400" />
          <Field className="border p-3 border-white bg-transparent" name="email" type="email" />

          <ErrorMessage name="email" component={"p"} className="text-red-400" />

          <Field
            className="border p-3 border-white bg-transparent"
            name="password"
            type="password"
          />
          <ErrorMessage
            name="password"
            component={"p"}
            className="text-red-400"
          />
          <Field
            className="border p-3 border-white bg-transparent"
            name="confirmPassword"
            type="password"
          />
          <ErrorMessage
            name="confirmPassword"
            component={"p"}
            className="text-red-400"
          />
          {status && <div className="bg-red-600 text-white p-8">{status}</div>}
          <div className="flex justify-end">
        <button className=" border w-[10rem] border-l-0 border-r-0 border-white p-2">SEND</button>
        </div>
        </Form>
      )}
    </Formik>
    </article>
  );
};

export default RegisterPage;
