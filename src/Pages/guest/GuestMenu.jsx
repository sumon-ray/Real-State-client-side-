import { MdOutlineBookmarkAdded } from "react-icons/md";
import MenuItem from "../../component/sidebar/MenuItem";
import { MdOutlineRateReview } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";


const GuestMenu = () => {
    return (
        <div>
             <MenuItem icon={MdOutlineRateReview} label='My Reviews' address='myreviews' />
             <MenuItem icon={MdOutlineBookmarkAdded} label='Wishlist' address='mywishlist' />
             <MenuItem icon={MdOutlinePayment} label='Property Bought' address='bought' />
        </div>
    );
};

export default GuestMenu;