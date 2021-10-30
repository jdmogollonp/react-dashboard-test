

// cuando se crea el projecto necesito guardar el id del projecto y el nombre de la carpeta que me devuelve el back
// el id de la carpeta es un parámetro, por ahora todos los archivos van al mismo bu


import React from 'react';
import { Row, Col, Card, Form,  InputGroup } from 'react-bootstrap';

const FormsElements = () => {
   /*  const fileInput = useRef();
    const handleClick = (event) => {
    event.preventDefault();
    let file = fileInput.current.files[0];
    let newFileName = fileInput.current.files[0].name.replace(/\..+$/, "");
    const config = {
    bucketName: process.env.REACT_APP_BUCKET_NAME,
    dirName: process.env.REACT_APP_DIR_NAME /* optional ,
    region: process.env.REACT_APP_REGION,
    accessKeyId: process.env.REACT_APP_ACCESS_ID,
    secretAccessKey: process.env.REACT_APP_ACCESS_KEY,
    };
    const ReactS3Client = new S3(config);
    ReactS3Client.uploadFile(file, newFileName).then((data) => {
    console.log(data);
    if (data.status === 204) {
        console.log("success");
    } else {
        console.log("fail");
    }
    }); */
      

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
