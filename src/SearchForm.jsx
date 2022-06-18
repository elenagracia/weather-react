import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SearchForm() {
    return (
      <div className="SearchForm">
        <Row>
            <Col sm={4}>
              <Form fluid="lg">
                <Form.Group className="mb-3" controlId="formEnterCity">
                <Form.Control type="enterCity" placeholder="Enter a city" />
                </Form.Group>
                </Form>
                </Col>
                <Col sm={1}>
                  <Button variant="outline-primary">Search</Button>{' '}
                </Col>
                <Col sm={1}>
                  <Button variant="outline-success">Current</Button>{' '}
            </Col>
        </Row>
        </div>
        )
        }

export default SearchForm;
