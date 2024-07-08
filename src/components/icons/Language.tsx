import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgLanguage = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    width={props.width || 24}
    height={props.height || 24}
    ref={ref}
    {...props}>
    <path
      fill="#F1F1F1"
      d="m18.685 16.938-3.516-8.516a.86.86 0 0 0-1.588 0l-3.516 8.516a.86.86 0 1 0 1.588.655l.716-1.734h4.011l.716 1.734a.86.86 0 1 0 1.588-.655m-5.606-2.797 1.296-3.139 1.296 3.139zm-2.617-.746a.86.86 0 0 0-.19-1.199c-.008-.006-.586-.435-1.426-1.357 1.549-2.096 2.426-4.482 2.784-5.605h1.26a.86.86 0 0 0 0-1.718H8.36v-.782a.86.86 0 0 0-1.72 0v.782H2.11a.86.86 0 0 0 0 1.718h7.704c-.371 1.053-1.056 2.715-2.1 4.233C6.485 7.84 6.03 6.786 6.026 6.777a.86.86 0 0 0-1.585.664c.022.054.568 1.337 2.065 3.279l.107.137c-1.533 1.732-3.037 2.807-3.666 3.154a.86.86 0 0 0 .823 1.509c.084-.047 1.898-1.05 3.97-3.344.88.94 1.484 1.384 1.52 1.41a.86.86 0 0 0 1.202-.191"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgLanguage);
const Memo = memo(ForwardRef);
export default Memo;
