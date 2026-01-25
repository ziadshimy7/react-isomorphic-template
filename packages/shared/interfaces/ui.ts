import { ReactNode } from "react";

export type DeviceType = "mobile" | "tablet" | "desktop";

export interface MetaItem {
  name?: string;
  property?: string;
  content?: string;
}

export interface LinkItem {
  href: string;
  rel?: string;
}

export interface ScriptItem {
  src: string;
}

export interface Meta {
  title?: string;
  description?: string;

  meta?: MetaItem[];
  link?: LinkItem[];
  script?: ScriptItem[];
}

export interface UiState {
  deviceType: DeviceType;
  meta: Meta;
}

export const enum WorkspaceTabsName {
  Portal,
  Company,
}

export interface SidebarStructure {
  id: string;
  title: string;
  icon: ReactNode;
  link: string;
}

export interface OptionType {
  value: string;
  title: string;
}
