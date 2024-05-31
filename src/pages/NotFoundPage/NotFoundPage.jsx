import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <p>
        Not found page! Please go to <Link to="/">home</Link>!
      </p>
    </div>
  );
}
