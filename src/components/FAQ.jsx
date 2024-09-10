import React, { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet consectetur ?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Nulla quis porta aliquam magna felis quam nisi vestibulum. Praesent interdum ultricies risus dis a cras hac nisi vel.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur ?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Nulla quis porta aliquam magna felis quam nisi vestibulum. Praesent interdum ultricies risus dis a cras hac nisi vel.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur ?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Nulla quis porta aliquam magna felis quam nisi vestibulum. Praesent interdum ultricies risus dis a cras hac nisi vel.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur ?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Nulla quis porta aliquam magna felis quam nisi vestibulum. Praesent interdum ultricies risus dis a cras hac nisi vel.",
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur ?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Nulla quis porta aliquam magna felis quam nisi vestibulum. Praesent interdum ultricies risus dis a cras hac nisi vel.",
    },
  ];

  return (
    <div className="p-FAQ">
      <div className="p-faq-label">
        <p style={{ paddingBottom: "8px" }}>FAQ’s</p>
      </div>
      <div className="p-faq-title"> <span>Decode</span> {" "} <br className="notMobile" /> your queries</div>
      {faqs.map((faq, index) => (
        <FAQItem key={index} faq={faq} />
      ))}
    </div>
  );
};

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="p-faq-main">
      <div className="faq-container">
        <div
          className="faq-text"
          onClick={toggleOpen}
          style={{ cursor: "pointer" }}
        >
          <p>{faq.question}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            style={{
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.4s ease",
            }}
          >
            <path
              d="M21.01 7.38072C21.5 7.87072 21.5 8.66072 21.01 9.15072L12.7 17.4607C12.31 17.8507 11.68 17.8507 11.29 17.4607L2.98005 9.15072C2.49005 8.66072 2.49005 7.87072 2.98005 7.38072C3.47005 6.89072 4.26005 6.89072 4.75005 7.38072L12 14.6207L19.25 7.37072C19.73 6.89072 20.5301 6.89072 21.01 7.38072Z"
              fill="white"
            />
          </svg>
        </div>
        {isOpen && (
          <div className="p-faq-dropdown">
            <p>{faq.answer}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQ;
