import React from 'react'
import { Link } from 'react-router-dom'
import '../../../styles/Firms.scss'
import {
    DeleteIcon, ProfileIcon, AngleDownIcon, ToggeOnIcon, ToggeOffIcon,
} from '../../../components/icons/icons'
// import ToggleOnIcon from '@mui/icons-material/ToggleOn';
// import ToggleOffIcon from '@mui/icons-material/ToggleOff';

function Lawyer() {
    return (
        <div className='lawyer '>
            <div className="firmheader">
                <h5>Lawyers </h5>
                <Link to='/'>+ Add new Counsel</Link>
            </div>
            <table>
                <tr>

                    <th>ID No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th></th>
                    <th></th>

                </tr>

                <tr className='active'>
                    <td>#2453</td>
                    <td><ProfileIcon />Mike Ross</td>
                    <td>mikeross@gmail.com</td>
                    <td>me</td>
                    <td></td>
                    <td><ToggeOffIcon /></td>
                </tr>
                <tr className='notActive'>
                    <td>#2453</td>
                    <td><ProfileIcon />Mike Ross</td>
                    <td>mikeross@gmail.com</td>
                    <td>
                        <select name="" id="">
                            <option value="">member</option>
                            <option value="">pending</option>
                            <option value="">admin</option>
                            <AngleDownIcon />
                        </select>
                    </td>
                    <td><DeleteIcon /></td>
                    <td><ToggeOnIcon /></td>
                </tr>
                <tr className='notActive'>
                    <td>#2453</td>
                    <td><ProfileIcon />Mike Ross</td>
                    <td>mikeross@gmail.com</td>
                    <td>
                        <select name="" id="">
                            <option value="">member</option>
                            <option value="">pending</option>
                            <option value="">admin</option>
                        </select>
                    </td>
                    <td><DeleteIcon /></td>
                    <td><ToggeOnIcon /></td>
                </tr>
                <tr className='notActive'>
                    <td>#2453</td>
                    <td><ProfileIcon />Mike Ross</td>
                    <td>mikeross@gmail.com</td>
                    <td>
                        <select name="" id="">
                            <option value="">member</option>
                            <option value="">pending</option>
                            <option value="">admin</option>
                        </select>
                    </td>
                    <td><DeleteIcon /></td>
                    <td><ToggeOnIcon /></td>
                </tr>
                <tr className='notActive'>
                    <td>#2453</td>
                    <td><ProfileIcon />Mike Ross</td>
                    <td>mikeross@gmail.com</td>
                    <td>
                        <select name="" id="">
                            <option value="">member</option>
                            <option value="">pending</option>
                            <option value="">admin</option>
                        </select>
                    </td>
                    <td><DeleteIcon /></td>
                    <td><ToggeOnIcon /></td>
                </tr>
                <tr className='notActive'>
                    <td>#2453</td>
                    <td><ProfileIcon /> Mike Ross</td>
                    <td>mikeross@gmail.com</td>
                    <td>
                        <select name="" id="">
                            <option value="">member</option>
                            <option value="">pending</option>
                            <option value="">admin</option>
                        </select>
                    </td>
                    <td><DeleteIcon /></td>
                    <td><ToggeOnIcon /></td>
                </tr>
                <tr className='notActive'>
                    <td>#2453</td>
                    <td><ProfileIcon /> Mike Ross</td>
                    <td>mikeross@gmail.com</td>
                    <td>
                        <select name="" id="">
                            <option value="">member</option>
                            <option value="">pending</option>
                            <option value="">admin</option>
                        </select>
                    </td>
                    <td><DeleteIcon /></td>
                    <td><ToggeOnIcon /></td>
                </tr>

            </table>


        </div>
    )
}

export default Lawyer