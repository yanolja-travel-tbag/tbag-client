import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgCamera = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 10 9"
    width={props.width || 24}
    height={props.height || 24}
    ref={ref}
    {...props}>
    <path
      fill="#929292"
      d="M8.704 1.111H7.519L6.944.247A.56.56 0 0 0 6.481 0H3.52a.56.56 0 0 0-.463.247l-.576.864H1.296A1.296 1.296 0 0 0 0 2.407v5.186a1.296 1.296 0 0 0 1.296 1.296h7.408A1.296 1.296 0 0 0 10 7.593V2.407a1.296 1.296 0 0 0-1.296-1.296m.185 6.482a.185.185 0 0 1-.185.185H1.296a.185.185 0 0 1-.185-.185V2.407a.185.185 0 0 1 .185-.185h1.482a.56.56 0 0 0 .463-.247l.575-.864h2.368l.575.864a.56.56 0 0 0 .463.247h1.482a.185.185 0 0 1 .185.185zM5 2.593a2.222 2.222 0 1 0 0 4.444 2.222 2.222 0 0 0 0-4.444m0 3.333a1.111 1.111 0 1 1 0-2.222 1.111 1.111 0 0 1 0 2.222"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgCamera);
const Memo = memo(ForwardRef);
export default Memo;
