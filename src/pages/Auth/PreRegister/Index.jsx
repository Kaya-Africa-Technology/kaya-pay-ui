const PreRegister = () => {
  return (
    <div className="flex h-screen">
      <div
        className="width-1/2 from-transparent via-transparent to-slate-800 flex h-screen flex-1 items-end bg-gradient-to-b bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("/images/trucks.jpg")`,
        }}
      >
        <p className="mb-6 px-10 align-text-bottom text-xl font-medium text-white">
          Save delivery costs and increase driver efficiency with our end-to-end
          Pickup and delivery software.
        </p>
      </div>
      <div className="width-1/2 flex-1">
        <img src="/kaya_logo.svg" alt="Kaya logo" className="ml-4 mt-4 w-24" />
        <div className="flex flex-col justify-center align-middle">
          <h2 className="text-center">Sign Up</h2>
          <button className="w-10 bg-neutral-25 py-2 px-4" type="button">
            <img src="/icons/facebook.svg" alt="facebook" />
            Continue with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreRegister;
