import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import noImage from "../assets/images/noImage.jpg";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import "react-image-crop/dist/ReactCrop.css";
import ImageInput from "../components/ImageInput/ImageInput";
import PdfViewer from "../components/pdfVeiwer/PdfViewer";
import rswal from "@sweetalert/with-react";
import axios from "axios";
import toast from "react-hot-toast";
import { APPLYJOBS } from "../constants/actionTypes";
import { useMediaQuery } from "react-responsive";

const initialState = {
  firstName: "",
  email: "",
  location: "",
  lastName: "",
  phone: "",
  experience: "",
  portfolio: "",
};

const ApplyJob = () => {
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const location = useLocation();
  const history = useHistory();
  const [image, setImage] = useState("");
  const [pdf, setPdf] = useState("");
  const [viewpdf, setViewPdf] = useState("");
  const isMobile = useMediaQuery({ query: `(max-width: 640px)` });

  const dispatch = useDispatch();

  useEffect(() => {
    location.state.Err = undefined;
  }, [formData]);

  if (loading) {
    return <LoadingSpinner />;
  }

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    var fileData = new FormData();

    fileData.append("firstName", formData.firstName || name[0]);
    fileData.append("email", formData.email || user?.user.email);
    fileData.append("location", formData.location);
    fileData.append("lastName", formData.lastName || name[1]);
    fileData.append("phone", formData.phone || user?.user.phone);
    fileData.append("experience", formData.experience);
    fileData.append("portfolio", formData.portfolio);
    fileData.append("image", image);
    fileData.append("userId", user?.user._id);
    fileData.append("jobId", location.state?.job._id);
    fileData.append("pdf", pdf);

    axios({
      method: "post",
      url: `${process.env.REACT_APP_LIVE_BASE_URL}/applyjob/${location.state?.job._id}`,
      data: fileData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(({ data }) => {
        setLoading(false);
        dispatch({ type: APPLYJOBS, data });
        history.push("/my-jobs");
        toast.success("Applied Job Successfully");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.response);
        var errors = error.response.data.msg;
        toast.error(errors);
      });
  };

  const handlePdfChange = (e) => {
    e.preventDefault();

    setPdf(e.target.files[0]);

    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setViewPdf(fileReader.result);
    };
    fileReader.readAsDataURL(e.target.files[0]);
  };

  const handleViewPdf = (e) => {
    e.preventDefault();
    rswal(<PdfViewer pdf={viewpdf} />);
  };

  const name = user?.user.name.split(" ");

  return (
    <div className="">
      <Navbar />
      <form
        action=""
        className="container mx-auto mt-40"
        onSubmit={handleSubmit}
      >
        <h2 className={`${isMobile ? 'text-lg' :  'text-3xl'} font-semibold ${isMobile && 'text-center'}`}>
          Applying for{" "}
          <span className="text-primary">{location.state?.job.jobTitle}</span>
        </h2>
        {location?.state?.Err && <h4 className="text-md">Errors : </h4>}
        {location?.state.Err &&
          location?.state?.Err.map((error) => (
            <>
              <p className="text-red-800 text-sm" style={{ color: "red" }}>
                {error.msg}
              </p>
            </>
          ))}

        <div className="col-span-1">
          {/* Photo upload area */}
          <div className="pb-10">
            <div className="w-full h-40 mt-4 flex items-center flex-col mt-24">
              <img src={image ? image : noImage} alt="no image" className="h-40"/>

              <ImageInput setImage={setImage} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 ">
          <div className="col-span-2 p-5">
            <div className={`w-full flex items-center justify-between ${isMobile && 'flex-col '}`}>
              <input
                onChange={handleChange}
                type="text"
                name="firstName"
                id=""
                placeholder="First Name"
                className={`bg-secondary flex-1 p-4 m-2 mt-5 rounded-md ${isMobile && 'w-full'}`}
                value={name[0]}
              />
              <input
                onChange={handleChange}
                type="text"
                name="lastName"
                id=""
                placeholder="Last Name"
                className={`bg-secondary flex-1 p-4 m-2 mt-5 rounded-md ${isMobile && 'w-full'}`}
                value={name[1]}
              />
            </div>
            <div className={`w-full flex items-center justify-between ${isMobile && 'flex-col '}`}>
              <input
                onChange={handleChange}
                type="email"
                name="email"
                id=""
                placeholder="Email"
                className={`bg-secondary flex-1 p-4 m-2 mt-5 rounded-md ${isMobile && 'w-full'}`}
                value={user?.user.authmode == 'email' ? user?.user.email : formData.email}
              />

              <input
                onChange={handleChange}
                type="tel"
                name="phone"
                id=""
                placeholder="Phone"
                className={`bg-secondary flex-1 p-4 m-2 mt-5 rounded-md ${isMobile && 'w-full'}`}
                value={user?.user.authmode == 'phone' ? user?.user.phone : formData.phone}
              />
            </div>

            <div className={`w-full flex items-center justify-between ${isMobile && 'flex-col '}`}>
              <input
                onChange={handleChange}
                type="text"
                name="location"
                id=""
                placeholder="Location"
                className={`bg-secondary flex-1 p-4 m-2 mt-5 rounded-md ${isMobile && 'w-full'}`}
              />

              <input
                onChange={handleChange}
                type="number"
                name="experience"
                id=""
                placeholder="Years of Exp."
                className={`bg-secondary flex-1 p-4 m-2 mt-5 rounded-md ${isMobile && 'w-full'}`}
                min={0}
              />
            </div>

            <div className={`w-full flex items-center justify-between ${isMobile && 'flex-col '}`}>
                <div className="flex flex-col ml-2 flex-1">
                <label className="mt-4" htmlFor="upload">
                  Upload Resume :{" "}
                </label>
                <input
                  type="file"
                  name="upload"
                  id=""
                  className={`bg-secondary p-4 rounded-md  ${isMobile && 'w-full'}`}
                  accept="application/pdf,application/vnd.ms-excel"
                  onChange={handlePdfChange}
                />
                {pdf && (
                  <button className="underline mt-1" onClick={handleViewPdf}>
                    View Pdf
                  </button>
                )}
                {/* <p className="text-xs m-3">
                  Don’t have one? No worries{" "}
                  <Link to={'/create-resume'} className="text-primary underline">
                    {" "}
                    Create a JobsWay Resume
                  </Link>
                </p> */}

                </div>

              <input
                onChange={handleChange}
                type="text"
                name="portfolio"
                id=""
                placeholder="Portfolio link"
                className={`bg-secondary flex-1 p-4 m-2 mt-5 rounded-md ${isMobile && 'w-full'}`}
              />
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center mt-4 mb-6">
          <button
            className="py-3 px-20 bg-primary text-white rounded-md"
            type="submit"
          >
            Confirm Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplyJob;
