import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMenus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    width={props.width || 24}
    height={props.height || 24}
    ref={ref}
    {...props}>
    <path
      stroke="#7FB185"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M5.333 5.333H8V8H5.333zm0 18.667H8v2.667H5.333zM24 5.333h2.667V8H24zm0 9.334h2.667v2.666H24zm-9.333 0h2.666v2.666h-2.666zm-9.334 0H8v2.666H5.333zm9.334-9.334h2.666V8h-2.666zm0 18.667h2.666v2.667h-2.666zM24 24h2.667v2.667H24z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMenus);
const Memo = memo(ForwardRef);
export default Memo;
