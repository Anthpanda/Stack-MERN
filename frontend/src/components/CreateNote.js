import React, { useEffect, useState } from 'react'
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

export default function CreateNote(props) {

    const [state, setstate] = useState({
        userSelected: '',
        title: '',
        content: '',
        usersData: [],
        date: new Date(),
        editing: false,
        _id: ''
    });

    const { id } = props.match.params

    useEffect(() => {

        const getUsers = async () => {

            const result = await axios.get('http://localhost:4000/api/users');
            const usersData = result.data.map(user => user.username);
            const userSelected = usersData[0];
            setstate(prevState => ({ ...prevState, userSelected, usersData }));

            if (id) {
                const result = await axios.get(`http://localhost:4000/api/notes/${id}`);
  
                setstate(prevState => ({

                    ...prevState,
                    title: result.data.title,
                    userSelected: result.data.author,
                    content: result.data.content,
                    date: new Date(result.data.date),
                    editing: true,
                    _id: id

                }));
            };
        };

        getUsers();

    }, [id]);


    const onsubmit = async (e) => {

        const newNote = {
            title: state.title,
            content: state.content,
            date: state.date,
            author: state.userSelected
        };

        if (state.editing) {
            await axios.put(`http://localhost:4000/api/notes/${state._id}`, newNote);
        }
        else {
            await axios.post('http://localhost:4000/api/notes', newNote);
        }
        e.preventDefault();
        window.location.href = '/';
    }

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setstate(prevState => ({ ...prevState, [name]: value }))

    }

    const onDateChange = date => {
        setstate(prevState => ({ ...prevState, date }))
    }

    return (
        <div className="col-md-6 offset-md-3">
            <div className="card card-body">
                <h4>Create a Note</h4>
                {/*SELECT USER*/}
                <div className="mb-3">
                    <select
                        name="userSelected"
                        className=" form-control"
                        onChange={onInputChange}
                        value={state.userSelected}
                    >
                        {
                            state.usersData.map(user => <option key={user} value={user}>
                                {user}
                            </option>)
                        }
                    </select>
                </div>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Title"
                        name="title"
                        value={state.title}
                        onChange={onInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        placeholder="Content"
                        name="content"
                        value={state.content}
                        onChange={onInputChange}
                        required
                    ></textarea>
                </div>
                <div className="mb-3">
                    <DatePicker
                        className="form-control"
                        selected={state.date}
                        onChange={onDateChange}
                    />
                </div>
                <form onSubmit={onsubmit}>
                    <button type="submit" className="btn btn-primary">
                        Save note
                    </button>
                </form>
            </div>
        </div>
    )
}
