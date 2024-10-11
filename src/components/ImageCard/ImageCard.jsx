import css from './ImageCard.module.css';

const ImageCard = ({ imgSmall, title }) => {
  return (
    <div className={css.containerImg}>
      <img className={css.imgSmall} src={imgSmall} alt={title} />
    </div>
  );
};

export default ImageCard;
