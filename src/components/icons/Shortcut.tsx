import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgShortcut = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    width={props.width || 24}
    height={props.height || 24}
    ref={ref}
    {...props}>
    <path
      fill="#C4C4C4"
      d="M14.222 0H1.778A1.78 1.78 0 0 0 0 1.778v12.444C0 15.21.8 16 1.778 16h12.444C15.21 16 16 15.209 16 14.222V1.778A1.78 1.78 0 0 0 14.222 0m0 13.222a1 1 0 0 1-1 1H2.778a1 1 0 0 1-1-1V2.778a1 1 0 0 1 1-1h10.444a1 1 0 0 1 1 1zm-8.886-.513a.89.89 0 0 1-.003-1.26l2.742-2.742a1 1 0 0 0 0-1.414L5.333 4.55a.89.89 0 1 1 1.258-1.258l4 4a1 1 0 0 1 0 1.414l-4 4a.89.89 0 0 1-1.255.002"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgShortcut);
const Memo = memo(ForwardRef);
export default Memo;
