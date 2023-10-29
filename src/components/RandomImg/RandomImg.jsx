import axios from "axios";
import { useState } from "react";
import Card from "../Card/Card";

function RandomImg() {
    const [images, setImages] = useState([]);
    const [ImgType, setImgType] = useState("");
    const [CurrImg, setCurrImg] = useState("Images");
    const [Count, setCount] = useState(1);

    const countP=()=>{
        setCount(Count+1);
    }

  const fetchImages = async () => {
    try {
      const apiUrl = `https://picsum.photos/v2/list?page=${Count}&limit=24`;
      const response = await axios.get(apiUrl);
      setImages(response.data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };
  return (
    <>
    <div className="container my-2 d-flex gap-3 flex-wrap justify-content-start">

            <button type="button" className="btn btn-primary mx-2" onClick={()=>{
                setImgType("")
                fetchImages();
                setCurrImg("Normal Images")
            }}>Get Images</button>
            <button type="button" className="btn btn-primary mx-2" onClick={()=>{
                setImgType("?grayscale")
                fetchImages();
                setCurrImg("Grayscale Images")
            }}>Grayscale Images</button>
            <button type="button" className="btn btn-primary mx-2" onClick={()=>{
                setImgType("?blur=10")
                fetchImages();
                setCurrImg("Blured Images")
            }}>Blur Images</button>
            <div className="container flex d-flex gap-3 flex-wrap justify-content-evenly">
                <h6>{CurrImg}</h6>
            </div>
    </div>
    <div className="container-fluid my-4 d-flex gap-3 flex-wrap justify-content-evenly">
            {images.map((e,index)=>{
                
                // return <img key={index} src={e.download_url} className="card-img-top flex"/>
                return <Card key={index} cardimage={e.download_url+ImgType} title={`Image ${e.id- -1}`} description={"Image by "+e.author} download_link={e.url} card_btn="Download Image"/>
            })}
    </div>
    <div className="container">

            <button type="button" className="btn btn-primary mx-2" onClick={()=>{
                countP();
                setImgType("")
                fetchImages();
            }}>Next Page {">"} {Count}</button>
            </div>
    </>
  )
}

export default RandomImg