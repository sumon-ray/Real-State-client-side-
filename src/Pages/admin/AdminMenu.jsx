import { MdOutlineManageAccounts } from "react-icons/md";
import MenuItem from '../../component/sidebar/MenuItem'
import { GoCodeReview } from "react-icons/go";
import { LuTableProperties } from "react-icons/lu";
const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={MdOutlineManageAccounts} label='Manage Users' address='manageusers' />
      <MenuItem icon={GoCodeReview} label='Manage Review' address='managereview' />
      <MenuItem icon={LuTableProperties} label='Manage Propertys' address='managepropertys' />
      
    </>
  )
}

export default AdminMenu