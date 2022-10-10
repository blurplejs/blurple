import { snowflake } from '#src/utils/snowflake'
import Identifiable from './identifiable'

/**
 * @see https://discord.com/developers/docs/resources/emoji
 */
export default class Emoji implements Identifiable {
  public id: snowflake
  public name: string
  public user: snowflake
  public require_colons: boolean
  public managed: boolean
  public animated: boolean
}
