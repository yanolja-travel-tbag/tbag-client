import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgMapPlus = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    width={props.width || 24}
    height={props.height || 24}
    ref={ref}
    {...props}>
    <path
      fill="#7FB185"
      d="M7.5 2.5 2.8 4.083a.43.43 0 0 0-.3.4v12.6a.417.417 0 0 0 .417.417c.041 0 .083 0 .133-.025L7.5 15.75l3.467 1.217a5 5 0 0 1-.134-1.134c0-.191 0-.383.034-.583L7.5 14.083V4.167l5 1.75v6.216c.892-.8 2.058-1.3 3.333-1.3.584 0 1.142.109 1.667.3V2.917a.417.417 0 0 0-.417-.417h-.133L12.5 4.25zm7.5 10V15h-2.5v1.667H15v2.5h1.667v-2.5h2.5V15h-2.5v-2.5z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgMapPlus);
const Memo = memo(ForwardRef);
export default Memo;
