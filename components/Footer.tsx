import Link from "next/link";
import Image from "next/image";

const G = "#7EE83A";

export default function Footer() {
  return (
    <footer style={{ background: "#0d0d0d", borderTop: "1px solid #1a1a1a", marginTop: "auto" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px 40px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40 }}>

        {/* Brand */}
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Image src="/logo.jpg" alt="Cloud 9 Depot" width={40} height={40} style={{ borderRadius: "50%" }} />
            <span style={{ fontWeight: 700, color: G, fontSize: "0.95rem" }}>Cloud 9 Depot</span>
          </div>
          <p style={{ color: "#555", fontSize: "0.85rem", lineHeight: 1.7, maxWidth: 220 }}>
            Your local smoke shop in Akron, Ohio. Quality products, great vibes.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 4 }}>
            {[
              { href: "https://www.facebook.com/profile.php?id=61576666553223", label: "FB", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
              { href: "https://www.instagram.com/cloud9nine_oh/", label: "IG", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
            ].map(s => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                style={{ color: "#444", display: "flex", transition: "color 0.15s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = G; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#444"; }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <p style={{ fontWeight: 600, fontSize: "0.75rem", color: G, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>Quick Links</p>
          {[{ href: "/", label: "Home" }, { href: "/gallery", label: "Gallery" }, { href: "/contact", label: "Contact" }].map(link => (
            <Link key={link.href} href={link.href} style={{ color: "#555", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.15s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = G; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#555"; }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Info */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <p style={{ fontWeight: 600, fontSize: "0.75rem", color: G, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>Visit Us</p>
          <p style={{ color: "#555", fontSize: "0.875rem", lineHeight: 1.7 }}>2723 S Arlington St<br />Akron, OH 44306</p>
          <a href="tel:+12342089701" style={{ color: "#555", textDecoration: "none", fontSize: "0.875rem", transition: "color 0.15s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = G; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#555"; }}
          >
            (234) 208-9701
          </a>
          <p style={{ color: "#555", fontSize: "0.875rem" }}>Mon – Sun: 9 AM – 11 PM</p>
        </div>
      </div>

      <div style={{ borderTop: "1px solid #161616", padding: "18px 24px", textAlign: "center", color: "#333", fontSize: "0.78rem" }}>
        © {new Date().getFullYear()} Cloud 9 Depot. All rights reserved.
      </div>
    </footer>
  );
}
