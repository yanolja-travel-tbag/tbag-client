import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTriangleDown = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 12 6"
    width={props.width || 24}
    height={props.height || 24}
    ref={ref}
    {...props}>
    <path
      fill="#434343"
      d="M1.207 0a.5.5 0 0 0-.353.854l4.792 4.792a.5.5 0 0 0 .708 0L11.146.854A.5.5 0 0 0 10.793 0z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgTriangleDown);
const Memo = memo(ForwardRef);
export default Memo;
