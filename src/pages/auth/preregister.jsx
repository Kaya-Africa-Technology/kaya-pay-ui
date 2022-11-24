import Button from "../../Components/Shared";
import AuthSideImage from "../../Components/Shared/AuthSideImage";

const PreRegister = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-neutral-25">
      <AuthSideImage
        image="/images/trucks.jpg"
        text="Save delivery costs and increase driver efficiency with our end-to-end Pickup and delivery software."
      />
      <div className="flex-1">
        <div className="container mx-auto ml-10 mt-5">
          <img src="/kaya_logo.svg" alt="Kaya logo" className="w-24" />
        </div>
        <div className="flex h-screen items-center justify-center align-middle">
          <div className="flex w-11/12 flex-col space-y-6 md:w-3/5">
            <h2 className="mb-6 text-center text-3xl font-bold">Sign Up</h2>
            <Button
              img="/icons/email.svg"
              alt="email logo"
              text="continue with Email"
            />
            <Button
              img="/icons/google.svg"
              alt="email logo"
              text="continue with Google"
            />
            <Button
              img="/icons/facebook.svg"
              alt="email logo"
              text="continue with Facebook"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreRegister;
