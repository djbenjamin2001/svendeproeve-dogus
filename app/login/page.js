"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import Link from "next/link";
import * as Yup from "yup";
const LoginPage = () => {
  const router = useRouter();
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email is required."),
    password: Yup.string()
      .min(6, "Password is too short")
      .required("Password is required."),
  });
  return (<main >
        <section className="relative flex justify-center items-center" >
      <img className="opacity-25 h-[272px] w-full" src="/assets/bg/footerbg.jpg" alt="" />
      <div className="absolute text-center ">
      <h1 className=" m-auto text-2xl">LOGIN</h1>
      <img src="/assets/bottom_line2.png" alt="" />
      </div>
     </section>
<article className="relative text-center py-5  bg-[url('/assets/bg/pattern_bg.jpg')]">
    <h1 className="text-2xl">NIGHTCLUB IS MEMBERS ONLY</h1>
    <p>Please provide email and password to log in</p>
    <Formik 
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={loginSchema}
      onSubmit={(values, { setStatus, setSubmitting }) => {
        fetch("http://localhost:4000/login", {
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
      <Form className=" flex flex-col mx-auto  p-10 w-[30rem] text-white gap-4">
        <Field className="border p-3 border-white bg-transparent" name="email" type="email" />

        <ErrorMessage name="email" component={"p"} className="text-red-400" />

        <Field
          className="border border-white bg-transparent p-3"
          name="password"
          type="password"
        />

        <ErrorMessage
          name="password"
          component={"p"}
          className="text-red-400"
        />
  {status && (
                  <div className="bg-red-600  text-white p-8">{status}</div>
                )}
                <div className="flex justify-end">
        <button className=" border w-[10rem] border-l-0 border-r-0 border-white p-2">SEND</button>
        </div>
      </Form>)}
    </Formik>
 
        <p className="text-center">Are you not yet a member? Do you want to be a part of our exclusive club? <Link className="text-[#FF2A70]" href="/register"> Sign up here.</Link></p>
   
    </article>
    </main>
  );
};

export default LoginPage;
