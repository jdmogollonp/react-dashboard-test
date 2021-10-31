import { Button } from 'react-bootstrap';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearNewProject, listProjects } from '../../../store/projectReducer';
import Table from 'react-bootstrap/Table';

const Home = () => {
    const dispatcher = useDispatch();
    const { projects } = useSelector((store) => store.project);

    function downloadURI(uri, name) {
        var link = document.createElement('a');
        link.download = name;
        link.href = uri;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    React.useEffect(() => {
        dispatcher(listProjects());
    }, [dispatcher]);

    const handleCreateNewProject = () => {
        dispatcher(clearNewProject());
    };

    return (
        <React.Fragment>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Project Name</th>
                        <th>Description</th>
                        <th>Tags</th>
                        <th>Public</th>
                        <th>Share</th>
                    </tr>
                </thead>
                <tbody>
                    {projects.map((item, index) => (
                        <tr key={item.projectId}>
                            <td>{index}</td>
                            <td>{item.projectName}</td>
                            <td>{item.description}</td>
                            <td>{item.tags}</td>
                            <td>{item.isPublic ? item.isPublic.toString() : ''}</td>
                            <td>
                                <Button
                                    onClick={() =>
                                        downloadURI(
                                            'http://dess.work.temporal.public.s3-website-us-east-1.amazonaws.com/index.html',
                                            'helloWorld.txt'
                                        )
                                    }
                                >
                                    <i className="feather icon-download" />
                                    file
                                </Button>
                                <Button>
                                    <i className="feather icon-download" />
                                    quality check
                                </Button>

                                <Button>
                                    <i className="feather icon-download" />
                                    Report
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Button variant="primary" size="lg" onClick={() => handleCreateNewProject()}>
                Create Project
            </Button>
        </React.Fragment>
    );
};

export default Home;
