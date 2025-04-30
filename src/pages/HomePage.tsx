import freshProduce1 from '../assets/images/home-page/Fresh produce 1.png';
import freshProduce2 from '../assets/images/home-page/Fresh produce 2.png';
import step1 from '../assets/images/home-page/step1.png';
import step2 from '../assets/images/home-page/step2.png';
import step3 from '../assets/images/home-page/step3.png';
import smallBox from '../assets/images/home-page/Product Card1.png';
import mediumBox from '../assets/images/home-page/Product Card2.png';
import largeBox from '../assets/images/home-page/Product Card3.png';
import benefitsDesk from '../assets/images/home-page/BenefitsDesktop.svg';
import benefitsMob from '../assets/images/home-page/BenefitsMobile.svg';

const HomePage = () => {
  return (
    <div className="bg-light font-subtext text-primary">
      <section className="z-10 my-0 flex items-center justify-between px-0 py-2 text-center md:py-2">
        <div className="block-inline z-0 w-2/3 overflow-hidden md:w-1/3">
          <img
            src={freshProduce1}
            alt="Fresh produce"
            className="z-10 -mx-22 w-full min-w-60 rounded-xl"
          />
        </div>
        <div className="z-0 block w-xs md:w-lg">
          <div className="font-heading max-w-xs overflow-hidden text-2xl font-bold transition-transform hover:scale-105 md:-mx-10 md:min-w-xl md:text-6xl">
            <h1>Order Your</h1>
            <h1>Farm Box Today</h1>
          </div>
          <p className="my-2 max-w-xs items-center py-2 text-[10px] md:w-2xl md:max-w-lg md:text-xl">
            Enjoy fresh, local produce delivered straight from our farm to your
            table.
          </p>
          <button className="bg-error text-beige my-2 h-10 w-24 rounded-full px-4 py-2 text-center text-[10px] font-semibold transition duration-300 ease-in-out hover:opacity-80 md:h-14 md:w-64 md:text-base">
            Order Now
          </button>
        </div>
        <div className="z-10 block w-2/3 overflow-hidden md:w-1/3">
          <img
            src={freshProduce2}
            alt="Fresh produce"
            className="z-10 w-full min-w-50 rounded-xl"
          />
        </div>
      </section>

      <section className="font-heading px-4 py-8 md:px-16">
        <h2 className="my-12 text-center text-5xl font-bold md:text-8xl">
          How It Works
        </h2>

        <div className="mx-6 space-y-4 md:grid md:grid-cols-3 md:gap-6">
          <div className="flex h-full flex-col overflow-hidden rounded-xl shadow">
            <div className="bg-error text-background h-48 flex-grow p-6 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <h3 className="text-background/70 text-lg font-semibold md:text-xl">
                STEP 1
              </h3>
              <p className="py-2 text-3xl font-bold md:text-3xl">
                Choose your box
              </p>
              <p className="text-md font-subtext font-thin md:text-lg">
                Boxes come in a variety of sizes! Choose your size and pay for
                it.
              </p>
            </div>
            <img
              src={step1}
              alt="Step 1 veggies"
              className="h-48 w-full object-cover"
            />
          </div>

          <div className="flex h-full flex-col overflow-hidden rounded-xl shadow">
            <img
              src={step2}
              alt="Step 2 lettuce"
              className="h-48 w-full object-cover"
            />
            <div className="bg-success text-background flex-grow p-6 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <h3 className="text-background/70 text-lg font-semibold md:text-xl">
                STEP 2
              </h3>
              <p className="py-2 text-3xl font-bold md:text-3xl">
                Customize your produce
              </p>
              <p className="text-md font-subtext font-thin md:text-lg">
                Customize your produce exactly how you like.
              </p>
            </div>
          </div>

          <div className="flex h-full flex-col overflow-hidden rounded-xl shadow">
            <div className="bg-warning text-primary flex-grow p-6 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <h3 className="text-primary/70 text-lg font-semibold md:text-xl">
                STEP 3
              </h3>
              <p className="py-2 text-3xl font-bold md:text-3xl">
                We Deliver. You Enjoy!
              </p>
              <p className="text-md font-subtext font-thin md:text-lg">
                A delicious farmbox will be delivered to your doorstep the same
                day.
              </p>
            </div>
            <img
              src={step3}
              alt="Step 3 delivery field"
              className="h-48 w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="font-heading px-4 py-4 md:px-4">
        <div className="mx-10 p-10 md:grid md:grid-cols-2">
          <h2 className="text-error mb-4 text-center text-left text-6xl font-bold md:max-w-xl md:text-8xl">
            Box Sizes Preview
          </h2>
          <img
            src={benefitsMob}
            alt="Mobile view benefits"
            className="block w-full md:hidden"
          />
          <img
            src={benefitsDesk}
            alt="Desktop view benefits"
            className="hidden w-full md:block"
          />
        </div>
        <div className="space-y-4 pt-8 md:flex md:gap-8 md:px-16">
          <div className="bg-warning grid h-60 w-full transform grid-cols-2 rounded-xl shadow transition-shadow duration-300 hover:scale-105 hover:shadow-xl md:w-1/3">
            <div className="z-10 p-4">
              <h3 className="text-success pt-4 text-2xl font-bold">
                SMALL BOX
              </h3>
              <p className="font-subtext text-sm">5 items*</p>
              <p className="text-warning bg-error absolute bottom-8 w-18 rounded-xl box-decoration-slice p-4 text-2xl font-bold">
                $35
              </p>
            </div>
            <img
              src={smallBox}
              alt="Small box"
              className="z-0 -mx-20 mb-2 min-w-70 rounded md:-mx-20 md:min-w-70"
            />
          </div>

          <div className="bg-error grid h-60 w-full transform grid-cols-2 rounded-xl shadow transition-shadow duration-300 hover:scale-105 hover:shadow-xl md:w-1/3">
            <div className="z-10 p-4">
              <h3 className="text-background pt-4 text-2xl font-bold">
                MEDIUM BOX
              </h3>
              <p className="font-subtext text-background text-sm">10 items*</p>
              <p className="text-error bg-warning absolute bottom-8 w-18 rounded-xl box-decoration-slice p-4 text-2xl font-bold">$45</p>
            </div>
            <img
              src={mediumBox}
              alt="Medium box"
              className="z-0 -mx-16 mb-0 min-w-66 rounded md:-mx-16 md:min-w-66"
            />
          </div>

          <div className="bg-success grid h-60 w-full transform grid-cols-2 rounded-xl shadow transition-shadow duration-300 hover:scale-105 hover:shadow-xl md:w-1/3">
            <div className="z-10 p-4">
              <h3 className="text-background pt-4 text-2xl font-bold">
                LARGE BOX
              </h3>
              <p className="font-subtext text-background text-sm">15 items*</p>
              <p className="text-success bg-warning absolute bottom-8 w-18 rounded-xl box-decoration-slice p-4 text-2xl font-bold">$55</p>
            </div>
            <img
              src={largeBox}
              alt="Large box"
              className="z-0 -mx-20 mb-2 min-w-70 rounded md:-mx-20 md:min-w-70"
            />
          </div>
        </div>
        <p className="font-subtext mt-2 px-4 text-xs text-gray-600 md:px-16">
          *Each item typically weighs around 1 lb.
        </p>
      </section>
    </div>
  );
};

export default HomePage;
