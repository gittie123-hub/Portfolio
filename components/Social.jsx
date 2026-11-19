import { FaGithub } from "react-icons/fa";

export default function Social({ containerStyles, iconStyles }) {
  return (
    <div className={containerStyles}>
      <a href="https://github.com/gittie123-hub" className={iconStyles} aria-label="GitHub profile">
        <FaGithub aria-hidden="true" />
      </a>
    </div>
  );
}
