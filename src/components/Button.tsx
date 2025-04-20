interface ButtonProps {
  text: string;
  type?: string;
}

const Button = ({ text }: ButtonProps) => {
  return (
    <button className="bg-error text-primary-light h-14 w-64 rounded-full px-10 py-3 text-center text-base font-semibold transition duration-300 ease-in-out hover:opacity-80 md:text-xl">
      {text}
    </button>
  );
};

export default Button;
