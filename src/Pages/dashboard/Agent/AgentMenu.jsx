
import { MdAddTask, MdHomeWork,  MdOutlineSell } from 'react-icons/md'
// import MenuItem from './MenuItem'
import { IoGitPullRequestSharp } from 'react-icons/io5'
import { SiStatista } from 'react-icons/si'
import MenuItem from '../../../component/sidebar/MenuItem'
const AgentMenu = () => {
  return (
    <>
     <MenuItem label='Statistics'
                address='/dashboard'
                icon={SiStatista}></MenuItem>

             
               <MenuItem
            label='Add property'
            address='/dashboard/addproperty'
            icon={MdAddTask}>
          </MenuItem>
             
              <MenuItem
            label='My Added property'
            address='/dashboard/myaddedpro'
            icon={MdHomeWork}>
          </MenuItem>
              
              <MenuItem
            label='Requested properties'
            address='/dashboard/requstedproperty'
            icon={IoGitPullRequestSharp }>
          </MenuItem>
              <MenuItem
            label='My sold properties            '
            address='/dashboard/sold'
            icon={MdOutlineSell }>
          </MenuItem>
  
              
    </>
  )
}

export default AgentMenu