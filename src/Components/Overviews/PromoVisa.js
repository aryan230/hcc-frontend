const PromoVisa = () => {
  return (
    <div className="relative bg-gray-800 py-32 px-6 sm:py-40 sm:px-12 lg:px-16 visa-background">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gray-900 bg-opacity-50"
      />
      <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          How can HCC help in your visa applications?
        </h2>
        <p className="mt-3 text-xl text-white">
          We can advise you on how to go about the entire process. We’ll make
          sure you are fully informed on the latest visa requirements and
          conditions; also help you prepare the right documents for your
          submission. To reduce your hassle our team of experts will direct you
          to the official websites and to immigration representatives to ensure
          you have the latest applications forms and guidance.
        </p>
        <a
          href="#"
          className="mt-8 w-full block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
        >
          Enroll Now
        </a>
      </div>
    </div>
  );
};

export default PromoVisa;
