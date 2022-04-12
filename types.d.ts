export interface APILogin {
  user: User;
  transformedGuilds: TransformedGuild[];
}

export interface TransformedGuild {
  afkChannelId: null;
  afkTimeout: number;
  applicationId: null;
  approximateMemberCount: null;
  approximatePresenceCount: null;
  available: boolean;
  banner: null;
  channels: Channel[];
  defaultMessageNotifications: DefaultMessageNotifications;
  description: null;
  widgetEnabled?: boolean;
  explicitContentFilter: ExplicitContentFilter;
  icon: null | string;
  id: string;
  joinedTimestamp: number | null;
  mfaLevel: MfaLevel;
  name: string;
  ownerId: null | string;
  partnered: boolean;
  preferredLocale: Locale;
  premiumSubscriptionCount: number | null;
  premiumTier: MfaLevel;
  roles: Role[];
  splash: null;
  systemChannelId: null | string;
  vanityURLCode: null;
  verificationLevel: MfaLevel;
  verified: boolean;
  permissions: string;
  manageable: boolean;
  evieIsIn: boolean;
  features?: string[];
}

export interface Channel {
  id: string;
  type: Type;
  guildId: string;
  name: string;
  rawPosition: number;
  parentId: null | string;
  permissionOverwrites: Array<Array<PermissionOverwriteClass | string>>;
  topic?: null | string;
  nsfw?: boolean;
  rateLimitPerUser?: number;
  createdTimestamp: number;
  bitrate?: number;
  userLimit?: number;
  archived?: boolean;
  archivedTimestamp?: number;
}

export interface PermissionOverwriteClass {
  id: string;
  type: number;
  allow: string;
  deny: string;
}

export enum Type {
  GuildCategory = "GUILD_CATEGORY",
  GuildPublicThread = "GUILD_PUBLIC_THREAD",
  GuildText = "GUILD_TEXT",
  GuildVoice = "GUILD_VOICE"
}

export enum DefaultMessageNotifications {
  OnlyMentions = "ONLY_MENTIONS"
}

export enum ExplicitContentFilter {
  AllMembers = "ALL_MEMBERS",
  Disabled = "DISABLED"
}

export enum MfaLevel {
  Low = "LOW",
  None = "NONE"
}

export enum Locale {
  EnUS = "en-US"
}

export interface Role {
  id: string;
  guildId: string;
  name: string;
  color: number;
  hoist: boolean;
  rawPosition: number;
  permissions: string;
  managed: boolean;
  mentionable: boolean;
}

export interface User {
  id: string;
  username: string;
  avatar: string;
  discriminator: string;
  public_flags: number;
  flags: number;
  banner: string;
  banner_color: string;
  accent_color: number;
  locale: Locale;
  mfa_enabled: boolean;
  premium_type: number;
}
