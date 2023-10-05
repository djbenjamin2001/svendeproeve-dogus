"use client";
import { Formik } from "formik";
import { useRouter } from "next/navigation";
import { getCookie } from "cookies-next";
import BookingForm from "./BookingForm";
import Link from "next/link";
import * as Yup from "yup";

const Bookingtable = () => {
  const router = useRouter();

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email is required."),
    name: Yup.string().required("your name is required."),
   
  });


  const token = getCookie("token")
  const userId = parseInt(getCookie("userId"))
  console.log(userId)
  console.log(token)
  return (
    <main>
      <section className="relative flex justify-center items-center">
        <img
          className="opacity-25 h-[272px] w-full"
          src="/assets/bg/footerbg.jpg"
          alt=""
        />
        <div className="absolute text-center ">
          <h1 className=" m-auto text-2xl">Book Table</h1>
          <img src="/assets/bottom_line2.png" alt="" />
        </div>
      </section>
      <section>
        <Formik
          initialValues={{
            table: "",
            name: "",
            email: "",
            guests: "",
            phone: "",
            date: "",
           
          }}
          validationSchema={loginSchema}
          onSubmit={(values, { setStatus, setSubmitting }) => {
            fetch("http://localhost:4000/reservations", {
              method: "POST",
             headers:{
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
             },
              body: JSON.stringify({
                userId: userId, 
                name:values.name,
                email:values.email,
                phone:values.phone,
                guests:values.guests,
                table:values.table,
                date:values.date
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
          }}
        >
          {token ? (
          ({status}) =>(
            <BookingForm status={status}/>
            
                )
          ) : (
            <div>
              <p>Please log in to book a table.</p>
              <Link href="/login">Login</Link>
            </div>
          )}
           
        </Formik>
      </section>
    </main>
  );
};

export default Bookingtable;
