import { Button } from 'react-bootstrap';
import React from 'react';
import { useDispatch,useSelector } from "react-redux";
import { listProjects } from '../../../store/projectReducer';

const Home = () => {
    const dispatcher = useDispatch()
    const project = useSelector((store)=> store.projectReducer )
    console.log(project)
    React.useEffect(()=> { 
        dispatcher(listProjects())
    },[dispatcher])
    return (
        <React.Fragment>
              <Button variant="primary" size="lg" href ="/app/dashboard/projects">
                Create Project
               </Button>               
        </React.Fragment>
    );
};

export default Home;
