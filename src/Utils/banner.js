import { FireIcon, SpeakerphoneIcon, XIcon } from "@heroicons/react/outline";

const Banner = ({ closeBanner }) => {
  return (
    <div className="relative bg-gradient-to-r from-fuchsia-600 to-pink-600 z-50">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="pr-16 sm:text-center sm:px-16">
          <p className="font-medium text-white">
            <span className="md:hidden">
              Get 50% OFF on all programs! Code: HCCNEW
            </span>
            <span className="hidden md:inline">
              We are exicited to announce 50% OFF on all programs! Use Code:
              HCCNEW
            </span>
            <span className="block sm:ml-2 sm:inline-block">
              <a href="#" className="text-white font-bold underline">
                Limited Time Deal.
              </a>
            </span>
          </p>
        </div>
        <div className="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
          <button
            type="button"
            onClick={() => {
              closeBanner(false);
            }}
            className="flex p-2 rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <span className="sr-only">Dismiss</span>
            <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
