import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="navbar bg-neutral text-neutral-content justify-between">
        <Link href="/">
          <div className="btn btn-ghost normal-case text-xl">Dokke</div>
        </Link>
        <Link href="/documents">
          <div className="text-whhite text-md"> Skapa dokument</div>
        </Link>
      </div>
    </header>
  );
}
