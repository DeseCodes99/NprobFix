export default function Footer() {
  return (
    <div>
      <div className="social flex max-md:flex-col max-md:items-start max-md:pl-6 max-md:w-2/4 h-full justify-evenly items-center pb-4   text-white">
        <ul className="max-md:pb-6">
          <h2 className="text-2xl">Social Media:</h2>
          <li className=" underline">
            <a href="" className="pr-2">
              Facebook
            </a>
          </li>
          <li>
            <a href="" className="pr-2 underline">
              Instagram
            </a>
          </li>
          <li>
            <a href="" className="pr-2 underline">
              Twitter
            </a>
          </li>
        </ul>
        <ul>
          <h2 className="text-2xl">Contact Information:</h2>
          <li>
            Phone:
            <a href="tel:+61 403 041 037" className="underline">
              +61 403 041 037
            </a>
          </li>
          <li>
            Email:
            <a href="mailto:nProbFix1@gmail.com" className="underline">
              nProbFix1@gmail.com
            </a>
          </li>
          <li>Location: Sydney</li>
        </ul>
      </div>
      <div className="text-white text-center border-t-2 border-white py-4">
        CopyRight @ 2023 | This site is made by{" "}
        <a href="mailto:dejanlatinoski1@gmail.com" className="underline">
          dejanlatinoski1@gmail.com an
        </a>
        <a href="mailto:nikola.donevski138@gmail.com" className="underline">
          d nikola.donevski138@gmail.com
        </a>
      </div>
    </div>
  );
}
