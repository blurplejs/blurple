import { snowflake } from '#src/utils/snowflake'
import Identifiable from '../types/identifiable'

/**
 * @see https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-types
 */
export enum STICKER_TYPE {
  STANDARD = 1,
  GUILD = 2,
}

/**
 * @see https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-format-types
 */
export enum STICKER_FORMAT_TYPE {
  PNG = 1,
  APNG = 2,
  LOTTIE = 3,
}

/**
 * @see https://discord.com/developers/docs/resources/sticker
 */
export default class Sticker implements Identifiable {
  public id: snowflake
  public pack_id: snowflake
  public name: string
  public description: string | null
  public tags: string
  public asset: '' = ''
  public type: STICKER_TYPE
  public format_type: STICKER_FORMAT_TYPE
  public available: boolean
  public guild_id: snowflake
  public user: snowflake
  public sort_value: number
}
