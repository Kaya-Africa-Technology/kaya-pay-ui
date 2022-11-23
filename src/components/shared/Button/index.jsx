const Button = ({ img, alt, text }) => {
  return (
    <button
      className="mt-8 flex justify-center rounded-md border border-neutral-90/50 bg-neutral-25/20 py-2 px-4 transition ease-in-out hover:bg-neutral-60/20 hover:shadow hover:transition-all"
      type="button"
    >
      <img className="mr-[43px]" src={img} alt={alt} />
      {text}
    </button>
  );
};

export default Button;
