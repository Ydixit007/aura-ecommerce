import { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Email:", email);
    // Reset the form
    setEmail("");
  };
  return (
    <div className="container-custom bg-secondary flex justify-center items-center py-20">
      <div className="max-w-3xl mx-auto text-center justify-center">
        <h1 className="text-4xl font-black mb-6 ">
          JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO
        </h1>
        <p className="mb-8">
          Type your email down below and be young wild generation
        </p>
        <form onSubmit={handleSubmit} className="flex justify-center p-2 bg-white max-w-fit mx-auto rounded-md">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Add your email here"
            className="py-2 px-4 rounded-l-md focus:outline-none"
          />
          <button
            type="submit"
            className="bg-black text-white py-2 px-4 rounded-md"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterSection;
