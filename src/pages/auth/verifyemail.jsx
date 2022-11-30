import { useState } from "react";
import OtpInput from "react-otp-input";

const VerifyEmail = () => {
  const [otp, setOtp] = useState(null);
  // const [error, setError] = useState(false);

  const handleOtp = (e) => setOtp(e);
  const handleSubmit = () => {
    // handle Error state
  };
  console.log("otp", otp);
  return (
    <div className="flex h-screen">
      <div className="relative flex-1">
        <div className="absolute top-5 left-5">
          <img src="/kaya_logo.svg" alt="Kaya logo" className="w-18" />
        </div>
        <div className="flex h-screen items-center justify-center align-middle">
          <div className="w-full rounded-md  bg-neutral-25 px-10 py-10 sm:w-11/12 md:w-3/5 lg:w-1/2">
            <h2 className="text-center text-3xl font-bold">
              Please check your email
            </h2>
            <p className="mb-12 text-center">
              We have sent a code to daniel@gmail.com
            </p>
            <form onSubmit={handleSubmit}>
              <div className="my-4 flex flex-col">
                <OtpInput
                  numInputs={6}
                  containerStyle="otpContainer"
                  isInputNum
                  shouldAutoFocus
                  // hasErrored={!!error}
                  inputStyle={{
                    border: "1px solid #211814",
                    borderRadius: "5px",
                    width: "54px",
                    height: "60px",
                    fontSize: "14px",
                    color: "#000",
                    backgroundColor: "#F3F3F11a",
                    fontWeight: "400",
                    caretColor: "blue",
                  }}
                  focusStyle={{
                    border: "1px solid #000",
                    boxShadow: "0px 0px 10px 0px #0000003f",
                  }}
                  errorStyle={{
                    border: "1px solid #DE330D",
                  }}
                  onChange={(e) => handleOtp(e)}
                  value={otp}
                />
                <button className="btn-primary" type="submit">
                  Verify
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
