import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function CurrentForecast() {
    return (
    <Row>
        <Col sm={4}>
            <h1>Lisbon</h1>
          <h5>
            Saturday 14:55
          </h5>
          <h5>
            Clouds
          </h5>
        </Col>
        <Col sm={4}>
            <br/>
            <br/>
            <h5>Precipitation:61%</h5>
            <h5>Wind: 6KM</h5>
        </Col>
    </Row>
    )
    }
export default CurrentForecast;
