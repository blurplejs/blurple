import { snowflake } from '#src/utils/snowflake'
import Identifiable from '../types/identifiable'

/**
 * @see https://discord.com/developers/docs/resources/channel#channel-object-channel-types
 */
export enum ChannelType {
  GUILD_TEXT = 0,
  DM = 1,
  GUILD_VOICE = 2,
  GROUP_DM = 3,
  GUILD_CATEGORY = 4,
  GUILD_ANNOUNCEMENT = 5,
  ANNOUNCEMENT_THREAD = 10,
  PUBLIC_THREAD = 11,
  PRIVATE_THREAD = 12,
  GUILD_STAGE_VOICE = 13,
  GUILD_DIRECTORY = 14,
  GUILD_FORUM = 15,
}

/**
 * @see https://discord.com/developers/docs/resources/channel#channel-object-video-quality-modes
 */
export enum ChannelVideoQualityMode {
  AUTO = 1,
  FULL = 2,
}

/**
 * @see https://discord.com/developers/docs/resources/channel#channel-object-channel-flags
 */
export enum ChannelFlag {
  PINNED = 1 << 1,
  REQUIRE_TAG = 1 << 4,
}

/**
 * @see https://discord.com/developers/docs/resources/channel#channel-object-sort-order-types
 */
export enum ChannelSortOrderType {
  LATEST_ACTIVITY = 0,
  CREATION_DATE = 1,
}

/**
 * @see https://discord.com/developers/docs/resources/channel#overwrite-object
 */
export interface OverwriteObject {
  id: snowflake
  type: 0 | 1
  allow: string
  deny: string
}

/**
 * @see https://discord.com/developers/docs/resources/channel
 */
export default class Channel implements Identifiable {
  public id: snowflake
  public type: ChannelType
  public guild_id?: snowflake
  public position?: number
  public permission_overwrites: OverwriteObject[] = []
  public name?: string | null
  public topic?: string | null
  public nsfw?: boolean
  public last_message_id: snowflake | null
  public bitrate?: number
  public user_limit?: number
  public rate_limit_per_user?: number
  public recipients: snowflake[]
  public icon?: string | null // TODO: Define icon hash
  public owner_id?: snowflake
  public application_id?: snowflake
  public parent_id?: snowflake | null
  public last_pin_timestamp?: Date | null
  public rtc_region?: string | null // TODO: Define voice region type
  public video_quality_mode?: ChannelVideoQualityMode
  public message_count?: number
  public member_count?: number
  public thread_metadata?: object // TODO: Define thread matadata object
  public member?: object // TODO: Define thread member object
  public default_auto_archive_duration?: number
  public permissions?: string
  public flags?: ChannelFlag
  public total_message_sent?: number
  public available_tags?: object[] // TODO: Define tag object type
  public applied_tags?: snowflake[]
  public default_reaction_emoji?: object | null // TODO: Define default reaction object
  public default_thread_rate_limit_per_user?: number
  public default_sort_order?: ChannelSortOrderType | null
}
