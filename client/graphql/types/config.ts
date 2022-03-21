// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

export interface Config {
    AboutLink: string;
    CloudUserLimit: string;
    DataRetentionBoardsRetentionDays: '0';
    DataRetentionEnableBoardsDeletion: TrueOrFalseInString;
    ExtendSessionLengthWithActivity: TrueOrFalseInString;
    FeatureFlagAddMembersToChannel: 'top';
    FeatureFlagAppBarEnabled: TrueOrFalseInString;
    FeatureFlagAppsEnabled: TrueOrFalseInString;
    FeatureFlagBoardsDataRetention: TrueOrFalseInString;
    FeatureFlagBoardsFeatureFlags: '';
    FeatureFlagCallsMobile: TrueOrFalseInString;
    FeatureFlagCloudDelinquentEmailJobsEnabled: TrueOrFalseInString;
    FeatureFlagCollapsedThreads: TrueOrFalseInString;
    FeatureFlagCustomGroups: TrueOrFalseInString;
    FeatureFlagEnableInactivityCheckJob: TrueOrFalseInString;
    FeatureFlagEnableRemoteClusterService: TrueOrFalseInString;
    FeatureFlagGraphQL: TrueOrFalseInString;
    FeatureFlagGuidedChannelCreation: TrueOrFalseInString;
    FeatureFlagInviteToTeam: 'none';
    FeatureFlagNewAccountNoisy: TrueOrFalseInString;
    FeatureFlagNormalizeLdapDNs: TrueOrFalseInString;
    FeatureFlagPermalinkPreviews: TrueOrFalseInString;
    FeatureFlagPluginApps: '';
    FeatureFlagPluginFocalboard: '';
    FeatureFlagPluginPlaybooks: '';
    FeatureFlagTestBoolFeature: TrueOrFalseInString;
    FeatureFlagTestFeature: 'off';
    FeatureFlagUseCaseOnboarding: TrueOrFalseInString;
    GfycatApiKey: '2_KtH_W5';
    GfycatApiSecret: '3wLVZPiswc3DnaiaFoLkDvB4X0IV6CpMkj4tf2inJRsBY6-FnkT08zGmppWFgeof';
    TelemetryId: '7j4czyms1bgtuq4buyi9eutf9y';
    AllowBannerDismissal: string;
    AllowCustomThemes: string;
    AllowedThemes: string;
    AndroidAppDownloadLink: string;
    AndroidLatestVersion: string;
    AndroidMinVersion: string;
    AppDownloadLink: string;
    AsymmetricSigningPublicKey: string;
    AvailableLocales: string;
    BannerColor: string;
    BannerText: string;
    BannerTextColor: string;
    BuildDate: string;
    BuildEnterpriseReady: string;
    BuildHash: string;
    BuildHashEnterprise: string;
    BuildNumber: string;
    CollapsedThreads: CollapsedThreads;
    CustomBrandText: string;
    CustomDescriptionText: string;
    CustomTermsOfServiceId: string;
    CustomTermsOfServiceReAcceptancePeriod: string;
    CustomUrlSchemes: string;
    CWSURL: string;
    DataRetentionEnableFileDeletion: string;
    DataRetentionEnableMessageDeletion: string;
    DataRetentionFileRetentionDays: string;
    DataRetentionMessageRetentionDays: string;
    DefaultClientLocale: string;
    DefaultTheme: ThemeKey;
    DiagnosticId: string;
    DiagnosticsEnabled: string;
    EmailLoginButtonBorderColor: string;
    EmailLoginButtonColor: string;
    EmailLoginButtonTextColor: string;
    EmailNotificationContentsType: string;
    EnableAskCommunityLink: string;
    EnableBanner: string;
    EnableBotAccountCreation: string;
    EnableChannelViewedMessages: string;
    EnableClientPerformanceDebugging: string;
    EnableCluster: string;
    EnableCommands: string;
    EnableCompliance: string;
    EnableConfirmNotificationsToChannel: string;
    EnableCustomBrand: string;
    EnableCustomEmoji: string;
    EnableCustomGroups: string;
    EnableCustomUserStatuses: string;
    EnableTimedDND: string;
    EnableCustomTermsOfService: string;
    EnableDeveloper: string;
    EnableDiagnostics: string;
    EnableEmailBatching: string;
    EnableEmailInvitations: string;
    EnableEmojiPicker: string;
    EnableFileAttachments: string;
    EnableFile: string;
    EnableGifPicker: string;
    EnableGuestAccounts: string;
    EnableIncomingWebhooks: string;
    EnableLatex: string;
    EnableInlineLatex: string;
    EnableLdap: string;
    EnableLinkPreviews: string;
    EnableMarketplace: string;
    EnableMetrics: string;
    EnableMobileFileDownload: string;
    EnableMobileFileUpload: string;
    EnableMultifactorAuthentication: string;
    EnableOAuthServiceProvider: string;
    EnableOpenServer: string;
    EnableOutgoingWebhooks: string;
    EnablePostIconOverride: string;
    EnablePostUsernameOverride: string;
    EnablePreviewFeatures: string;
    EnablePreviewModeBanner: string;
    EnablePublicLink: string;
    EnableReliableWebSockets: string;
    EnableSaml: string;
    EnableSignInWithEmail: string;
    EnableSignInWithUsername: string;
    EnableSignUpWithEmail: string;
    EnableSignUpWithGitLab: string;
    EnableSignUpWithGoogle: string;
    EnableSignUpWithOffice365: string;
    EnableSignUpWithOpenId: string;
    EnableSVGs: string;
    EnableTesting: string;
    EnableThemeSelection: string;
    EnableTutorial: string;
    EnableOnboardingFlow: string;
    EnableUserAccessTokens: string;
    EnableUserCreation: string;
    EnableUserDeactivation: string;
    EnableUserTypingMessages: string;
    EnforceMultifactorAuthentication: string;
    ExperimentalClientSideCertCheck: string;
    ExperimentalClientSideCertEnable: string;
    ExperimentalCloudBilling: string;
    ExperimentalCloudUserLimit: string;
    ExperimentalDataPrefetch: string;
    ExperimentalEnableAuthenticationTransfer: string;
    ExperimentalEnableAutomaticReplies: string;
    ExperimentalEnableClickToReply: string;
    ExperimentalEnableDefaultChannelLeaveJoinMessages: string;
    ExperimentalEnablePostMetadata: string;
    ExperimentalGroupUnreadChannels: string;
    ExperimentalPrimaryTeam: string;
    ExperimentalTimezone: string;
    ExperimentalViewArchivedChannels: string;
    FileLevel: string;
    GfycatAPIKey: string;
    GfycatAPISecret: string;
    GoogleDeveloperKey: string;
    GuestAccountsEnforceMultifactorAuthentication: string;
    HasImageProxy: string;
    HelpLink: string;
    IosAppDownloadLink: string;
    IosLatestVersion: string;
    IosMinVersion: string;
    InstallationDate: string;
    IsDefaultMarketplace: string;
    LdapFirstNameAttributeSet: string;
    LdapLastNameAttributeSet: string;
    LdapLoginButtonBorderColor: string;
    LdapLoginButtonColor: string;
    LdapLoginButtonTextColor: string;
    LdapLoginFieldName: string;
    LdapNicknameAttributeSet: string;
    LdapPositionAttributeSet: string;
    LdapPictureAttributeSet: string;
    LockTeammateNameDisplay: string;
    ManagedResourcePaths: string;
    MaxFileSize: string;
    MaxPostSize: string;
    MaxNotificationsPerChannel: string;
    MinimumHashtagLength: string;
    NoAccounts: string;
    GitLabButtonText: string;
    GitLabButtonColor: string;
    OpenIdButtonText: string;
    OpenIdButtonColor: string;
    PasswordMinimumLength: string;
    PasswordRequireLowercase: string;
    PasswordRequireNumber: string;
    PasswordRequireSymbol: string;
    PasswordRequireUppercase: string;
    PluginsEnabled: string;
    PostEditTimeLimit: string;
    PrivacyPolicyLink: string;
    ReportAProblemLink: string;
    RequireEmailVerification: string;
    RestrictDirectMessage: string;
    RunJobs: string;
    SamlFirstNameAttributeSet: string;
    SamlLastNameAttributeSet: string;
    SamlLoginButtonBorderColor: string;
    SamlLoginButtonColor: string;
    SamlLoginButtonText: string;
    SamlLoginButtonTextColor: string;
    SamlNicknameAttributeSet: string;
    SamlPositionAttributeSet: string;
    SendEmailNotifications: string;
    SendPushNotifications: string;
    ShowEmailAddress: string;
    SiteName: string;
    SiteURL: string;
    SQLDriverName: string;
    SupportEmail: string;
    TeammateNameDisplay: string;
    TermsOfServiceLink: string;
    TimeBetweenUserTypingUpdatesMilliseconds: string;
    UpgradedFromTE: string;
    Version: string;
    WebsocketPort: string;
    WebsocketSecurePort: string;
    WebsocketURL: string;
    ExperimentalSharedChannels: string;
}

export type TrueOrFalseInString = 'true' | 'false';

export enum CollapsedThreads {
    DISABLED = 'disabled',
    DEFAULT_ON = 'default_on',
    DEFAULT_OFF = 'default_off',
}

export type ThemeKey = 'denim' | 'sapphire' | 'quartz' | 'indigo' | 'onyx';
