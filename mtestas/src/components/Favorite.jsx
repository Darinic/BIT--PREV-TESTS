import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

const Favorite = (props) => {
  let url = `${props.source}`;
  return (
      <Card style={{ padding: "0px" }} className="col-sm-3 mt-3">
        <Card.Header>
          {props.title} (<i>{props.from}</i>)
        </Card.Header>
        <Card.Body>
          <img
            style={{ height: "50%", width: "50%" }}
            src={props.picture}
            alt={props.title}
          />
          <br />
          <p style={{ marginTop: "0.5rem" }}>Category: {props.category}</p>
          <p style={{ fontSize: "12px", textAlign: "justify" }}>
            Ingrededients: {props.ing1} {props.ing2} {props.ing3} {props.ing4}{" "}
            {props.ing5} {props.ing6} {props.ing7} {props.ing8} {props.ing9}{" "}
            {props.ing10} {props.ing11} {props.ing12} {props.ing13}{" "}
            {props.ing14} {props.ing15} {props.ing16} {props.ing17}{" "}
            {props.ing18} {props.ing19} {props.ing20}{" "}
          </p>
          <a href={url}>Read more</a> <br />
        </Card.Body>
        <Card.Footer>
          <Button
            onClick={()=>props.delete(props.index)}
            variant="danger"
            style={{ position: "relative", textAlign: "center" }}
          >
            Remove from Favorites
          </Button>
        </Card.Footer>
      </Card>
  );
};
export default Favorite;
