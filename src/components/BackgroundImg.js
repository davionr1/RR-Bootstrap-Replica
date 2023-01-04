import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'

export default function BackgroundImg() {
  return (
    <div style={{display: 'flex', flexDirection:"row"}}>
      <Card className="bg-white text-black">
        
        <Card.Img style={{
           position: "absolute", backgroundSize: "contain", backgroundRepeat: "no-repeat",
           width: "1919px", 
           maxHeight: "36em", 
           marginBottom: "-600px", 
           backgroundColor: "#DEEED6" 
        }}
        src="backgroundPic.jpg" alt="Card image" />
          <Card.ImgOverlay
             style={{width: "578px", marginLeft: "100px", marginBottom: "50px", marginTop: "75px"}}
            >
            <Card.Text style={{ fontSize: "2.5em", fontWeight: "bold" }}>
                            Order groceries for delivery <br /> or pickup today
                    </Card.Text>
                        <Card.Text style={{ fontSize: "1em" }}>
                            Whatever you want from local stores, brought right to your door.
                    </Card.Text>
            <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control size="lg" type="text" placeholder="   Enter your address                                                         ->" />
                         </Form.Group>
                     </Form>
          </Card.ImgOverlay>
      </Card>
    </div>
  );
}

