import React from "react";
import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import image from "../../assets/logo.png";

const MyFooter = () => {
  return (
    <>
      <Footer container={true} className="mt-8">
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <Link to="/">
                <Footer.Brand src={image} alt="Wdyd" name="Flowbite" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="about" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">Flowbite</Footer.Link>
                  <Footer.Link href="#">Tailwind CSS</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="https://github.com/dima5fahrul">
                    Github
                  </Footer.Link>
                  <Footer.Link href="#">Discord</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Terms & Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright
              href="#"
              by="Dimas Fahrul™"
              year={new Date().getFullYear()}
            />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon
                href="https://www.facebook.com/profile.php?id=100007096427349"
                icon={BsFacebook}
              />
              <Footer.Icon
                href="https://instagram.com/hellteen_"
                icon={BsInstagram}
              />
              <Footer.Icon
                href="https://github.com/dima5fahrul"
                icon={BsGithub}
              />
              <Footer.Icon
                href="https://linkedin.com/in/dimasfahrul"
                icon={BsLinkedin}
              />
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
};
export default MyFooter;
