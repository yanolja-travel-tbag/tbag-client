import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLocation = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 8 11"
    width={props.width || 24}
    height={props.height || 24}
    ref={ref}
    {...props}>
    <path
      fill="#929292"
      d="M4 2.571A1.429 1.429 0 1 1 4 5.43 1.429 1.429 0 0 1 4 2.57M4 0a4 4 0 0 1 4 4c0 2.194-2.14 5.152-3.289 6.583a.903.903 0 0 1-1.422 0C2.139 9.153 0 6.194 0 4a4 4 0 0 1 4-4m0 1.143A2.857 2.857 0 0 0 1.143 4c0 .513 0 1.488 2.07 4.459a.957.957 0 0 0 1.574 0C6.857 5.488 6.857 4.513 6.857 4A2.857 2.857 0 0 0 4 1.143"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgLocation);
const Memo = memo(ForwardRef);
export default Memo;
