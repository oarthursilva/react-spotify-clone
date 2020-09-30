export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type AlbumType = {
  id: string;
  name: string;
  headline: string;
  imageURI: string;
  by: string;
  likes: number;
}

export type SongType = {
  id: string;
  imageURI: string;
  title: string;
  artist: string;
}
