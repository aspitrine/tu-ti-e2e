import clsx from 'clsx';

type ButtonColor = 'blue' | 'red' | 'green' | 'yellow';
function Button({
  onClick,
  children,
  color = 'blue',
}: {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  color?: ButtonColor;
}) {
  const colors: Record<ButtonColor, string> = {
    blue: 'bg-blue-500 hover:bg-blue-700 text-white',
    red: 'bg-red-500 hover:bg-red-700 text-white',
    green: 'bg-green-500 hover:bg-green-700 text-white',
    yellow: 'bg-yellow-500 hover:bg-yellow-700 text-black',
  };
  return (
    <button
      type="button"
      className={clsx(
        'p-2 hover:bg-blue-700 cursor-pointer transition-colors duration-300',
        colors[color]
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
