import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="p-4 footer footer-center text-base-content">
      <div>
        <p>
          This page is licensed{" "}
          <Link
            className="link"
            href="https://www.gnu.org/licenses/gpl-3.0.en.html"
          >
            GNU GPL v3
          </Link>
          .
        </p>
      </div>
    </footer>
  );
};
