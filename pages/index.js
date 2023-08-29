import Head from "next/head";
import AddPokemon from "../components/AddPokemon";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pokemon Collection System</title>
      </Head>

      <main>
        <AddPokemon />
      </main>
    </div>
  );
}