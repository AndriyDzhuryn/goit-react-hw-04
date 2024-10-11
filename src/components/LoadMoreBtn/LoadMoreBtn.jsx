import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ fetchImage }) => {
  return (
    <div className={css.btnLoadMoreBox}>
      <button className={css.btnLoadMore} onClick={fetchImage} type="submit">
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
