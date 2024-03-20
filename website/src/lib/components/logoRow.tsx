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
        <div key={logo.id}>
          <Link href={logo.link}>
            <Image src={logo.image} alt={logo.alt} width={50} height={50} />
          </Link>
          <br />
          {logo.description}
          {logo.credit && <span style={credits}>{logo.credit}</span>}
        </div>
      ))}
    </Fragment>
  );
};

export default LogoRow;
