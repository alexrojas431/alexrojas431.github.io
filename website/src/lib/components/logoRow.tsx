import Image from "next/image";
import Link from "next/link";
import { LogoInterface } from "@/interface/logoInterface";
import { Fragment } from "react";

interface Props {
  readonly logoData: LogoInterface[];
}

const LogoRow = (p: Props) => {
  const credits = {
    fontSize: "75%",
    fontStyle: "italic",
  };

  return (
    <Fragment>
      {p.logoData.map((logo: LogoInterface) => (
        <span key={logo.id}>
          <Link href={logo.link}>
            <Image
              src={logo.image.src}
              alt={logo.image.alt}
              width={50}
              height={50}
            />
          </Link>
          <br />
          {logo.description}
          {logo.image.credits && logo.image.creditLink && (
            <Fragment>
              <br />
              <Link href={logo.image.creditLink} style={credits}>
                {logo.image.credits}
              </Link>
            </Fragment>
          )}
        </span>
      ))}
    </Fragment>
  );
};

export default LogoRow;
