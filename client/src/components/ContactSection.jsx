const ContactSection = () => {
  return (
    <section
      id="#contact"
      className="max-w-screen-2xl mx-auto bg-white px-6 my-12"
    >
      <div className="flex lg:flex-row flex-col justify-between items-start gap-8">
        <div className="border border-t-0 break-words flex flex-col p-8">
          Have any feedback or queries? Feel free to reach out to us. Write to
          us at{" "}
          <span className="font-bold">customercare@pizzadelhivery.com</span>
          <button className="bg-primary py-2 px-5 font-bold text-white text-lg uppercase my-4">
            Find your nearest outlet
          </button>
          Try our delicious pizzas at your nearest outlet.
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-1">
            <h5 className="text-3xl">Our Customer Care Number</h5>
            <p className="text-gray-400 ">
              1800-208-1234
              <a className="text-primary ml-4" href="tel:1800-208-1234">
                Call Now
              </a>
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h5 className="text-3xl">Our Contact Address</h5>
            <p className="text-gray-400 ">
              Pizza Delhivery India, <br />
              Tower Block-E, Plot No. 12, <br />
              3th Floor, Tomato Paradise Park,
              <br />
              Sector 22A, Gurugram - 122001, Haryana
            </p>
          </div>
          <div>
            <iframe
              className="lg:w-[600px] w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2938.5325358792998!2d77.0629056432115!3d28.50299345975275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1986924318ef%3A0x5f59b784145e1810!2sTossin%20Pizza%20Sector%2022%20Gurgaon%20%7C%20Best%20Pizza%20Restaurant%20in%20Gurgaon!5e0!3m2!1sen!2sin!4v1690288952096!5m2!1sen!2sin"
              width="600"
              height="350"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
