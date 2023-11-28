import { Card } from "react-bootstrap";

const ItemDetailContainer = ({product}) => {
    return (

        <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100vw",
          justifyContent: "space-around",
        }}
      >
       
  
        
          return (
            <Card key={product.id} style={{ width: "18rem", margin: 20, height:"400px" }}>
              {/*<Link to={`/item/${product.id}`}>*/}
                <Card.Img variant="top" src={product.thumbnail} />
              {/*</Link>*/}
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
              </Card.Body>
            </Card>
          );
        )
      </div>
        
    )
}

export default ItemDetailContainer;