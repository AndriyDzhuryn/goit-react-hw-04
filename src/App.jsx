import { useState } from 'react';
import axios from 'axios';

import SearchBar from './components/SearchBar/SearchBar.jsx';
import ImageGallery from './components/ImageGallery/ImageGallery.jsx';
import Loader from './components/Loader/Loader.jsx';
import ErrorMessage from './components/ErrorMessage/ErrorMessage.jsx';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn.jsx';
import ImageModal from './components/ImageModal/ImageModal.jsx';

import css from './App.module.css';

function App() {
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [searchValue, setSearchValue] = useState(null);
  const [pages, setPages] = useState(2);
  const [totalPages, setTotalPages] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState({
    alt_description: '',
    likes: '',
    links: '',
    image: '',
    userName: '',
    instagram: '',
    location: '',
  });
  const [yScroll, setYScroll] = useState(0);

  function openModal() {
    setIsOpen(true);
    setYScroll(window.scrollY);
    document.body.style.position = 'fixed';
  }

  function closeModal() {
    setIsOpen(false);
    document.body.style.position = '';
    window.scrollBy({
      top: yScroll,
      left: 0,
      behavior: 'instant',
    });
  }

  const onModalImage = (
    alt_description,
    likes,
    links,
    image,
    userName,
    instagram,
    location
  ) => {
    setModalImage({
      ...modalImage,
      alt_description: alt_description,
      likes: likes,
      links: links,
      image: image,
      userName: userName,
      instagram: instagram,
      location: location,
    });
  };

  const fetchImagesubmit = async searchTerm => {
    try {
      setPages(2);
      setSearchValue(searchTerm);
      setImages([]);
      setLoader(true);
      setErrorMessage(null);
      axios.defaults.baseURL = 'https://api.unsplash.com';
      const option = {
        params: {
          client_id: 'H43MHeoib1rOg9NARWDOA76ysBGu7NV9woWDjNVVvCo',
          query: `${searchTerm}`,
          page: 1,
          per_page: 20,
          orientation: 'landscape',
        },
      };
      const { data } = await axios.get('/search/photos', option);
      setImages(data.results);
      setTotalPages(data.total_pages);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoader(false);
    }
  };

  const fetchImageClick = async () => {
    try {
      setErrorMessage(null);
      setLoader(true);
      axios.defaults.baseURL = 'https://api.unsplash.com';
      const option = {
        params: {
          client_id: 'H43MHeoib1rOg9NARWDOA76ysBGu7NV9woWDjNVVvCo',
          query: `${searchValue}`,
          page: pages,
          per_page: 20,
          orientation: 'landscape',
        },
      };
      const { data } = await axios.get('/search/photos', option);
      setImages([...images, ...data.results]);
      setPages(pages + 1);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className={css.container}>
      <SearchBar onSearch={fetchImagesubmit} images={images} />
      {images !== null && (
        <ImageGallery
          images={images}
          onClick={onModalImage}
          openModal={openModal}
        />
      )}
      {loader && <Loader />}
      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
      {pages <= totalPages && images !== null && (
        <LoadMoreBtn fetchImage={fetchImageClick} />
      )}
      <ImageModal
        isOpen={isOpen}
        openModal={openModal}
        closeModal={closeModal}
        modalImage={modalImage}
      />
    </div>
  );
}

export default App;
