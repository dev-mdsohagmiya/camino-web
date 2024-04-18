import MapImage from "@/app/assets/images/Map.jpg";
import Image from "next/image";

const ContactForm = () => {
  return (
    <div className="bg-[#FBF9F6]  py-7 md:py-20" id="contact-from">
      <div className="max-w-[1482px] mx-auto px-7">
        {/* title section */}
        <div className="flex flex-col justify-center items-center">
          <h4 className="text-[#B38A4C] text-[20px] md:text-[24px] uppercase">
            Get In Tauch
          </h4>
          <p className="h-[1px] w-[180px] rounded-full bg-gradient-to-r from-transparent via-[#B38A4C] to-transparent"></p>
          <h2 className="text-[24px] md:text-[34px] font-semibold mt-[8px] tracking-[2px] text-center text-dark">
            Reach Out for Expert Guidance
          </h2>
        </div>

        {/* form and map section */}
        <div className="relative w-full h-auto mt-[30px] grid grid-cols-12 lg:gap-[30px]">
          {/* form start */}
          <div className="col-span-12 lg:col-span-6 relative lg:w-[80%]">
            <form className="space-y-[8px] sm:space-y-[12px]">
              {/* name input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-[#323232] text-[18px] font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full h-auto placeholder:text-[#999999] border border-[#D2D1CE] p-[10px] rounded-[8px] focus:outline-none bg-transparent"
                  placeholder="Enter your emaiil"
                />
              </div>

              {/* email input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-[#323232] text-[18px] font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full h-auto placeholder:text-[#999999] border border-[#D2D1CE] p-[10px] rounded-[8px] focus:outline-none bg-transparent"
                  placeholder="Enter your name"
                />
              </div>

              {/* message input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-[#323232] text-[18px] font-medium"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  className="w-full h-auto placeholder:text-[#999999] border border-[#D2D1CE] p-[10px] rounded-[8px] focus:outline-none bg-transparent"
                  placeholder="Your Message"
                  rows={4}
                />
              </div>

              {/* button */}
              <div className="grid  sm:gap-0 sm:flex sm:justify-between items-center ]">
                {/* checkbox */}
                <div className="flex gap-[10px]">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-sm border border-solid border-[#B38A4C] bg-transparent checked:bg-white"
                  />
                  <p className="text-[14px] text-[#4C4C4C]">
                    I agree with Terms of Use and Privacy Policy
                  </p>
                </div>

                <button className="bg-[#B38A4C] w-full sm:w-[120px] md:w-[160px] h-[44px] md:h-[60px] rounded-[10px] text-white font-[500] mt-5 mb-2 sm:mb-0 sm:mt-0">
                  Send
                </button>
              </div>
            </form>
          </div>

          {/* map start */}
          <div className="col-span-12 lg:col-span-6 h-[280px] md:h-auto pt-6 pb-5 md:pb-auto  md:mt-[0px] lg:mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2375.936973263202!2d-6.1547972!3d53.4517129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48671af5bc1f6809%3A0xce936588653b093e!2sCamino%20Capital%20Limited!5e0!3m2!1sen!2sbd!4v1713439774207!5m2!1sen!2sbd"
              className="w-full shadow-md rounded-md h-full"
              style={{ border: "0" }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
