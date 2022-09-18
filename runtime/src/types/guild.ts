import { snowflake } from '#src/utils/snowflake'
import Identifiable from './identifiable'

/**
 * @see https://discord.com/developers/docs/resources/guild#guild-object
 */
export default class Guild implements Identifiable {
  public id: snowflake
  public name: string
  public icon: string | undefined
  public icon_hash: string | undefined
  public splash: string | undefined
  public discovery_splash: string | undefined
  public owner_id: snowflake
  public permissions: string
  public region: string | undefined
  public afk_channel_id: snowflake | undefined
  public afk_timeout: number
  public widget_enabled: boolean
  public widget_channel_id: snowflake | undefined
  public verification_level: number
  public default_message_notifications: number
  public explicit_content_filter: number
  public roles: any[] = [] // TODO: Define role type
  public emojis: any[] = [] // TODO: Define emoji type
  public features: any[] = [] // TODO: Define guild feature type
  public mfa_level: number
  public application_id: snowflake | undefined
  public system_channel_id: snowflake | undefined
  public system_channel_flags: number
  public rules_channel_id: snowflake | undefined
  public max_presences: number | undefined
  public max_members: number
  public vanity_url_code: string | null
  public description: string | null
  public banner: string | null
  public premium_tier: number
  public premium_subscription_count: number
  public preferred_locale: string
  public public_updates_channel_id: snowflake
  public max_video_channel_users: number
  public approximate_member_count: number
  public approximate_presence_count: number
  public welcome_screen: any // TODO: Define welcome screen object
  public nsfw_level: number
  public stickers: any[] = [] // TODO: Define sticker type
  public premium_progress_bar_enabled: boolean
}
