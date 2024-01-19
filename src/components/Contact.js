const Contact = () => {
    return (
    <div className = "min-h-screen">
        <h1 className ="font-bold text-2xl p-4 m-4">Contact Page</h1>
        <form>
            <input className="border border-black  m-4 rounded-md" placeholder="name"/>
            <input className="border border-black  m-4 rounded-md" placeholder="message"/>
            <button className="bg-black text-white rounded-md">Submit</button>
        </form>
    </div>);
}

export default Contact;