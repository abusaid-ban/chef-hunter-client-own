import { Link, useRouteError } from "react-router-dom";
import image from './assets/page-404.png'
import { Button } from "react-bootstrap";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="text-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <Link to='/'>
      <Button variant="primary">Back To Home</Button>

      </Link>
     <div>
     <img src={image} alt="" />
      
     </div>
    </div>
  );
}