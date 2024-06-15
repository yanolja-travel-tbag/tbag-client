import type { SVGProps } from "react";
import { Ref, forwardRef, memo } from "react";
const SvgNonMemberStart = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 287 39"
    width={props.width || 24}
    height={props.height || 24}
    ref={ref}
    {...props}>
    <rect
      width={286}
      height={38}
      x={0.5}
      y={0.5}
      fill="#F1F1F1"
      rx={9.5}
    />
    <rect
      width={286}
      height={38}
      x={0.5}
      y={0.5}
      stroke="#C4C4C4"
      rx={9.5}
    />
    <path
      fill="#929292"
      d="M101.49 12.328V26.36h-1.485V12.33zM92.162 13.5v3.594h3.765V13.5h1.469V23h-6.719v-9.5zm0 8.281h3.765v-3.515h-3.765zm23.46-9.453v14h-1.484v-14zm-11.5 10.188c1.149-.008 2.469-.016 3.844-.063v-1.39c-1.641-.211-2.703-1.172-2.688-2.547-.015-1.578 1.36-2.625 3.391-2.625 2.047 0 3.453 1.047 3.453 2.625 0 1.359-1.062 2.312-2.687 2.53v1.36a47 47 0 0 0 3.843-.312l.11 1.11c-3.11.515-6.5.546-9.063.546zM112.966 14v1.188h-8.547V14h3.547v-1.64h1.484V14zm-4.297 3.047c-1.172 0-2 .578-1.984 1.469-.016.89.812 1.437 1.984 1.437 1.203 0 2.031-.547 2.031-1.437 0-.891-.828-1.47-2.031-1.47m21.164-4.703v10.61h-1.485v-1.345h-2.812v-1.047h2.812v-8.218zm.344 12.484v1.203h-10.11v-4.11h1.469v2.907zm-12.047-6.094c2.593-.015 6.078-.047 9.062-.422l.094 1.063a38 38 0 0 1-3.688.406v2.735h-1.484v-2.657c-1.359.063-2.664.07-3.797.063zm4.578-5.859c2.047 0 3.469.984 3.469 2.469s-1.422 2.437-3.469 2.437c-2.078 0-3.485-.953-3.485-2.437 0-1.485 1.407-2.469 3.485-2.469m0 1.11c-1.25-.016-2.094.515-2.078 1.359-.016.828.828 1.344 2.078 1.344 1.203 0 2.047-.516 2.062-1.344-.015-.844-.859-1.375-2.062-1.36m16.007-.813c2.938 0 5.172 1.547 5.172 3.906s-2.234 3.922-5.172 3.906c-2.937.016-5.156-1.547-5.156-3.906s2.219-3.906 5.156-3.906m0 1.203c-2.14-.016-3.75 1.078-3.734 2.703-.016 1.64 1.594 2.688 3.734 2.688 2.141 0 3.735-1.047 3.735-2.688 0-1.625-1.594-2.719-3.735-2.703m6.438 8.906v1.235H132.34V23.28zm14.148.125v1.25h-12.813v-1.25h5.641v-2.453h-4.078V16.5h8.219v-1.969h-8.25v-1.219h9.718v4.376h-8.218v2.046h8.547v1.22h-4.469v2.452zm10.702-7.515c-.015 2.562 1.532 5.125 3.704 6.093l-.891 1.172c-1.609-.765-2.883-2.336-3.531-4.25-.657 2.047-1.946 3.742-3.625 4.563l-.907-1.25c2.204-.985 3.75-3.657 3.75-6.328V13.5h1.5zm6.454-3.563V26.36h-1.485V12.33zm7.445 2.516c0 1.781 1.234 3.484 3.375 4.203l-.75 1.156c-1.586-.547-2.75-1.64-3.36-3.015-.609 1.515-1.82 2.703-3.469 3.28l-.796-1.155c2.187-.75 3.5-2.547 3.515-4.485v-.375h-3.078V13.25h7.578v1.203h-3.015zm6.109-2.516v3.594h2.031v1.25h-2.031v3.594h-1.484v-8.438zm0 9.125v4.875h-1.484v-3.672h-7.766v-1.203zm14.054-9.125V18h2.25v1.234h-2.25v7.094h-1.468v-14zm-2.687 2.188v1.218h-8.297v-1.218h3.453v-2h1.484v2zm-4.094 2.25c2 0 3.469 1.343 3.484 3.25-.015 1.922-1.484 3.25-3.484 3.265-2.016-.015-3.484-1.343-3.484-3.265 0-1.907 1.468-3.25 3.484-3.25m0 1.218c-1.187 0-2.078.828-2.062 2.032-.016 1.218.875 2.03 2.062 2.015 1.188.016 2.063-.797 2.063-2.015 0-1.203-.875-2.032-2.063-2.032m21.664-5.656v14h-1.5v-14zm-4.172 1.5c0 4.094-1.75 7.656-6.547 9.953l-.781-1.203c3.726-1.773 5.539-4.297 5.828-7.562h-5.156v-1.188z"
    />
    <path
      stroke="#929292"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M47 28v-2a4 4 0 0 0-4-4h-8a4 4 0 0 0-4 4v2M39 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
    />
  </svg>
);
const ForwardRef = forwardRef(SvgNonMemberStart);
const Memo = memo(ForwardRef);
export default Memo;