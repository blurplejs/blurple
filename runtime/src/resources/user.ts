import { snowflake } from '#src/utils/snowflake'
import { faker } from '@faker-js/faker'
import Identifiable from '../types/identifiable'

/**
 * @see https://discord.com/developers/docs/resources/user#user-object-user-flags
 */
export enum USER_FLAGS {
  STAFF = 1 << 0,
  PARTNER = 1 << 1,
  HYPESQUAD = 1 << 2,
  BUG_HUNTER_LEVEL_1 = 1 << 3,
  HYPESQUAD_ONLINE_HOUSE_1 = 1 << 6,
  HYPESQUAD_ONLINE_HOUSE_2 = 1 << 7,
  HYPESQUAD_ONLINE_HOUSE_3 = 1 << 8,
  PREMIUM_EARLY_SUPPORTER = 1 << 9,
  TEAM_PSEUDO_USER = 1 << 10,
  BUG_HUNTER_LEVEL_2 = 1 << 14,
  VERIFIED_BOT = 1 << 16,
  VERIFIED_DEVELOPER = 1 << 17,
  CERTIFIED_MODERATOR = 1 << 18,
  BOT_HTTP_INTERACTIONS = 1 << 19,
}

/**
 * @see https://discord.com/developers/docs/resources/user#user-object-premium-types
 */
export enum PREMIUM_TYPES {
  NONE = 0,
  NITRO_CLASSIC = 1,
  NITRO = 2,
}

/**
 * @see https://discord.com/developers/docs/resources/user#user-object
 */
export default class User implements Identifiable {
  readonly id: snowflake
  readonly username: string
  readonly discriminator: string
  readonly avatar: string | undefined
  readonly bot: boolean
  readonly system: boolean
  readonly mfa_enabled: boolean
  readonly banner: string | undefined
  readonly accent_color: number | undefined
  readonly locale: string
  readonly verified: boolean
  readonly email: string
  readonly flags: number
  readonly premium_type: number
  readonly public_flags: number

  /**
   * Returns a token if this user is a bot. This token can be used to authenticate
   * a bot user with the API.
   *
   * @returns a token that can be used for authentication
   */
  get token (): string | null {
    if (!this.bot) return null

    // Use the snowflake as a seed to generate pseudo-random tokens while keeping
    // them deterministic for identical users. We calculate the modulo of the maximum
    // safe JS integer on the Snowflake, as it is originally larger than representable
    // numbers
    const seed = (BigInt(this.id) % BigInt(Number.MAX_SAFE_INTEGER))

    faker.seed(Number(seed))
    const token = faker.random.alphaNumeric(59, { casing: 'mixed' })
    faker.seed()

    return token
  }
}
