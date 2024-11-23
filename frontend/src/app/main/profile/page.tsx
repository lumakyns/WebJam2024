import Image from "next/image";
import Header from "./Header.tsx";
import { redirect, permanentRedirect } from "next/navigation.js";

export default async function Home() {
  permanentRedirect("main/drops");
}
