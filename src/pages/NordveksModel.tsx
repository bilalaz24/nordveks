
import "./NordveksModel.css";

type NordveksModelProps = {
  className?: string;
};

export default function NordveksModel({
  className = "",
}: NordveksModelProps) {
  return (
    <div
      className={`nordveks-model ${className}`.trim()}
      role="img"
      aria-label="Layered abstract shapes in sage green and charcoal"
    >
      <svg
        className="nordveks-model__art"
        viewBox="0 0 620 620"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="nv-back"
            x1="130"
            y1="120"
            x2="475"
            y2="470"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#343D37" />
            <stop offset="1" stopColor="#171C1B" />
          </linearGradient>

          <linearGradient
            id="nv-sage"
            x1="180"
            y1="150"
            x2="430"
            y2="465"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#D5DEC9" />
            <stop offset=".52" stopColor="#AAB9A0" />
            <stop offset="1" stopColor="#738372" />
          </linearGradient>

          <linearGradient
            id="nv-middle"
            x1="225"
            y1="205"
            x2="425"
            y2="435"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#71816F" />
            <stop offset="1" stopColor="#303B35" />
          </linearGradient>

          <linearGradient
            id="nv-front"
            x1="245"
            y1="215"
            x2="395"
            y2="390"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F0F0E6" />
            <stop offset="1" stopColor="#B6C1AD" />
          </linearGradient>

          <filter
            id="nv-shadow"
            x="75"
            y="80"
            width="470"
            height="490"
            filterUnits="userSpaceOnUse"
          >
            <feGaussianBlur stdDeviation="18" />
          </filter>
        </defs>

        {/* Soft shadow */}
        <ellipse
          cx="315"
          cy="468"
          rx="172"
          ry="42"
          fill="#000"
          opacity=".3"
          filter="url(#nv-shadow)"
        />

        {/* Back layer */}
        <g className="nv-layer nv-layer--back">
          <path
            d="M163 154C193 118 245 103 294 121L445 178C485 193 507 233 491 269L427 414C411 450 371 468 333 452L176 386C137 370 119 328 136 291L163 154Z"
            fill="url(#nv-back)"
            stroke="#526056"
            strokeOpacity=".48"
          />
          <path
            d="M171 160C205 130 244 120 284 135"
            stroke="#69776B"
            strokeOpacity=".55"
            strokeWidth="1.5"
          />
        </g>

        {/* Main sage layer */}
        <g className="nv-layer nv-layer--sage">
          <path
            d="M177 191C201 157 244 147 280 164L409 223C444 239 459 277 442 311L386 423C369 457 330 469 296 452L171 390C137 373 124 335 141 302L177 191Z"
            fill="url(#nv-sage)"
          />
          <path
            d="M177 191C201 157 244 147 280 164L409 223"
            stroke="#F0F0E6"
            strokeOpacity=".72"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M171 390C137 373 124 335 141 302"
            stroke="#667666"
            strokeOpacity=".8"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>

        {/* Offset middle layer */}
        <g className="nv-layer nv-layer--middle">
          <path
            d="M242 205L392 266C421 278 432 309 418 337L381 409C368 435 338 445 312 432L203 379C175 365 164 334 178 306L203 251C211 231 225 215 242 205Z"
            fill="url(#nv-middle)"
          />
          <path
            d="M242 205L392 266C421 278 432 309 418 337"
            stroke="#8B9B88"
            strokeOpacity=".62"
            strokeWidth="1.5"
          />
        </g>

        {/* Pale front layer */}
        <g className="nv-layer nv-layer--front">
          <path
            d="M251 235C267 216 292 210 315 219L371 243C395 253 405 280 394 303L365 362C354 384 329 393 307 383L254 358C230 347 220 321 231 298L251 235Z"
            fill="url(#nv-front)"
          />
          <path
            d="M251 235C267 216 292 210 315 219L371 243"
            stroke="#FFFDF2"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M254 358C230 347 220 321 231 298"
            stroke="#7F907D"
            strokeOpacity=".8"
            strokeWidth="1.5"
          />
        </g>

        {/* Small Nordveks accent */}
        <path
          d="M405 177L427 186"
          stroke="#C8FA70"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="432" cy="188" r="3" fill="#C8FA70" />
      </svg>
    </div>
  );
}
