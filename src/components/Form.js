import React, {useState} from "react";

function Form(props) {

    const [name, setName] = useState('');

    function handleChange(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (name !== "") {
            props.addTask(name);
        }
        setName("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                    What else?
                </label>
            </h2>
            <input type="text" id="new-todo-input"
                   className="input input__lg"
                   autoComplete="off"
                   name="text" value={name}
                   onChange={handleChange} />
            <button type="submit" className="btn btn__primary btn__lg">
                Add
            </button>
        </form>
    )
}

export default Form;