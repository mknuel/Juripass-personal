import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as ROUTE from "../../../../constants/routes";
import Toggle from '../../../../components/toggle'
import { ArrowLeft, Trash } from 'iconsax-react'
import '../index.scss'
import { BtnSecondary, BtnTertiary } from '../../../../components/button'
import Select from '../../../../components/select'

function Lawyer() {
    const navigate = useNavigate()
    return (
        <div className='lawyer'>
            <a onClick={() => navigate('/dashboard/firms')}>
                <ArrowLeft size="32" color="#000000" />
            </a>
            <div className="firms-header">
                <h5>Lawyers </h5>
                <Link to='/'><BtnTertiary>+ Add new Counsel</BtnTertiary></Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#2453</td>
                        <td>Mike Ross</td>
                        <td>mikeross@gmail.com</td>
                        <td>
                            <Select
                                options={['admin']}
                                className="firm-select"
                                defaultValue='admin'
                                handleChange={function (option: string): void {
                                    throw new Error('Function not implemented.')
                                }} />
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>#2453</td>
                        <td>Mike Ross</td>
                        <td>mikeross@gmail.com</td>
                        <td>
                            <Select
                                options={['admin', 'member', 'pending']}
                                className="firm-select"
                                defaultValue='member'
                                handleChange={function (option: string): void {
                                    throw new Error('Function not implemented.')
                                }} />
                        </td>
                        <td><Trash size="22" color="#0D294D" variant="Bold" /></td>
                        <td><Toggle checked={true} change={() => { }} /></td>
                    </tr>
                    <tr>
                        <td>#2453</td>
                        <td>Mike Ross</td>
                        <td>mikeross@gmail.com</td>
                        <td>
                            <Select
                                options={['admin', 'member', 'pending']}
                                className="firm-select"
                                defaultValue='member'
                                handleChange={function (option: string): void {
                                    throw new Error('Function not implemented.')
                                }} />
                        </td>
                        <td><Trash size="22" color="#0D294D" variant="Bold" /></td>
                        <td><Toggle checked={true} change={() => { }} /></td>
                    </tr>
                    <tr>
                        <td>#2453</td>
                        <td>Mike Ross</td>
                        <td>mikeross@gmail.com</td>
                        <td>
                            <Select
                                options={['admin', 'member', 'pending']}
                                className="firm-select"
                                defaultValue='member'
                                handleChange={function (option: string): void {
                                    throw new Error('Function not implemented.')
                                }} />
                        </td>
                        <td><Trash size="22" color="#0D294D" variant="Bold" /></td>
                        <td><Toggle checked={false} change={() => { }} /></td>
                    </tr>
                    <tr>
                        <td>#2453</td>
                        <td>Mike Ross</td>
                        <td>mikeross@gmail.com</td>
                        <td>
                            <Select
                                options={['admin', 'member', 'pending']}
                                className="firm-select"
                                defaultValue='member'
                                handleChange={function (option: string): void {
                                    throw new Error('Function not implemented.')
                                }} />
                        </td>
                        <td><Trash size="22" color="#0D294D" variant="Bold" /></td>
                        <td><Toggle checked={true} change={() => { }} /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Lawyer