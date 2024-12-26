import { Accordion, Breadcrumb, BreadcrumbItem } from "react-bootstrap";
import { Link } from "react-router-dom";

function PrivacyPolicy() {
  const privacy = [
    {
      heading: "Information We Collect",
      paragraph: `We collect two types of information: Personal Information and Non-Personal Information.`,
      list: ["Personal Information", "Non-Personal Information"],
    },
    {
      heading: "How We Use Your Information",
      paragraph: `We use the information we collect for the following purposes:`,
      list: [
        "Order Processing: To fulfill orders, process payments, and deliver products to you.",
        "Account Management: To create, maintain, and manage your account and provide customer support.",
        "Communication: To send order updates, promotional offers (if you opt-in), and respond to inquiries.",
        "Legal Compliance: To comply with legal obligations or resolve disputes.",
      ],
    },
    {
      heading: "How We Protect Your Information",
      paragraph: `We take appropriate technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. This includes the use of encryption technologies (e.g., SSL) for payment processing and secure server storage. However, please note that no method of transmission over the internet is completely secure, and we cannot guarantee 100% security.`,
    },
    {
      heading: "Cookies and Tracking Technologies",
      paragraph: `We use cookies and similar technologies to enhance your user experience on our website. Cookies are small text files stored on your device that help us remember your preferences and understand how you interact with our site. You can choose to disable cookies in your browser settings, but this may impact your ability to use certain features of our website.`,
    },
    {
      heading: " Third-Party Links",
      paragraph: `Our website may contain links to third-party websites. These third parties have their own privacy policies, and we do not control or assume any responsibility for the practices or content of these websites. Please review their privacy policies before providing any personal information to them.`,
    },
  ];
  return (
    <div className="container">
      <div className="my-3">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to={"/"}>Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Privacy Policy</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="my-5 px-5">
        <h4>Privacy Policy for EcoShop</h4>
        <span>Last Updated: 22/11/2024</span>
        <p className="my-3" style={{ textIndent: "100px" }}>
          We are committed to protecting your privacy. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your personal
          information when you visit our website or make purchases. By using our
          website, you consent to the collection and use of your information as
          described in this Privacy Policy. If you do not agree with the
          practices outlined here, please do not use our website.
        </p>
        <Accordion>
          {privacy.map((value, index) => (
            <Accordion.Item eventKey={index} key={index}>
              <Accordion.Header>
                <h5>
                  {index + 1 + " ) "}
                  {value.heading}
                </h5>
              </Accordion.Header>
              <Accordion.Body>
                <p style={{ textIndent: "50px", textAlign: "justify" }}>
                  {value.paragraph}
                </p>
                {value.list && (
                  <ul className="d-inline-block ms-5 ps-5 mt-2">
                    {value.list?.map((value, index) => (
                      <li key={index}>{value}</li>
                    ))}
                  </ul>
                )}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
