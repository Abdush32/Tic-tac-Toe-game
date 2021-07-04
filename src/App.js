import React,{useState} from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import { Button, Card, CardBody, Col, Container, Row } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Icon from './Icon'

const itemArray = new Array(9).fill("empty") 

const App = () => {
  const [iscross, setIscross] = useState (false)
  const [winMessage, setWinMessage] = useState ("")   
  const [tied, setTied] = useState("")                                                                                                                 

const Reloadgame = () =>{
  setIscross(false);
  setWinMessage("");
  itemArray.fill("empty",0,9);
}

const CheckWinner = () =>{
  if(itemArray[0] === itemArray[1] && 
    itemArray[0] === itemArray[2] &&
    itemArray[0] !== "empty"){
      setWinMessage(` ${itemArray[0]} won`)
    }
    else if(itemArray[3] !== "empty" &&
          itemArray[3] === itemArray[4] &&
          itemArray[4] === itemArray[5]
    ){
      setWinMessage (`${itemArray[3]} won`)
    }

    else if(itemArray[6]  !== "empty" &&
    itemArray[6] === itemArray[7] &&
    itemArray[7] === itemArray[8]
){
setWinMessage (`${itemArray[6]} won`)
}

    else if(itemArray[0]  !== "empty" &&
    itemArray[0] === itemArray[3] &&
    itemArray[3] === itemArray[6]
){
setWinMessage (`${itemArray[0]} won`)
}

else if(itemArray[1]  !== "empty" &&
itemArray[1] === itemArray[4] &&
itemArray[4] === itemArray[7]
){
setWinMessage (`${itemArray[1]} won`)
}
else if(itemArray[2]  !== "empty" &&
itemArray[2] === itemArray[5] &&
itemArray[5] === itemArray[8]
){
setWinMessage (`${itemArray[2]} won`)
}
else if(itemArray[0]  !== "empty" &&
itemArray[0] === itemArray[4] &&
itemArray[4] === itemArray[8]
){
setWinMessage (`${itemArray[0]} won`)
}
else if(itemArray[2]  !== "empty" &&
itemArray[2] === itemArray[4] &&
itemArray[4] === itemArray[6]
){
setWinMessage (`${itemArray[2]} won`)
}

}


const ChangeItem = ItemNumber =>{
  if(winMessage){
    return toast(winMessage,{
      type:"success"
    })
  }
  if(itemArray[ItemNumber] === "empty"){
itemArray[ItemNumber] = iscross ? "cross"  : "circle";
setIscross(!iscross)

  }
  else{
    return toast("Already filled",{
      type:"error"
    })
  }
  CheckWinner();
}

  return (
    <Container className="p-5">
    <ToastContainer position="bottom-center" />
    <h2 className="text-white bg-danger text-uppercase text-center">Tic Tac Toe</h2>
    <Row>
      <Col md={6} className="offset-md-3">
      {winMessage ? (
        <div className="mb-2 mt-2">
          <h1 className="text-success text-uppercase text-center">
            {winMessage}
          </h1>
          <Button color="success" block onClick={Reloadgame}>
            Reload the game
          </Button>
        </div>
      ) : (
        <h1 className="text-center text-warning">
          {iscross ? "Cross" : "Circle"} turns
        </h1>
      )}
      
        <div className="grid">
          {itemArray.map((item, index) => (
            <Card onClick={ () => ChangeItem (index)}>
              <CardBody className="box">
                <Icon name={item} />
              </CardBody>
            </Card>
          ))}
        </div>
      </Col>
    </Row>
  </Container>
  )
}

export default App
