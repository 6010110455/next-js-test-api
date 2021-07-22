import Head from "next/head";
import "tailwindcss/tailwind.css";
import axios from "axios";
import _ from "lodash";
import { API_SERVER } from "./config";

function Home({ room }) {
  const { rows } = room;
  return (
    <div>
      <section className="pt-8 px-4">
        <div className="flex flex-wrap -mx-4">
          {_.map(rows, (row) => (
            <div>{row.name}</div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;

export async function getStaticProps() {
  const res = await axios.get(API_SERVER + "/room-type/");
  const room = await res.data;

  return { props: { room }, revalidate: 1 };
}
