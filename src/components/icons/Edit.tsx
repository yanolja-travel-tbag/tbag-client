import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgEdit = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    width={props.width || 24}
    height={props.height || 24}
    ref={ref}
    {...props}>
    <path
      stroke={props.color || `#000000`}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.167 3.334H3.332A1.667 1.667 0 0 0 1.667 5v11.667a1.666 1.666 0 0 0 1.666 1.666H15a1.666 1.666 0 0 0 1.666-1.666v-5.834"
    />
    <path
      stroke={props.color || `#000000`}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.417 2.083a1.768 1.768 0 0 1 2.5 2.5L10 12.5l-3.333.833L7.5 10z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgEdit);
const Memo = memo(ForwardRef);
export default Memo;
