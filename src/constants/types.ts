export type ContentBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "ordered-list";
      items: ContentListItem[];
    }
  | {
      type: "unordered-list";
      items: ContentListItem[];
    };

export type ContentListItem = {
  title?: string;
  text: string;
};

export type ProjectContentSection = {
  title: string;
  blocks: ContentBlock[];
};

export type ProjectLink = {
  label: string;
  changed: string;
  href: string;
  isExternal: true;
};
