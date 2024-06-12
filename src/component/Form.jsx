import { TbFidgetSpinner } from "react-icons/tb";

const Form = ({ handleSubmit,loading }) => {
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-8 bg-white rounded-lg py-6 px-4 shadow-md"
      >
        <input
          type="text"
          name="property_title"
          required
          placeholder="Property Title"
          className="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm mb-4 outline-none"
        />
        <input
          type="text"
          name="location"
          required
          placeholder="Property Location"
          className="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm mb-4 outline-none"
        />
        
        <input
          type="number"
          name="max_price"
          required
          placeholder="Max Price"
          className="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm mb-4 outline-none"
        />
        <input
          type="number"
          name="min_price"
          required
          placeholder="Min Price"
          className="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm mb-4 outline-none"
        />
        {/*  */}
        <input
          type="file"
          name="image"
          required
          className="w-full  text-gray-500 font-medium text-lg bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded"
        />
        {/*  */}
        <textarea
         type="text"
          placeholder="Message"
          name="description"
          required
          rows="6"
          className="w-full mt-4 rounded-md px-6 bg-[#f0f1f2] text-sm pt-3 outline-none"
        ></textarea>
        {/*  */}

        {/* <input
          type="submit"
          
          
        /> */}
        <button type="submit"
        className="text-[#333] bg-green-200 hover:bg-green-300 font-semibold rounded-md text-sm px-6 py-3 block w-full mt-3"
        >{loading ? (
            <TbFidgetSpinner className='animate-spin m-auto' />
          ) : (
            "Add Property"
          )}
            
        </button>
      </form>
    </div>
  );
};

export default Form;
