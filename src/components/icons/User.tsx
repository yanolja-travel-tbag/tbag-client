import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgUser = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M19.406 3.537a6.328 6.328 0 1 0 0 12.655 6.328 6.328 0 0 0 0-12.655m-3.163 6.327a3.164 3.164 0 1 1 6.327 0 3.164 3.164 0 0 1-6.328 0m11.073 9.492h-15.82a4.746 4.746 0 0 0-4.745 4.746c0 3.53 1.452 6.359 3.835 8.273 2.344 1.883 5.489 2.8 8.82 2.8s6.477-.917 8.821-2.8c2.38-1.914 3.835-4.742 3.835-8.273a4.746 4.746 0 0 0-4.746-4.746m-15.82 3.164h15.82a1.58 1.58 0 0 1 1.582 1.582c0 2.584-1.028 4.502-2.651 5.805-1.665 1.335-4.056 2.104-6.84 2.104-2.785 0-5.177-.769-6.84-2.104-1.624-1.303-2.652-3.22-2.652-5.805a1.58 1.58 0 0 1 1.582-1.582"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgUser);
const Memo = memo(ForwardRef);
export default Memo;
