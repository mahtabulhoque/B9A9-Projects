import { useLoaderData, useParams } from "react-router-dom";


const EstateDetails = () => {
  const {id} = useParams();
  const idInt = parseInt(id);
  const estates = useLoaderData();
  const estateData = estates.properties;

  const estate = estateData?.find ((estate) => estate.id === idInt)
  

  console.log(estate);

  const getItemsFromLS = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  };
 console.log(getItemsFromLS);
  // const [estatess, setEstates] = useState(getItemsFromLS());


 
  return (
    <div className="card w-full p-10 bg-yellow-200 shadow-xl py-5">
      <figure className="px-10 pt-5">
        <img
          src=''
          alt='Album'
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-3xl font-medium">{id}</h2>
        <h3 className="card-title text-2xl font-medium text-gray-500">{}</h3>
        <p className="card-title text-[15px] text-gray-600">{}</p>
        <p className="card-title text-2xl font-medium text-red-950">{}</p>
        {/* <div className="card-actions">
          <Link to={`/estate/${id}`}>
          <button className="btn btn-primary">View Property</button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default EstateDetails;