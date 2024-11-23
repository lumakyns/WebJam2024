import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import { redirect, permanentRedirect } from "next/navigation.js";

export default async function Home() {
  return (
    <>
      <div className="flex py-2 px-2">
        <InteractiveCard img="../petrs/2019_petr.jpg" text="2019 Petr" />
        <InteractiveCard img="../petrs/anime_petr.jpg" text="Anime Petr" />
        <InteractiveCard
          img="../petrs/basketball_petr.jpg"
          text="Basketball Petr"
        />
        <InteractiveCard img="../petrs/beach_petr.jpg" text="Beach Petr" />
        <InteractiveCard img="../petrs/blonde_petr.jpg" text="Blonde Petr" />
      </div>

      <div className="flex py-2 px-2">
        <InteractiveCard img="../petrs/bunny_petr.jpg" text="Bunny Petr" />
        <InteractiveCard img="../petrs/cupid_pter.jpg" text="Cupid Petr" />
        <InteractiveCard img="../petrs/family_petr.jpg" text="Family Petr" />
        <InteractiveCard img="../petrs/frog_petr.jpg" text="Frog Petr" />
        <InteractiveCard img="../petrs/grad_petr.jpg" text="Grad Petr" />
      </div>

      <div className="flex py-2 px-2">
        <InteractiveCard img="../petrs/ice_petr.jpg" text="Ice Petr" />
        <InteractiveCard img="../petrs/magmar_petr.jpg" text="Magmar Petr" />
        <InteractiveCard img="../petrs/pumpkin_petr.jpg" text="Pumpkin Petr" />
        <InteractiveCard img="../petrs/santa_petr.jpg" text="Santa Petr" />
        <InteractiveCard
          img="../petrs/shamrock_petr.jpg"
          text="Shamrock Petr"
        />
      </div>
    </>
  );
}
