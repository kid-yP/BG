const Contact = () => {
    return (
      <div className="text-white container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <div className="max-w-md">
          <form className="space-y-4">
            <div>
              <label className="block mb-1">Name</label>
              <input type="text" className="w-full bg-gray-700 rounded px-4 py-2" />
            </div>
            <div>
              <label className="block mb-1">Email</label>
              <input type="email" className="w-full bg-gray-700 rounded px-4 py-2" />
            </div>
            <div>
              <label className="block mb-1">Message</label>
              <textarea rows="4" className="w-full bg-gray-700 rounded px-4 py-2"></textarea>
            </div>
            <button 
              type="submit"
              className="bg-primary hover:bg-secondary px-6 py-2 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Contact;