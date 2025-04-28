interface ButtonProps {
  text: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
  color?: 'primary' | 'secondary';
}

const Button = ({ text, type, color = 'primary' }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${color === 'primary' ? 'bg-error text-primary-light' : 'bg-background text-error'} border-error h-14 w-full max-w-64 cursor-pointer rounded-full border-1 px-10 py-3 text-center text-base font-semibold transition duration-300 ease-in-out hover:opacity-80 md:text-l md:px-5`}
    >
      {text}
    </button>
  );
};

export default Button;
