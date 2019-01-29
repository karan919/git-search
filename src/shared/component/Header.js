import React from "react";

const Header = () => {
  return (
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 class="my-0 mr-md-auto font-weight-normal">gyan_university</h5>
      <nav class="my-2 my-md-0 mr-md-3">
        <a class="p-2 text-dark" href="#">
          Home
        </a>
        <a class="p-2 text-dark" href="#">
          About
        </a>
        <a class="p-2 text-dark" href="#">
          Feature
        </a>
        <a class="p-2 text-dark" href="#">
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Header;
