import { Link } from 'react-router-dom';

const Navbar = () => {
  const logoUrl = "https://res.cloudinary.com/dawp1fcci/image/upload/v1774695410/Expert_OpinionLogo_koc4fx.webp";

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={logoUrl} alt="Expert Opinions Online" className="h-14 w-auto object-contain" />
        </Link>

        {/* Links */}
        <div className="hidden md:flex space-x-8 items-center font-medium">
          <Link to="/" className="text-textMain hover:text-secondary transition-colors">Home</Link>
          <Link to="/about" className="text-textMain hover:text-secondary transition-colors">About</Link>
          <Link to="/services" className="text-textMain hover:text-secondary transition-colors">Services</Link>
          <Link to="/blog" className="text-textMain hover:text-secondary transition-colors">Blog</Link>
          
          {/* CTA Button */}
          <Link to="/contact" className="bg-secondary text-white px-6 py-2.5 rounded-full font-semibold hover:bg-accent transition-all shadow-lg shadow-purple-200">
            Let's Talk
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;