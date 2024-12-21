import { useState, useEffect } from "react";
import ImageGallery from "./components/ImageGallery";
import Navbar from "./components/Navbar";
import ImageModal from "./components/ImageModal";
import LoadMoreBtn from "./components/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage";
import Loader from "./components/Loader";
import toast from "react-hot-toast";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [search, setSearch] = useState("");
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [photoView, setPhotoView] = useState()

  useEffect(() => {
    const fetchPhotos = async () => {
      setLoader(true);
      try {
        const response = await fetch(
          `https://api.unsplash.com/search/photos?&query=${search}&page=${page}&per_page=20&client_id=P0FLly13QcB8r53JoJUbAT6dIDM2DaHk-sYkA5JcPCM`
        );
        if (!response.ok) {
          throw new Error("We have an error while getting data");
        }
        const data = await response.json();
        setPhotos((prevPhotos) => [...prevPhotos, ...data.results]);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.error(error.message);
        toast.error("Error fetching photos");
      } finally {
        setLoader(false);
      }
    };

    if (search) {
      fetchPhotos();
    }
  }, [search, page]);


  return (
    <>
      <ErrorMessage />
      <Navbar setSearch={setSearch} />
      {loader && <Loader />}
      <ImageGallery photos={photos} setPhotoView={setPhotoView}/>
      {(photos.length > 0 && page < totalPages) && <LoadMoreBtn page={page} setPage={setPage} />}
      {photoView && <ImageModal img={photos.find(photo => photo.id === photoView)} setPhotoView={setPhotoView} />}
    </>
  );
};

export default App;
