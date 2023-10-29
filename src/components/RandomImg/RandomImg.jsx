import axios from "axios";
import { useState } from "react";
import Card from "../Card/Card";

function RandomImg() {
    const [images, setImages] = useState([]);
    const [ImgType, setImgType] = useState("");
    const [CurrImg, setCurrImg] = useState("Images");
    const [Count, setCount] = useState(1);

    const countP=()=>{
      let a=Count+1;
        setCount(a);
    }

  const fetchImages = async () => {
    try {
      const apiUrl = `https://picsum.photos/v2/list?page=${Count}&limit=9`;
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
                setCurrImg("Normal Images")
                fetchImages();
            }}>Get Images</button>
            <button type="button" className="btn btn-primary mx-2" onClick={()=>{
                setImgType("?grayscale")
                setCurrImg("Grayscale Images")
                fetchImages();
            }}>Grayscale Images</button>
            <button type="button" className="btn btn-primary mx-2" onClick={()=>{
                setImgType("?blur=10")
                setCurrImg("Blured Images")
                fetchImages();
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

           {Count>1 && <button type="button" className="btn btn-primary mx-2" onClick={()=>{
                countP();
                setImgType("")
                fetchImages();
                setCount(Count-1)
            }}>Previous Page {"<"} {Count-1}</button>}
            <button type="button" className="btn btn-primary mx-2" onClick={()=>{

              fetchImages();
              countP();
            }}>Next Page {">"} {Count}</button>
            </div>
    </>
  )
}

export default RandomImg