
interface IErrorMessageProps {
  errorMessage: Array<string>;
  errorRef: React.MutableRefObject<HTMLParagraphElement | null>;
}

function ErrorMessage(props: IErrorMessageProps) {
  const { errorMessage, errorRef } = props;

  return (
    <>
      {errorMessage.map((item, index) => (
        <p
          key={index}
          ref={errorRef}
          className={errorMessage ? "error-message" : "offscreen"}
          aria-live="assertive"
        >
          {item}
        </p>
      ))}
    </>
  );
}

export default ErrorMessage;
