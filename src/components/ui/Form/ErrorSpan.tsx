interface IProps {
  errorMessage: string;
  spanClass?: string;
}
function ErrorSpan({ errorMessage, spanClass }: any) {
  return <span className={` ${spanClass}`}>{errorMessage}</span>;
}

export default ErrorSpan;
