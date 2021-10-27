
import React from 'react';
import {Row, Col, Card, Form, Button} from 'react-bootstrap';
import Aux from "../../hoc/_Aux";
import Request from '../../services/requests';







class jectForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            ProjectName: '',
            description: '',
            tags: '',
            isPublic: false
        };

        this.handleProjectNameChange = this.handleProjectNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleTagsChange = this.handleTagsChange.bind(this);
        this.handleIsPublicChange = this.handleIsPublicChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleProjectNameChange(e) {
        this.setState({ ProjectName: e.target.value });
    }

    handleDescriptionChange(e) {
        this.setState({ description: e.target.value });
    }

    handleTagsChange(e) {
        this.setState({ tags: e.target.value });
    }

    handleIsPublicChange(e) {
        this.setState({ isPublic: e.target.value });
    };

    handleClick() {                    
        //const request = new Request().getRequestInstance(null, this.props.token);
        const request = new Request().getRequestInstance(null);
        request.post('projects/create_project/',
            {
                username: "testsdf",
                name: this.state.ProjectName,
                description: this.state.description,
                tags: ["test"],
                isPublic: true,
            }).then((response) => {
                console.log(response);
           
            }).catch((error) => {
                console.log(error.response != null ? error.response : error);
                  })
        };
        

    
    render() {
        return (
            <Aux>
                <Row>
                    <Col>
                        <Card>
                            <Card.Header>
                                <Card.Title as="h5">Create Project</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col md={6}>
                                        <Form>
                                            <Form.Group controlId="formProjectName">
                                                <Form.Label>Project Name</Form.Label>
                                                <Form.Control type="text" placeholder="Project Name" 
                                                value ={this.state.ProjectName}  onChange={this.handleProjectNameChange}/>    
                                            </Form.Group>
                                            <Form.Group controlId="formProjectDescription">
                                                <Form.Label>Description</Form.Label>
                                                <Form.Control type="text" placeholder="Description" 
                                                value ={this.state.description}  onChange={this.handleDescriptionChange} />
                                            </Form.Group>
                                            <Form.Group controlId="formTags">
                                                <Form.Label>Tags</Form.Label>
                                                <Form.Control type="text" placeholder="Tags" 
                                                value ={this.state.tags}  onChange={this.handleTagsChange}/>                                              
                                                <Form.Text className="text-muted">
                                                    Add tags to ease finding your project later.
                                                </Form.Text>                                           
                                            </Form.Group>
                                                <Form.Group controlId="formBasicChecbox">
                                                <Form.Check type="checkbox" label="Make this project public"
                                                  value ={this.state.isPublic}  onChange={this.handleIsPublicChange}/>                                                
                                            </Form.Group>                                               
                                            <Button variant="primary" size="lg" onClick={this.handleClick} >                                
                                                Create                      
                                            </Button>
                                        </Form>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    };
}

export default jectForm;