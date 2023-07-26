import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, unexpected error has occured.</p>
      <p>
        <i>{error!.statusText || error!.message}</i>
      </p>
    </div>
  );
}
