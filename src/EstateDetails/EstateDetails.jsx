import { Link, useLoaderData, useParams } from "react-router-dom";


const EstateDetails = () => {
  const {id} = useParams();
  console.log(id);
  const estates = useLoaderData();
  console.log(estates);
  

  const estate = estates?.find ((estate) => estate.id === id)
  

  console.log(estate);





 
  return (
    <div className="card w-full p-10 bg-gray-300 shadow-xl py-5">
      <figure className="px-10 pt-5">
        <img
          src={estate.image}
          alt=''
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-4xl font-medium">{estate.estate_title}</h2>
        <h3 className="card-title text-2xl font-medium text-red-500">{estate.description}</h3>
        <p className="card-title text-[35px] text-gray-600 p-6">Price: {estate.price}</p>
        <p className="card-title text-3xl font-medium text-red-950">Status: {estate.status}</p>
        {/* <div className="card-actions">
          <Link to={`/estate/${id}`}>
          <button className="btn btn-primary">View Property</button>
          </Link>
        </div> */}
      </div>
      <div className="text-center py-10">
      <Link to='/' className="lg:text-[30px] text-[20px] text-white font-semibold bg-gray-500 rounded-xl p-5">Back to Homes</Link>
      </div>
    </div>
    
    
    
  );
};

export default EstateDetails;