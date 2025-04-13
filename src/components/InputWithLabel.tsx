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
    <div className="m-auto flex w-5/6 flex-col pb-4">
      <label htmlFor={id} className="text-success">
        {label}{' '}
      </label>
      <input
        id={id}
        value={value}
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
