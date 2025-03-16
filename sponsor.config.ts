import { defineConfig, Sponsorship, tierPresets } from 'sponsorkit'
import { SPONSOR_CONFIGS } from './modified-sponsor.config';

export default defineConfig({
  // includePrivate: true,
  tiers: [
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: tierPresets.small,
    },
    {
      title: 'Backers',
      preset: tierPresets.medium,
    },
    {
      title: 'Sponsors',
      monthlyDollars: 25,
      preset: tierPresets.large,
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 50,
      preset: tierPresets.xl,
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 100,
      preset: tierPresets.xl,
    },
  ],

  // Replace links and avatars
  // replaceLinks: {
  //   'https://github.com/antfu': 'https://antfu.me',
  // },
  replaceAvatars: [(sponsor: Sponsorship) => {
    const sponsorConfigs= SPONSOR_CONFIGS[sponsor.sponsor.login];
    if (sponsorConfigs) {
      return sponsorConfigs.avatarUrl;
    }
    return sponsor.sponsor.avatarUrl;
  }],

  // Run multiple renders with different configurations
  renders: [
    {
      name: 'sponsors',
      width: 800,
      formats: ['svg', 'png'],
    },
   /*  {
      name: 'sponsors-wide',
      width: 1000,
      formats: ['svg'],
    },
    {
      renderer: 'circles',
      name: 'sponsors-circles',
      width: 1000,
      includePastSponsors: true,
    }, */
  ],
})