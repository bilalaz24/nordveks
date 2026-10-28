
import "./Logo.css";

type LogoProps = {
  className?: string;
  href?: string;
  alt?: string;
};

function Logo({
  className = "",
  href = "/",
  alt = "Nordveks",
}: LogoProps) {
  return (
    <a
      className={`logo ${className}`.trim()}
      href={href}
      aria-label="Nordveks home"
    >
      <img
        className="logo__image"
        src="/nordveks-logo.png"
        alt={alt}
      />
    </a>
  );
}

export default Logo;
