import { Link } from "react-router-dom";
import NotFoundButton from "../components/NotFoundButton";
import notFoundImage from "/images/404.png";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[var(--color-background)] text-[var(--color-primary)] text-center px-6">
      
      <h1 className="text-[40px] font-bold leading-[100%] max-w-[280px] mt-[135px]">
        Oops! Page not found.
      </h1>
      
      <p className="subtext max-w-[335px] mt-6 text-[var(--color-secondary)]">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      
      <div className="mt-8">
        <Link to="/">
          <NotFoundButton text="Go Back Home" />
        </Link>
      </div>
      
      <img
        src={notFoundImage}
        alt="404"
        className="w-full max-w-[375px] h-auto mt-12"
      />
    </div>
  );
}