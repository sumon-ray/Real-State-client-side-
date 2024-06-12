import { useContext } from "react";
import useRole from "../../../hook/useRole";
import { AuthContext } from "../../../component/AuthProvider";


const MyProfile = () => {
    const {user,loader} =useContext(AuthContext)
    console.log(user);
    const [role,isLoading]=useRole()
    if (loader && isLoading) {
       return <p>Loading....</p> 
    }
    return (
        <div>
             <div className="my-4 font-[sans-serif] text-[#333]">
    <div className="sm:grid sm:grid-cols-3 items-center max-sm:flex max-sm:flex-col-reverse max-w-3xl min-h-[400px] mx-auto bg-green-200 rounded-md">
      <div className="max-w-lg sm:p-12 p-6 mx-auto sm:col-span-2 flex flex-col justify-center">
        <h2 className="text-3xl font-extrabold">{user?.displayName}</h2>
        <p className="text-sm mt-4 leading-relaxed">
        🌟 Dream chaser, soul surfer, wanderlust enthusiast. 🌍
Embracing life one adventure at a time. 🚀
Captivated by the beauty of the unknown. ✨
Let’s create memories that last a lifetime. 📸
        </p>
        <p className="text-sm mt-4 leading-relaxed">Email || {user?.email}</p>
        <p className="text-sm mt-4 leading-relaxed">Creation Time || {user?.metadata?.creationTime}</p>
        <p className="text-sm mt-4 leading-relaxed">SignIn Time || {user?.metadata?.lastSignInTime}</p>
        <div className="mt-12 flex items-end">
          <div>
            <h4 className="text-sm font-semibold">{user?.displayName}</h4>
            <p className="text-xs">{role}</p>
          </div>
          
        </div>
      </div>
      <div className="sm:ml-auto sm:relative lg:left-24 max-lg:mt-6">
        <img src={user?.photoURL} className="w-56 rounded-md" />
      </div>
    </div>
  </div>
        </div>
    );
};

export default MyProfile;