import { snowflake } from '#src/utils/snowflake'
import Identifiable from './identifiable'

/**
 * @see https://discord.com/developers/docs/resources/guild#guild-object-default-message-notification-level
 */
export enum GuildDefaultMessageNotificationLevel {
  ALL_MESSAGES = 0,
  ONLY_MENTIONS = 1,
}

/**
 * @see https://discord.com/developers/docs/resources/guild#guild-object-explicit-content-filter-level
 */
export enum GuildExplicitContentFilterLevel {
  DISABLED = 0,
  MEMBERS_WITHOUT_ROLES = 1,
  ALL_MEMBERS = 2,
}

/**
 * @see https://discord.com/developers/docs/resources/guild#guild-object-mfa-level
 */
export enum GuildMFALevel {
  NONE = 0,
  ELEVATED = 1,
}

/**
 * @see https://discord.com/developers/docs/resources/guild#guild-object-verification-level
 */
export enum GuildVerificationLevel {
  NONE = 0,
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
  VERY_HIGH = 4,
}

/**
 * @see https://discord.com/developers/docs/resources/guild#guild-object-guild-nsfw-level
 */
export enum GuildNSFWLevel {
  DEFAULT = 0,
  EXPLICIT = 1,
  SAFE = 2,
  AGE_RESTRICTED = 3,
}

/**
 * @see https://discord.com/developers/docs/resources/guild#guild-object-premium-tier
 */
export enum GuildPremiumTier {
  NONE = 0,
  TIER_1 = 1,
  TIER_2 = 2,
  TIER_3 = 3,
}

/**
 * @see https://discord.com/developers/docs/resources/guild#guild-object-system-channel-flags
 */
export enum GuildSystemChannelFlags {
  SUPPRESS_JOIN_NOTIFICATIONS = 1 << 0,
  SUPPRESS_PREMIUM_SUBSCRIPTIONS = 1 << 1,
  SUPPRESS_GUILD_REMINDER_NOTIFICATIONS = 1 << 2,
  SUPPRESS_JOIN_NOTIFICATION_REPLIES = 1 << 3,
}

/**
 * @see https://discord.com/developers/docs/resources/guild#guild-object-guild-features
 */
export type GuildFeatures = [
  'ANIMATED_BANNER',
  'ANIMATED_ICON',
  'AUTO_MODERATION',
  'BANNER',
  'COMMUNITY',
  'DISCOVERABLE',
  'FEATURABLE',
  'INVITES_DISABLED',
  'INVITE_SPLASH',
  'MEMBER_VERIFICATION_GATE_ENABLED',
  'MONETIZATION_ENABLED',
  'MORE_STICKERS',
  'NEWS',
  'PARTNERED',
  'PREVIEW_ENABLED',
  'PRIVATE_THREADS',
  'ROLE_ICONS',
  'TICKETED_EVENTS_ENABLED',
  'VANITY_URL',
  'VERIFIED',
  'VIP_REGIONS',
  'WELCOME_SCREEN_ENABLED',
]

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
  public region: string | undefined
  public afk_channel_id: snowflake | undefined
  public afk_timeout: number
  public widget_enabled: boolean
  public widget_channel_id: snowflake | undefined
  public verification_level: GuildVerificationLevel
  public default_message_notifications: GuildDefaultMessageNotificationLevel
  public explicit_content_filter: GuildExplicitContentFilterLevel
  public roles: snowflake[] = []
  public emojis: snowflake[] = []
  public features: GuildFeatures[] = []
  public mfa_level: GuildMFALevel
  public application_id: snowflake | undefined
  public system_channel_id: snowflake | undefined
  public system_channel_flags: GuildSystemChannelFlags
  public rules_channel_id: snowflake | undefined
  public max_presences: number | undefined
  public max_members: number
  public vanity_url_code: string | null
  public description: string | null
  public banner: string | null
  public premium_tier: GuildPremiumTier
  public premium_subscription_count: number
  public preferred_locale: string
  public public_updates_channel_id: snowflake
  public max_video_channel_users: number
  public approximate_member_count: number
  public approximate_presence_count: number
  public welcome_screen: any // TODO: Define welcome screen object
  public nsfw_level: GuildNSFWLevel
  public stickers: snowflake[] = []
  public premium_progress_bar_enabled: boolean
}
