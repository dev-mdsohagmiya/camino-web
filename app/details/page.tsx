import { ContactDetails, ContactForm } from "../components";
import Navbarr from "../components/navbar/Navbar";

function Details() {
  return (
    <main>
      <Navbarr />
      <div className=" mt-[150px]">
        <ContactDetails />
        <ContactForm />
      </div>
    </main>
  );
}

export default Details;
