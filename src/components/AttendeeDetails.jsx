import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import axios from "axios";
import { MdOutlineMail } from "react-icons/md";
import { toast } from "react-toastify";

const AttendeeDetails = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [ticketData, setTicketData] = useState(null);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const storedTicketData = localStorage.getItem("ticketData");
    if (storedTicketData) {
      setTicketData(JSON.parse(storedTicketData));
    }
  }, []);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "ml_default");
      formData.append("cloud_name", "dg8cmo2gb");

      try {
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/dg8cmo2gb/image/upload`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        toast("Upload successful:", response.data.secure_url);
        setProfilePhoto(response.data.secure_url);
      } catch (error) {
        toast.error("Upload failed:", error);
      }
    }
  };



  const handleSubmit = async () => {
    const newErrors = {};
    if (!name.trim()) {
      toast.name = "Name is required.";
    }
    if (!email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(email)) {
      toast.email = "Please enter a valid email address.";
    }
    if (!profilePhoto) {
      toast.profilePhoto = "Profile photo is required.";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const attendeeDetails = {
      name,
      email,
      about,
      profilePhoto,
    };

    const finalTicketData = { ...ticketData, ...attendeeDetails };

    localStorage.setItem("finalTicketData", JSON.stringify(finalTicketData));

    setIsLoading(true);
    await sendVerificationEmail(email, name);
    setIsLoading(false);
    navigate("/tickets");
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      handleFileUpload({ target: { files: [file] } });
    } else {
      setErrors({
        ...errors,
        profilePhoto: "Please select a valid image file.",
      });
    }
  };

  const handleUploadAreaClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#05252C] w-full text-white p-4">
      <div className="bg-[#041E23] border border-[#197686] p-6 rounded-xl shadow-lg w-full sm:max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Attendee Details
        </h2>
        <p className="text-center text-sm mb-4">Step 2/3</p>
        <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
          <div
            className="bg-[#197686] h-2 rounded-full"
            style={{ width: "66%" }}
          ></div>
        </div>

        <div className="border border-[#197686] bg-[#08252B] p-4 rounded-lg">
          <div
            className="border border-[#197686] bg-[#07373F] p-4 rounded-lg mb-4 h-64 md:h-56 flex flex-col"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <label className="block mb-2 text-base">Upload Profile Photo</label>
            <div
              className="border border-[#197686] p-6 cursor-pointer bg-[#07373F] text-center h-48 md:h-40 flex items-center justify-center"
              onClick={handleUploadAreaClick}
            >
              <div className="bg-[#0E464F] md:z-10  h-40 md:h-[11rem] w-[52rem] md:w-1/2 rounded-2xl flex items-center justify-center border-3 border-[#24A0B5] p-5">
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileUpload}
                  accept="image/*"
                  ref={fileInputRef}
                />
                {profilePhoto ? (
                  <img
                    src={profilePhoto}
                    alt="Profile Preview"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center gap-2">
                    <img src={assets.icon} alt="Upload Icon" />
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                      Drag & drop or click to upload
                    </p>
                  </div>
                )}
              </div>
            </div>
            {errors.profilePhoto && (
              <p className="text-red-500 text-sm mt-2">{errors.profilePhoto}</p>
            )}
          </div>

          <label className="block mb-2">
            Enter your name <span className="text-red-500"> *</span>
          </label>
          <input
            type="text"
            className="w-full p-2 rounded-xl bg-[#08252B] border border-[#197686] focus:outline-none mb-2 h-12"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {errors.name && (
            <p className="text-red-500 text-sm mb-2">{errors.name}</p>
          )}

          <label className="block mb-2">Enter your email *</label>
          <div className="w-full p-2 rounded-xl bg-[#08252B] border border-[#197686] focus:outline-none mb-2 h-12 flex flex-row items-center gap-2">
            <MdOutlineMail className="text-2xl" />
            <input
              className="w-[90%] h-[95%] text-left text-white outline-none"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="hello@avioflagos.io"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-sm mb-2">{errors.email}</p>
          )}

          <label className="block mb-2">About Project</label>
          <textarea
            className="w-full p-2 rounded-lg bg-[#08252B] border border-[#197686] focus:outline-none mb-4 h-24"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            required
          ></textarea>

          <div className="flex-col sm:flex sm:flex-row bg-[#05252C] px-4 rounded-2xl justify-between gap-4 mt-4 sm:h-14 h-24 space-y-2 sm:space-y-0 items-center">
            <button
              onClick={() => navigate(-1)}
              className="w-full p-1 bg-gray-700 rounded hover:bg-gray-600 h-10 flex items-center justify-center"
            >
              Back
            </button>
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full p-1 bg-blue-600 rounded hover:bg-blue-500 h-10 flex items-center justify-center"
            >
              {isLoading ? "Processing..." : "Get My Free Ticket"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendeeDetails;
