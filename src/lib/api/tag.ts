import { Tag } from '@/interfaces/tag'
import { TagsData } from '@/data/tags'
import { getAllPosts } from './post'

export function getAllTags() {
  return TagsData
}

export function getTagByName(tagName: string): Tag | undefined {
  return getAllTags().find((tag) => tag.name === tagName)
}

export function getTagCount(tagName: string): number {
  const allTags = getAllPosts().flatMap((post) => post.tags)
  return allTags.filter((tag) => tag.name === tagName).length
}
