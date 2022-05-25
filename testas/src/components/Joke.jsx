import { Card } from "react-bootstrap";

const Joke = (props) => {
  return (
    <div className="col-6 mb-2">
      <Card>
        <Card.Header
          style={{
            height: "2.5rem",
            fontWeight: "bolder",
            textAlign: "center",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <h5> Fetched Joke ID:{props.category}</h5>
        </Card.Header>
        <Card.Body
          style={{
            height: "7rem",
            textAlign: "justify",
            fontSize: "12px",
            backgroundColor: "lightgrey",
          }}
        >
          <p>
            {props.setup}
            {props.joke} <br /> {props.delivery}{" "}
          </p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Joke;
