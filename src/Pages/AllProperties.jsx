import { useQuery } from "@tanstack/react-query";

import AllPropertycard from "../card/AllPropertycard";
import useAxiosCommon from "../hook/useAxiosCommon";
import { useState } from "react";

const AllProperties = () => {
  const axiosCommon = useAxiosCommon();
  const [search, setSearch] = useState("");
  const [sortCriteria, setSortCriteria] = useState("");
  const { data: houses = [], isLoading } = useQuery({
    queryKey: ["house"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/house");
      return data;
    },
  });
  // search system
  const filteredHouses = houses.filter((house) =>
    house.location.toLowerCase().includes(search.toLowerCase())
  );

  // 
  // 
  const sortedHouses = [...filteredHouses].sort((a, b) => {
    if (sortCriteria === "minPriceAsc") {
      return a.price_range.min - b.price_range.min;
    } else if (sortCriteria === "minPriceDesc") {
      return b.price_range.min - a.price_range.min;
    } else if (sortCriteria === "maxPriceAsc") {
      return a.price_range.max - b.price_range.max;
    } else if (sortCriteria === "maxPriceDesc") {
      return b.price_range.max - a.price_range.max;
    }
    return 0;
  });
  // 
  // 
  // console.log(houses);
  if (isLoading) {
    return <p>loading....</p>;
  }
  return (
    <div className="min-h-screen pt-16">
      
        <div>
          <div className="bg-green-100 px-4 py-10 font-[sans-serif]">
            <div className="max-w-6xl mx-auto">
              <div className="text-center">
                <h2 className="text-3xl font-extrabold text-[#333]">
                  LATEST BLOGS
                </h2>
              </div>
              {/*  */}
              <div className="mb-8 text-center">
            <input
              type="text"
              placeholder="Search by location"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full max-w-md p-2 border rounded mt-4"
            />
          </div>
              {/*  */}
               {/* Sort Options */}
          <div className="mb-8 text-center">
            <select
              value={sortCriteria}
              onChange={(e) => setSortCriteria(e.target.value)}
              className="p-2 border rounded"
            >
              <option value="">Sort by Price</option>
              <option value="minPriceAsc">Min Price Ascending</option>
              <option value="minPriceDesc">Min Price Descending</option>
              <option value="maxPriceAsc">Max Price Ascending</option>
              <option value="maxPriceDesc">Max Price Descending</option>
            </select>
          </div>
              <div className="grid gap-10 grid-cols-1 md:grid-cols-3">
              {sortedHouses && sortedHouses.length > 0 ? (
              sortedHouses.map((house) => (
                <AllPropertycard key={house._id} house={house} />
              ))
            ) : (
              <div className="text-center font-bold text-2xl col-span-3">
                <h1>No properties found</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
  
);
}

export default AllProperties;
