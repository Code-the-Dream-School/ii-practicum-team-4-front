import farmField from '../assets/images/farm-field.png';
import farmer from '../assets/images/farmer.png';
import greenhouse from '../assets/images/greenhouse.png';
import fb_red from '../assets/images/icons/fb_red.svg';
import ig_red from '../assets/images/icons/ig_red.svg';
import twitter_red from '../assets/images/icons/twitter_red.svg';

const AboutPage = () => {
  return (
    <div className="about-page bg-background text-primary m-2 space-y-14 px-12 py-10">
      <section className="flex flex-col md:grid md:grid-cols-2 md:items-center md:text-lg md:gap-12">
        <div>
          <h2 className="font-heading mb-6 text-2xl font-bold md:text-5xl">
            Our Mission
          </h2>
          <p className="font-heading text-sm font-semibold md:text-xl">
            Bringing fresh, local, and sustainable produce directly from a farm
            to your table.
          </p>
          <p className="font-subtext my-4 text-xs font-normal md:text-lg">
            We believe in the power of fresh, locally grown food. Our mission is
            to connect communities with high-quality, farm-fresh produce while
            supporting sustainable agricultural practices and empowering local
            farmer.
          </p>
        </div>
        <img
          src={farmField}
          alt="Farm field"
          className="mb-6 h-auto w-full rounded-xl shadow-md md:mb-0"
        />
      </section>
      <section className="flex flex-col md:grid md:grid-cols-2 md:items-center md:gap-12">
        <img
          src={farmer}
          alt="Farmer picking tomatoes"
          className="mb-6 h-auto w-full rounded-xl shadow-md md:mb-0"
        />
        <div>
          <h2 className="font-heading mb-6 text-2xl font-bold md:text-5xl">
            Our Story
          </h2>
          <p className="font-subtext mt-4 text-xs md:text-lg">
            Our journey began with a simple idea: to create a direct link
            between farmer and consumers, ensuring that fresh, seasonal, and
            nutritious produce is easily accessible. By cutting out the
            middleman, we not only provide healthier food options but also help
            farmers receive fair compensation for their hard work.{' '}
          </p>
          <div className="text-error font-subtext mt-4 text-xs/7 font-normal md:text-lg/9">
            <p className="font-bold">We are committed to:</p>
            <ol className="list-disc">
              <li>Supporting local farmer</li>
              <li>Reducing food waste and promoting sustainability</li>
              <li>Delivering the freshest produce straight to your doorstep</li>
            </ol>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center">
        <h2 className="text-error font-heading mb-6 text-2xl font-bold md:text-5xl">
          A Look Behind the Scenes
        </h2>
        <img
          src={greenhouse}
          alt="Greenhouse with worker"
          className="mb-2 h-auto w-full rounded-xl shadow-md md:mb-0"
        />
      </section>
      <section className="items-center text-center">
        <h2 className="font-heading mb-2 text-2xl font-bold md:text-5xl">
          Contact Us
        </h2>
        <p className="font-subtext mx-auto mt-4 mb-8 max-w-lg text-xs font-normal md:text-lg">
          We’d love to hear from you! Whether you have a question about your
          order, want to learn more about our mission, or just want to say
          hello, feel free to reach out.
        </p>
        <div className="grid-col-1 justify-items-center mx-auto grid text-left md:min-w-xl md:grid-cols-2">
          <form className="border-orange bg-beige order-1 space-y-4 rounded-xl border-2 p-4 shadow-md md:order-2 md:p-6">
            <div className="text-left">
              <h4 className="mb-1 text-sm font-semibold md:mb-2 md:text-2xl md:font-bold">
                Just Say Hello!
              </h4>
              <p className="mb-8 max-w-xl text-xs font-normal md:text-base">
                Fill out the form below, and we’ll get back to you as soon as
                possible.
              </p>
            </div>
            <div className="justify-items-center-safe mb-8 grid max-w-4xl grid-cols-1 text-left text-xs font-normal md:min-w-3xs md:grid-cols-2 md:text-base">
              <label htmlFor="name" className="mb-2 font-bold">
                NAME
                <input
                  type="text"
                  name="name"
                  placeholder=" Enter your name"
                  className="text-secondary mx-2 rounded border py-2 text-xs"
                />
              </label>
              <label htmlFor="email" className="font-bold">
                EMAIL
                <input
                  type="email"
                  name="email"
                  placeholder=" Enter your email"
                  className="text-secondary mx-2 rounded border py-2 text-xs"
                />
              </label>
            </div>
            <div className="mb-8 max-w-xl gap-2 text-left text-xs font-normal md:text-base">
              <label
                htmlFor="message"
                className="max-w-xltext-left mb-8 text-xs font-bold md:text-base md:font-bold"
              >
                MESSAGE
              </label>
              <textarea
                name="message"
                placeholder="We’d love to hear from you! Write your message here…"
                className="text-secondary min-h-[100px] w-full rounded border p-4 text-xs"
              />
              <button
                type="submit"
                className="bg-error text-beige text-2xs h-10 w-44 rounded-full px-8 py-3 text-center font-semibold transition duration-300 ease-in-out hover:opacity-80 md:h-14 md:w-64 md:text-base"
              >
                Send Message
              </button>
            </div>
          </form>
          <div className="border-orange bg-beige order-2 rounded-xl border-2 p-4 text-center text-xs shadow-md md:order-1 md:max-h-85 md:max-w-60 md:pt-8 md:text-base">
            <h4 className="font-bold">Business Hours</h4>
            <p>Mon–Fri: 9 AM – 6 PM</p>
            <p>Sat: 10 AM – 4 PM</p>
            <p>Sun: Taking a break!</p>
            <hr className="text-orange m-4" />
            <div>
              <p className="font-semibold">Email</p>
              <p>example@gmail.com</p>
              <p className="mt-2 font-semibold">Phone</p>
              <p>(000) 000-0000</p>
              <div className="mt-4 flex justify-center space-x-4 text-xl">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75"
                >
                  <img src={fb_red} alt="Facebook" className="h-6 w-6" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75"
                >
                  <img src={twitter_red} alt="Twitter" className="h-6 w-6" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75"
                >
                  <img src={ig_red} alt="Instagram" className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
