import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgGreenCheck = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 14"
    width={props.width || 24}
    height={props.height || 24}
    ref={ref}
    {...props}>
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.667 3.5 5.25 9.917 2.334 7"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgGreenCheck);
const Memo = memo(ForwardRef);
export default Memo;
