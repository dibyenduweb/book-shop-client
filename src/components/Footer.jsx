import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer container mx-auto bg-black text-white p-6 sm:p-8 md:p-10 mt-10">
      {/* Services Section */}
      <nav className="flex flex-col sm:flex-row sm:justify-between mb-6">
        <div className="mb-4 sm:mb-0">
          <h6 className="footer-title text-lg sm:text-xl font-semibold mb-4">Services</h6>
          <a className="link link-hover mb-2">Branding</a>
          <a className="link link-hover mb-2">Design</a>
          <a className="link link-hover mb-2">Marketing</a>
          <a className="link link-hover mb-2">Advertisement</a>
        </div>
        <div className="mb-4 sm:mb-0">
          <h6 className="footer-title text-lg sm:text-xl font-semibold mb-4">Company</h6>
          <a className="link link-hover mb-2">About Us</a>
          <a className="link link-hover mb-2">Contact</a>
          <a className="link link-hover mb-2">Jobs</a>
          <a className="link link-hover mb-2">Press Kit</a>
        </div>
        <div>
          <h6 className="footer-title text-lg sm:text-xl font-semibold mb-4">Legal</h6>
          <a className="link link-hover mb-2">Terms of Use</a>
          <a className="link link-hover mb-2">Privacy Policy</a>
          <a className="link link-hover mb-2">Cookie Policy</a>
        </div>
      </nav>

      {/* Newsletter Section */}
      <form className="flex flex-col items-center mb-6">
        <h6 className="footer-title text-lg sm:text-xl font-semibold mb-4">Newsletter</h6>
        <fieldset className="form-control w-full sm:w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label>
          <div className="join flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item w-full sm:w-72"
            />
            <button className="btn btn-warning join-item mt-2 sm:mt-0">Subscribe</button>
          </div>
        </fieldset>
      </form>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-6 mt-6">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          <FaTwitter size={30} />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:text-blue-900"
        >
          <FaFacebookF size={30} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 hover:text-pink-800"
        >
          <FaInstagram size={30} />
        </a>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom mt-6 text-center text-sm">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
