import React from "react";
import {
  Button,
  Heading,
  Pane,
  RadioGroup,
  Select,
  Textarea,
  toaster,
} from "evergreen-ui";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { laughGenerator } from "../lib/laugh-gen";
import { CopyToClipboard } from "react-copy-to-clipboard";
import GithubCorner from "react-github-corner";

export default function Home() {
  const [age, setAge] = React.useState(15);
  const [intensity, setIntensity] = React.useState(2);
  const [laugh, setLaugh] = React.useState("");
  const [copied, setCopied] = React.useState(false);

  const clickGenerateHandler = () => {
    setLaugh(laughGenerator(age, intensity));
    setCopied(false);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Brazilian Laugh Generator</title>
        <meta name="description" content="Laugh like a true Brazilian" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <Heading>🇧🇷 Brazilian Laugh Generator 🇧🇷</Heading>
        <div
          style={{
            width: "50%",
            alignItems: "center",
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "row",
            marginTop: 24,
          }}
        >
          {/* LaughGen options */}
          {/* Age */}
          <div className="slidecontainer">
            <p>Age: {age}</p>
            <input
              type="range"
              min="12"
              max="80"
              value={age.toString()}
              onChange={(e) => {
                setAge(parseInt(e.target.value));
              }}
              className="slider"
              id="age-slider"
            />
          </div>
          {/* Intensity */}
          <div className="slidecontainer">
            <p>Intensity: {intensity}</p>
            <input
              type="range"
              min="1"
              max="10"
              value={intensity.toString()}
              onChange={(e) => setIntensity(parseInt(e.target.value))}
              className="slider"
              id="intensity-slider"
            />
          </div>
          <div>
            <Button onClick={clickGenerateHandler}>Generate 🇧🇷</Button>
          </div>
        </div>

        {/* Generate result */}
        <Pane elevation={1} width="50%" padding="16px" marginTop="32px">
          <p style={{ overflowWrap: "anywhere" }}>{laugh}</p>
        </Pane>

        <CopyToClipboard
          text={laugh}
          onCopy={() => {
            setCopied(true);
            toaster.notify("Copied to clipboard");
          }}
        >
          <Button>Copy to clipboard</Button>
        </CopyToClipboard>

        {/* Insert laugh */}
        <div></div>
      </main>

      <footer className={styles.footer}>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
      </footer>
      <GithubCorner href="https://github.com/fercgomes/brlaughgen" />
    </div>
  );
}
