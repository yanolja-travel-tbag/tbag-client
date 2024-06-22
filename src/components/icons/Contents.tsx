import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgContents = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 39 39"
    width={props.width || 24}
    height={props.height || 24}
    ref={ref}
    {...props}>
    <path
      fill="#7FB185"
      d="m17.904 23.31 6.565-4.191q.712-.475.712-1.345t-.712-1.345l-6.565-4.192q-.79-.513-1.621-.079-.83.435-.83 1.384v8.464q0 .949.83 1.384t1.621-.08M6.752 30.43q-1.305 0-2.234-.93a3.05 3.05 0 0 1-.93-2.235V8.282q0-1.305.93-2.233.93-.93 2.234-.93h25.31q1.305 0 2.236.93.93.93.928 2.233v18.984q0 1.305-.928 2.235a3.04 3.04 0 0 1-2.236.928h-6.327v1.582q0 .673-.456 1.128-.455.456-1.126.454H14.66q-.672 0-1.126-.455a1.54 1.54 0 0 1-.456-1.127V30.43zm0-3.165h25.31V8.282H6.753z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgContents);
const Memo = memo(ForwardRef);
export default Memo;
