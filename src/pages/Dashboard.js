import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProjects } from '../redux/Projectslice';
import ProjectItem from '../components/ProjectItem';

const Dashboard = () => {
    const { id } = useParams(); 
    const dispatch = useDispatch();
    const projects = useSelector(state => state.projects.projectList); 


    React.useEffect(() => {
        if (id) {
            dispatch(fetchProjects(id));
        }
    }, [id, dispatch]);

    return (
        <div>
            <h1>Dashboard

            </h1>
                {projects.map((project) => (
                    <ProjectItem key={project.id} item={project}/>
                ))}
        </div>
    );
};

export default Dashboard;
