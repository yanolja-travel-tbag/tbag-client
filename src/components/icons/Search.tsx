import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgSearch = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 32 32"
    width={props.width || 24}
    height={props.height || 24}
    ref={ref}
    {...props}>
    <path
      fill="#7FB185"
      d="M12.667 4a8.667 8.667 0 0 1 8.666 8.667c0 2.02-.697 3.888-1.857 5.368a.393.393 0 0 0 .026.52.38.38 0 0 0 .27.112h.48a1 1 0 0 1 .708.293l5.666 5.666a1 1 0 0 1 0 1.414l-.586.586a1 1 0 0 1-1.414 0L18.96 20.96a1 1 0 0 1-.293-.707v-.482a.38.38 0 0 0-.112-.27.393.393 0 0 0-.52-.025 8.68 8.68 0 0 1-5.368 1.857 8.667 8.667 0 1 1 0-17.333m0 2.667c-3.334 0-6 2.666-6 6s2.666 6 6 6 6-2.667 6-6-2.667-6-6-6"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgSearch);
const Memo = memo(ForwardRef);
export default Memo;
