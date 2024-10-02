import Image from "next/image";
import { Open_Sans } from "next/font/google";
import { useEffect, useState } from "react";
import { GeistSans } from "geist/font/sans";
import { env } from "~/env";
import logo_light from "~/svg/vACCLogo_en.svg";

export const OpenSans = Open_Sans({ subsets: ["latin-ext"] });

export default function App({ Component, pageProps }) {
  const [show, setShow] = useState(!env.NEXT_PUBLIC_PROTECTED);

  useEffect(() => {
    if (window.localStorage.getItem("secret") === env.NEXT_PUBLIC_PASSWORD)
      setShow(true);
  }, []);

  if (show) {
    return (
      <div className={GeistSans.className}>
        <Component {...pageProps} />
        <noscript>
          If you are so afraid that a wiki page is going to steal your data,
          just get out of here lol. Enable your JavaScript too ffs
        </noscript>
      </div>
    );
  }

  return (
    <div
      className={GeistSans.className}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "95dvh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
        <Image src={logo_light} alt="Latvia vACC" width="320" />
      </div>
      <p
        style={{
          maxWidth: "600px",
          paddingTop: "2rem",
        }}
      >
        This is a project under construction by the Latvia vACC ATC Training
        Department and Technical Department. Latvia vACC Knowledgebase is to
        become a single source of documentation, SOPs, and other educational
        information both for controllers and pilots. If you have any questions
        or would like to request early access, contact the vACC Technical
        Department:{" "}
        <a
          href="mailto:tech@lv-vacc.org"
          style={{
            color: "#9d2235",
          }}
        >
          tech@lv-vacc.org
        </a>
      </p>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          paddingTop: "2rem",
        }}
        onSubmit={(e) => {
          e.preventDefault();

          // @ts-expect-error Ignore types, it will work
          const formData = new FormData(e.target);
          const secret = formData.get("secret");
          // @ts-expect-error Ignore types, it will work
          window.localStorage.setItem("secret", secret);
          if (secret === env.NEXT_PUBLIC_PASSWORD) setShow(true);
        }}
      >
        <input
          type="text"
          name="secret"
          placeholder="Early Access Password"
          style={{
            border: "solid 2px #212121",
            borderRadius: "10px",
            padding: "0.5rem",
          }}
        />
        <button
          type="submit"
          style={{
            border: "solid 2px #212121",
            padding: "0.5rem",
            borderRadius: "10px",
          }}
        >
          {"->"}
        </button>
      </form>
      <noscript>
        If you are so afraid that a wiki page is going to steal your data, just
        get out of here lol. Enable your JavaScript too ffs
      </noscript>
    </div>
  );
}
