import Link from "next/link";
import { TbWorldCheck } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";

type Props = {};

function Footer({}: Props) {
  return (
    <div>
      <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-2 dark:bg-gray-800 dark:border-gray-600">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-4">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              href="https://awee.me"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Aweesha Thavishanka
              </span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6  font-medium  sm:mb-0  gap-10">
              <li>
                <Link
                  href="https://www.awee.me/about-me"
                  className="hover:underline me-4 md:me-6 text-xl text-black">
                  <TbWorldCheck size={24} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/aweesha-thavishanka"
                  className="hover:underline me-4 md:me-6 text-xl text-black">
                  <FaLinkedin size={24} />
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://awee.me" className="hover:underline">
              Aweesha Thavishanka
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
