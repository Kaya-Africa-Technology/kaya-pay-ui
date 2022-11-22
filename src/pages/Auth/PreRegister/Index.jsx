import Button from "../../../components/shared/button/Button";

const PreRegister = () => {
  return (
    <div className="flex h-screen bg-neutral-25">
      <div
        className="width-1/2 from-transparent via-transparent to-slate-800 flex h-screen flex-1 items-end bg-gradient-to-b bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("/images/trucks.jpg")`,
        }}
      >
        <p className="font-lato mb-[90px] break-words px-10 text-center align-text-bottom text-xl font-bold text-white">
          Save delivery costs and increase driver efficiency with our end-to-end
          Pickup and delivery software.
        </p>
      </div>
      <div className="width-1/2 flex-1">
        <img src="/kaya_logo.svg" alt="Kaya logo" className="ml-10 mt-4 w-24" />
        <div className="container mx-auto px-10">
          <h2 className="text-center">Sign Up</h2>
          <div className="flex flex-col content-between justify-between">
            <Button
              img="/icons/facebook.svg"
              alt="facebook logo"
              text="continue with Facebook"
            />
            <Button
              img="/icons/email.svg"
              alt="email logo"
              text="continue with Email"
            />
            <Button
              img="/icons/google.svg"
              alt="Google logo"
              text="continue with Google"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreRegister;
