const Accomidation = () => {
  return (
    <div className="container mx-auto px-6 py-16 text-center">
      <div className="mx-auto max-w-lg">
        <h1 className="text-3xl font-bold text-gray-800  lg:text-4xl">
          {" "}
          Accommodation / Pre-Departure Support
        </h1>
        <p className="mt-6 text-gray-500 ">
          {" "}
          We will help you find out the best accommodation according to one’s
          need, with HCC’s quality accommodation service providers, helps you
          find a home that goes well with your budget and lifestyle. You must be
          well-prepared for your journey overseas and hence; pre-departure
          briefings form an important part of our services.
        </p>
        <button className="mt-6 rounded-lg bg-blue-600 px-6 py-2.5 text-center text-sm font-medium capitalize leading-5 text-white hover:bg-blue-500 focus:outline-none lg:mx-0 lg:w-auto">
          Enroll
        </button>
        <p className="mt-3 text-sm text-gray-400">2k+ Students Enrolled!</p>
      </div>
      <div className="mt-10 flex justify-center">
        <img
          className="h-96 w-full rounded-xl object-cover lg:w-4/5"
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
        />
      </div>
    </div>
  );
};

export default Accomidation;
