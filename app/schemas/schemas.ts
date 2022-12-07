import { z } from 'zod'

export const TabsKeysSchema = z.union([
  z.literal('people'),
  z.literal('films'),
  z.literal('planets'),
])

const UnknownSchema = z.union([z.literal('unknown'), z.literal('n/a')])
const GenderSchema = z.union([
  z.literal('male'),
  z.literal('female'),
  UnknownSchema,
])

export const PersonSchema = z
  .object({
    birth_year: z.string(),
    eye_color: z.string(),
    films: z.array(z.string()),
    gender: GenderSchema,
    hair_color: z.string(),
    height: z.string(),
    homeworld: z.string(),
    mass: z.string(),
    name: z.string(),
    skin_color: z.string(),
    created: z.string(),
    edited: z.string(),
    species: z.array(z.string()),
    starships: z.array(z.string()),
    url: z.string(),
    vehicles: z.array(z.string()),
  })
  .strict()

export const FilmSchema = z
  .object({
    characters: z.array(z.string()),
    created: z.string(),
    director: z.string(),
    edited: z.string(),
    episode_id: z.number(),
    opening_crawl: z.string(),
    planets: z.array(z.string()),
    producer: z.string(),
    release_date: z.string(),
    species: z.array(z.string()),
    starships: z.array(z.string()),
    title: z.string(),
    url: z.string(),
    vehicles: z.array(z.string()),
  })
  .strict()

export const PlanetSchema = z
  .object({
    climate: z.string(),
    created: z.string(),
    diameter: z.string(),
    edited: z.string(),
    films: z.array(z.string()),
    gravity: z.string(),
    name: z.string(),
    orbital_period: z.string(),
    population: z.string(),
    residents: z.array(z.string()),
    rotation_period: z.string(),
    surface_water: z.string(),
    terrain: z.string(),
    url: z.string(),
  })
  .strict()

export const SubjectsSchema = z.union([PersonSchema, FilmSchema, PlanetSchema])

export const APIResponseSchema = z.object({
  count: z.number(),
  next: z.string().nullable(),
  previous: z.string().nullable(),
  results: z.array(SubjectsSchema),
})

export const ExtendedAPIResponseSchema = APIResponseSchema.merge(
  z.object({
    key: TabsKeysSchema,
  })
)

export const ExtendedAPIResponseArraySchema = z.array(ExtendedAPIResponseSchema)
