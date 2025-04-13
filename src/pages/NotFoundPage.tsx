import { Link } from 'react-router-dom';
import Button from '../components/Button';
import notFoundImage from '../assets/images/404.png';

export default function NotFoundPage() {
  return (
    <div className="bg-background flex flex-col items-center justify-end text-center">
      <div className="flex flex-col items-center justify-center px-5">
        <h1
          className="text-primary font-heading mb-5 text-4xl font-bold md:text-5xl"
          style={{ marginTop: '135px' }}
        >
          Oops! Page not found.
        </h1>

        <p className="text-secondary font-subtext mb-8 md:text-xl">
          The page you&#8217;re looking for doesn&#8217;t exist or has been
          moved.
        </p>

        <Link to={'/'}>
          <Button text="Go Back Home" />
        </Link>
      </div>

      <img
        src={notFoundImage}
        alt="404"
        className="mt-12 h-auto w-full md:w-xl"
      />
    </div>
  );
}
