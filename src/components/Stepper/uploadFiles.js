



import React from 'react';
import { Row, Col, Card, Form,  InputGroup } from 'react-bootstrap';

const FormsElements = () => {
   
    

    return (
        <React.Fragment>
            <Row>         
                <Col sm={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title as="h5">Upload Resources </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col md={6}>
                                    <h6 className="mt-3 text-muted">Upload your data</h6>
                                    <hr />
                                    <InputGroup className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="custom-addons5">Upload</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <div className="custom-file">
                                            <Form.Control
                                                aria-describedby="custom-addons5"
                                                type="file"
                                                className="custom-file-input"
                                                id="validatedCustomFile1"
                                            />
                                            <Form.Label className="custom-file-label" htmlFor="validatedCustomFile1">
                                                Choose file
                                            </Form.Label>
                                        </div>
                                    </InputGroup>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default FormsElements;
