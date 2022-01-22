import { Button } from "@material-tailwind/react";
import React , {useState , useEffect} from "react";

const Experience = ({ prevStep, nextStep,formData , handleChange }) => {


    const [Err, setErr] = useState({});

    useEffect(() => {
     setErr({})
    }, [formData]);

  return (
    <div className="w-full">
      <h3 className="text-xl text-center">Experience Information</h3>
      <div className="bg-secondary p-10 rounded-md w-full mt-3">
        <div className="flex flex-col">
          <div className="">
            <h4 className="m-2">Experience 1</h4>
            <div className="w-full flex">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide  text-gray-700 text-xs font-medium mb-2"
                  htmlFor="grid-first-name"
                >
                  Institute/Organisation
                </label>
                <input
                onChange={handleChange}
                    name="institute1"
                  className="appearance-none block w-full bg-grey-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder=""
                />
                {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2"
                  htmlFor="grid-last-name"
                >
                  Positon
                </label>
                <input
                onChange={handleChange}
                name="position1"
                  className="appearance-none block w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2"
                  htmlFor="grid-last-name"
                >
                  Duration
                </label>
                <input
                onChange={handleChange}
                name="duration1"
                  className="appearance-none block w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="number"
                  placeholder="years"
                />
              </div>
            </div>
            <div className="w-full flex">
              <div className="md:w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2"
                  htmlFor="grid-last-name"
                >
                  Description
                </label>
                <textarea
                onChange={handleChange}
                name="experienceDescription1"
                  className="appearance-none block md:w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder=""
                />
              </div>
            </div>
          </div>
          <hr className="my-4" />

          <div className="">
            <h4 className="m-2">Experience 2</h4>
            <div className="w-full flex">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide  text-gray-700 text-xs font-medium mb-2"
                  htmlFor="grid-first-name"
                >
                  Institute/Organisation
                </label>
                <input
                onChange={handleChange}
                name="institute2"
                  className="appearance-none block w-full bg-grey-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder=""
                />
                {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2"
                  htmlFor="grid-last-name"
                >
                  Positon
                </label>
                <input
                onChange={handleChange}
                name="position2"
                  className="appearance-none block w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder=""
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2"
                  htmlFor="grid-last-name"
                >
                  Duration
                </label>
                <input
                onChange={handleChange}
                name="duration2"
                  className="appearance-none block w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="number"
                  placeholder="years"
                />
              </div>
            </div>
            <div className="w-full flex">
              <div className="md:w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-medium mb-2"
                  htmlFor="grid-last-name"
                >
                  Description
                </label>
                <textarea
                onChange={handleChange}
                name="experienceDescription2"
                  className="appearance-none block md:w-full bg-grey-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder=""
                />
              </div>
            </div>
          </div>
          <hr className="my-4" />

          <div className="flex items-center justify-center font-light">
            <Button color="gray" className="m-2" onClick={prevStep}>
              Prev
            </Button>
            <Button className="m-2" onClick={nextStep}>
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
