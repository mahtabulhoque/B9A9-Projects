import { useParams } from "react-router-dom";


const EstateDetails = () => {
  const {image,estate_title,segment_name,description,price}= useParams();
  return (
    <div className="card w-full p-10 bg-yellow-200 shadow-xl py-5">
      <figure className="px-10 pt-5">
        <img
          src={image}
          alt='Album'
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-3xl font-medium">{estate_title}</h2>
        <h3 className="card-title text-2xl font-medium text-gray-500">{segment_name}</h3>
        <p className="card-title text-[15px] text-gray-600">{description}</p>
        <p className="card-title text-2xl font-medium text-red-950">{price}</p>
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