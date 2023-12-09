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


export type AboutMePageData = {
  acf: {
    main_text: string;
    txt_under_pictures: string;
    main_foto_id: number;
    secondary_foto_id: number;
    small_foto_id: number;
  }
}[];

export type AboutMePageProps = {
  mainFoto: ImageType;
  secondary_foto: ImageType;
  small_foto: ImageType;
  main_text: string;
  txt_under_pictures: string,

};
