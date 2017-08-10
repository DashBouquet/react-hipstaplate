const Marvel = `
  type Marvel {
    offset: Int
    limit: Int
    total: Int
    count: Int
    results: [Character]
  }

  type Character {
    id: Int
    name: String
    description: String
    thumbnail: Thumbnail
  }

  type Thumbnail {
    path: String
    extension: String
  }

  input MarvelParams {
    name: String
    nameStartsWith: String
    limit: Int
    offset: Int
  }
`;

export { Marvel };
