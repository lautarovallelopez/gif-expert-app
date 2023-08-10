import { useState } from "react";

const AddCategory = () => {
    const [inputValue, setInputvalue] = useState('');
    const onInputChange = event => {
        setInputvalue(event.target.value);
    };
    const onSubmit = event => {
        event.preventDefault();
        console.log(inputValue);
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar GIFs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
};

export default AddCategory;