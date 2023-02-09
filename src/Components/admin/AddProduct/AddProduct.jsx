import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import style from "./AddProduct.module.css";
import { ToastContainer, toast } from 'react-toastify';
import Spinner from 'react-bootstrap/Spinner';

import axios from 'axios';
import { useState } from 'react';
function AddProduct() {

    let [imgtitle, setImgTitle] = useState()

    let { handleSubmit, register } = useForm()
    let [load, setLoading] = useState(true)

    // const testing=async ()=>{
    // console.log(title)
    //     let data= new FormData()
    //     data.append("title",title)
    //     let resp = await axios.post("/addProduct", data )
    // }

    const Add = async (data, e) => {

        // console.log(data.productIMG[0])

        // data.img=data.img[0];
        // console.log(imgtitle[0])
        // data.productIMG=data.productIMG[0].name
        let form = new FormData;
        form.append("title", data.title)
        form.append("price", data.price)
        form.append("detail", data.detail)
        form.append("img", data.img[0])
        // console.log(form)
        console.log(data)

        // console.log([...form.entries()])
        // for (var [key, value] of form.entries()) { 
        //     console.log(key, value);
        //   }

      load=undefined
      setLoading(load)

        let resp = await axios.post("/addProduct", form)
        setLoading(true)

           if(resp.data){
            toast.success(resp.data)
           }else{
            toast.error("there is error while adding your product")
           }
    }
    return <div>
        {load && <div className='w-50 mx-auto mt-4'>
            <form encType="multipart/form-data" onSubmit={handleSubmit(Add)}>
                <div className="mb-3 ">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Title
                    </label>
                    <input
                        {...register("title")}
                        type="text"
                        className="form-control"

                        placeholder="Casual Shirt"
                    // onChange={(e)=>{
                    //     setTitle(e.target.value)
                    // }}
                    />
                </div>

                <div class="mb-3 position-relative">
                    <label for="exampleFormControlInput1" class="form-label">Price</label>
                    <div className={style.priceInput}>Rs:</div>
                    <input
                        {...register("price")}
                        type="number" class="form-control pl-5" id="exampleFormControlInput1" placeholder="3000" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">
                        Details
                    </label>
                    <textarea
                        {...register("detail")}
                        placeholder='This is our special type of design export in multiple countries'
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows={3}
                        defaultValue={""}
                    />
                </div>

                <div class="mb-3">
                    <label for="formFile" class="form-label">Select Picture of the product</label>
                    <input
                        {...register("img")}
                        class="form-control" type="file" accept="image/*" id="formFile"
                    // onChange={(e)=>{
                    //     imgtitle=e.target.files
                    //     setImgTitle(imgtitle)
                    // }}
                    />
                </div>

                <button class="btn btn-primary" >Submit</button>
            </form>
            <ToastContainer theme="colored" />
        </div>}
        {load == undefined && <div className='d-flex justify-content-center align-items-center vh-100'>
                <span className='font-weight-bold'>Please wait while your Product Img is Uploading...</span>
            <Spinner animation="border" role="status">
            </Spinner>
        </div>}

    </div>
}
export default AddProduct