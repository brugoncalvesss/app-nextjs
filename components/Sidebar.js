import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark">
      <div>
        <Link href="/">
          <Image src="/twitter.svg" alt="Twitter Logo" width={48} height={43} />
        </Link>
      </div>
      <ul class="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link href="#" className="nav-link active">
            Página Incial
          </Link>
        </li>
        <li className="nav-item">
          <Link href="#" className="nav-link">
            Explorar
          </Link>
        </li>
        <li className="nav-item">
          <Link href="#" className="nav-link">
            Perfil
          </Link>
        </li>
      </ul>
      <div>Profile</div>
    </div>
  );
}
