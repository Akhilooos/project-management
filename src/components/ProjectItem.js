
import React from 'react';

const ProjectItem = ({ item, onEdit, onDelete }) => {
    return (
        <div className="border p-4 rounded mb-4">
            <h3 className="text-xl font-bold">{item.name}</h3>
            <p className="mb-2">{item.details}</p>
            <button onClick={() => onEdit(item.id, item.name, item.details)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Edit</button>
            <button onClick={() => onDelete(item.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
        </div>
    );
};

export default ProjectItem
