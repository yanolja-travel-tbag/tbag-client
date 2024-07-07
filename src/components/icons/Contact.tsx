import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgContact = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={props.width || 24}
    height={props.height || 24}
    ref={ref}
    {...props}>
    <path
      fill="#929292"
      d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863q-2.5-2.5-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238a.92.92 0 0 1 .325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337.364-.112.712-.063l3.45.7q.35.1.575.363A.88.88 0 0 1 21 15.9v4.05q0 .45-.3.75t-.75.3"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgContact);
const Memo = memo(ForwardRef);
export default Memo;
