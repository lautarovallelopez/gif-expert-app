import { useState } from "react";
import PropTypes from 'prop-types';

const AddCategory = ({ onAddCategory }) => {
    const [inputValue, setInputvalue] = useState('');
    const onInputChange = event => {
        setInputvalue(event.target.value);
    };
    
    const onSubmit = event => {
        event.preventDefault();
        const trimValue = inputValue.trim();
        if (trimValue.length < 1) return;
        onAddCategory(trimValue);
        setInputvalue('');
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar GIFs"
                value={inputValue}
                onChange={onInputChange}
            />
            <button type="submit">Agregar</button>
        </form>
    );
};

AddCategory.propTypes = {
    onAddCategory: PropTypes.func.isRequired
}

export default AddCategory;