import { useParams } from "react-router-dom"

const GalleryView = ({galleries}) => {

   const {galleryId} = useParams();
   const gallery = galleries.find((el) => el.galleryid === parseInt(galleryId))
   return <h1>{gallery.name}</h1>
}

export default GalleryView