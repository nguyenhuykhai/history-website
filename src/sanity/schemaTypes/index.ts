import { type SchemaTypeDefinition } from 'sanity'
import { terms } from '@/sanity/schemaTypes/terms'
import { leader } from '@/sanity/schemaTypes/leader'
import { units } from '@/sanity/schemaTypes/units'
import { news } from '@/sanity/schemaTypes/news'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [terms, leader, units, news],
}