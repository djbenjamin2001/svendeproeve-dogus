import { cookies } from "next/headers";
import { revalidatePath } from 'next/cache'

const getData = async () => {
    let token = cookies().get("token");
let userId = cookies().get("userId")
console.log(userId)
    let res = await fetch(`http://localhost:4000/reservations?userId=${userId.value}`,
     { headers: {
          Authorization: `Bearer ${token.value}`,
        }}
    );
    return await res.json();
  };

const ReservationsPage = async() => {
    const reserved = await getData()

    console.log(reserved) 
    const deleteData = async(formdata) =>{
        "use server"
        let token = cookies().get("token");
        let myData = Object.fromEntries(formdata)
        console.log(myData)
        let res = await fetch("http://localhost:4000/reservations/"  + myData.deleteId, {
        method:"DELETE",
        headers: {
            Authorization: `Bearer ${token.value}`,
          }
    })
    if(!res.ok) revalidatePath("/reservations")
      }

    return ( 
<>
<section className="relative flex justify-center items-center" >
      <img className="opacity-25 h-[272px] w-full" src="/assets/bg/footerbg.jpg" alt="" />
      <div className="absolute text-center ">
      <h1 className=" m-auto text-2xl text-white hover:text-pink-500 transition duration-500  delay-500">Reservations</h1>
      <img src="/assets/bottom_line2.png" alt="" />
      </div>
     </section>
{!reserved.length ? (
        <p>no Reservations found</p>
      ) : ( 
        reserved.map((statement) => <form className="relative text-center   bg-[url('/assets/bg/pattern_bg.jpg')]" action={deleteData}> 
        <input type="hidden" name="deleteId" value={statement.id} />
        <div className="text-center py-[5rem] text-xl  font-bold ">
          <p>{statement.name}</p> &nbsp;
          <div className="flex justify-center gap-4  hover:text-pink-500 transition duration-500  delay-500">
          <p>number of guests:{statement.guests}</p> &nbsp;
          <p> ordered table:{statement.table}</p> &nbsp;
          <p>reserved date:{statement.date}</p> &nbsp;
         <button className="text-white hover:text-pink-500 transition duration-500  delay-500" type="submit">remove reservation</button>
         </div>
         </div>
        </form>
        )
        
      )}
        </>
     );
}
 
export default ReservationsPage;