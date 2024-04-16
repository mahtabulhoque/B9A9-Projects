import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

import { useEffect, useState } from "react";
import SingleEstate from "../SingleEstate/SingleEstate";

const Estate = () => {
  const [estate, setEstate] = useState([]);

  useEffect(() => {
    fetch("./estate.json")
      .then((res) => res.json())
      .then((data) => setEstate(data));
  }, []);
  return (
    <div>
      <div>
        <h2 className="text-center py-10 text-[#131313] font-bold text-[40px]">
          Estate
        </h2>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="3000"
        className="flex flex-col lg:grid lg:grid-cols-3 gap-7"
      >
        {estate.map((estate) => (
          <SingleEstate key={estate.id} estate={estate}></SingleEstate>
        ))}
      </div>
    </div>
  );
};

export default Estate;
