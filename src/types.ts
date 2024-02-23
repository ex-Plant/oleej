export type ACFPostType = {
  blog_right_side_foto_id: number;
  mobile_foto_id: number;
  blog_desktop_foto_id: number;
  category: string;
  post_content: string;
  post_description: string;
  slug: string;
  title: string;
  excerpt: string;
};
export type PostResponse = {
  data: {
    post: PostType;
  };
}

export type PostType = {
  id: string;
  title: string;
  slug: string;
  date: string;
  blogPost: BlogPost;
}

export type BlogPost = {
    blogDesktopFotoId: {
      node: {
        altText: string;
        mediaItemUrl: string;
      };
    };
    blogRightSideFotoId: {
      node: {
        altText: string;
        mediaItemUrl: string;
      };
    };
    blogSecondFotoId: {
      node: {
        mediaItemUrl: string;
        altText: string;
      };
    };
    blogThirdFotoId: {
      node: {
        altText: string;
        mediaItemUrl: string;
      };
    };
    postContent: string;
    postContentSecond: string;
    postContentThird: string;
    postDescription: string;
    title: string;
    category: string;
}

export type ImageType = {
  caption: {
    rendered: string;
  };
  alt_text: string;
  id: number;
  link: string;
  media_details: {
    file: string;
    height: number;
    width: number;
  };
  source_url: string;
};

export type CommentType = {
  author_name: string;
  content: {
    rendered: string;
  };
  id: number;
  parent: number;
};

export type LoadingType = 'lazy' | 'eager';
