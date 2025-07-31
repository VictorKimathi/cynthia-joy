import React, { useState } from 'react';
export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you'd send the form data to a backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    // Reset the success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };
  return <form onSubmit={handleSubmit} className="space-y-6">
      {isSubmitted && <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded">
          Thank you for your message! I'll get back to you soon.
        </div>}
      <div>
        <label htmlFor="name" className="block mb-2 font-medium">
          Name
        </label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0033CC]" />
      </div>
      <div>
        <label htmlFor="email" className="block mb-2 font-medium">
          Email
        </label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0033CC]" />
      </div>
      <div>
        <label htmlFor="message" className="block mb-2 font-medium">
          Message
        </label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0033CC]"></textarea>
      </div>
      <button type="submit" className="bg-[#0033CC] text-white px-6 py-3 rounded hover:bg-[#002299] transition-colors">
        Send Message
      </button>
    </form>;
}