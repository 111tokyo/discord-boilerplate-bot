import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <iframe
        className="shader-background"
        src="https://www.shadergradient.co/customize?animate=on&axesHelper=off&brightness=1.5&cAzimuthAngle=250&cDistance=1.5&cPolarAngle=140&cameraZoom=12.5&color1=%23809bd6&color2=%23910aff&color3=%23af38ff&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.5&rotationX=0&rotationY=0&rotationZ=140&shader=defaults&type=sphere&uAmplitude=7&uDensity=0.8&uFrequency=5.5&uSpeed=0.3&uStrength=0.4&uTime=0&wireframe=false"
      ></iframe>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Image
          className="fade"
          src="/LimbotText.png"
          width={300}
          height={300}
          alt="limbot"
        />
        <h1 className="fade font-bold text-center sm:w-[700px] pb-4 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
          Limbot est un tout nouveau bot Discord français, développé avec
          Discord.js et TypeScript, offrant une multitude de fonctionnalités
          pour améliorer votre expérience sur Discord.
        </h1>
        <Link href="https://discord.com/oauth2/authorize?client_id=1256906109151875092&response_type=code&redirect_uri=https%3A%2F%2Flimbot.vercel.app%2Fauthentification&scope=identify+guilds">
          <Button>
            <LogIn size={19} className="mr-2" />
            Se connecter
          </Button>
        </Link>
      </div>
    </>
  );
}
