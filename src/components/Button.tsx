interface ButtonType {
  title: string
  extraStyle?: string
  onClick?: () => void
  type: "submit" | "button" | "reset"
}
const Button: React.FC<ButtonType> = ({ title, extraStyle, onClick, type }) => {
  return (
    <button type={type} onClick={onClick} className={`${extraStyle} bg-[#FFE000] text-black py-[15px] rounded-[8px] px-[44px] font-bold text-[24px] leading-[100%] cursor-pointer`}>
      <span>{title}</span>
    </button>
  )
}

export default Button