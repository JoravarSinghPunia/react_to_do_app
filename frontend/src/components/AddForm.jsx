import {useState} from 'react';

const AddForm = (props) => {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted with name:', name);
        setName(''); 
        props.setTodos(prev => [...prev, {id: Date.now(), todoDescription: name, todoDateCreated: new Date().toISOString(), todoCompleted: false}]);
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