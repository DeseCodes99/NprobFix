export default function Footer() {
  return (
    <div>
      <div className="social flex max-md:flex-col max-md:items-start max-md:pl-6 max-md:flex-col max-md:items-center max-md:w-full  h-full justify-evenly items-center pb-4   text-white">
        <ul className="max-md:pb-6">
          <h2 className="text-2xl">Social Media:</h2>
          <li className=" underline">
            <a
              href="https://www.facebook.com/mmmmmmwyx"
              target="_blank"
              className="pr-2"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/dejanlatinoski/?next=%2F"
              target="_blank"
              className="pr-2 underline"
            >
              Instagram
            </a>
          </li>
          <li>
            <a href="" className="pr-2  pointer-events-none">
              Twitter - comning soon
            </a>
          </li>
        </ul>
        <ul>
          <h2 className="text-2xl">Contact Information:</h2>
          <li>
            Phone:{" "}
            <a href="tel:+61 403 041 037" className="underline">
              +61 403 041 037
            </a>
          </li>
          <li>
            Email:{" "}
            <a href="mailto:nProbFix1@gmail.com" className="underline">
              nProbFix1@gmail.com
            </a>
          </li>
          <li>Location: Sydney NSW</li>
        </ul>
      </div>
      <div className="text-white text-center border-t-2 border-white py-4 text-xs">
        CopyRight @ 2023 | This site is made by{" "}
        <a href="mailto:dejanlatinoski1@gmail.com" className="underline">
          dejanlatinoski2@gmail.com
        </a>
      </div>
    </div>
  );
}
