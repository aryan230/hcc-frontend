const products = [
  {
    id: 1,
    name: "University Admission",
    href: "#",
    price: "$256",
    description:
      "We help you find the best course and coordinate your university application.",
    options: "8 colors",
    imageSrc:
      "https://images.pexels.com/photos/2861798/pexels-photo-2861798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    imageAlt:
      "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
  },
  {
    id: 2,
    name: "Visa Consultancy",
    href: "#",
    price: "$32",
    description:
      "We will help you prepare your visa documents and simplify the otherwise cumbersome process of getting a visa.",
    options: "Black",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg",
    imageAlt: "Front of plain black t-shirt.",
  },
  {
    id: 3,
    name: "Accommodation / Pre-Departure Support",
    href: "#",
    price: "$32",
    description:
      "We will help you find out the best accommodation according to one’s need, with HCC’s quality accommodation service providers, helps you find a home that goes well with your budget and lifestyle. You must be well-prepared for your journey overseas and hence; pre-departure briefings form an important part of our services.",
    options: "Black",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg",
    imageAlt: "Front of plain black t-shirt.",
  },
  {
    id: 4,
    name: "Profile Evaluation",
    href: "#",
    price: "$32",
    description:
      "Get your profile evaluated by our best counsellor’s. And match which colleges accept your profile.",
    options: "Black",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg",
    imageAlt: "Front of plain black t-shirt.",
  },
  {
    id: 5,
    name: "IELTS Preparation",
    href: "#",
    price: "$32",
    description:
      "Learn IELTS online at your own pace. Start today and improve your skills",
    options: "Black",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg",
    imageAlt: "Front of plain black t-shirt.",
  },
  // More products...
];

const Services = () => {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl text-center">
          <span className="block xl:inline">Our</span>{" "}
          <span className="block text-indigo-600 xl:inline">Programs</span>
        </h1>

        <div className="mt-10 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden"
            >
              <div className="aspect-w-3 aspect-h-4 bg-gray-200 group-hover:opacity-75 sm:aspect-none sm:h-96">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover sm:w-full sm:h-full"
                />
              </div>
              <div className="flex-1 p-4 space-y-2 flex flex-col">
                <h3 className="text-sm font-medium text-gray-900">
                  <a href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p className="text-sm text-gray-500">{product.description}</p>

                <div className="mt-6 p-5">
                  <a
                    href={product.href}
                    className="relative flex bg-gray-100 border border-transparent rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-200"
                  >
                    Get to know more
                    <span className="sr-only">, {product.name}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
