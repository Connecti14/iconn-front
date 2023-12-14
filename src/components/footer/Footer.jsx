import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="fixed bottom-0 left-0 z-20 w-full px-4 py-2 h-10 bg-blue-300 border-t border-blue-300 shadow-lg md:flex md:items-center md:justify-between md:p-6">
        <span class="text-md font-sm tracking-wide text-sky-900 sm:text-center">
          © 2023{" "}
          <a href="#" class="hover:underline">
            iConnect
          </a>
          . All Rights Reserved.
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-md font-medium tracking-wide text-sky-800 sm:mt-0">
          <li>
            <a
              href="#"
              class="no-underline hover:underline decoration-sky-100 underline-offset-8 me-4 md:me-6"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              class="no-underline hover:underline decoration-sky-100 underline-offset-8 me-4 md:me-6"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="#"
              class="no-underline hover:underline decoration-sky-100 underline-offset-8 me-4 md:me-6"
            >
              Licensing
            </a>
          </li>
          <li>
            <a
              href="#"
              class="no-underline hover:underline decoration-sky-100 underline-offset-8"
            >
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
