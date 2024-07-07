import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgInbox = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 22 22"
    width={props.width || 24}
    height={props.height || 24}
    ref={ref}
    {...props}>
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.167 11h-5.5l-1.833 2.75H9.167L7.334 11h-5.5"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.996 4.684 1.833 11v5.5a1.833 1.833 0 0 0 1.834 1.833h14.667a1.834 1.834 0 0 0 1.833-1.833V11l-3.163-6.316a1.83 1.83 0 0 0-1.64-1.018H6.637a1.83 1.83 0 0 0-1.641 1.018"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgInbox);
const Memo = memo(ForwardRef);
export default Memo;
