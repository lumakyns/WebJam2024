import Image from "next/image";
import { redirect, permanentRedirect } from "next/navigation.js";

export default async function Home() {
  permanentRedirect("main/drops");
}
