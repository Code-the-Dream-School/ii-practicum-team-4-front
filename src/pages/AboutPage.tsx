import farmField from "../assets/images/farm-field.png";
import farmer from "../assets/images/farmer.png";
import greenhouse from "../assets/images/greenhouse.png";
import fb_red from '../assets/images/icons/fb_red.svg';
import ig_red from '../assets/images/icons/ig_red.svg';
import twitter_red from '../assets/images/icons/twitter_red.svg';

const AboutPage = () => {
  return (
  <div className="about-page bg-background text-primary px-30 py-10 space-y-16">
    <section className="flex flex-col md:grid md:grid-cols-2 md:gap-12 md:items-center">
      <div>
        <h2 className="text-2xl md:text-4xl font-bold mb-2 font-heading">Our Mission</h2>
        <p className="font-heading font-semibold text-sm md:text-lg">
          Bringing fresh, local, and sustainable produce directly from a farm to your table.
        </p>
        <p className="font-subtext font-normal text-xs md:text-sm mt-4">
          We believe in the power of fresh, locally grown food. Our mission is to connect communities with high-quality, farm-fresh produce while supporting sustainable agricultural practices and empowering local farmer.
        </p>
      </div>
      <img 
        src={farmField} 
        alt="Farm field" 
        className="w-full h-auto mb-6 md:mb-0 rounded-xl shadow-md"
      />
    </section>
    <section className="flex flex-col md:grid md:grid-cols-2 md:gap-12 md:items-center">
      <img 
        src={farmer} 
        alt="Farmer picking tomatoes" 
        className="w-full h-auto mb-6 md:mb-0 rounded-xl shadow-md"
      />
      <div>
        <h2 className="text-2xl md:text-4xl font-bold mb-2 font-heading">Our Story</h2>
        <p className="font-subtext text-xs md:text-sm mt-4">
          Our journey began with a simple idea: to create a direct link between farmer and consumers, ensuring that fresh, seasonal, and nutritious produce is easily accessible. By cutting out the middleman, we not only provide healthier food options but also help farmers receive fair compensation for their hard work.        </p>
        <div className="text-error font-subtext font-normal text-xs/7 md:text-sm/7 mt-4">
          <p className="font-bold">
            We are committed to:
          </p>
          <ol className="list-disc">
            <li>Supporting local farmer</li>
            <li>Reducing food waste and promoting sustainability</li>
            <li>Delivering the freshest produce straight to your doorstep</li>
          </ol>
        </div>
      </div>
    </section>
    <section className="flex flex-col items-center">
      <h2 className="text-error text-2xl md:text-4xl font-bold mb-4 font-heading">A Look Behind the Scenes</h2>
      <img 
        src={greenhouse}
        alt="Greenhouse with worker"
        className="w-full h-auto mb-4 md:mb-0 rounded-xl shadow-md"
      />
    </section>
    <section className="text-center">
      <h2 className="text-2xl md:text-4xl font-bold mb-2 font-heading">Contact Us</h2>
      <p className="font-subtext font-normal text-xs md:text-base max-w-md mx-auto mt-4 mb-8">
        We’d love to hear from you! Whether you have a question about your order, want to learn more about our mission, or just want to say hello, feel free to reach out.
      </p>
      <div className="grid grid-col-1 md:grid-cols-2 gap-2 max-w-4xl min-w-sm md:min-w-3xl mx-auto">
        <form className="bg-[#FAF6EC] rounded-xl p-4 md:p-6 shadow-md space-y-4 order-1 md:order-2 border-2 border-[#F3D48A]">
          <div className="text-left">
            <h4 className="font-bold mb-1 md:mb-2 text-sm md:text-2xl font-semibold">Just Say Hello!</h4>
            <p className="text-xs md:text-base max-w-xl mx-auto mb-8 font-normal">Fill out the form below, and we’ll get back to you as soon as possible.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs md:text-base max-w-xl mx-3 mb-8 min-w-3xs font-normal text-left">
            <label htmlFor="name" className="font-bold mx-auto">NAME
            <input type="text" name="name" placeholder="Enter your name" className="text-secondary border p-2 rounded text-xs" />
            </label>
            <label htmlFor="email" className="font-bold mx-auto">EMAIL
            <input type="email" name="email" placeholder="Enter your email" className="text-secondary border p-2 rounded text-xs" />
            </label>
          </div>
          <div className="gap-2 text-xs md:text-base max-w-xl mx-3 mb-8 min-w-3xs font-normal text-left">
            <label htmlFor="message" className=" text-xs md:text-base font-bold md:font-bold max-w-xl mx-auto mb-8 text-left">MESSAGE</label>
            <textarea 
              name="message" 
              placeholder="We’d love to hear from you! Write your message here…"
              className="text-secondary w-full border p-4 rounded text-xs min-h-[100px]"
            />
            <button
              type="submit"
              className="bg-error text-light h-14 w-64 rounded-full px-10 py-3 text-center text-base font-semibold transition duration-300 ease-in-out hover:opacity-80 md:text-xl"
            >
              Send Message
            </button>
          </div>
        </form>
        <div className="text-xs md:text-base bg-[#FAF6EC] text-center md:max-h-85 md:max-w-60 rounded-xl p-4 md:pt-8 shadow-md order-2 md:order-1 border-2 border-[#F3D48A]">
          <h4 className="font-bold">Business Hours</h4>
          <p>Mon–Fri: 9 AM – 6 PM</p>
          <p>Sat: 10 AM – 4 PM</p>
          <p>Sun: Taking a break!</p>
          <hr className="text-[#F3D48A] m-4"/>
          <div>
            <p className="font-semibold">Email</p>
            <p>example@gmail.com</p>
            <p className="mt-2 font-semibold">Phone</p>
            <p>(000) 000-0000</p>
            <div className="flex justify-center space-x-4 mt-4 text-xl">
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
  )
};

export default AboutPage;
