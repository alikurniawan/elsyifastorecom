import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

let CardModel = (props) => {
  return (
    <Card>
      <Image src={props.Image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.NamaBarang}</Card.Header>
        <Card.Meta>
          <span className="date">{props.Ukuran}</span>
        </Card.Meta>
        <Card.Description>"{props.Deskripsi}"</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="money bill alternate outline" />
          {props.Harga}
        </a>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="dolly flatbed" />
          Code {props.KodeBarang}
        </a>
      </Card.Content>
    </Card>
  );
};

export default CardModel;
