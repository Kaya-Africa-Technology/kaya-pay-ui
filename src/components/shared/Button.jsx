const Button = ({ img, alt, text }) => {
  return (
    <button
      className="bg-gray-300 border-gray-500 hover:bg-sky-700 flex w-full items-center justify-center rounded-md border-2 bg-opacity-10 px-5 py-4 text-center text-base font-normal uppercase shadow"
      type="button"
    >
      <span className="flex items-center justify-between">
        <img
          className="mr-5 h-5/6 w-6 rounded-lg"
          width="40"
          height="40"
          src={img}
          alt={alt}
        />
        {text}
      </span>
    </button>
  );
};

export default Button;
