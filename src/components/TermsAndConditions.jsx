import { Accordion, Breadcrumb, BreadcrumbItem } from "react-bootstrap";
import { Link } from "react-router-dom";

function TermsAndConditions() {
  const terms = [
    {
      heading: "Acceptance of Terms",
      paragraph: `By using this website, placing orders, and/or registering for an account, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use the website.`,
    },
    {
      heading: "General Terms",
      paragraph: `You must be at least 16 years old to use our website and purchase products.
By accessing and using our site, you represent and warrant that you have the legal capacity to enter into these terms and conditions.
We reserve the right to modify, update, or change these Terms at any time. Any changes will be reflected on this page, and you are encouraged to review them periodically.`,
    },
    {
      heading: "Products and Services",
      paragraph: `We offer a wide selection of grocery products, including fresh produce, dairy, packaged goods, and household essentials.
Availability of products is subject to change, and we cannot guarantee the availability of any specific item.
We reserve the right to limit quantities or refuse service for any reason, including but not limited to product availability or fraudulent activity.`,
    },
    {
      heading: "Account Registration and Security",
      paragraph: `To make purchases on our website, you may need to create an account with a username and password. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
You agree to notify us immediately if you suspect any unauthorized use of your account or any other security breach.`,
    },
    {
      heading: "Delivery and Shipping",
      paragraph: `We offer delivery services to [list delivery areas or regions]. Shipping fees and delivery times will be provided during checkout.
Delivery times are estimates, and we are not liable for delays caused by third-party carriers or unforeseen events.
If a delivery attempt fails or if the recipient is unavailable at the time of delivery, additional charges may apply for re-delivery.`,
    },
    {
      heading: "Returns and Refunds",
      paragraph: `We accept returns on products within 4 days of receipt, provided that the items are unopened, undamaged, and in original packaging.
Perishable goods such as fresh produce, dairy, and meat are not eligible for return unless they are defective or damaged.
Refunds, if applicable, will be processed to the original payment method.`,
    },
    {
      heading: "Contact Us",
      paragraph: `If you have any questions about these Terms and Conditions, please contact us at: Ecoshop@gmail.com  , 1234567890`,
    },
  ];
  return (
    <div className="container">
      <div className="my-3">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to={"/"}>Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Terms & Conditions</BreadcrumbItem>
        </Breadcrumb>
      </div>

      <div className="my-5 px-5">
        <h4>Term and Conditions</h4>
        <span className="text-muted">Last Updated : 22/11/2024</span>
        <p className="my-3" style={{ textIndent: "100px" }}>
          Welcome to EcoShop! By using our website or any of our services, you
          agree to comply with and be bound by the following Terms and
          Conditions. Please read them carefully before using our services.
        </p>
        <Accordion>
          {terms.map((value, index) => (
            <Accordion.Item eventKey={index} key={index}>
              <Accordion.Header>
                <h5>
                  {index + 1} {" ) "}
                  {value.heading}
                </h5>
              </Accordion.Header>
              <Accordion.Body>
                <p style={{ textIndent: "50px", textAlign: "justify" }}>
                  {value.paragraph}
                </p>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default TermsAndConditions;
