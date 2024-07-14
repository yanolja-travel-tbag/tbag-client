import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgUserThin = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 40"
    width={props.width || 24}
    height={props.height || 24}
    ref={ref}
    {...props}>
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M33.333 35v-3.333A6.667 6.667 0 0 0 26.667 25H13.333a6.667 6.667 0 0 0-6.666 6.667V35M20 18.333A6.667 6.667 0 1 0 20 5a6.667 6.667 0 0 0 0 13.333"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUserThin);
const Memo = memo(ForwardRef);
export default Memo;
