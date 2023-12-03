export type ACFPostType = {
  blog_right_side_foto: number;
  category: string;
  foto_id: number;
  hero_desktop_id: number;
  post_content: string;
  post_description: string;
  slug: string;
  title: string;
};

export type PostType = {
  acf: ACFPostType;
  author: number;
  categories: number[];
  date: Date;
  id: number;
  modified: string;
  type: string;
};


export type ImageType = {
  caption: {
    rendered: string;
  };
  alt_text: string,
  id: number;
  link: string;
  media_details: {
    file: string;
    height: number;
    width: number;
  };
  source_url: string;
};
