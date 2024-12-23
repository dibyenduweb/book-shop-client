const ContactInfo = () => {
    return (
      <div className="contact-section py-10 w-4/5 lg:w-2/3 mx-auto">
        {/* Flexbox container for the left and right sections */}
        <div className="flex flex-col md:flex-row gap-8">
  
          {/* Left Side - Contact Details */}
          <div className="w-full md:w-1/2">
            <div className="contact-item mb-6">
              <h3 className="text-2xl font-medium mb-3">Our Office</h3>
              <p className="text-lg">
                123 Bookstore Lane, Suite 101
                <br />
                New York, NY 10001, USA
              </p>
            </div>
  
            <div className="contact-item">
              <h3 className="text-2xl font-medium mb-3">Get in Touch</h3>
              <p className="text-lg">
                <strong>Email:</strong> support@bookstore.com
                <br />
                <strong>Phone:</strong> (123) 456-7890
              </p>
            </div>
          </div>
  
          {/* Right Side - Contact Form */}
          <div className="w-full md:w-1/2">
            <div className="contact-form">
              <h3 className="text-2xl font-medium mb-4 text-center">Send Us a Message</h3>
              <form className="flex flex-col gap-4">
                {/* Name Field */}
                <div className="flex flex-col">
                  <label className="text-lg font-medium" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full p-3 border rounded-md"
                  />
                </div>
  
                {/* Email Field */}
                <div className="flex flex-col">
                  <label className="text-lg font-medium" htmlFor="email">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full p-3 border rounded-md"
                  />
                </div>
  
                {/* Message Field */}
                <div className="flex flex-col">
                  <label className="text-lg font-medium" htmlFor="message">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Write your message here"
                    rows="4"
                    className="w-full p-3 border rounded-md"
                  ></textarea>
                </div>
  
                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn btn-warning mt-4 px-6 py-3 text-black font-semibold rounded-md"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactInfo;
  