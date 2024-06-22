import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgPlane = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 39 39"
    width={props.width || 24}
    height={props.height || 24}
    ref={ref}
    {...props}>
    <path
      stroke="#7FB185"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="m28.582 30.746-2.847-12.972 5.536-5.537c2.373-2.373 3.164-5.536 2.373-7.118-1.582-.791-4.746 0-7.119 2.373l-5.536 5.536-12.972-2.847c-.791-.158-1.424.158-1.74.79l-.475.792c-.316.79-.158 1.582.475 2.056l8.384 5.537-3.164 4.746H6.751L5.17 25.684l4.746 3.163 3.164 4.746 1.582-1.582v-4.746l4.746-3.163 5.537 8.384c.474.633 1.265.79 2.056.474l.791-.316c.633-.474.95-1.107.79-1.898"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgPlane);
const Memo = memo(ForwardRef);
export default Memo;
