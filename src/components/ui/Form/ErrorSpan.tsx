interface IProps {
  errorMessage: string;
  spanClass?: string;
}
function ErrorSpan({ errorMessage, spanClass }: IProps) {
  return <span className={` ${spanClass}`}>{errorMessage}</span>;
}

export default ErrorSpan;
