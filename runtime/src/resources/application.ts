import { snowflake } from '#src/utils/snowflake'
import Identifiable from '../types/identifiable'
import { Team } from '../types/teams'

/**
 * @see https://discord.com/developers/docs/resources/application#application-object-application-flags
 */
export enum ApplicationFlags {
  GATEWAY_PRESENCE = 1 << 12,
  GATEWAY_PRESENCE_LIMITED = 1 << 13,
  GATEWAY_GUILD_MEMBERS = 1 << 14,
  GATEWAY_GUILD_MEMBERS_LIMITED = 1 << 15,
  VERIFICATION_PENDING_GUILD_LIMIT = 1 << 16,
  EMBEDDED = 1 << 17,
  GATEWAY_MESSAGE_CONTENT = 1 << 18,
  GATEWAY_MESSAGE_CONTENT_LIMITED = 1 << 19,
  APPLICATION_COMMAND_BADGE = 1 << 23,
}

/**
 * @see https://discord.com/developers/docs/resources/application#install-params-object
 */
export interface ApplicationInstallParamsObject {
  scopes: string[]
  permissions: string
}

/**
 * @see https://discord.com/developers/docs/resources/application
 */
export default class Application implements Identifiable {
  public id: snowflake
  public name: string
  public icon: string | null
  public description: string
  public rpc_origins?: string[]
  public bot_public: boolean
  public bot_require_code_grant: boolean
  public terms_of_service_url?: string
  public privacy_policy_url?: string
  public owner?: snowflake
  public summary: '' = ''
  public verify_key: string
  public team: Team | null
  public guild_id?: snowflake
  public primary_sku_id?: snowflake
  public slug?: string
  public over_image?: string
  public flags?: ApplicationFlags
  public tags?: string[]
  public install_params?: ApplicationInstallParamsObject
  public custom_install_url?: string
}
