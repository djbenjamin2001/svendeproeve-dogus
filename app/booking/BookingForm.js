import { Field, ErrorMessage, Form, useFormikContext } from "formik";
const BookingForm = () => {
  const formikProps = useFormikContext();
  const handleClick = (e) =>
    formikProps.setFieldValue("table", e.target.dataset.table);
  return (
    <Form className="flex flex-col mx-auto  w-[30rem] text-white gap-4">
      <section className="grid grid-cols-5">
        <article className="relative flex justify-center items-center">
          <img className="  " src="/assets/table/table_1.png" alt="" />
          <div className="absolute text-center ">
            <button type="button" data-table="1" onClick={handleClick}>
              1
            </button>
          </div>
        </article>
        <article className="relative flex justify-center items-center">
          <img className="  " src="/assets/table/table_1.png" alt="" />
          <div className="absolute text-center ">
            <button type="button" data-table="2" onClick={handleClick}>
              2
            </button>
          </div>
        </article>
        <article className="relative flex justify-center items-center">
          <img className="  " src="/assets/table/table_2.png" alt="" />
          <div className="absolute text-center ">
            <button type="button" data-table="3" onClick={handleClick}>
              3
            </button>
          </div>
        </article>
        <article className="relative flex justify-center items-center">
          <img className="  " src="/assets/table/table_1.png" alt="" />
          <div className="absolute text-center ">
            <button type="button" data-table="4" onClick={handleClick}>
              4
            </button>
          </div>
        </article>
        <article className="relative flex justify-center items-center">
          <img className="  " src="/assets/table/table_3.png" alt="" />
          <div className="absolute text-center ">
            <button type="button" data-table="5" onClick={handleClick}>
              5
            </button>
          </div>
        </article>
        <article className="relative flex justify-center items-center">
          <img className="  " src="/assets/table/table_1.png" alt="" />
          <div className="absolute text-center ">
            <button type="button" data-table="6" onClick={handleClick}>
              6
            </button>
          </div>
        </article>
        <article className="relative flex justify-center items-center">
          <img className="  " src="/assets/table/table_1.png" alt="" />
          <div className="absolute text-center ">
            <button type="button" data-table="7" onClick={handleClick}>
              7
            </button>
          </div>
        </article>
        <article className="relative flex justify-center items-center">
          <img className="  " src="/assets/table/table_2.png" alt="" />
          <div className="absolute text-center ">
            <button type="button" data-table="8" onClick={handleClick}>
              8
            </button>
          </div>
        </article>
        <article className="relative flex justify-center items-center">
          <img className="  " src="/assets/table/table_1.png" alt="" />
          <div className="absolute text-center ">
            <button type="button" data-table="9" onClick={handleClick}>
              9
            </button>
          </div>
        </article>
        <article className="relative flex justify-center items-center">
          <img className="  " src="/assets/table/table_3.png" alt="" />
          <div className="absolute text-center ">
            <button type="button" data-table="10" onClick={handleClick}>
              10
            </button>
          </div>
        </article>
        <article className="relative flex justify-center items-center">
          <img className="  " src="/assets/table/table_1.png" alt="" />
          <div className="absolute text-center ">
            <button type="button" data-table="11" onClick={handleClick}>
              11
            </button>
          </div>
        </article>
        <article className="relative flex justify-center items-center">
          <img className="  " src="/assets/table/table_1.png" alt="" />
          <div className="absolute text-center ">
            <button type="button" data-table="12" onClick={handleClick}>
              12
            </button>
          </div>
        </article>
        <article className="relative flex justify-center items-center">
          <img className="  " src="/assets/table/table_2.png" alt="" />
          <div className="absolute text-center ">
            <button type="button" data-table="13" onClick={handleClick}>
              13
            </button>
          </div>
        </article>
        <article className="relative flex justify-center items-center">
          <img className="  " src="/assets/table/table_1.png" alt="" />
          <div className="absolute text-center ">
            <button type="button" data-table="14" onClick={handleClick}>
              14
            </button>
          </div>
        </article>
        <article className="relative flex justify-center items-center">
          <img className="  " src="/assets/table/table_3.png" alt="" />
          <div className="absolute text-center ">
            <button type="button" data-table="15" onClick={handleClick}>
              15
            </button>
          </div>
        </article>
      </section>
      <section className="flex flex-col gap-4">
      <div className=" flex gap-4">
      <Field
        className="border p-3 border-white bg-transparent"
        name="email"
        type="email"
        placeholder="your email"
      />
      <ErrorMessage name="email" component={"p"} className="text-red-400" />
      <Field
        className="border p-3 border-white bg-transparent"
        name="name"
        type="name"
        placeholder="your name"
      />
      <ErrorMessage name="name" component={"p"} className="text-red-400" />
</div>
<div className="flex gap-4">
      <Field
        className="border p-3 border-white bg-transparent"
        name="table"
        type="number"
        placeholder="choose your CAMP!!"
      />
      <Field
        className="border p-3 border-white bg-transparent"
        name="guests"
        type="number"
        placeholder="number of guests"
      />
</div>
  <div className="flex justify-between gap-4 ">
      <Field className="border p-3   border-white bg-transparent" name="date" type="date" />
      <Field
        className="border p-3    border-white bg-transparent"
        name="phone"
        type="number"
        placeholder="Phone number"
      />
    
     </div>   
     </section>
     <Field
          className="border border-white bg-transparent p-3"
          name="textarea"
          type="text"
          as="textarea"
        />
     <div className="flex justify-end pb-5">
        <button type="submit" className="border w-[10rem] border-l-0 border-r-0 border-white p-2">reserve</button>
        </div>
    </Form>
  );
};

export default BookingForm;
