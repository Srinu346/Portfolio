import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import { useState, useEffect } from "react";

const navItems = [
	{ name: "Home", href: "#home" },
	{ name: "About", href: "#about" },
	{ name: "Skills", href: "#skills" },
	{ name: "Projects", href: "#projects" },
	{ name: "Contact", href: "#contact" },
];

export const NavBar = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			setIsScrolled(scrollTop > 10);
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={cn(
				"fixed w-full z-40 transition-all duration-300",
				isScrolled
					? "py-3 bgbackground/80 backdrop-blur-none shadow-xs"
					: "py-5"
			)}
		>
			<div className="container flex justify-between items-center">
				<a className="font-bold text-xl flex items-center text-primary">
					<span className="z-10 relative">
						<span className="text-glow text-foreground">
							{" "}
							Akella Srinivas
						</span>{" "}
						Portfolio
					</span>
				</a>

				{/* Desktop Navigation */}
				<div className="hidden md:flex space-x-8">
					{navItems.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className="text-foreground/80 hover:text-primary transition-colors duration-300"
						>
							{item.name}
						</a>
					))}
				</div>

				{/* Mobile Navigation Button */}
				<button
					className="md:hidden p-2 text-foreground z-50"
					onClick={() => setIsMobileMenuOpen((prev) => !prev)}
					aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
				>
					{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			{/* Mobile Navigation Menu */}
			<div
				className={cn(
					"fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
					"transition-all duration-300 md:hidden",
					isMobileMenuOpen
						? "opacity-100 pointer-events-auto"
						: "opacity-0 pointer-events-none"
				)}
			>
				<div className="text-xl flex space-y-8 flex-col">
					{navItems.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className="text-foreground/80 hover:text-primary transition-colors duration-300"
						>
							{item.name}
						</a>
					))}
				</div>
			</div>
		</nav>
	);
};