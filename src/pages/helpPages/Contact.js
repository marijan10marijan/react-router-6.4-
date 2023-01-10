const Contact = () => {
    return (
        <div className="contact container">
            <h2>Contact Us</h2>
            <form className="form">
                <div>
                    <label htmlFor="first_name">First Name:</label>
                    <input id="first_name" type="text" placeholder="Johnny" />
                </div>
                <div>
                    <label htmlFor="last_name">Last Name:</label>
                    <input id="last_name" type="text" placeholder="Crawitz" />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input id="email" type="email" placeholder="johhny.crawitz@gmail.com" />
                </div>
                <div>
                    <label htmlFor="text">Add Comment</label>
                    <textarea name="text" id="text" placeholder="..."></textarea>
                </div>

                <button>Submit</button>
            </form>
        </div>
    );
}

export default Contact;