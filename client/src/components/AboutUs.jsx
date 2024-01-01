import React from "react";
import { Alert, Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./about.css";

export function AboutUs() {
  const cardStyle = { width: "18rem", height: "auto" };
  const imageStyle = { height: "350px", objectFit: "cover" };

  return (
    <Container className="mt-5">
      <Alert variant="success">
        <h4>This is About us Page</h4>
      </Alert>

      <CardGroup>
        {/* Cards 1-3 */}
        <Card border="warning" style={cardStyle}>
          <Card.Img variant="top" src="images/AT1.jpeg" style={imageStyle} />
          <Card.Body>
            <Card.Title>Project Coordinator</Card.Title>
            <Card.Title>Aniket Takmare</Card.Title> 
            <Card.Text>
              <b>Email:</b> aniketTakmare@gmail.com<br />
              <b>PhoneNo:-</b> +91xxxxxxxxx
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">GameChangers</small>
          </Card.Footer>
        </Card>
        <Card border="warning" style={cardStyle}>
          <Card.Img variant="top" src="images/d1n.jpg" style={imageStyle} />
          <Card.Body>
            <Card.Title>Dhiraj Patil</Card.Title>
            <Card.Text>
              <b>Email:</b> patildhiraj0008@gmail.com<br />
              <b>PhoneNo:-</b> 7083065066
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">GameChangers</small>
          </Card.Footer>
        </Card>

        <Card border="warning" style={cardStyle}>
          <Card.Img variant="top" src="images/sk.jpeg" style={imageStyle} />
          <Card.Body>
            <Card.Title>Siddhesh Khairnar</Card.Title>
            <Card.Text>
              <b>Email:</b> siddheshkhairnarofficial@gmail.com<br />
              <b>PhoneNo:-</b> 8805509366
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">GameChangers</small>
          </Card.Footer>
        </Card>

        
        
      </CardGroup>
      <CardGroup className="mt-3">
      <Card border="warning" style={cardStyle}>
          <Card.Img variant="top" src="https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1703980800&semt=ais" style={imageStyle} />
          <Card.Body>
            <Card.Title>Amruta Sarode</Card.Title>
            <Card.Text>
              <b>Email:</b> amrutasarode@gmail.com<br />
              <b>PhoneNo:-</b> 8691869157
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">GameChangers</small>
          </Card.Footer>
        </Card>
        <Card border="warning" style={cardStyle}>
          <Card.Img variant="top" src="https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=360" style={imageStyle} />
          <Card.Body>
            <Card.Title>Verdham Demanna</Card.Title>
            <Card.Text>
              <b>Email:</b> verdamDemanna@gmail.com<br />
              <b>PhoneNo:-</b> 7083065066
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">GameChangers</small>
          </Card.Footer>
        </Card>
       
        <Card border="warning" style={cardStyle}>
          <Card.Img variant="top" src="https://img.freepik.com/premium-vector/man-avatar-profile-round-icon_24640-14044.jpg?w=360" style={imageStyle} />
          <Card.Body>
            <Card.Title>Shishir Saklani</Card.Title>
            <Card.Text>
              <b>Email:</b> shishirsaklani@gmail.com<br />
              <b>PhoneNo:-</b> 8077713533
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">GameChangers</small>
          </Card.Footer>
        </Card>
        
      </CardGroup>

    </Container>
  );
}
