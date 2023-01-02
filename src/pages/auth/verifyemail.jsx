import { useState } from "react";
import OtpInput from "react-otp-input";
import SubmitButton from "../../Components/Shared/SubmitButton";

const VerifyEmail = () => {
  const [otp, setOtp] = useState(null);
  // const [error, setError] = useState(false);

  const handleOtp = (e) => setOtp(e);
  const handleSubmit = () => {
    // handle Error state
  };
  console.log("otp", otp);
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="relative flex-1">
        <div className="mt-5 flex items-center justify-center lg:absolute lg:top-5 lg:left-5">
          <img src="/kaya_logo.svg" alt="Kaya logo" className="w-18" />
        </div>
        <div className="flex h-screen items-center justify-center align-middle">
          <div className="w-4/5 rounded-md bg-neutral-25 p-5 shadow-sm md:w-1/2 md:bg-neutral-25/50 lg:w-1/4 lg:bg-neutral-25/50 lg:p-10">
            <h2 className="text-center text-2xl font-bold lg:text-3xl">
              Please check your email
            </h2>
            <p className="mb-12 text-center text-sm text-neutral-60/90">
              We have sent a code to daniel@gmail.com
            </p>
            <form onSubmit={handleSubmit}>
              <div className="my-4 flex flex-col">
                <OtpInput
                  numInputs={6}
                  containerStyle={{
                    width: "100%",
                    gap: "5px",
                    justifyContent: "space-between",
                  }}
                  isInputNum
                  shouldAutoFocus
                  placeholder="------"
                  isInputSecure
                  // hasErrored={!!error}
                  inputStyle={{
                    border: "1px solid #211814",
                    borderRadius: "5px",
                    width: "40px",
                    height: "40px",
                    fontSize: "14px",
                    color: "#000",
                    backgroundColor: "#F3F3F11a",
                    fontWeight: "400",
                    caretColor: "gray",
                  }}
                  focusStyle={{
                    border: "1px solid #211814",
                    boxShadow: "0px 0px 2px 0px #0000003f",
                    outline: "none",
                  }}
                  errorStyle={{
                    border: "1px solid #DE330D",
                  }}
                  onChange={(e) => handleOtp(e)}
                  value={otp}
                />
                {/* <button className="btn-primary" type="submit">
                  Verify
                </button> */}
                <SubmitButton text="Verify Email" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
