type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  logo_main: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="105"
      height="44"
      fill="none"
      {...props}
    >
      <path
        fill="url(#logo_svg__a)"
        d="M48.537 35.96V16.475H52.1v7.878l7.21-7.878h4.4l-7.183 7.74 7.377 11.747h-4.37l-5.568-9.02-1.866 2.033v6.987h-3.563Zm17.723 0V15.918h3.564v20.044H66.26Zm11.965.335c-1.188 0-2.162-.186-2.923-.557-.76-.39-1.327-.9-1.698-1.53a4.042 4.042 0 0 1-.557-2.089c0-1.28.501-2.32 1.503-3.118 1.002-.798 2.506-1.197 4.51-1.197h3.508v-.334c0-.946-.27-1.642-.808-2.088-.538-.445-1.206-.668-2.004-.668-.724 0-1.355.177-1.893.53-.538.333-.872.834-1.002 1.503h-3.48c.093-1.003.427-1.875 1.002-2.617.594-.743 1.355-1.309 2.283-1.698.928-.409 1.967-.613 3.118-.613 1.967 0 3.517.492 4.649 1.476 1.132.983 1.698 2.375 1.698 4.175v8.49h-3.034l-.334-2.226a5.106 5.106 0 0 1-1.726 1.837c-.724.483-1.661.724-2.812.724Zm.807-2.784c1.021 0 1.81-.334 2.367-1.002.575-.668.937-1.494 1.085-2.478H79.45c-.947 0-1.624.177-2.032.53-.409.333-.613.75-.613 1.252 0 .538.204.956.613 1.253.408.297.946.445 1.614.445Zm16.206 2.784c-1.225 0-2.301-.195-3.229-.585-.928-.408-1.67-.965-2.227-1.67a4.795 4.795 0 0 1-1.002-2.45h3.591c.111.539.408 1.003.89 1.392.502.371 1.142.557 1.922.557s1.345-.158 1.698-.473c.371-.316.557-.678.557-1.086 0-.594-.26-.993-.78-1.197-.52-.223-1.243-.436-2.171-.64a23.715 23.715 0 0 1-1.81-.474 9.292 9.292 0 0 1-1.698-.695 3.934 3.934 0 0 1-1.225-1.114c-.315-.464-.473-1.03-.473-1.698 0-1.225.482-2.255 1.447-3.09.984-.835 2.358-1.253 4.12-1.253 1.634 0 2.933.38 3.898 1.142.984.76 1.568 1.809 1.754 3.145h-3.369c-.204-1.02-.974-1.53-2.31-1.53-.668 0-1.188.129-1.56.389-.352.26-.528.584-.528.974 0 .408.269.733.807.974.538.242 1.253.465 2.144.669.965.222 1.846.473 2.644.751.817.26 1.467.66 1.949 1.197.483.52.724 1.272.724 2.255a3.88 3.88 0 0 1-.668 2.31c-.464.687-1.132 1.226-2.005 1.615-.872.39-1.902.585-3.09.585Z"
      ></path>
      <g filter="url(#logo_svg__b)">
        <ellipse
          cx="20.849"
          cy="25.42"
          fill="#fff"
          rx="18.849"
          ry="16.564"
        ></ellipse>
      </g>
      <g filter="url(#logo_svg__c)">
        <ellipse
          cx="20.849"
          cy="20.278"
          fill="#6C6C6C"
          rx="18.849"
          ry="18.278"
        ></ellipse>
      </g>
      <ellipse
        cx="20.849"
        cy="19.706"
        fill="#F7F7F7"
        rx="18.849"
        ry="17.706"
      ></ellipse>
      <ellipse
        cx="20.848"
        cy="19.136"
        fill="url(#logo_svg__d)"
        rx="15.422"
        ry="14.851"
      ></ellipse>
      <circle cx="14.564" cy="19.138" r="3.427" fill="#fff"></circle>
      <circle cx="27.13" cy="19.138" r="3.427" fill="#fff"></circle>
      <defs>
        <linearGradient
          id="logo_svg__a"
          x1="74.496"
          x2="74.496"
          y1="8.961"
          y2="44.961"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0473E8"></stop>
          <stop offset="1" stop-color="#7A46FD"></stop>
        </linearGradient>
        <linearGradient
          id="logo_svg__d"
          x1="20.848"
          x2="20.848"
          y1="4.285"
          y2="33.986"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0374E8"></stop>
          <stop offset="1" stop-color="#7A46FD"></stop>
        </linearGradient>
        <filter
          id="logo_svg__b"
          width="39.476"
          height="34.906"
          x="1.111"
          y="8.855"
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="0.888"></feOffset>
          <feGaussianBlur stdDeviation="0.444"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_10671_11687"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_10671_11687"
            result="shape"
          ></feBlend>
        </filter>
        <filter
          id="logo_svg__c"
          width="39.984"
          height="38.839"
          x="0.858"
          y="0.858"
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_10671_11687"
            stdDeviation="0.571"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  ),
  logo_dashboard: (props: IconProps) => (
    <svg
      {...props}
      width="123"
      height="52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M59.315 38V14.965h4.212v9.313l8.523-9.313h5.2l-8.49 9.148L77.48 38h-5.167l-6.581-10.662-2.205 2.402V38h-4.212Zm20.95 0V14.307h4.212V38h-4.212Zm14.143.395c-1.404 0-2.556-.22-3.455-.658-.9-.46-1.569-1.064-2.008-1.81a4.779 4.779 0 0 1-.658-2.468c0-1.514.592-2.742 1.777-3.686 1.185-.943 2.962-1.415 5.331-1.415h4.146v-.395c0-1.118-.318-1.941-.954-2.468-.636-.526-1.426-.79-2.37-.79-.855 0-1.6.21-2.237.626-.636.395-1.031.987-1.185 1.777h-4.113c.11-1.185.505-2.216 1.185-3.093.702-.878 1.601-1.547 2.698-2.008 1.097-.482 2.325-.724 3.686-.724 2.325 0 4.157.582 5.495 1.744 1.338 1.163 2.007 2.809 2.007 4.936V38h-3.587l-.394-2.633a6.036 6.036 0 0 1-2.04 2.172c-.856.57-1.964.856-3.324.856Zm.954-3.29c1.207 0 2.139-.396 2.797-1.185.68-.79 1.108-1.766 1.283-2.93h-3.586c-1.12 0-1.92.21-2.402.626-.483.395-.724.889-.724 1.48 0 .637.24 1.13.724 1.482.482.35 1.118.526 1.908.526Zm19.157 3.29c-1.448 0-2.721-.23-3.818-.691-1.096-.483-1.974-1.14-2.632-1.974-.658-.834-1.053-1.8-1.185-2.896h4.245c.132.636.483 1.184 1.053 1.645.593.439 1.349.658 2.271.658.921 0 1.59-.186 2.007-.56.439-.372.658-.8.658-1.283 0-.702-.307-1.173-.921-1.415-.614-.263-1.47-.515-2.567-.757a28.008 28.008 0 0 1-2.139-.559 10.979 10.979 0 0 1-2.007-.822 4.656 4.656 0 0 1-1.448-1.317c-.373-.548-.559-1.217-.559-2.007 0-1.448.57-2.666 1.711-3.653 1.162-.987 2.786-1.48 4.87-1.48 1.93 0 3.466.45 4.607 1.349 1.162.9 1.854 2.139 2.073 3.718h-3.982c-.241-1.206-1.152-1.81-2.731-1.81-.79 0-1.404.154-1.843.46-.417.308-.625.692-.625 1.153 0 .482.318.866.954 1.151.636.286 1.481.549 2.534.79 1.141.263 2.183.56 3.126.889.965.307 1.733.778 2.304 1.415.57.614.855 1.502.855 2.665a4.579 4.579 0 0 1-.79 2.731c-.548.812-1.338 1.448-2.369 1.909-1.031.46-2.248.69-3.652.69Z"
        fill="url(#klas-logo_svg__a)"
      ></path>
      <g filter="url(#klas-logo_svg__b)">
        <ellipse
          cx="24.28"
          cy="29.681"
          rx="22.28"
          ry="19.58"
          fill="#fff"
        ></ellipse>
      </g>
      <g filter="url(#klas-logo_svg__c)">
        <ellipse
          cx="24.28"
          cy="23.605"
          rx="22.28"
          ry="21.605"
          fill="#6C6C6C"
        ></ellipse>
      </g>
      <ellipse
        cx="24.28"
        cy="22.93"
        rx="22.28"
        ry="20.93"
        fill="#F7F7F7"
      ></ellipse>
      <ellipse
        cx="24.28"
        cy="22.253"
        rx="18.23"
        ry="17.554"
        fill="url(#klas-logo_svg__d)"
      ></ellipse>
      <circle cx="16.854" cy="22.254" r="4.051" fill="#fff"></circle>
      <circle cx="31.708" cy="22.254" r="4.051" fill="#fff"></circle>
      <defs>
        <linearGradient
          id="klas-logo_svg__a"
          x1="90"
          y1="5"
          x2="90"
          y2="48"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0473E8"></stop>
          <stop offset="1" stop-color="#7A46FD"></stop>
        </linearGradient>
        <linearGradient
          id="klas-logo_svg__d"
          x1="24.28"
          y1="4.699"
          x2="24.28"
          y2="39.808"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0374E8"></stop>
          <stop offset="1" stop-color="#7A46FD"></stop>
        </linearGradient>
        <filter
          id="klas-logo_svg__b"
          x="0.95"
          y="10.102"
          width="46.661"
          height="41.261"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          ></feColorMatrix>
          <feOffset dy="1.05"></feOffset>
          <feGaussianBlur stdDeviation="0.525"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_12206_6178"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_12206_6178"
            result="shape"
          ></feBlend>
        </filter>
        <filter
          id="klas-logo_svg__c"
          x="0.65"
          y="0.65"
          width="47.262"
          height="45.912"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="0.675"
            result="effect1_foregroundBlur_12206_6178"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  ),
  logo_mobile: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="94"
      height="36"
      fill="none"
      {...props}
    >
      <path
        fill="url(#logo-m_svg__a)"
        d="M41.735 27V8.414h3.398v7.514l6.877-7.514h4.196l-6.85 7.381L56.39 27h-4.168l-5.31-8.603-1.78 1.938V27h-3.398Zm16.904 0V7.882h3.399V27h-3.399Zm11.412.319c-1.133 0-2.062-.177-2.788-.531-.726-.372-1.266-.859-1.62-1.46a3.856 3.856 0 0 1-.53-1.992c0-1.222.477-2.213 1.433-2.974.956-.761 2.39-1.142 4.301-1.142h3.346v-.318c0-.903-.257-1.567-.77-1.992-.513-.425-1.15-.637-1.912-.637-.69 0-1.292.168-1.805.504-.514.32-.832.797-.956 1.434h-3.32c.09-.956.408-1.788.957-2.496a5.42 5.42 0 0 1 2.177-1.62c.885-.389 1.876-.584 2.974-.584 1.876 0 3.354.47 4.434 1.408s1.62 2.266 1.62 3.983V27h-2.894l-.32-2.124a4.87 4.87 0 0 1-1.645 1.752c-.69.46-1.585.69-2.682.69Zm.77-2.656c.974 0 1.726-.318 2.257-.956.549-.637.894-1.424 1.035-2.363H71.22c-.903 0-1.549.169-1.938.505-.39.319-.584.717-.584 1.195 0 .513.194.911.584 1.195.39.283.903.424 1.54.424Zm15.457 2.656c-1.168 0-2.195-.186-3.08-.558-.885-.39-1.593-.92-2.124-1.593a4.574 4.574 0 0 1-.956-2.337h3.425c.106.514.39.956.85 1.328.478.354 1.089.531 1.832.531.744 0 1.283-.15 1.62-.451.354-.301.53-.646.53-1.036 0-.566-.247-.947-.743-1.142-.495-.212-1.186-.416-2.07-.61a22.615 22.615 0 0 1-1.727-.452 8.862 8.862 0 0 1-1.62-.664 3.752 3.752 0 0 1-1.168-1.062c-.3-.442-.451-.982-.451-1.62 0-1.168.46-2.15 1.38-2.947.939-.796 2.249-1.194 3.93-1.194 1.558 0 2.797.362 3.718 1.088.938.726 1.496 1.726 1.672 3h-3.212c-.195-.973-.93-1.46-2.204-1.46-.637 0-1.133.124-1.487.372-.336.248-.505.558-.505.93 0 .389.257.698.77.929.514.23 1.195.442 2.045.637.92.212 1.761.451 2.522.717.78.247 1.399.628 1.86 1.141.46.496.69 1.213.69 2.151a3.698 3.698 0 0 1-.638 2.204c-.442.655-1.08 1.168-1.912 1.54-.831.372-1.814.558-2.947.558Z"
      ></path>
      <g filter="url(#logo-m_svg__b)">
        <ellipse
          cx="17.356"
          cy="20.19"
          fill="#fff"
          rx="15.356"
          ry="13.495"
        ></ellipse>
      </g>
      <g filter="url(#logo-m_svg__c)">
        <ellipse
          cx="17.356"
          cy="16.004"
          fill="#6C6C6C"
          rx="15.356"
          ry="14.89"
        ></ellipse>
      </g>
      <ellipse
        cx="17.356"
        cy="15.538"
        fill="#F7F7F7"
        rx="15.356"
        ry="14.425"
      ></ellipse>
      <ellipse
        cx="17.357"
        cy="15.075"
        fill="url(#logo-m_svg__d)"
        rx="12.564"
        ry="12.098"
      ></ellipse>
      <circle cx="12.237" cy="15.073" r="2.792" fill="#fff"></circle>
      <circle cx="22.476" cy="15.073" r="2.792" fill="#fff"></circle>
      <defs>
        <linearGradient
          id="logo-m_svg__a"
          x1="66.494"
          x2="66.494"
          y1="0"
          y2="29.609"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0473E8"></stop>
          <stop offset="1" stop-color="#7A46FD"></stop>
        </linearGradient>
        <linearGradient
          id="logo-m_svg__d"
          x1="17.357"
          x2="17.357"
          y1="2.977"
          y2="27.174"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0374E8"></stop>
          <stop offset="1" stop-color="#7A46FD"></stop>
        </linearGradient>
        <filter
          id="logo-m_svg__b"
          width="32.406"
          height="28.683"
          x="1.153"
          y="6.695"
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="0.847"></feOffset>
          <feGaussianBlur stdDeviation="0.424"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_10671_13701"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_10671_13701"
            result="shape"
          ></feBlend>
        </filter>
        <filter
          id="logo-m_svg__c"
          width="32.89"
          height="31.96"
          x="0.91"
          y="0.024"
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_10671_13701"
            stdDeviation="0.545"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  ),
  logo_footer: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="85"
      height="36"
      fill="none"
      {...props}
    >
      <path
        fill="#fff"
        d="M43.426 26.277V12.938h2.44v5.393l4.935-5.393h3.01l-4.916 5.298 5.05 8.041h-2.992l-3.81-6.174-1.278 1.391v4.783h-2.439Zm12.132 0v-13.72h2.439v13.72h-2.44Zm8.19.229c-.813 0-1.48-.127-2.001-.381-.52-.267-.908-.616-1.162-1.048a2.767 2.767 0 0 1-.382-1.43c0-.876.343-1.587 1.03-2.133.686-.547 1.715-.82 3.087-.82h2.4v-.229c0-.648-.184-1.124-.552-1.429-.369-.305-.826-.457-1.372-.457-.496 0-.928.12-1.296.362-.368.229-.597.572-.686 1.029h-2.382a3.365 3.365 0 0 1 .686-1.791 3.891 3.891 0 0 1 1.563-1.163c.635-.28 1.346-.419 2.134-.419 1.347 0 2.407.337 3.182 1.01.775.673 1.163 1.626 1.163 2.858v5.812h-2.078l-.228-1.524c-.28.508-.673.927-1.182 1.258-.495.33-1.137.495-1.924.495Zm.552-1.905c.7 0 1.239-.23 1.62-.686.394-.458.642-1.023.743-1.697h-2.077c-.648 0-1.111.121-1.39.363-.28.228-.42.514-.42.857 0 .369.14.654.42.858.279.203.647.305 1.104.305Zm11.094 1.905c-.839 0-1.576-.133-2.21-.4-.636-.28-1.144-.66-1.525-1.144a3.282 3.282 0 0 1-.686-1.676h2.458c.076.368.28.686.61.952.343.255.78.381 1.315.381.533 0 .92-.107 1.162-.323.254-.216.381-.464.381-.744 0-.406-.178-.68-.534-.819-.355-.152-.85-.299-1.486-.438-.407-.09-.82-.197-1.239-.324a6.353 6.353 0 0 1-1.162-.477 2.694 2.694 0 0 1-.838-.762c-.216-.317-.324-.705-.324-1.162 0-.839.33-1.544.99-2.115.674-.572 1.614-.858 2.82-.858 1.119 0 2.008.26 2.669.781.673.521 1.073 1.239 1.2 2.154H76.69c-.14-.699-.667-1.048-1.581-1.048-.458 0-.813.088-1.067.266-.242.178-.362.4-.362.667 0 .28.184.502.552.667.369.165.858.318 1.468.458.66.152 1.264.324 1.81.514.559.178 1.003.451 1.334.82.33.355.495.87.495 1.543a2.654 2.654 0 0 1-.457 1.582c-.318.47-.775.838-1.372 1.105-.597.267-1.302.4-2.115.4Z"
      ></path>
      <g filter="url(#footer-logo_svg__a)">
        <ellipse
          cx="16.467"
          cy="20.719"
          fill="#fff"
          rx="15.467"
          ry="13.527"
        ></ellipse>
      </g>
      <g filter="url(#footer-logo_svg__b)">
        <ellipse
          cx="16.467"
          cy="16.52"
          fill="#6C6C6C"
          rx="15.467"
          ry="14.927"
        ></ellipse>
      </g>
      <ellipse
        cx="16.467"
        cy="16.054"
        fill="#F7F7F7"
        rx="15.467"
        ry="14.46"
      ></ellipse>
      <ellipse
        cx="16.468"
        cy="15.589"
        fill="#1127E3"
        rx="12.655"
        ry="12.128"
      ></ellipse>
      <ellipse
        cx="11.312"
        cy="15.588"
        fill="#fff"
        rx="2.812"
        ry="2.799"
      ></ellipse>
      <ellipse
        cx="21.625"
        cy="15.588"
        fill="#fff"
        rx="2.812"
        ry="2.799"
      ></ellipse>
      <defs>
        <filter
          id="footer-logo_svg__a"
          width="32.422"
          height="28.543"
          x="0.256"
          y="7.191"
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="0.744"></feOffset>
          <feGaussianBlur stdDeviation="0.372"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_10671_11664"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_10671_11664"
            result="shape"
          ></feBlend>
        </filter>
        <filter
          id="footer-logo_svg__b"
          width="32.847"
          height="31.769"
          x="0.043"
          y="0.637"
          color-interpolation-filters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            result="effect1_foregroundBlur_10671_11664"
            stdDeviation="0.478"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  ),
  twitter: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      fill="none"
      {...props}
    >
      <path
        fill="#fff"
        d="M23.643 5.53c-.835.37-1.732.62-2.675.732a4.67 4.67 0 0 0 2.049-2.578 9.3 9.3 0 0 1-2.959 1.13 4.66 4.66 0 0 0-7.938 4.25 13.23 13.23 0 0 1-9.6-4.868 4.66 4.66 0 0 0 1.442 6.22 4.648 4.648 0 0 1-2.11-.583v.06a4.66 4.66 0 0 0 3.737 4.568 4.693 4.693 0 0 1-2.105.08 4.661 4.661 0 0 0 4.353 3.234A9.348 9.348 0 0 1 2.05 19.77a9.5 9.5 0 0 1-1.111-.065 13.176 13.176 0 0 0 7.14 2.093c8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602a9.47 9.47 0 0 0 2.323-2.41l.002-.003Z"
      ></path>
    </svg>
  ),
  instagram: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      fill="none"
      {...props}
    >
      <path
        fill="#fff"
        d="M12 9.471a3.13 3.13 0 0 0-3.125 3.124 3.13 3.13 0 0 0 3.124 3.124 3.13 3.13 0 0 0 3.124-3.124A3.13 3.13 0 0 0 12 9.471Zm9.37 3.124c0-1.293.011-2.576-.062-3.867-.072-1.5-.414-2.831-1.511-3.928-1.1-1.1-2.428-1.44-3.928-1.512-1.294-.072-2.576-.06-3.867-.06-1.294 0-2.576-.012-3.868.06-1.5.073-2.831.415-3.928 1.512-1.1 1.1-1.439 2.428-1.512 3.928-.072 1.294-.06 2.576-.06 3.867 0 1.292-.012 2.576.06 3.867.073 1.5.415 2.832 1.512 3.928 1.1 1.1 2.428 1.44 3.928 1.512 1.294.073 2.576.061 3.867.061 1.294 0 2.576.012 3.868-.06 1.5-.073 2.83-.416 3.928-1.512 1.099-1.1 1.439-2.429 1.511-3.929.076-1.291.061-2.573.061-3.867ZM12 17.402a4.8 4.8 0 0 1-4.808-4.807A4.8 4.8 0 0 1 12 7.788a4.8 4.8 0 0 1 4.807 4.807A4.8 4.8 0 0 1 12 17.402Zm5.003-8.688a1.121 1.121 0 0 1-1.123-1.123c0-.62.502-1.122 1.123-1.122a1.121 1.121 0 0 1 .794 1.917 1.121 1.121 0 0 1-.794.328Z"
      ></path>
    </svg>
  ),
  linkedin: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      fill="none"
      {...props}
    >
      <g clip-path="url(#linkedin_svg__a)">
        <path
          fill="#fff"
          d="M4.705.602a4.715 4.715 0 0 0-4.701 4.7v14.589c0 2.585 2.116 4.7 4.701 4.7h14.588c2.585 0 4.7-2.115 4.7-4.7V5.303a4.715 4.715 0 0 0-4.7-4.701H4.705ZM5.887 4.56c1.24 0 2.003.814 2.027 1.884 0 1.046-.787 1.882-2.05 1.882H5.84c-1.216 0-2.002-.836-2.002-1.882 0-1.07.81-1.884 2.05-1.884Zm10.682 5c2.384 0 4.171 1.558 4.171 4.906v6.251h-3.623v-5.832c0-1.465-.524-2.465-1.835-2.465-1 0-1.598.674-1.86 1.325-.095.233-.119.558-.119.884v6.088H9.68s.048-9.879 0-10.902h3.624v1.544c.482-.743 1.343-1.8 3.265-1.8Zm-12.517.256h3.623v10.901H4.052v-10.9Z"
        ></path>
      </g>
      <defs>
        <clipPath id="linkedin_svg__a">
          <path fill="#fff" d="M0 .594h24v24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  ),
  hamburger_close: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      fill="none"
      {...props}
    >
      <path
        fill="#1127E3"
        d="m19.557 17.498 6.27-6.256a1.464 1.464 0 0 0-2.07-2.07l-6.256 6.27-6.257-6.27a1.464 1.464 0 0 0-2.07 2.07l6.27 6.256-6.27 6.256a1.459 1.459 0 0 0 0 2.071 1.46 1.46 0 0 0 2.07 0l6.257-6.27 6.256 6.27a1.46 1.46 0 0 0 2.07 0 1.457 1.457 0 0 0 0-2.07l-6.27-6.257Z"
      ></path>
    </svg>
  ),
  hamburger: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      {...props}
    >
      <path
        stroke="#1127E3"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M5.332 21.335h21.333M5.332 10.668h21.333H5.332Z"
      ></path>
    </svg>
  ),
  chevron_right: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      {...props}
    >
      <path
        fill="#fff"
        d="m9.29 8.119 3.88 3.88-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41l-4.59-4.59a.996.996 0 0 0-1.41 0c-.38.39-.39 1.03 0 1.42Z"
      ></path>
    </svg>
  ),
  check: (props: IconProps) => (
    <svg
      width="16"
      height="17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m2.668 8.973 4 4 6.667-8"
        stroke="#1127E3"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  ),
  check_black: (props: IconProps) => (
    <svg
      width="14"
      height="10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m1.668 5 4 4 6.667-8"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></path>
    </svg>
  ),
  back_icon: (props: IconProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
    >
      <path
        fill="#1127E3"
        d="M13.83 19.001a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1.001 1.001 0 1 1 1.54 1.28l-4.47 5.36 4.32 5.36a1 1 0 0 1-.78 1.64Z"
      ></path>
    </svg>
  ),
  dashboard_home: (props: IconProps) => (
    <svg
      {...props}
      width="21"
      height="20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m19.743 10.332-9-10c-.38-.422-1.107-.422-1.486 0l-9 10A1 1 0 0 0 1 12.002h2v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7h2a.999.999 0 0 0 .743-1.67ZM10 14.002a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  dashboard_content: (props: IconProps) => (
    <svg
      {...props}
      width="16"
      height="20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H8v7L5.5 5.5 3 7V0H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  dashboard_recordings: (props: IconProps) => (
    <svg
      {...props}
      width="22"
      height="22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 .5C5.225.5.5 5.225.5 11S5.225 21.5 11 21.5 21.5 16.775 21.5 11 16.775.5 11 .5Zm0 15A4.513 4.513 0 0 1 6.5 11c0-2.475 2.025-4.5 4.5-4.5s4.5 2.025 4.5 4.5-2.025 4.5-4.5 4.5Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  dashboard_resources: (props: IconProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      fill="none"
    >
      <path
        fill="currentColor"
        d="M5.26 11.281h13.48l-.67 9H5.93l-.67-9Zm3.74-7h5.97L19 7.661l1.59-1.59L22 7.491l-2.79 2.79H4.79L2 7.491l1.41-1.41L5 7.661l4-3.38Z"
      ></path>
    </svg>
  ),
  dashboard_settings: (props: IconProps) => (
    <svg
      {...props}
      width="16"
      height="16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 0a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 10c4.42 0 8 1.79 8 4v2H0v-2c0-2.21 3.58-4 8-4Z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  dashboard_settings_profile: (props: IconProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-width="2"
        d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1m-8-10a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"
      ></path>
    </svg>
  ),
  dashboard_settings_bank: (props: IconProps) => (
    <svg
      {...props}
      width="24"
      height="24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#bank_svg__a)" fill="currentColor">
        <path d="M2.333 9.039 12 3.485l9.666 5.554a.667.667 0 0 0 .667-1.154L12 1.945 1.666 7.885a.667.667 0 1 0 .667 1.154ZM2.668 17.334a.667.667 0 0 0 .667.667h17.333a.667.667 0 0 0 0-1.334h-2v-4.913h-1.333v4.913h-4.667v-4.913h-1.333v4.913H6.668v-4.913H5.335v4.913h-2a.667.667 0 0 0-.667.667ZM3.346 9.332h17.333v1.333H3.346V9.332ZM21.999 19.332h-20a.667.667 0 0 0 0 1.333h20a.667.667 0 0 0 0-1.333Z"></path>
        <path d="M14.767 7.719h2.14l-4.474-2.573a.534.534 0 0 0-.533 0L7.42 7.719h2.14l2.6-1.493 2.607 1.493Z"></path>
      </g>
      <defs>
        <clipPath id="bank_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z"></path>
        </clipPath>
      </defs>
    </svg>
  ),
  dashboard_settings_logout: (props: IconProps) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
      <path
        fill="#1127E3"
        d="M4.5 22.5h9A1.502 1.502 0 0 0 15 21v-2.25h-1.5V21h-9V3h9v2.25H15V3a1.502 1.502 0 0 0-1.5-1.5h-9A1.502 1.502 0 0 0 3 3v18a1.501 1.501 0 0 0 1.5 1.5Z"
      ></path>
      <path
        fill="#1127E3"
        d="m15.44 15.44 2.689-2.69H7.5v-1.5h10.629l-2.69-2.69L16.5 7.5 21 12l-4.5 4.5-1.06-1.06Z"
      ></path>
    </svg>
  ),
  dashboard_active_arrow: (props: IconProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="23"
      fill="none"
    >
      <path
        fill="#FFFFFF"
        d="M15.212 1.698a3 3 0 0 1 4.576 0L33.662 18.06c1.653 1.949.268 4.94-2.288 4.94H3.626c-2.556 0-3.941-2.991-2.288-4.94L15.212 1.698Z"
      ></path>
    </svg>
  ),
  dashboard_input_search: (props: IconProps) => (
    <svg
      {...props}
      width="15"
      height="15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m14 13.999-2.99-2.996L14 13.999Zm-1.333-7a5.667 5.667 0 1 1-11.333 0 5.667 5.667 0 0 1 11.333 0Z"
        stroke="currentColor"
        stroke-linecap="round"
      ></path>
    </svg>
  ),
};
