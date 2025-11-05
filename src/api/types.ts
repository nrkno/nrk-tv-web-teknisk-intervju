export type Headliner = ProgramHeadliner | SeriesHeadliner;

type Image = {
  uri: string;
  width: number;
};

export interface ProgramHeadliner {
  contentId: string;
  title: string;
  type: 'program';
  subTitle: string;
  images: Image[];
  _links: {
    self: {
      href: string;
    };
    fargerik?: {
      href: string;
    };
    programs: {
      href: string;
    };
    playback: {
      href: string;
    };
    trailer?: {
      name?: string;
      href: string;
    };
  };
}

export interface SeriesHeadliner {
  contentId: string;
  title: string;
  type: 'series';
  subTitle: string;
  images: Image[];
  _links: {
    self: {
      href: string;
    };
    fargerik?: {
      href: string;
    };
    series: {
      href: string;
    };
    seriespage: {
      href: string;
    };
    trailer?: {
      name: string;
      href: string;
    };
  };
}
