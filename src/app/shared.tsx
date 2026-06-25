import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { motion } from "motion/react";
import {
	Sun,
	Battery,
	Droplets,
	Lightbulb,
	Wrench,
	Shield,
	Phone,
	Mail,
	MapPin,
	Menu,
	X,
	Star,
	ArrowRight,
	Zap,
	Leaf,
	Clock,
	CheckCircle,
	ChevronDown,
	Facebook,
	Twitter,
	Instagram,
	Linkedin,
	Globe,
	Thermometer,
} from "lucide-react";

// ─── Brand ───────────────────────────────────────────────────────────────────
export const B = {
	primary: "#006680",
	secondary: "#5D8D93",
	accent: "#7ABD14",
	dark: "#1A1A1A",
	body: "#636666",
	soft: "#F6F9FA",
};

// ─── Data ─────────────────────────────────────────────────────────────────────
export const HERO_SLIDES = [
	{
		img: "https://images.unsplash.com/photo-1668097613572-40b7c11c8727?w=1920&h=1080&fit=crop&auto=format",
		alt: "Solar technician at work",
	},
	{
		img: "https://images.unsplash.com/photo-1761472823286-9f6093ed6663?w=1920&h=1080&fit=crop&auto=format",
		alt: "Residential solar installation",
	},
	{
		img: "https://images.unsplash.com/photo-1660330589257-813305a4a383?w=1920&h=1080&fit=crop&auto=format",
		alt: "Solar installer on rooftop",
	},
];

export const SOLUTIONS = [
	{
		title: "Solar Backup Systems",
		desc: "Reliable battery storage and hybrid inverter solutions keeping homes and businesses powered around the clock.",
		icon: Battery,
		img: "https://res.cloudinary.com/dk6iocewt/image/upload/v1782366272/Solar_Backup_Systems_tvsbpf.jpg",
	},
	{
		title: "Solar Water Pumps",
		desc: "High-efficiency solar-powered pumping for agriculture, irrigation, livestock and community water supply.",
		icon: Droplets,
		img: "https://images.unsplash.com/photo-1764697761858-e126b8c7aaa6?w=600&h=400&fit=crop&auto=format",
	},
	{
		title: "Solar Water Heating",
		desc: "Premium solar thermal collectors delivering reliable hot water for residential and commercial facilities.",
		icon: Thermometer,
		img: "https://res.cloudinary.com/dk6iocewt/image/upload/v1782365213/solar_water_heater_jmn6g5.jpg",
	},
	{
		title: "Solar Street Lights",
		desc: "Intelligent all-in-one LED street lights with built-in panels, batteries and automatic dusk-to-dawn control.",
		icon: Lightbulb,
		img: "https://res.cloudinary.com/dk6iocewt/image/upload/v1782366748/street_light_nlee4r.jpg",
	},
	{
		title: "Design & Installation",
		desc: "End-to-end site survey, precision engineering, professional installation and commissioning across Kenya.",
		icon: Wrench,
		img: "https://images.unsplash.com/photo-1668097613572-40b7c11c8727?w=600&h=400&fit=crop&auto=format",
	},
	{
		title: "Solar Accessories",
		desc: "Complete range of mounting structures, cables, charge controllers and system monitoring equipment.",
		icon: Sun,
		img: "https://res.cloudinary.com/dk6iocewt/image/upload/v1782366906/Charge_Controllers_d1niew.jpg",
	},
];

