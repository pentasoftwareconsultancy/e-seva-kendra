const services = [
  {
    title: "PAN Card Services",
    desc: "Apply / Update PAN Card",
    img: "/servicepage_img/pan-card.webp",
  },
  {
    title: "Aadhaar Services",
    desc: "Aadhar Card Application / Update",
    img: "/servicepage_img/adhar.webp",
  },
  {
    title: "Certificate Services",
    desc: "Birth, Income, Caste Certificates",
    img: "/servicepage_img/driver.jpg",
  },
];

export default function ServicePage() {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* HERO SECTION WITHOUT BLUR OR OVERLAY */}
      <div
        className="text-white px-6 py-20 md:px-16 bg-cover bg-center"
        style={{
          backgroundImage: "url('/servicepage_img/top-img.png')",
        }}
      >
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h1>

          <p className="text-lg md:text-xl max-w-2xl">
            Fast, Reliable & Affordable Document Solutions <br />
            For All Your Government and Legal Needs.
          </p>
        </div>
      </div>

      {/* SERVICES SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-12">

        <h2 className="text-3xl font-semibold text-center text-gray-800">
          Our Services
        </h2>

        <p className="text-center text-gray-500 mt-2 mb-10">
          Comprehensive support for all your documentation needs
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-20 h-20 object-contain mb-4"
              />

              <h3 className="font-semibold text-lg text-gray-800">
                {service.title}
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                {service.desc}
              </p>

              <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-medium">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
