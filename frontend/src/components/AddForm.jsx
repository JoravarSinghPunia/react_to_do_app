import {useState} from 'react';

const AddForm = (props) => {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted with name:', name);
        setName('');
        props.addTodo({
            todoDescription: name,
            todoCompleted: false,
            todoDateCreated: new Date().toISOString()
        });
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <div className="mb-3">
                <label htmlFor="todoName" className="form-label">What do you want to do?</label>
                <input
                    type="text"
                    className="form-control"
                    id="todoName"
                    placeholder='Enter to-do description'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className="btn btn-primary">Add To-Do</button>
        </form>
    );
};

export default AddForm;



