import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ maxWidth: 500, margin: "2rem auto", padding: "1rem" }}>
      <h2 style={{ textAlign: "center" }}>Contact Us</h2>
      <p style={{ textAlign: "center" }}>
        For inquiries, please email us at <a href="mailto:info@furnishop.com">info@furnishop.com</a> or use the form below.
      </p>
      {submitted ? (
        <div style={{ textAlign: "center", color: "#2563eb" }}>
          <h3>Thank you for contacting us!</h3>
          <p>We will get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            style={{ padding: "0.75em", borderRadius: 8, border: "1px solid #cbd5e1" }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            style={{ padding: "0.75em", borderRadius: 8, border: "1px solid #cbd5e1" }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={4}
            style={{ padding: "0.75em", borderRadius: 8, border: "1px solid #cbd5e1" }}
          />
          <button type="submit" style={{ background: "#2563eb", color: "#fff", border: "none", borderRadius: 8, padding: "0.75em", fontSize: "1em", cursor: "pointer" }}>
            Send Message
          </button>
        </form>
      )}
      <div style={{ marginTop: "2rem", textAlign: "center", color: "#64748b" }}>
        <p>FurniShop Inc.<br />123 Modern Ave, Suite 100<br />Cityville, Country</p>
        <p>Phone: (123) 456-7890</p>
      </div>
    </div>
  );
};

export default Contact;
