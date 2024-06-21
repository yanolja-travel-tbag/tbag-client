import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowLeft = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 8 14"
    width={props.width || 24}
    height={props.height || 24}
    ref={ref}
    {...props}>
    <path
      stroke={props.color || `#000000`}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 13 1 7l6-6"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowLeft);
const Memo = memo(ForwardRef);
export default Memo;
