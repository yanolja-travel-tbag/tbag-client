import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgArrowRight = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 18 16"
    width={props.width || 24}
    height={props.height || 24}
    ref={ref}
    {...props}>
    <path
      fill="#2C2C2C"
      d="M5.964 12.988a.6.6 0 0 0-.144.198.53.53 0 0 0 .015.46q.056.108.156.19a.7.7 0 0 0 .229.125.8.8 0 0 0 .528-.013.7.7 0 0 0 .22-.136l5.873-5.397a.56.56 0 0 0 .189-.412.56.56 0 0 0-.19-.412L6.969 2.194a.7.7 0 0 0-.22-.139.78.78 0 0 0-.763.109.6.6 0 0 0-.157.192.53.53 0 0 0-.012.463.6.6 0 0 0 .148.198l5.425 4.986z"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgArrowRight);
const Memo = memo(ForwardRef);
export default Memo;
