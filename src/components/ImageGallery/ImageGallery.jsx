import ImageCard from '../ImageCard/ImageCard.jsx';

import css from './ImageGallery.module.css';

const ImageGallery = ({ images, onClick, openModal }) => {
  return (
    <ul className={css.listImages}>
      {images.map(image => {
        return (
          <li
            className={css.listItemImage}
            key={image.id}
            onClick={() => {
              onClick(
                image.alt_description,
                image.likes,
                image.links.download,
                image.urls.regular,
                image.user.name,
                image.user.instagram_username,
                image.user.location
              );
              openModal();
            }}
          >
            <ImageCard
              imgSmall={image.urls.small}
              title={image.alt_description}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
