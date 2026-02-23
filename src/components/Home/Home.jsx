import { Link } from "react-router-dom";
import heroImg from "../../assets/Home/hero.png";

import panImg from "../../assets/services/pan-img.jpg";
import Marriage from "../../assets/services/Marriage.jpg";
import gazetteImg from "../../assets/services/gazette.png";
import residence from "../../assets/services/rahivashi.jpg";
import passImg from "../../assets/services/pass.png";
import rationImg from "../../assets/services/ration.png";
import incomeImg from "../../assets/services/income.png";
import birthImg from "../../assets/services/birth-cer.png";
import serviceImg from "../../assets/Home/service.png";
import uploadImg from "../../assets/Home/upload.png";
import deliveryImg from "../../assets/Home/delivery.png";
import visitingCard from "../../assets/Home/visiting-card.png";



export default function Home() {
    return (
        <>
            {/* ================= HERO SECTION ================= */}
            <section className="relative h-[350px] sm:h-[400px] md:h-[480px] lg:h-[520px] overflow-hidden">

                {/* FULL WIDTH IMAGE */}
                <div className="absolute inset-0">
                    <img
                        src={heroImg}
                        alt="Professional consultation"
                        className="h-full w-full object-cover object-[center_45%]"
                    />
                </div>

                {/* LEFT GRADIENT OVERLAY (smooth blend) */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0b2c6d]/95 via-[#143f8f]/80 to-transparent" />

                {/* HERO CONTENT */}
                <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6">
                    <div className="max-w-xl text-white">
                        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                            Fast & Trusted Document <br className="hidden sm:block" />
                            & Legal Services in Pune
                        </h1>

                        <p className="mt-3 md:mt-4 text-xs sm:text-sm md:text-base text-blue-100">
                            Quick, reliable and affordable assistance for PAN Card, Aadhaar,
                            Voter ID, Driving License & all document services.
                        </p>

                        <div className="mt-4 md:mt-6 flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
                            <Link
                                to="/Register"
                                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium text-center text-sm sm:text-base"
                            >
                                Get Started
                            </Link>

                            <a
                                href="https://wa.me/919876543310"
                                className="bg-green-600 hover:bg-green-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium text-center text-sm sm:text-base"
                            >
                                WhatsApp Now
                            </a>
                        </div>
                    </div>
                </div>

            </section>

            {/* ================= OUR SERVICES ================= */}
            <section className="bg-gradient-to-b from-slate-50 to-white py-12 sm:py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-8 sm:mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-2 sm:mb-3">
                            Our Services
                        </h2>
                        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto px-4">
                            Fast, reliable and affordable solutions for all your document needs
                        </p>
                    </div>

                    {/* SERVICES GRID - 2 ROWS OF 4 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
                        {[
                            {
                                title: "PAN Card (पॅन कार्ड)",
                                desc: "Apply, update, or reprint your PAN card easily.",
                                img: panImg,
                                btnColor: "bg-blue-900 hover:bg-blue-700",
                                slug: "pan"

                            },
                            {
                                title: "Marriage Certificate (लग्न प्रमाणपत्र)",
                                desc: "Apply for an official marriage certificate.",
                                img: Marriage,
                                btnColor: "bg-blue-900 hover:bg-blue-700",
                                slug: "marriage"
                            },
                            // {
                            //     title: "Voter ID",
                            //     desc: "Register or correct voter details quickly and easily.",
                            //     img: voterImg,
                            //     btnColor: "bg-blue-900 hover:bg-blue-700",
                            //     slug: "voter"
                            // },
                            {
                                title: "Residence Certificate (रहिवासी दाखला)",
                                desc: "Apply for a domicile/residence certificate ",
                                img: residence,
                                btnColor: "bg-blue-900 hover:bg-blue-700",
                                slug: "residence"
                            },
                            {
                                title: "Passport (पासपोर्ट)",
                                desc: "New passport & renewal assistance passport",
                                img: passImg,
                                btnColor: "bg-blue-900 hover:bg-blue-700",
                                slug: "passport"
                            },
                            {
                                title: "Ration Card (रेशन कार्ड)",
                                desc: "Apply or update your ration card details.",
                                img: rationImg,
                                btnColor: "bg-blue-900 hover:bg-blue-700",
                                slug: "ration-card",
                            },
                            {
                                title: "Income Certificate (उत्पन्न दाखला)",
                                desc: "Get income certificate for various purposes",
                                img: incomeImg,
                                btnColor: "bg-blue-900 hover:bg-blue-700",
                                slug: "income-certificate",
                            },
                            {
                                title: "Birth Certificate (जन्म प्रमाणपत्र)",
                                desc: "Birth certificate registration & corrections",
                                img: birthImg,
                                btnColor: "bg-blue-900 hover:bg-blue-700",
                                slug: "birth-certificate",
                            },
                            {
                                title: "Gazette Certificate (गॅझेट प्रमाणपत्र)",
                                desc: "Apply for Gazette publication for name change, correction record updates.",
                                img: gazetteImg,
                                btnColor: "bg-blue-900 hover:bg-blue-700",
                                slug: "gazette"
                            },
                        ].map((service) => (
                            <div
                                key={service.title}
                                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 hover:border-slate-300"
                            >
                                {/* IMAGE */}
                                <div className="h-40 w-full overflow-hidden bg-slate-100">
                                    <img
                                        src={service.img}
                                        alt={service.title}
                                        className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>

                                {/* CARD CONTENT */}
                                <div className="p-4 sm:p-5 flex flex-col">
                                    {/* TITLE */}
                                    <h3 className="font-bold text-base sm:text-lg text-slate-800 mb-2">
                                        {service.title.split('(').map((part, i) =>
                                            i === 0 ? part : <><br />({part}</>
                                        )}
                                    </h3>

                                    {/* DESCRIPTION */}
                                    <p className="text-xs sm:text-sm text-slate-600 mb-3 sm:mb-4 flex-grow leading-relaxed">
                                        {service.desc}
                                    </p>

                                    {/* APPLY NOW BUTTON */}
                                    <Link to={`/apply/${service.slug}`} className={`w-full ${service.btnColor} text-white text-xs sm:text-sm font-semibold py-2 sm:py-2.5 rounded-lg transition-all block text-center`}>
                                        Apply Now →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* VIEW ALL SERVICES BUTTON */}
                    <div className="text-center mt-6 sm:mt-8">
                        <a
                            href="/service"
                            className="inline-flex items-center gap-2 bg-blue-900 hover:bg-slate-800 text-white font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all text-sm sm:text-base"
                        >
                            <span>View All Services</span>
                            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>


            {/* ================= HOW IT WORKS ================= */}
            <section className="relative pt-0.1 pb-8 sm:pb-10 bg-gradient-to-br from-blue-50 via-white to-slate-50 overflow-hidden">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-20"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                    {/* Section Heading */}
                    <div className="text-center mb-8 sm:mb-12">
                        <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-semibold mb-2 sm:mb-3">
                            Simple Process
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 sm:mb-3">
                            How It Works
                        </h2>
                        <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto px-4">
                            Get your documents processed in just three simple steps. Our streamlined process ensures quick, secure, and hassle-free service delivery.
                        </p>
                    </div>

                    {/* Steps with Connecting Lines */}
                    <div className="relative">
                        {/* Connecting Line (hidden on mobile) */}
                        <div className="hidden md:block absolute top-28 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-green-200 to-yellow-200" style={{ width: '85%', margin: '0 auto' }}></div>

                        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                            {/* Step 1 */}
                            <div className="relative group">
                                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-200">
                                    {/* Step Number Badge */}
                                    <div className="absolute -top-5 sm:-top-6 left-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg z-10">
                                        1
                                    </div>

                                    {/* Image Container */}
                                    <div className="h-32 sm:h-40 flex items-center justify-center mb-3 sm:mb-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                                        <img
                                            src={serviceImg}
                                            alt="Choose Service"
                                            className="h-full w-full object-contain drop-shadow-lg"
                                        />
                                    </div>

                                    <div className="text-center">
                                        <span className="inline-block text-xs font-bold text-blue-600 tracking-wider mb-1 sm:mb-2">
                                            STEP 01
                                        </span>
                                        <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 sm:mb-3">
                                            Choose Your Service
                                        </h3>
                                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                            Browse through our comprehensive list of services including PAN Card, Aadhaar, Voter ID, Driving License, Passport, and more and proceed to the next step.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="relative group">
                                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-green-200">
                                    {/* Step Number Badge */}
                                    <div className="absolute -top-5 sm:-top-6 left-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg z-10">
                                        2
                                    </div>

                                    {/* Image Container */}
                                    <div className="h-32 sm:h-40 flex items-center justify-center mb-3 sm:mb-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                                        <img
                                            src={uploadImg}
                                            alt="Upload Documents"
                                            className="h-full w-full object-contain drop-shadow-lg"
                                        />
                                    </div>

                                    <div className="text-center">
                                        <span className="inline-block text-xs font-bold text-green-600 tracking-wider mb-1 sm:mb-2">
                                            STEP 02
                                        </span>
                                        <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 sm:mb-3">
                                            Upload Documents
                                        </h3>
                                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                            Securely upload all required documents through our encrypted platform. Our expert team will carefully verify each document for accuracy and completeness before processing your application.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="relative group">
                                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-yellow-200">
                                    {/* Step Number Badge */}
                                    <div className="absolute -top-5 sm:-top-6 left-1/2 -translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg z-10">
                                        3
                                    </div>

                                    {/* Image Container */}
                                    <div className="h-32 sm:h-40 flex items-center justify-center mb-3 sm:mb-4 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl sm:rounded-2xl p-3 sm:p-4">
                                        <img
                                            src={deliveryImg}
                                            alt="Get Updates"
                                            className="h-full w-full object-contain drop-shadow-lg"
                                        />
                                    </div>

                                    <div className="text-center">
                                        <span className="inline-block text-xs font-bold text-yellow-600 tracking-wider mb-1 sm:mb-2">
                                            STEP 03
                                        </span>
                                        <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 sm:mb-3">
                                            Get Update & Delivery
                                        </h3>
                                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                            Track your application status in real-time through our portal. Receive instant notifications at every stage. Once processed, get your documents delivered safely to your doorstep or download them digitally.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center mt-8 sm:mt-10">
                        <p className="text-slate-600 mb-3 sm:mb-4 text-xs sm:text-sm md:text-base px-4">Ready to get started with your documentation?</p>
                        <Link to="/service" className="inline-flex items-center gap-2 bg-blue-900 hover:bg-slate-800 text-white font-semibold px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg shadow-lg hover:shadow-xl transition-all text-sm sm:text-base">
                            Start Your Application →
                        </Link>
                    </div>
                </div>
            </section>

           {/* ================= CONTACT ================= */}
<section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 overflow-hidden">

    {/* Decorative Background Elements */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-30"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Title */}
        <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                Get In Touch
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 sm:mb-3">
                Contact Us
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto px-4">
                Get in touch with us for any queries or assistance with your documentation needs
            </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">

            {/* LEFT CARD - Visiting Card */}
            <div className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all border border-slate-200 overflow-hidden">
                <img
                    src={visitingCard}
                    alt="Shree Om Sai Multi Services Visiting Card"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* RIGHT CARD */}
            <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transition-all p-6 sm:p-8 border border-slate-200">

                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center shadow-lg">
                        <i className="fa-solid fa-building text-base sm:text-lg"></i>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                        Branch Office
                    </h3>
                </div>

                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">

                    <div className="flex items-start gap-2 sm:gap-3">
                        <i className="fa-solid fa-location-dot text-blue-600 text-base sm:text-lg mt-1"></i>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            Shop No 6 ,Dagade Patil Complex,<br />
                            Karle Chowk,Nanded City, Pune
                        </p>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3">
                        <i className="fa-solid fa-phone text-yellow-600 text-base sm:text-lg"></i>
                        <a
                            href="tel:+919876543310"
                            className="font-semibold text-sm sm:text-base text-slate-700 hover:text-green-600 transition"
                        >
                            +91 8668266879
                        </a>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3">
                        <i className="fa-solid fa-clock text-blue-600 text-base sm:text-lg"></i>
                        <p className="text-xs sm:text-sm text-slate-600 font-medium">
                            Mon - Sat: 9:00 AM - 7:00 PM
                        </p>
                    </div>

                </div>

                <div className="flex gap-2 sm:gap-3">

                    <a
                        href="tel:+918668266879"
                        className="flex-1 flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-xl border-2 border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition text-xs sm:text-sm"
                    >
                        <i className="fa-solid fa-phone text-xs sm:text-sm"></i>
                        Call Now
                    </a>

                    <Link
                        to="/contact"
                        className="flex-1 flex items-center justify-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-xl bg-gradient-to-r from-blue-900 to-blue-900 hover:from-blue-600 hover:to-blue-700 text-white font-semibold transition shadow-lg text-xs sm:text-sm"
                    >
                        Contact Us
                    </Link>

                </div>

            </div>

        </div>

    </div>

</section>


    {/* ================= FLOATING WHATSAPP ================= */}
<a
    href="https://wa.me/918668266879"
    className="fixed bottom-6 right-6 h-16 w-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white flex items-center justify-center shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 z-50 group"
    title="Chat on WhatsApp"
>
    <i className="fa-brands fa-whatsapp text-3xl group-hover:scale-110 transition-transform"></i>
    <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full animate-pulse"></span>
</a>
</>
    );
}
