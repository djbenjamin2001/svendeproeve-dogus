"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";

import * as Yup from "yup";
const Subscribe = () => {
  const router = useRouter();
  const newsSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email is required."),

  });
  return (<main className="bg-black">
      
<article className="relative text-center py-5  bg-black">
    <h1 className="text-2xl">want the latest night club news</h1>
   <p>Subscribe to our newsletter and never miss an <span className="text-pink-500">Event</span></p>
    <Formik 
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={newsSchema}
      onSubmit={(values, { setStatus, setSubmitting }) => {
        fetch("http://localhost:4000/newsletters", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
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
    { ({status})   =>(
      <Form className=" flex flex-row mx-auto  p-10 w-[30rem] text-white gap-4">
        <div>
        <Field className="border p-3 border-white border-l-0 border-t-0 border-r-0 bg-transparent" name="email" type="email" placeholder="enter your email" />
        <ErrorMessage name="email" component={"p"} className="text-red-400" />
        </div>
                <div className="flex justify-end">
        <button className=" border w-[10rem] border-l-0 border-r-0 border-white p-2">SEND</button>
        </div>
      </Form>)}
    </Formik>
 
       
   
    </article>
    </main>
  );
};

export default Subscribe;
