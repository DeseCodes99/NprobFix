"use client";

async function getEmail(e: any) {
  e.preventDefault();
  console.log(e.form);
  const form = e.currentTarget; // this is the <form> element
  const email = (form.email as HTMLInputElement).value;
  const phoneNumber = (form.phoneNumber as HTMLInputElement).value;
  const suburb = (form.city as HTMLSelectElement).value;
  const description = (form.requirements as HTMLTextAreaElement).value;
  // if (!e.target[0].value || !e.target[1].value) {
  //   alert("Email and description can not be empty");
  //   return;
  // }
  // console.log(email, phoneNumber, suburb, description);
  const res = await fetch(`/api/email/`, {
    method: "POST",
    body: JSON.stringify({ email, phoneNumber, suburb, description }),
  });
  const result = await res.json();
  console.log(result);
  alert(result.message);
  return result;
}
const nswSuburbsAroundBankstown = [
  "Bankstown",
  "Belmore",
  "Belfield",
  "Birrong",
  "Blakehurst",
  "Bexley",
  "Bexley North",
  "Bexley South",
  "Bexley West",
  "Bligh Park",
  "Botany",
  "Burwood",
  "Burwood Heights",
  "Cabramatta",
  "Cabramatta West",
  "Canley Heights",
  "Canley Vale",
  "Campsie",
  "Canterbury",
  "Carlton",
  "Carlton Heights",
  "Chatswood",
  "Chullora",
  "Claymore",
  "Condell Park",
  "Croydon",
  "Croydon Park",
  "Dulwich Hill",
  "Earlwood",
  "East Hills",
  "Enfield",
  "Englorie Park",
  "Fairfield",
  "Fairfield East",
  "Fairfield Heights",
  "Fairfield West",
  "Georges Hall",
  "Greenacre",
  "Hurlstone Park",
  "Kingsgrove",
  "Lakemba",
  "Lansdowne",
  "Leightonfield",
  "Liverpool",
  "Liverpool Heights",
  "Lurnea",
  "Marrickville",
  "Marrickville South",
  "Merrylands",
  "Merrylands West",
  "Mount Annan",
  "Mount Kuring-gai",
  "Mount Lewis",
  "Narwee",
  "Padstow",
  "Padstow Heights",
  "Panania",
  "Peakhurst",
  "Peakhurst Heights",
  "Pennant Hills",
  "Picnic Point",
  "Potts Hill",
  "Punchbowl",
  "Regents Park",
  "Revesby",
  "Revesby Heights",
  "Riverwood",
  "Roselands",
  "Sefton",
  "Villawood",
  "Wiley Park",
  "Yagoona",
];
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
              <h2 className="text-2xl text-slate-800 font-bold">Location</h2>
              <li className="text-xl font-semibold">Sydney, NSW</li>
            </div>
            <div>
              <h2 className="text-2xl text-slate-800 font-bold">Phone</h2>
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
              <h2 className="text-2xl text-slate-800 font-bold">Email</h2>
              <li>
                <a
                  href="mailto:nProbFix1@gmail.com"
                  className="text-xl underline font-semibold"
                >
                  nProbFix1@gmail.com
                </a>
              </li>
            </div>
            {/* <div>
              <h2 className="text-4xl max-md:text-3xl text-slate-950 font-bold pt-12 pb-6">
                Opening Hours:
              </h2>
              <h3 className="text-2xl text-slate-800 font-bold">
                Monday-Friday:
              </h3>
              <li className="text-lg font-semibold">6:00-22:00</li>
              <h3 className="text-2xl text-slate-800 font-bold">
                Saturday & Sunday
              </h3>
              <li className="text-lg font-semibold">If neccesery</li>
            </div> */}
          </div>
        </div>
        <div className="flex flex-col mt-32 items-center  max-md:mt-10 w-full max-md:px-6">
          <h2 className="text-4xl max-md:text-3xl text-slate-950 font-bold pb-6 text-left w-[75%]">
            Enquiry form
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
                    className="border-2 border-slate-700 h-[40px]"
                  />
                </div>
                <div className="flex flex-col text-slate-800">
                  <label htmlFor="city">Suburb:</label>
                  <select
                    name="city"
                    className="border-2 border-slate-700 h-[40px]"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a suburb
                    </option>
                    {nswSuburbsAroundBankstown.map((suburb, i) => (
                      <option key={i} value={suburb}>
                        {suburb}
                      </option>
                    ))}
                  </select>
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
