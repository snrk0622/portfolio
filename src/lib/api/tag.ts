import { Tag } from '@/interfaces/tag'
import { TagsData } from '@/data/tags'
import { getAllPosts } from './post'

export function getAllTags() {
  const allPostTags = getAllPosts()
    .flatMap((post) => post.tags)
    .sort()

  return Array.from(new Set(allPostTags))
}

export function getTagByName(tagName: string): Tag | undefined {
  return TagsData.find((tag) => tag.name === tagName)
}
