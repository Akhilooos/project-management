import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchProjects, addProject, deleteProject } from '../redux/Projectslice';
import ProjectItem from '../components/ProjectItem';

const Dashboard = () => {
    const { id } = useParams(); 
    const dispatch = useDispatch();
    const projects = useSelector(state => state.projects.projectList); 
    const [projectName, setProjectName] = useState('');
    const [projectDetails, setProjectDetails] = useState('');
    const navigate = useNavigate();

    React.useEffect(() => {
        if (id) {
            dispatch(fetchProjects(id));
        }
    }, [id, dispatch]);

    const handleAddProject = (e) => {
        e.preventDefault();
        dispatch(addProject({ userId: id, projectName, projectDetails }));
        setProjectName('');
        setProjectDetails('');
    };

    const handleDeleteProject = (projectId) => {
        dispatch(deleteProject({ userId: id, projectId: projectId }));
    };
    const handleEditProject = (projectId, newProjectName, newProjectDetails) => {
        navigate(`/user/${id}/projects/edit/${projectId}`);
    };
    const handleLogout = () => {
        navigate('/');
    };

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold mb-4 mt-5">Dashboard</h1>
            <form onSubmit={handleAddProject} className="mb-4">
                <input type="text" placeholder="Project Name" value={projectName} onChange={(e) => setProjectName(e.target.value)} className="border p-2 rounded mb-2 w-full" />
                <textarea placeholder="Project Details" value={projectDetails} onChange={(e) => setProjectDetails(e.target.value)} className="border p-2 rounded mb-2 w-full" />
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Project</button>
            </form>
            {projects.length === 0 ? (
                <p>No projects to display</p>
            ) : (
                projects.map((project) => (
                    <ProjectItem key={project.id} item={project} onEdit={handleEditProject} onDelete={handleDeleteProject} />
                ))
            )}
             <button onClick={handleLogout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4">Logout</button>
        </div>
    );
};

export default Dashboard;