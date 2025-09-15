export default function AboutUs() {
 return (
    <section
      id="about"
      className="w-full flex items-center justify-center py-16 bg-slate-700"
    >
      <div className="flex flex-col items-center justify-center text-center w-[80%] max-w-4xl">
        <h2 className="text-center text-4xl font-bold pb-6 text-white">
          About Us
        </h2>
        <p className="mb-4 text-lg leading-relaxed text-gray-100">
          At <span className="font-semibold text-white">nProbFix Construction</span>, we
          are more than just builders — we are a{" "}
          <span className="font-semibold text-white">family-owned company</span> with over
          one decade of experience in the Sydney construction industry. Founded
          in 2006 by Mr. Ljupco Latinoski and now continued by
          his sons Nikola & Dejan Latinoski, our company has built a reputation for
          delivering high-quality craftsmanship with a personal touch.
        </p>
        <p className="mb-4 text-lg leading-relaxed text-gray-100">
          Our skilled team specialises in a wide range of services, including{" "}
          <span className="font-semibold text-white">
            renovations, G-prock, tiling, painting, waterproofing, plumbing, carpentry,
            concreting, bricklaying, landscaping
          </span>{" "}
          and more. From small household improvements to large-scale commercial
          projects, there’s no job too big or small for us.
        </p>
        <p className="text-lg leading-relaxed text-gray-100">
          Whether you need{" "}
          <span className="font-semibold text-white">
            small repairs, full renovations, or commercial construction
          </span>
          , nProbFix Construction is here to help. For inquiries, quotes, or
          consultation, please{" "}
          <a
            href="/contact"
            className="underline text-teal-300 hover:text-teal-200"
          >
            contact us today
          </a>
          .
        </p>
      </div>
    </section>
  );
}
