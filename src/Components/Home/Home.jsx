import NavBar from "../NavBar/NavBar"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ToastContainer, toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";
function Home() {
    let [products, setProducts] = useState([])
    useEffect(() => {
        axios.get("/getProducts").then((resp) => {
            if (resp.data) {

                setProducts(resp.data)
            } else {
                toast.error("There is no product")
            }
        }).catch((e) => {
            toast.error("Error while fetching your product")
        })
    }, [])
    console.log(products)

    return <div>
        <NavBar></NavBar>
        {products.map((data) => {
            return <div>
                <Card style={{ width: '18rem' }}>
                    <div >
                        <Card.Img variant="top" src={data.imgURL} />
                    </div>
                    <Card.Body>
                        <Card.Title>{data.title}</Card.Title>
                        <Card.Text>
                            {data.detail}
                        </Card.Text>
                        <Button variant="primary">Add to cart</Button>
                    </Card.Body>
                </Card>
            </div>
        })}


        <ToastContainer theme="colored" />
    </div>
}
export default Home