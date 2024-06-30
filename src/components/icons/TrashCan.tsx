import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgTrashCan = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 10 13"
    width={props.width || 24}
    height={props.height || 24}
    ref={ref}
    {...props}>
    <path
      fill="#929292"
      d="M.714 11.429a1.43 1.43 0 0 0 1.429 1.428h5.714a1.43 1.43 0 0 0 1.429-1.428V2.857H.714zm1.429-7.143h5.714v7.143H2.143zM7.5.714 6.786 0H3.214L2.5.714H0v1.429h10V.714z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgTrashCan);
const Memo = memo(ForwardRef);
export default Memo;
