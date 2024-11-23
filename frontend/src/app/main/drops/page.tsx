import Image from "next/image";
import FadeCard from "./Fadecard";
import { redirect, permanentRedirect } from "next/navigation.js";

export default async function Home() {
  return (
    <>
      <div>
        <div className="py-4"></div>

        <div className="flex px-2">
          <FadeCard
            img="../dropimg/jjkdrop.png"
            title="JJK Shark Drop"
            subtitle="8:30 PM 11/23"
            p="Oh_My_Petr"
          />

          <FadeCard
            img="../dropimg/pokemondrop.png"
            title="Pokemon Drop"
            subtitle="4:30 PM 11/24"
            p="Oh_My_Petr"
          />

          <FadeCard
            img="../dropimg/waterdrop.png"
            title="Water Droplet Drop"
            subtitle="5:30 PM 11/24"
            p="Watr_Petr"
          />

          <FadeCard
            img="../dropimg/peekdrop.png"
            title="Peeking Petr Drop"
            subtitle="9:30 PM 11/24"
            p="Silly_Petr"
          />
        </div>
      </div>

      <div>
        <div className="py-4"></div>

        <div className="flex px-2">
          <FadeCard
            img="../dropimg/cabbitdrop.png"
            title="Cabbit! Drop"
            subtitle="4:30 PM 11/25"
            p="Cabbit_petr"
          />

          <FadeCard
            img="../dropimg/capoodrop.png"
            title="Capoo Drop"
            subtitle="6:30 PM 11/25"
            p="Wow_petr"
          />

          <FadeCard
            img="../dropimg/chunkysquirreldrop.png"
            title="Chunky Squirrel Drop"
            subtitle="5:30 PM 11/26"
            p="Squirrl_Petr"
          />

          <FadeCard
            img="../dropimg/puddingdrop.png"
            title="Pudding Petr Drop"
            subtitle="9:30 PM 11/29"
            p="Cabbit_petr"
          />

          <FadeCard
            img="../dropimg/sanjidrop.png"
            title="Sanji Petr Drop"
            subtitle="4:30 PM 11/30"
            p="Oh_My_Petr"
          />
        </div>
      </div>

      <div>
        <div className="py-4"></div>

        <div className="flex px-2">
          <FadeCard
            img="../dropimg/popsdrop.png"
            title="Pops Petr Drop"
            subtitle="8:30 PM 11/23"
            p="Anime_Petr"
          />

          <FadeCard
            img="../dropimg/catdrop.png"
            title="Cat Petr Drop"
            subtitle="1:20 PM 12/1"
            p="Oh_My_Petr"
          />

          <FadeCard
            img="../dropimg/fireboylavagirldrop.png"
            title="Fireboy + Watergirl Drop"
            subtitle="5:30 PM 12/2"
            p="Watr_Petr"
          />

          <FadeCard
            img="../dropimg/pikmindrop.png"
            title="Pikmin Petr Drop"
            subtitle="9:30 PM 12/3"
            p="Silly_Petr"
          />

          <FadeCard
            img="../dropimg/totorodrop.png"
            title="Totoro Drop"
            subtitle="4:30 PM 12/04"
            p="Totoro_Petr"
          />
        </div>
      </div>
    </>
  );
}
