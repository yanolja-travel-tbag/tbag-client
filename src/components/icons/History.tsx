import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgHistory = (
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
      d="M21.4 5.119c-8.052-.222-14.648 6.248-14.648 14.237H3.92c-.712 0-1.06.854-.554 1.345L7.78 25.13a.783.783 0 0 0 1.123 0l4.414-4.43a.791.791 0 0 0-.57-1.344H9.916c0-6.17 5.03-11.153 11.231-11.074 5.885.08 10.836 5.031 10.916 10.916.079 6.185-4.904 11.231-11.074 11.231-2.547 0-4.904-.87-6.77-2.34a1.57 1.57 0 0 0-2.089.126c-.664.664-.617 1.787.127 2.357a14 14 0 0 0 8.732 3.021c7.989 0 14.459-6.596 14.237-14.648-.205-7.42-6.406-13.62-13.826-13.826m-.806 7.91c-.649 0-1.187.537-1.187 1.186v5.821c0 .554.3 1.076.775 1.36l4.936 2.927c.57.332 1.297.142 1.63-.411a1.2 1.2 0 0 0-.412-1.63l-4.556-2.705V14.2c0-.633-.538-1.17-1.186-1.17"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgHistory);
const Memo = memo(ForwardRef);
export default Memo;
