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
    }
  | {
      type: "table";
      columns: string[];
      rows: string[][];
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

export type ProjectVideo = {
  src: string;
  poster: string;
  category: string;
  title: string;
};
