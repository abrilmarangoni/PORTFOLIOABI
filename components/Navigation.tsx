export default function Navigation() {
  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <div className="backdrop-blur-[5px] bg-[rgba(17,17,17,0.5)] border border-[#333] rounded-[10px] h-[54px] px-12 flex items-center gap-[42px]">
        {/* Navigation Links */}
        <div className="flex items-center gap-[42px] text-[15px] text-white">
          <a
            href="#"
            className="underline decoration-solid underline-offset-2 hover:text-[#999] transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-[#999] transition-colors"
          >
            About
          </a>
          <a
            href="#work"
            className="hover:text-[#999] transition-colors"
          >
            Work
          </a>
          <a
            href="#projects"
            className="hover:text-[#999] transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-[#999] transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
