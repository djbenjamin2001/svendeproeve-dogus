const getData = async (userId) => {
    let res = await fetch(`http://localhost:4000/reservations?${userId}`);
    return await res.json();
  };

const ReservationsPage = async() => {
    const reserved = await getData()
    console.log(reserved)
    return ( 
        <>

        </>
     );
}
 
export default ReservationsPage;