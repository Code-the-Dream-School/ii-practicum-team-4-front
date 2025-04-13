type InputWithLabelProps = {
  id: string;
  label: string;
  value: string;
  placeholder?: string;
  type: string;
  required?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputWithLabel = ({
  id,
  label,
  value,
  placeholder = '',
  type,
  required = true,
  onChange,
}: InputWithLabelProps) => {
  return (
    <div className="flex flex-col w-5/6 m-auto pb-4">
      <label htmlFor={id} className="text-success">{label} </label>
      <input
        id={id}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        required={required}
        className="border-1 rounded-xl border-primary/30 p-2"
      />
    </div>
  );
};

export default InputWithLabel;
