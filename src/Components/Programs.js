import {
  NewspaperIcon,
  PhoneIcon,
  SupportIcon,
} from "@heroicons/react/outline";

import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  DocumentIcon,
  CursorClickIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ViewGridIcon,
  HomeIcon,
  ClipboardCheckIcon,
  PaperAirplaneIcon,
  AcademicCapIcon,
  ColorSwatchIcon,
} from "@heroicons/react/outline";

import { motion, Variants } from "framer-motion";
const supportLinks = [
  {
    name: "Application Process",
    href: "/university-admission",
    description:
      "It all starts from choosing best universities from all around  globe, our experts help you out with the process until you reach at your dream university.",
    icon: AcademicCapIcon,
    img: "https://cdn-icons-png.flaticon.com/512/9285/9285039.png",
  },
  {
    name: "Visa Consultancy",
    href: "visa",
    description:
      "We will help you prepare your visa documents and simplify the otherwise cumbersome process of getting a visa.",
    icon: PaperAirplaneIcon,
    img: "https://cdn-icons-png.flaticon.com/512/7058/7058467.png",
  },
  {
    name: "Accommodation / Pre-Departure Support",
    href: "accomidation",
    description:
      "We will help you find out the best accommodation according to one’s need.",
    icon: HomeIcon,
    img: "https://cdn-icons-png.flaticon.com/512/5241/5241729.png",
  },
  {
    name: "Profile Evaluation",
    href: "profileevaluation",
    description:
      "Get your profile evaluated by our best counsellor’s. And match which colleges accept your profile.",
    icon: ClipboardCheckIcon,
    img: "",
  },
  {
    name: "IELTS Preparation",
    href: "ieltsPrep",
    description:
      "Learn IELTS online at your own pace. Start today and improve your skills.",
    icon: ColorSwatchIcon,
    img: "",
  },
  {
    name: "SOP Editing",
    href: "sop",
    description:
      "Your SOP is your chance to make yourself stand out from a crowd of people with similar educational qualifications as yours. Get your SOP edited/drafted by our expert team of editors.",
    icon: NewspaperIcon,
    img: "https://cdn-icons-png.flaticon.com/512/",
  },
];

const Programs = () => {
  const cardAnimate = {
    offScreen: {
      x: -100,

      opacity: 0,
    },
    onScreen: {
      x: 0,
      opacity: 1,
      rotate: [0, 2, 0],
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const textAnimate = {
    offScreen: {
      y: 100,
      opacity: 0,
    },
    onScreen: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 2,
        type: "spring",
      },
    },
  };
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="relative pb-32 bg-gray-800">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
            alt=""
          />
          <div
            className="absolute inset-0 bg-gray-800 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <motion.h1
            className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl font-karla"
            initial={"offScreen"}
            whileInView={"onScreen"}
            variants={textAnimate}
          >
            Our Programs
          </motion.h1>
          {/* <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate
            id malesuada non. Cras aliquet purus dui laoreet diam sed lacus,
            fames. Dui, amet, nec sit pulvinar.
          </p> */}
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="relative py-16">
          <div className="container relative m-auto px-6 text-gray-500 md:px-12">
            <motion.div
              className="grid gap-6 md:mx-auto md:w-8/12 lg:w-full lg:grid-cols-3"
              initial={"offScreen"}
              whileInView={"onScreen"}
              exit={"offScreen"}
              viewport={{ once: false }}
              transition={{ staggerChildren: 0.5 }}
            >
              {supportLinks.map((link) => (
                <motion.div
                  variants={cardAnimate}
                  key={link.name}
                  className="group space-y-6 border font-karla border-gray-100 h-fit rounded-3xl bg-white  px-8 py-12 text-center shadow-2xl shadow-gray-600/10"
                >
                  <link.icon
                    className="mx-auto w-12 text-stone-700"
                    alt="illustration"
                    loading="lazy"
                  />
                  {/* <img
                    className="mx-auto w-20 text-indigo-700"
                    src={link.img}
                    alt="illustration"
                    loading="lazy"
                  /> */}
                  <motion.h3
                    className="text-2xl font-black text-stone-700"
                    variants={textAnimate}
                  >
                    {link.name}
                  </motion.h3>
                  <motion.p variants={textAnimate}>{link.description}</motion.p>
                  <motion.a
                    variants={textAnimate}
                    href={link.href}
                    className="relative mx-auto flex h-10 w-10 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200  before:transition before:duration-300 group-hover:before:scale-125"
                  >
                    <span className="text-primary">→</span>
                  </motion.a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
        {/* <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div
              key={link.name}
              className="flex flex-col bg-white rounded-2xl shadow-xl my-10"
            >
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">
                  <link.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-900">
                  {link.name}
                </h3>
                <p className="mt-4 text-base text-gray-500">
                  {link.description}
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                <a
                  href={link.href}
                  className="text-base font-medium text-indigo-700 hover:text-indigo-600"
                >
                  Learn more<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div> */}
      </section>
    </div>
  );
};

export default Programs;
