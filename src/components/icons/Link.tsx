import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLink = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={props.width || 24}
    height={props.height || 24}
    ref={ref}
    {...props}>
    <g clipPath="url(#link_svg__a)">
      <path
        fill="#929292"
        d="M10.232 10.23a5 5 0 0 1 6.89-.171l.181.172 2.828 2.829a5 5 0 0 1-6.89 7.243l-.18-.172-2.122-2.122a1 1 0 0 1 1.32-1.497l.094.083 2.122 2.122a3 3 0 0 0 4.377-4.1l-.135-.143-2.828-2.828a3 3 0 0 0-4.243 0 1 1 0 0 1-1.414-1.415M3.868 3.868a5 5 0 0 1 6.89-.172l.181.172L13.06 5.99a1 1 0 0 1-1.32 1.497l-.094-.083-2.121-2.121A3 3 0 0 0 5.147 9.38l.135.144 2.829 2.829a3 3 0 0 0 4.242 0 1 1 0 0 1 1.415 1.414 5 5 0 0 1-6.89.172l-.182-.172-2.828-2.83a5 5 0 0 1 0-7.07"
      />
    </g>
    <defs>
      <clipPath id="link_svg__a">
        <path
          fill="#fff"
          d="M0 0h24v24H0z"
        />
      </clipPath>
    </defs>
  </svg>
);
const ForwardRef = forwardRef(SvgLink);
const Memo = memo(ForwardRef);
export default Memo;
