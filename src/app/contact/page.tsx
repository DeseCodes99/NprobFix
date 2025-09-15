"use client";

async function getEmail(e: any) {
  e.preventDefault();

  const res = await fetch(`/api/email/`, {
    method: "POST",
    body: JSON.stringify({
      name: e.target[0].value,
      requirements: e.target[1].value,
    }),
  });

  return res.json();
}

export default function Contact() {
  return (
    <div className=" max-md:h-fit w-full">
      <div className="grid grid-cols-2  w-full  items-center justify-center bg-tan-400 text-slate-700 justify-between max-md:grid-cols-1  items-center">
        <div className="flex flex-col mt-20  items-center justify-center bg-gray-100 max-md:mt-20  p-10 w-full">
          <div className="text-left">
            <h1 className="text-4xl max-md:text-3xl text-slate-950 font-bold pb-6">
              Contact Information
            </h1>
            <div>
              <h1 className="text-2xl text-slate-800 font-bold">Location:</h1>
              <li className="text-xl font-semibold">Sydney</li>
              <li className="text-xl font-semibold">NSW</li>
            </div>
            <div>
              <h1 className="text-2xl text-slate-800 font-bold">Phone:</h1>
              <li className="text-xl font-semibold ">
                Nikola:{" "}
                 <a
                  href="tel:+61 403 041 037"
                  className="text-xl underline font-semibold"
                >
                0403041037
                </a>
              </li>
            </div>
            <div>
              <h1 className="text-2xl text-slate-800 font-bold">Email:</h1>
              <li>
                <a
                  href="mailto:nProbFix1@gmail.com"
                  className="text-xl underline font-semibold"
                >
                  nProbFix1@gmail.com
                </a>
              </li>
            </div>
            <div>
              <h1 className="text-4xl max-md:text-3xl text-slate-950 font-bold pt-12 pb-6">
                Opening Hours:
              </h1>
              <h2 className="text-2xl text-slate-800 ">
                Monday-Friday:
              </h2>
              <li className="text-lg font-semibold">6:00-22:00</li>
              <h2 className="text-2xl text-slate-800 font-bold">
                Saturday & Sunday
              </h2>
              <li className="text-lg font-semibold">If neccesery</li>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-16 items-center  max-md:mt-10 w-full max-md:px-6">
         <h2 className="text-4xl max-md:text-3xl text-slate-950 font-bold pb-6 text-left w-[75%]">
            Send us a message:
        </h2>
          <form onSubmit={(e: any) => getEmail(e)} className="flex py-2">
            <div className="flex flex-col max-w-2xl gap-y-3 text-slate-700">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                className="border-2 border-slate-700 p-2"
              />
              <div className="grid grid-cols-2 w-full">
                {/*  */}
                <div className="flex flex-col pr-2">
                  <label htmlFor="phoneNumber">Phone Number:</label>
                  <input
                    type="number"
                    name="phoneNumber"
                    id=""
                    className="border-2 border-slate-700 p-2"
                  />
                </div>
                <div className="flex flex-col">
                  {/*  */}
                  <label htmlFor="city">City:</label>
                  <input
                    type="text"
                    name="city"
                    className="border-2 border-slate-700 p-2"
                  />
                </div>
              </div>
              {/*  */}
              <label htmlFor="requirements">Description:</label>
              <textarea
                name="requirements"
                rows={6}
                className="border-2 border-slate-700"
              />
              <button
                type="submit"
                className="border-2 p-2 bg-slate-700 text-white font-bold border-black w-fit hover:rounded-br-xl hover:rounded-tl-xl hover:bg-white hover:text-slate-700 duration-700"
              >
                Submit your email
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