export const PRODUCTS = [
	{
		name: "Solar Panels",
		spec: "50W – 550W, Mono PERC",
		tag: "High Efficiency",
		icon: Sun,
		category: "Residential",
		img: "https://res.cloudinary.com/dk6iocewt/image/upload/v1782365213/solar-panels-summer_rrbni0.jpg",
	},
	{
		name: "Lithium Batteries",
		spec: "100Ah – 500Ah, LiFePO4",
		tag: "Long Cycle Life",
		icon: Battery,
		category: "Residential",
		img: "https://res.cloudinary.com/dk6iocewt/image/upload/v1782365212/15kWh-lithium-ion-battery_aml4ls.jpg",
	},
	{
		name: "Hybrid Inverters",
		spec: "1kVA – 20kVA, 48V",
		tag: "Grid-Ready",
		icon: Zap,
		category: "Commercial",
		img: "https://res.cloudinary.com/dk6iocewt/image/upload/v1782365214/inverter_xiyrgu.png",
	},
	{
		name: "Solar Pumps",
		spec: "0.5HP – 15HP, DC/AC",
		tag: "Agricultural Grade",
		icon: Droplets,
		category: "Agricultural",
		img: "https://images.unsplash.com/photo-1700318092011-6e4666e94ab5?w=600&h=380&fit=crop&auto=format",
	},
	{
		name: "Street Lights",
		spec: "20W – 200W, All-in-One",
		tag: "Smart Control",
		icon: Lightbulb,
		category: "Commercial",
		img: "https://res.cloudinary.com/dk6iocewt/image/upload/v1782366748/street_light_nlee4r.jpg",
	},
	{
		name: "Charge Controllers",
		spec: "20A – 100A, MPPT/PWM",
		tag: "Maximum Yield",
		icon: Shield,
		category: "Accessories",
		img: "https://res.cloudinary.com/dk6iocewt/image/upload/v1782366906/Charge_Controllers_d1niew.jpg",
	},
	{
		name: "Mounting Systems",
		spec: "Rooftop, Ground, Adjustable",
		tag: "Heavy Duty",
		icon: Wrench,
		category: "Accessories",
		img: "https://res.cloudinary.com/dk6iocewt/image/upload/v1782365213/ground-mount_qzxvnk.jpg",
	},
	{
		name: "Commercial Panels",
		spec: "400W – 700W, Bifacial",
		tag: "Commercial Grade",
		icon: Sun,
		category: "Commercial",
		img: "https://res.cloudinary.com/dk6iocewt/image/upload/v1782367131/Commercial_Panels_nbc7zo.jpg",
	},
	{
		name: "Agri Battery Pack",
		spec: "200Ah – 800Ah, LiFePO4",
		tag: "Field Ready",
		icon: Battery,
		category: "Agricultural",
		img: "https://res.cloudinary.com/dk6iocewt/image/upload/v1782365214/Agri_Battery_Pack_eylwd5.jpg",
	},
];

export const TESTIMONIALS = [
	{
		name: "James Mwangi",
		role: "Farm Owner, Nakuru",
		rating: 5,
		text: "Pekims installed a solar water pump on our 10-acre farm. Water output doubled and we eliminated fuel costs entirely. Best investment we have made in years.",
	},
	{
		name: "Sarah Otieno",
		role: "Homeowner, Nairobi",
		rating: 5,
		text: "Our electricity bill dropped from KES 12,000 to almost zero. The installation team was professional, fast and extremely knowledgeable.",
	},
	{
		name: "Michael Kamau",
		role: "Hotel Manager, Mombasa",
		rating: 5,
		text: "Pekims designed a complete solar backup system for our 40-room hotel. We no longer suffer from power interruptions during load shedding.",
	},
	{
		name: "Grace Wanjiku",
		role: "School Principal, Kiambu",
		rating: 5,
		text: "The solar street lighting project transformed our school compound. Students feel safer and the quality of illumination is excellent.",
	},
];

export const PARTNERS = [
	"SUOER",
	"RIIOSUN",
	"HOBER",
	"Blue Carbon",
	"Entelechy",
	"East African Cables",
];

