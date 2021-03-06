import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CreateAlbumModal from "../CreateAlbum/CreateAlbumModal";
import "./header.css";

const Header = () => {
  const sessionUser = useSelector((state) => state.session.user);
  return (
    <>
      <div className="profile-header">
        <img
          src="https://busestoconcerts.com/wp-content/uploads/2017/11/concert.jpg"
          className="banner-img"
        ></img>
      </div>
      <div className="subNavBar">
        <CreateAlbumModal />
        <Link to={`/${sessionUser.username}/untitled`} className="untitled">
          Photos without albums
        </Link>
        <Link to={`/${sessionUser.username}/allMyPhotos`} className="untitled">
          Photostream
        </Link>
        <Link to={`/${sessionUser.username}/profile`} className="untitled">
          Albums
        </Link>
      </div>
    </>
  );
};

export default Header;
