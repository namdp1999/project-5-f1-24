import { Url } from "next/dist/shared/lib/router/router";
import { ReactNode } from "react";

export interface IMenuLink {
  icon: ReactNode,
  title: String,
  link: Url,
  logged?: Boolean
}