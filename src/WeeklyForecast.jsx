import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function WeeklyForecast() {
    return (
    <Row>
             <Col sm={2}>
            <h7>
                Sun
            </h7>
        </Col>
        <Col sm={2}>
            <h7>
                Mon
            </h7>
        </Col>
        <Col sm={2}>
            <h7>
                Tue
            </h7>
        </Col>
        <Col sm={2}>
            <h7>
                Wed
            </h7>
        </Col>
        <Col sm={2}>
            <h7>
                Thu
            </h7>
        </Col>
 
    </Row>
    )
    }
export default WeeklyForecast;
