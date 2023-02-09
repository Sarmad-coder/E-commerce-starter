import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
function AdminDashboard(){
let move = useNavigate()
const change=()=>{
move("addProduct")
}
    return <div>

        <h1>Hello admins</h1>
    <Button className="ml-4" onClick={change}>Add product</Button>
    </div>


}
export default AdminDashboard