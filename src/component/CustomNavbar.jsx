import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import HostModal from "./HostModal";
import { ToastContainer, toast } from "react-toastify";
import useAxiosSecure from "../hook/useAxiosSecure";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";


const CustomNavbar = () => {
  const axiosSecure = useAxiosSecure()
const {user,loader,logout} =useContext(AuthContext)
// console.log(user);
// for modal
const [isModalOpen,setIsModalOpen] = useState(false)
const closeModal=() => {
setIsModalOpen(false)
}
const modalHandler = async  () => {
  console.log("i want");
  
  try {
    const currentUser = {
      email: user?.email,
      role: 'guest',
      status: 'Requested',
    }
    const { data } = await axiosSecure.put(`/user`, currentUser)
    console.log(data)
    if (data.modifiedCount > 0) {
      toast.success('Success! wait for admin confirmation')
    } else {
      toast.success('Please!, Wait Admin confirmation')
    }
    closeModal();
  }catch (err) {
    console.log(err)
    toast.error(err.message)
  } finally {
    closeModal()
  }
}


    const navOption = <>
    <Navbar.Link href="/">
            Home
          </Navbar.Link>
         
          <Navbar.Link href="/dashboard">Dashboard</Navbar.Link>
          
          <Navbar.Link href="/allproperties">All Properties</Navbar.Link>
    </>
    return loader ? (
        <div className="flex items-center justify-center w-full h-[100vh] text-gray-100 ">
        <div>
          <h1 className="text-xl md:text-7xl font-bold flex items-center">
            L
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="animate-spin"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM13.6695 15.9999H10.3295L8.95053 17.8969L9.5044 19.6031C10.2897 19.8607 11.1286 20 12 20C12.8714 20 13.7103 19.8607 14.4956 19.6031L15.0485 17.8969L13.6695 15.9999ZM5.29354 10.8719L4.00222 11.8095L4 12C4 13.7297 4.54894 15.3312 5.4821 16.6397L7.39254 16.6399L8.71453 14.8199L7.68654 11.6499L5.29354 10.8719ZM18.7055 10.8719L16.3125 11.6499L15.2845 14.8199L16.6065 16.6399L18.5179 16.6397C19.4511 15.3312 20 13.7297 20 12L19.997 11.81L18.7055 10.8719ZM12 9.536L9.656 11.238L10.552 14H13.447L14.343 11.238L12 9.536ZM14.2914 4.33299L12.9995 5.27293V7.78993L15.6935 9.74693L17.9325 9.01993L18.4867 7.3168C17.467 5.90685 15.9988 4.84254 14.2914 4.33299ZM9.70757 4.33329C8.00021 4.84307 6.53216 5.90762 5.51261 7.31778L6.06653 9.01993L8.30554 9.74693L10.9995 7.78993V5.27293L9.70757 4.33329Z" />
            </svg>{" "}
            ading . . .
          </h1>
        </div>
      </div>
       ) : (
        <Navbar fluid rounded className="fixed z-20 opacity-70 w-full bg-white ">
        <Navbar.Brand >
          <img src="https://themesflat.co/html/homzen/images/logo/logo@2x.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
          {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span> */}
        </Navbar.Brand>
        <div className="flex md:order-2 justify-around">
        {/*  */}
        {/*  */}
        {/* <div className='hidden md:block'>

</div> */}
<HostModal isOpen={isModalOpen} closeModal={closeModal} modalHandler={modalHandler}></HostModal>
         {/*  */}
        {/*  */}
        {/*  */}
        {
            user &&   <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User settings" img={user?.photoURL} rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{user?.displayName}</span>
              <span className="block truncate text-sm font-medium">{user?.email}</span>
            </Dropdown.Header>
            {/* <Dropdown.Item>Dashboard</Dropdown.Item> */}
            {/*  */}
           <div>
             <button
  // disabled={!user}
  onClick={() => setIsModalOpen(true)}
  className='disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 py-3 px-4 text-sm font-semibold rounded-full  transition'
>
  Host your home
</button>
</div>
            {/*  */}
            
            
            <Dropdown.Divider />
            <Dropdown.Item><button onClick={logout} className="bg-black text-white px-6 py-2 rounded-sm">LogOut</button></Dropdown.Item>
          </Dropdown>
        }
        {
          !user && <Link to="/login"><button  className=" mr-1 px-4 py-2 bg-[#a8181f] rounded-xl text-white font-bold">LogIn</button></Link>
        }
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          {/* <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Servicesssss</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link> */}
          {navOption}
        </Navbar.Collapse>
        <ToastContainer />
      </Navbar>
    );
};

export default CustomNavbar;