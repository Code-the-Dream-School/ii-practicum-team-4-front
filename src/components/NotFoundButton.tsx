interface NotFoundButtonProps {
  text: string;
}

export default function NotFoundButton({ text }: NotFoundButtonProps) {
  return (
    <button className="btn btn-primary">
      {text}
    </button>
  );
}