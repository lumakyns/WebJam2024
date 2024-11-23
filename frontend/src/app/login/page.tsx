import Image from "next/image";
import Logincard from "./Logincard";
import { redirect, permanentRedirect } from "next/navigation.js";

export default async function Home() {
  return <Logincard />;
}
