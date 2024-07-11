import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Dashboard() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <Link href="/">
          <Button>Retour</Button>
        </Link>
      </div>
    </>
  );
}
