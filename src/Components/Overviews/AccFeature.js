const features = [
  { name: "Origin", description: "Designed by Good Goods, Inc." },
  {
    name: "Material",
    description:
      "Solid walnut base with rare earth magnets and polycarbonate add-ons.",
  },
  { name: "Dimensions", description: '15" x 3.75" x .75"' },
  { name: "Finish", description: "Hand sanded and finished with natural oil" },
  {
    name: "Includes",
    description:
      "Pen Tray, Phone Tray, Small Tray, Large Tray, Sticky Note Holder",
  },
  {
    name: "Considerations",
    description:
      "Made from natural materials. Grain and color vary with each item.",
  },
];

const AccFeature = () => {
  return (
    <div className="bg-yellow-700">
      <div aria-hidden="true" className="relative">
        <img
          src="https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
          className="w-full h-96 object-center object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-yellow-700" />
      </div>

      <div className="relative -mt-12 max-w-7xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center lg:max-w-4xl">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Nervous about settling in a new country?
            <br />
            Be calm; we are here to assist you.
          </h2>
          <p className="mt-4 text-gray-200">
            You are finally off to a great new adventure, congratulations! We
            know it seems a little daunting but trust us, the best is yet to
            come. And we are here to support you all the way. To help you
            prepare for life in your new country, we help you to chose the best
            accommodation in your budget
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccFeature;
