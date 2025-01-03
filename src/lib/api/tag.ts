import { getAllPosts } from './post'

export function getAllTags() {
  const allPostTags = getAllPosts()
    .flatMap((post) => post.tags)
    .sort()

  return Array.from(new Set(allPostTags))
}
