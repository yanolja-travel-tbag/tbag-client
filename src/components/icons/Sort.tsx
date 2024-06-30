import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSort = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 12 7"
    width={props.width || 24}
    height={props.height || 24}
    ref={ref}
    {...props}>
    <path
      fill="#929292"
      d="M11.4 1.2H.6A.6.6 0 1 1 .6 0h10.8a.6.6 0 0 1 0 1.2M9.4 4H2.6a.6.6 0 1 1 0-1.2h6.8a.6.6 0 1 1 0 1.2M7 6.8H5a.6.6 0 1 1 0-1.2h2a.6.6 0 1 1 0 1.2"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSort);
const Memo = memo(ForwardRef);
export default Memo;
