import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHome = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 34 32"
    width={props.width || 24}
    height={props.height || 24}
    ref={ref}
    {...props}>
    <path
      fill="#609A79"
      d="M12.4 31.04a1 1 0 0 0 1-1v-8.8a1 1 0 0 1 1-1h5.2a1 1 0 0 1 1 1v8.8a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-12.4a1 1 0 0 1 1-1h1.794c.916 0 1.35-1.13.669-1.743L17.669 1.043a1 1 0 0 0-1.338 0L.937 14.897c-.681.614-.248 1.744.669 1.744H3.4a1 1 0 0 1 1 1v12.4a1 1 0 0 0 1 1z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgHome);
const Memo = memo(ForwardRef);
export default Memo;
