import ContactDetails from "../contact-details/ContactDetails";
import ContactForm from "../contact-form/ContactForm";
import Navbarr from "../navbar/Navbar";

function DetailsPage() {
  return (
    <main>
      <Navbarr white={true} />
      <div className="">
        <ContactDetails />
        <ContactForm />
      </div>
    </main>
  );
}

export default DetailsPage;
