import type { NextPage } from "next";
import { useTheme } from "next-themes";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Input from "../components/radix/Input";
import Select from "../components/radix/Select";

const Home: NextPage = () => {
  const options = [
    {
      label: "Google",
      value: "http://www.google.com",
    },
    {
      label: "Bing",
      value: "http://www.bing.com",
    },
    {
      label: "DuckDuckGo",
      value: "http://www.duckduckgo.com",
    },
    {
      label: "You.com",
      value: "https://you.com",
    },
  ];
  const [search, setSearch] = useState("");
  const { theme } = useTheme();
  const [value, setValue] = useState("http://www.bing.com");

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      window.open(`${value}/search?q=${search}`, "_blank");
    }
  };
  return (
    <>
      <Head>
        <title>The fastest way to take action via search</title>
        <meta
          name="description"
          content="The fastest way to take action via search"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={theme}>
        <div className="p-5 w-full">
          <Link href={"/"}>
            <div className="cursor-pointer mx-auto w-fit">
              <Image
                src={
                  theme === "dark" ? "/find-logo-white.svg" : "/find-logo.svg"
                }
                width={96}
                height={40}
                alt="logo"
              />
            </div>
          </Link>
        </div>
        <div className="mb-3 md:w-96 mx-auto">
          <h1 className="mt-12 text-3xl text-center leading-normal font-extrabold text-gray-700">
            The fastest way to take action via search
          </h1>
          <div className="flex">
            <Select options={options} value={value} onChange={setValue} />
            <Input
              type="text"
              className="w-full ml-2"
              value={search}
              onChange={setSearch}
              onKeyUp={handleKeyUp}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
