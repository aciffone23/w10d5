import { NavLink } from 'react-router-dom';
import "./GalleryNavigation.css";

const GalleryNavigation = ({galleries}) =>  {
    const GalleryItem = galleries.map((gallery) => {
        return (
            <li>
                <NavLink to={`/galleries/${gallery.id}`} key={gallery.id} className="gallery-item">
                    {gallery.name}
                </NavLink>
            </li>
        )
    })
    return (
        <nav>
            <h1>Galleries</h1>
            <NavLink to="/" exact>
                Home Page
            </NavLink>
            <ul>
                {GalleryItem}
            </ul>
        </nav>
    )
}

export default GalleryNavigation;