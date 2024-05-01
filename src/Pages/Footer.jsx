

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-300 py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="footer-section">
                        <h3 className="text-lg font-semibold mb-4">About Us</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at velit eget ante ullamcorper tristique.</p>
                    </div>
                    <div className="footer-section">
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <p>Email: info@example.com</p>
                        <p>Phone: +123-456-7890</p>
                    </div>
                    <div className="footer-section">
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-white">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                    <div className="footer-section">
                        <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                        <p>Subscribe to our newsletter to receive updates and special offers.</p>
                        <form className="mt-4">
                            <input type="email" className="bg-gray-700 text-gray-100 px-4 py-2 rounded-md" placeholder="Enter your email" />
                            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md ml-2">Subscribe</button>
                        </form>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <p>&copy; 2024 Mintie Art and Craft. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;