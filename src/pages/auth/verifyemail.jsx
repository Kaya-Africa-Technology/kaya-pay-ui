const VerifyEmail = () => {
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
            <p className="mb-6 text-center">
              We have sent a code to daniel@gmail.com
            </p>
            {/* OTP input */}
            <button className="btn-primary" type="submit">
              Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