export const PROJECTS = [
	{
		img: "https://images.unsplash.com/photo-1726866492047-7f9516558c6e?w=400&h=480&fit=crop&auto=format",
		title: "Kisumu Commercial Complex",
		tag: "Commercial",
		location: "Kisumu",
		kw: "80 kW",
	},
	{
		img: "https://images.unsplash.com/photo-1761472823286-9f6093ed6663?w=400&h=280&fit=crop&auto=format",
		title: "Nairobi Residential Estate",
		tag: "Residential",
		location: "Nairobi",
		kw: "15 kW",
	},
	{
		img: "https://images.unsplash.com/photo-1764697761858-e126b8c7aaa6?w=400&h=340&fit=crop&auto=format",
		title: "Laikipia Farm Pump System",
		tag: "Agricultural",
		location: "Laikipia",
		kw: "7.5 HP",
	},
	{
		img: "https://images.unsplash.com/photo-1642145869636-a39a357b6e4b?w=400&h=400&fit=crop&auto=format",
		title: "Mombasa Road Street Lighting",
		tag: "Street Lighting",
		location: "Nairobi",
		kw: "60 units",
	},
	{
		img: "https://images.unsplash.com/photo-1780445392528-4895da4b2cb8?w=400&h=290&fit=crop&auto=format",
		title: "Nakuru Water Heating",
		tag: "Water Heating",
		location: "Nakuru",
		kw: "200 L/day",
	},
	{
		img: "https://images.unsplash.com/photo-1660330589257-813305a4a383?w=400&h=440&fit=crop&auto=format",
		title: "Karen Office Complex",
		tag: "Commercial",
		location: "Nairobi",
		kw: "120 kW",
	},
	{
		img: "https://images.unsplash.com/photo-1726795867801-63c0a37b80c6?w=400&h=360&fit=crop&auto=format",
		title: "Eldoret Solar Farm",
		tag: "Commercial",
		location: "Eldoret",
		kw: "500 kW",
	},
	{
		img: "https://images.unsplash.com/photo-1620492948585-c97e18c173dc?w=400&h=300&fit=crop&auto=format",
		title: "Kisii Residential Cluster",
		tag: "Residential",
		location: "Kisii",
		kw: "25 kW",
	},
];

// ─── Hooks ────────────────────────────────────────────────────────────────────
export function useScrollY() {
	const [y, setY] = useState(0);
	useEffect(() => {
		const fn = () => setY(window.scrollY);
		window.addEventListener("scroll", fn, { passive: true });
		return () => window.removeEventListener("scroll", fn);
	}, []);
	return y;
}

export function useInViewOnce() {
	const ref = useRef<HTMLDivElement>(null);
	const [inView, setInView] = useState(false);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const obs = new IntersectionObserver(
			([e]) => {
				if (e.isIntersecting) {
					setInView(true);
					obs.disconnect();
				}
			},
			{ threshold: 0.12 },
		);
		obs.observe(el);
		return () => obs.disconnect();
	}, []);
	return [ref, inView] as const;
}

