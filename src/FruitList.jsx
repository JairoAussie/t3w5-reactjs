import './FruitList.css'
import ListGroup from 'react-bootstrap/ListGroup';


export default function FruitList (props) {
    // it's not a good practice to use index as a key, if it's an array of objects, use the object id as a key
    // let fruitListItems = someFruit.map(((fruit,index) => <li key={index}>{fruit}</li>))
    if (props.listToShow.includes("durian")){
      return null;
    }

    let fruitListItems = props.listToShow.map((fruit => <ListGroup.Item className="listMessage" key={fruit}>{fruit}</ListGroup.Item>))
    //console.log(props.children);
    return (
      <>
        <h3>{props.colour} fruits</h3>
        <ListGroup>
          {fruitListItems}
        </ListGroup>
        {props.children}
      </>
      
    )
}

//   module.exports = FruitList