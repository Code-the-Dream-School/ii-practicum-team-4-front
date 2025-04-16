interface ButtonProps {
  text: string;
  type?: 'primary' | 'secondary';
}

const Button = ({ text, type = 'primary' }: ButtonProps) => {
  return (
    <button
      className={`${type === 'primary' ? 'bg-error text-primary-light' : 'bg-background text-error'} border-error h-14 w-64 cursor-pointer rounded-full border-1 px-10 py-3 text-center text-base font-semibold transition duration-300 ease-in-out hover:opacity-80 md:text-xl`}
    >
      {text}
    </button>
  );
};

export default Button;
