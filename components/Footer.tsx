import React from "react";
import Button from "../components/Button";

const Footer = () => {
  const FooterLinks = [
    {
      title: "QUICK LINKS",
      links: ["Home", "About", "Solutions", "Contact"],
    },
  ];

  const FooterSocials = [
    {title: "SOCIAL",
      links: ['Linkedin', 'Twitter', 'Facebook', 'Instagram']
    }
  ]

  const FooterContact = [{
    title: "CONTACT",
    links: ["Info@mysite.com","123-456-7890","500 Terry Francine","Street, San Francisco","CA 94158"]
  }]


const FooterPolicy = [{
  title: "Policy",
  links: ["Terms & Conditions", "Privacy Policy", "Accessibility Statement"]
}]

  return (
    <footer className="w-full h-full bg-black rounded-t-2xl sticky z-0">
      <div className="px-10 p-25">
        <h1 className="text-9xl font-bold text-white">
          <a href="/">LUMINU</a>
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-10 px-10 pb-10">
        <div className="p-10 text-white">
          <h2 className="font-bold text-xl pb-5">Quick Links</h2>
          <ul className="space-y-2">
            {FooterLinks.map((ql) => (
              <li key={ql.title}>
                <ul>
                  {ql.links.map((link, index) => (
                    <li key={index} className="pb-2">
                      <a href="#" className="hover:underline">{link}</a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-10 text-white">
          <h2 className="font-bold text-xl pb-5">Social</h2>
          <ul className="space-y-2">
            {FooterSocials.map((social) => (
              <li key={social.title}>
                <ul>
                  {social.links.map((link, index) => (
                    <li key={index} className="pb-2">
                      <a href="#" className="hover:underline">{link}</a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-10 text-white">
          <h2 className="font-bold text-xl pb-5">Contact</h2>
          <ul className="space-y-2">
            {FooterContact.map((contact) => (
              <li key={contact.title}>
                <ul>
                  {contact.links.map((link, index) => (
                    <li key={index} className="pb-2">
                      {link}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-10 text-white">
          <h2 className="font-bold text-xl pb-5">Policy</h2>
          <ul className="space-y-2">
            {FooterPolicy.map((policy) => (
              <li key={policy.title}>
                <ul>
                  {policy.links.map((link, index) => (
                    <li key={index} className="pb-2">
                      <a href="#" className="hover:underline">{link}</a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="px-10 pb-10">
        <div className="p-10 text-white rounded-lg">
          <p className="font-semibold pb-8">JOIN OUR NEWSLETTER</p>
          <p className="px-5 font-semibold">Email</p>
          <input
            type="text"
            className="border-b-1 border-white w-96 pt-5 appearance-none bg-transparent focus:outline-none"
          />
          <div className="w-full pt-15 flex gap-5 pb-15">
            <input
              type="checkbox"
              placeholder="Yes, subscribe me to your newsletter"
              className="accent-pink-900"
            />
            <p>"Yes, subscribe me to your newsletter"</p>
            <Button type="button" title="Submit" variant="secondary" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
