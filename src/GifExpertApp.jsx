import { useState } from "react";
import AddCategory from "./components/AddCategory";

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One punch', 'Dragon Ball']);
    const onAddCategory = () => {
        setCategories(currentCategories => [...currentCategories, 'Valorant']);
    };

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory />
            <button onClick={onAddCategory}>Agregar</button>
            <ol>
                {categories.map(category => (
                    <li key={category}>{category}</li>
                ))}
            </ol>
        </>
    );
};

export default GifExpertApp;
