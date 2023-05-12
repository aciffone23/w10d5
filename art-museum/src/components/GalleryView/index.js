import { useParams } from "react-router-dom"

const GalleryView = ({galleries}) => {
   console.log(galleries)
   const {galleryId} = useParams();
   // const gallery = procs.find(el => galleryId)
   return <h1>Hello from gallery view</h1>
}

export default GalleryView