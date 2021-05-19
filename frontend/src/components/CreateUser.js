import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function CreateUser() {

    const [dataUsers, setDataUsers] = useState({ users: [] });
    const [username, setusername] = useState('')

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const res = await axios.get('http://localhost:4000/api/users');
        setDataUsers({ users: res.data });
    };

    const onChangeUsername = (e) => {
        setusername(e.target.value);
    }

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post('http://localhost:4000/api/users', {
            username
        });

        getUsers();
        setusername('');

    }

    const deleteUser = async _id =>{
        await axios.delete('http://localhost:4000/api/users/'+ _id);
        getUsers()
    }

    return (
        <div className="row">
            <div className="col-md-4">
                <div className="card card-body">
                    <h3>Create New User</h3>
                    <form onSubmit={onSubmit}>
                        <div className="form-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                value={username}
                                onChange={onChangeUsername}

                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Save
                        </button>
                    </form>
                </div>
            </div>
            <div className="col-md-8">
                <ul className="list-group">
                    {
                        dataUsers.users.map(item => <li
                            key={item._id}
                            onDoubleClick ={()=> deleteUser(item._id)}
                            className=" list-group-item list-group-item-action">
                            {item.username}
                        </li>)
                    }
                </ul>
            </div>
        </div>
    )
}
