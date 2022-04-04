import React from 'react'
import { useSelector } from "react-redux";
function User() {
    const users = useSelector(state => state.users);
    console.log(users);
    return (
        <div>
 
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={users.status}>
                                <td>{users.status}</td>
                                <td>{users.url}</td>
                                <td>{users.url}</td>
                                <td>{users.url}</td>
                            </tr>
                </tbody>
            </table>
        </div>
    );
}
export default User;