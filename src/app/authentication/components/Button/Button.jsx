const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="h-12 w-full rounded-3xl bg-[linear-gradient(98deg,#504ffd_12%,#40c3fb_91%)] text-white font-bold text-sm cursor-pointer hover:opacity-90 transition-opacity">
      {children}
    </button>
  );
}

export default Button;