export function CountUp({
	end,
	suffix = "",
}: {
	end: number;
	suffix?: string;
}) {
	const [ref, inView] = useInViewOnce();
	const [count, setCount] = useState(0);
	useEffect(() => {
		if (!inView) return;
		let cur = 0;
		const step = end / 60;
		const t = setInterval(() => {
			cur += step;
			if (cur >= end) {
				setCount(end);
				clearInterval(t);
			} else setCount(Math.floor(cur));
		}, 20);
		return () => clearInterval(t);
	}, [inView, end]);
	return (
		<span ref={ref}>
			{count.toLocaleString()}
			{suffix}
		</span>
	);
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
const NAV_LINKS = [
	{ label: "Home", path: "/" },
	{ label: "Solutions", path: "/solutions" },
	{ label: "Products", path: "/products" },
	{ label: "Projects", path: "/projects" },
	{ label: "About", path: "/about" },
	{ label: "Resources", path: "/resources" },
	{ label: "Contact", path: "/contact" },
];

export function Navbar() {
	const [open, setOpen] = useState(false);
	const location = useLocation();
	const isHome = location.pathname === "/";
	const scrollY = useScrollY();
	const scrolled = scrollY > 80;
	const transparent = isHome && !scrolled;

	return (
		<nav
			className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
			style={{
				background: transparent ? "transparent" : "rgba(255,255,255,0.97)",
				backdropFilter: transparent ? "none" : "blur(12px)",
				boxShadow: transparent ? "none" : "0 2px 20px rgba(0,0,0,0.08)",
			}}>
			<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
				<Link to="/" className="flex items-center gap-2">
					<img
						src="https://res.cloudinary.com/dk6iocewt/image/upload/v1782365324/logo_ut8t14.png"
						alt="Pekims Technologies Logo"
						className="h-12 w-auto object-contain"
						style={{ filter: transparent ? "brightness(0) invert(1)" : "none" }}
					/>
				</Link>

				<div className="hidden lg:flex items-center gap-6">
					{NAV_LINKS.map(({ label, path }) => (
						<NavLink
							key={path}
							to={path}
							className="text-sm font-medium transition-opacity hover:opacity-60"
							style={({ isActive }) => ({
								color: transparent ? "#fff" : B.dark,
								fontFamily: "'Inter', sans-serif",
								opacity: isActive && !transparent ? 1 : undefined,
								borderBottom:
									isActive && !transparent
										? `2px solid ${B.accent}`
										: "2px solid transparent",
								paddingBottom: "2px",
							})}>
							{label}
						</NavLink>
					))}
					<Link
						to="/contact"
						className="px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg"
						style={{
							background: B.accent,
							fontFamily: "'Poppins', sans-serif",
						}}>
						Free Consultation
					</Link>
				</div>

				<button
					onClick={() => setOpen(!open)}
					className="lg:hidden p-2"
					style={{ color: transparent ? "#fff" : B.dark }}>
					{open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
				</button>
			</div>

			{open && (
				<div
					className="lg:hidden bg-white border-t px-6 py-4 shadow-xl"
					style={{ borderColor: "rgba(0,0,0,0.06)" }}>
					{NAV_LINKS.map(({ label, path }) => (
						<NavLink
							key={path}
							to={path}
							onClick={() => setOpen(false)}
							className="block py-3 text-sm font-medium border-b"
							style={{
								color: B.dark,
								fontFamily: "'Inter', sans-serif",
								borderColor: "rgba(0,0,0,0.05)",
							}}>
							{label}
						</NavLink>
					))}
					<Link
						to="/contact"
						onClick={() => setOpen(false)}
						className="block mt-4 w-full py-3.5 rounded-full text-sm font-semibold text-white text-center"
						style={{
							background: B.accent,
							fontFamily: "'Poppins', sans-serif",
						}}>
						Free Consultation
					</Link>
				</div>
			)}
		</nav>
	);
}

// ─── PageHero ─────────────────────────────────────────────────────────────────
export function PageHero({
	title,
	subtitle,
	img,
	breadcrumb,
}: {
	title: string;
	subtitle?: string;
	img: string;
	breadcrumb?: string;
}) {
	return (
		<div className="relative h-72 md:h-96 flex items-center overflow-hidden pt-16">
			<img
				src={img}
				alt={title}
				className="absolute inset-0 w-full h-full object-cover"
			/>
			<div
				className="absolute inset-0"
				style={{
					background:
						"linear-gradient(120deg, rgba(0,102,128,0.92) 0%, rgba(0,0,0,0.72) 100%)",
				}}
			/>
			<div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
				{breadcrumb && (
					<div
						className="flex items-center gap-2 mb-4 text-sm"
						style={{ fontFamily: "'Inter', sans-serif" }}>
						<Link
							to="/"
							className="text-white/50 hover:text-white transition-colors">
							Home
						</Link>
						<span className="text-white/30">/</span>
						<span style={{ color: B.accent }}>{breadcrumb}</span>
					</div>
				)}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}>
					<h1
						className="text-white font-bold mb-3"
						style={{
							fontFamily: "'Poppins', sans-serif",
							fontSize: "clamp(2rem, 4vw, 3.5rem)",
						}}>
						{title}
					</h1>
					{subtitle && (
						<p
							className="text-white/70 max-w-xl"
							style={{
								fontFamily: "'Inter', sans-serif",
								fontSize: "1.05rem",
							}}>
							{subtitle}
						</p>
					)}
				</motion.div>
			</div>
		</div>
	);
}

// ─── Footer ───────────────────────────────────────────────────────────────────
export function Footer() {
	const solutionLinks = [
		"Solar Backup Systems",
		"Solar Water Pumps",
		"Solar Water Heating",
		"Solar Street Lights",
		"Design & Installation",
		"Solar Accessories",
	];
	const companyLinks = [
		{ label: "About Us", path: "/about" },
		{ label: "Our Projects", path: "/projects" },
		{ label: "Partners", path: "/partners" },
		{ label: "Resources", path: "/resources" },
		{ label: "Contact", path: "/contact" },
	];

	return (
		<footer style={{ background: "#000", color: "#fff" }}>
			<div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
					<div>
						<Link to="/" className="inline-block mb-5">
							<img
								src="https://res.cloudinary.com/dk6iocewt/image/upload/v1782365324/logo_ut8t14.png"
								alt="Pekims Technologies Logo"
								className="h-12 w-auto object-contain"
								style={{ filter: "brightness(0) invert(1)" }}
							/>
						</Link>
						<p
							className="text-sm leading-relaxed mb-6"
							style={{
								color: "rgba(255,255,255,0.45)",
								fontFamily: "'Inter', sans-serif",
							}}>
							Kenya&apos;s trusted renewable energy company delivering
							innovative solar solutions since 2017.
						</p>
						<div className="flex gap-3">
							{[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
								<a
									key={i}
									href="#"
									className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
									style={{ background: "rgba(255,255,255,0.09)" }}>
									<Icon className="w-4 h-4 text-white" />
								</a>
							))}
						</div>
					</div>

					<div>
						<h4
							className="font-semibold mb-5 text-sm"
							style={{ fontFamily: "'Poppins', sans-serif" }}>
							Solutions
						</h4>
						<ul className="space-y-3">
							{solutionLinks.map((s) => (
								<li key={s}>
									<Link
										to="/solutions"
										className="text-sm transition-colors hover:text-white"
										style={{
											color: "rgba(255,255,255,0.45)",
											fontFamily: "'Inter', sans-serif",
										}}>
										{s}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4
							className="font-semibold mb-5 text-sm"
							style={{ fontFamily: "'Poppins', sans-serif" }}>
							Company
						</h4>
						<ul className="space-y-3">
							{companyLinks.map(({ label, path }) => (
								<li key={label}>
									<Link
										to={path}
										className="text-sm transition-colors hover:text-white"
										style={{
											color: "rgba(255,255,255,0.45)",
											fontFamily: "'Inter', sans-serif",
										}}>
										{label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h4
							className="font-semibold mb-5 text-sm"
							style={{ fontFamily: "'Poppins', sans-serif" }}>
							Contact Us
						</h4>
						<div className="space-y-4 mb-7">
							{[
								{ icon: MapPin, text: "Nyamakima House, Duruma Rd, Nairobi" },
								{ icon: Phone, text: "0713 910 900 / 0748 034 558" },
								{ icon: Mail, text: "info@pekims.co.ke" },
							].map(({ icon: Icon, text }) => (
								<div key={text} className="flex items-start gap-3">
									<Icon
										className="w-4 h-4 mt-0.5 flex-shrink-0"
										style={{ color: B.accent }}
									/>
									<span
										className="text-sm"
										style={{
											color: "rgba(255,255,255,0.45)",
											fontFamily: "'Inter', sans-serif",
										}}>
										{text}
									</span>
								</div>
							))}
						</div>
						<p
							className="text-sm font-medium mb-3"
							style={{ fontFamily: "'Poppins', sans-serif" }}>
							Stay Updated
						</p>
						<div className="flex rounded-xl overflow-hidden">
							<input
								type="email"
								placeholder="Your email address"
								className="flex-1 px-4 py-2.5 text-sm outline-none"
								style={{
									background: "rgba(255,255,255,0.09)",
									color: "#fff",
									fontFamily: "'Inter', sans-serif",
								}}
							/>
							<button
								className="px-4 flex items-center justify-center"
								style={{ background: B.primary }}>
								<ArrowRight className="w-4 h-4 text-white" />
							</button>
						</div>
					</div>
				</div>

				<div
					className="pt-7 border-t flex flex-col md:flex-row items-center justify-between gap-4"
					style={{ borderColor: "rgba(255,255,255,0.08)" }}>
					<p
						className="text-sm"
						style={{
							color: "rgba(255,255,255,0.3)",
							fontFamily: "'Inter', sans-serif",
						}}>
						© {new Date().getFullYear()} Pekims Technologies Ltd. All rights
						reserved.
					</p>
					<div className="flex gap-6">
						{["Privacy Policy", "Terms of Service"].map((l) => (
							<a
								key={l}
								href="#"
								className="text-xs transition-colors hover:text-white"
								style={{
									color: "rgba(255,255,255,0.3)",
									fontFamily: "'Inter', sans-serif",
								}}>
								{l}
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
