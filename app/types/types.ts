import type { z } from 'zod'
import type {
  ExtendedAPIResponseSchema,
  FilmSchema,
  PersonSchema,
  PlanetSchema,
  SubjectsSchema,
  TabsKeysSchema,
} from '~/schemas'

export type TabsKeys = z.infer<typeof TabsKeysSchema>

export type Person = z.infer<typeof PersonSchema>
export type Film = z.infer<typeof FilmSchema>
export type Planet = z.infer<typeof PlanetSchema>

export type Subjects = z.infer<typeof SubjectsSchema>

/* export type APIResponse<T> = Omit<
  z.infer<typeof APIResponseSchema>,
  'results'
> & {
  results: T[]
} */

export type ExtendedAPIResponse = z.infer<typeof ExtendedAPIResponseSchema>
