import React from "react";

const ContactInfo = () => {
  const contact = [
    {
      id: 0,
      icon: "",
      text: "github.com/yourname"
    },
    {
      id: 1,
      icon: "",
      text: "linkedin.in/yourname"
    },
    {
      id: 2,
      icon: "",
      text: "twitter.com/yourname"
    },
    {
      id: 3,
      icon: "",
      text: "hello@yourname.dev"
    },
  ]
  return (
    <div>
      <div>
        <span>STATUS: AVAILABLE</span>
        <span>$ awaiting_input..._</span>
      </div>
      <div>
        <div>
          <span>San Francisco, CA (Remote)</span>
        </div>
        <div>
          <span>PST Timezone (UTC-8)</span>
        </div>
      </div>
      <div className="flex flex-col">
        <h3>CONNECT</h3>
        <div className="flex flex-col">
          {contact.map((item) => (
            <div>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
