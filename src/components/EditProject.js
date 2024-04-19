import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects, editProject } from '../redux/Projectslice';

const EditProject = () => {
 const { id, projectId } = useParams();
 const navigate = useNavigate();
 const dispatch = useDispatch();
 

 const projects = useSelector(state => state.projects.projectList);
 
 const [projectName, setProjectName] = useState('');
 const [projectDetails, setProjectDetails] = useState('');

 useEffect(() => {
 
    dispatch(fetchProjects(id));
 }, [dispatch, id]);

 useEffect(() => {
 
    const project = projects.find(project => project.id === projectId);

    if (project) {
        setProjectName(project.name);
        setProjectDetails(project.details);
    }
 }, [projects, projectId]);

 const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editProject({ userId: id, projectId: projectId, projectName, projectDetails }))
      .then(() => navigate(`/user/${id}/projects`)) 
      .catch((error) => console.error('Failed to edit project:', error));
 };

 return (
    <div className="container mx-auto px-4 my-4">
        <h1 className="text-2xl font-bold mb-4">Edit Project</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Project Name" value={projectName} onChange={(e) => setProjectName(e.target.value)} className="border p-2 rounded mb-2 w-full" />
            <textarea placeholder="Project Details" value={projectDetails} onChange={(e) => setProjectDetails(e.target.value)} className="border p-2 rounded mb-2 w-full" />
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Save Changes</button>
        </form>
    </div>
);
};

export default EditProject;
