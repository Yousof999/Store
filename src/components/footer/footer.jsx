import { Link } from "react-router-dom";
import './footer.css'

export default function Footer() {
	return (
		<footer className="site-footer">
			<div className="container footer-main">
				<div className="footer-brand">
					<Link to="/" className="footer-logo"><span>O</span>rdinary<br /><i>objects.</i></Link>
					<p>Useful things, thoughtfully gathered.</p>
				</div>
				<div className="footer-column">
					<p className="footer-label">Explore</p>
					<Link to="/">All products</Link>
					<Link to="/category/laptops">Tech</Link>
					<Link to="/category/furniture">Home</Link>
					<Link to="/category/beauty">Beauty</Link>
				</div>
				<div className="footer-note">
					<p className="footer-label">A little note</p>
					<p>We believe the things around us should earn their place.</p>
				</div>
			</div>
			<div className="container footer-bottom">
				<span>© 2026 Ordinary objects.</span>
				<span>Made for everyday living</span>
			</div>
		</footer>
	)
}
