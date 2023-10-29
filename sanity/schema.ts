import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import pageInfo from './schemas/pageInfo'
import author from './schemas/author'
import experience from './schemas/experience'
import skill from './schemas/skill'
import project from './schemas/project'
import social from './schemas/social'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, experience, skill, project, social],
}
