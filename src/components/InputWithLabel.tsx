type InputWithLabelProps = {
  id: string;
  label: string;
  value: string;
  name: string;
  placeholder?: string;
  type: string;
  required?: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputWithLabel = ({
  id,
  label,
  value,
  name,
  placeholder = '',
  type,
  required = true,
  onChange,
}: InputWithLabelProps) => {
  return (
    <div className="flex w-full flex-col pb-4">
      <label htmlFor={id} className="text-success">
        {label}{' '}
      </label>
      <input
        id={id}
        value={value}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="border-primary/30 rounded-xl border-1 p-2"
        onChange={onChange}
      />
    </div>
  );
};

export default InputWithLabel;
