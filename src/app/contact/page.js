"use client";
import { useState } from "react";
import "../../../styles/contact.css";
import Loader from "../Loader";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message: " + result.message);
      }
    } catch (error) {
      setStatus("An error occurred. Please try again later.");
    }
    finally {
      setLoading(false); 
    }
  };
  return (
    <div className="contact-container">
      {loading && <Loader />}
      <div className="contact-map-section">
        <h2>
          M<span>y Lo</span>cation
        </h2>
        <p className="contact_para">
          Visit my office at the <span>heart of</span> the city. I am always{" "}
          <span>open</span> to meeting new people and <span>discussing</span>{" "}
          exciting <span>opportunities</span>.
        </p>
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.9354396548066!2d77.36561421500317!3d28.620877782419894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5490b69c6a3%3A0x1c52951542c1d54a!2sSector%2059%2C%20Noida%2C%20Uttar%20Pradesh%20201307%2C%20India!5e0!3m2!1sen!2sus!4v1692876324180!5m2!1sen!2sus"
            width="100%"
            height="350"
            allowFullScreen=""
            loading="lazy"
            title="Noida Sector 59 Location"
            style={{ border: 0 }}
          />
        </div>
      </div>
      <div className="contact-form">
        <h1>
          Cont<span>act M</span>e
        </h1>
        <p>
          Get in <span>touch</span> with me via <span>email</span> or social
          media.
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
        {status && <p>{status}</p>}
      </div>
    </div>
  );
}
