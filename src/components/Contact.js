

const Contact = () => {
    return (
      <div className="min-h-screen bg-gradient-to-t to-black from-slate-600">
        <h1 className="font-bold text-2xl p-4 text-white">Contact Page</h1>
        <form
          className="border-2 border-white m-1 rounded-lg "
          method="POST"
          action="https://getform.io/f/aab1d022-2e65-4ef7-be4b-2ad85f569284"
        >
          <div className="flex flex-col ">
            <input
              className="border border-black  m-4 rounded-md p-3"
              placeholder="Enter your Name..."
              name="name"
            />
            <input
              className="border border-black  m-4 rounded-md p-3"
              placeholder="Enter your Message..."
              name="message"
            />
            <input
              className="border border-black  m-4 rounded-md p-3"
              placeholder="Enter your Email..."
              name="email"
            />
          </div>
          <div className="flex justify-center">
            
              <button className="bg-white text-black rounded-md py-2 px-4 ">
                Submit
              </button>
          
          </div>
        </form>
      </div>
    );
}

export default Contact;