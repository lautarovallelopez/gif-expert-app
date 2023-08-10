import { useState } from "react";
import AddCategory from "./components/AddCategory";

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One punch', 'Dragon Ball']);
    const onAddCategory = newCategory => {
        if (categories.includes(newCategory)) return;
        setCategories(currentCategories => [...currentCategories, newCategory]);
    };
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onAddCategory={onAddCategory} />
            
            <ol>
                {categories.map(category => (
                    <li key={category}>{category}</li>
                ))}
            </ol>
        </>
    );
};

export default GifExpertApp;
