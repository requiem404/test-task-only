import { ButtonHTMLAttributes, FC, ReactNode, SVGProps } from "react"
import { getClasses } from "./styles/get-classes"
import { SvgChevronLeft } from "shared/icons/chevron-left"


export type IconButtonProps = {
  icon?: ReactNode;
  className?: string
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium'
} & ButtonHTMLAttributes<HTMLButtonElement>

export const IconButton: FC<IconButtonProps> = ({ icon = <SvgChevronLeft />, size = 'medium', variant = 'primary', className, ...props }) => {
  const { cnRoot } = getClasses({ size, variant, className })

  return (
    <button
      className={cnRoot}
      {...props}
    >
      {icon}
    </button>
  )
}
