import css from './ErrorMessage.module.css';

const ErrorMessage = ({ errorMessage }) => {
  return (
    <div className={css.boxErrorMessage}>
      <p className={css.descriptionErrorMessage}>
        Oops, some error occured. &quot;{errorMessage}&quot;
        <br />
        <span className={css.message}>Please try again later.🤷‍♀️</span>
      </p>
    </div>
  );
};

export default ErrorMessage;
