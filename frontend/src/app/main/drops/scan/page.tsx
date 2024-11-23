import Scan from "./Scan.jsx";
import { redirect, permanentRedirect } from "next/navigation.js";

export default async function Home() {
  permanentRedirect("main/drops");
}
