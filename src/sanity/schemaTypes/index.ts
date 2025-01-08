import { type SchemaTypeDefinition } from 'sanity'
import { terms } from '@/sanity/schemaTypes/terms'
import { leader } from '@/sanity/schemaTypes/leader'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [terms, leader],
}
