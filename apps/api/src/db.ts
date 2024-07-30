import type { Group } from '@/web/types'

export const db = {
  groups: [
    {
      name: 'IVE',
      debut: Date.parse('2021-12-01'),
      image:
        'https://i.namu.wiki/i/1lCaeFomA4LY06MwvcxSz0ky1ueQIaPILEwgiQkhgNSCWkmRBweyixJnq7OTLBu4tT2RlkJ0N3Bg1PZOhPneFTQXKpBfQHqTLXKWXgDXZIZ1QrOzhP1HCF9-StfxwHbj7WZXEJ5FX1IzAMWNsTYiRw.webp',
      members: [
        {
          name: 'YUJIN',
          birthday: Date.parse('2003-09-01'),
          image:
            'https://i.namu.wiki/i/nMdVIS_83yJAvzVGO7PJIQCfttZbG4g0EU2tsosThxdwkoRXipHhFNczoKlPRiLJ3o-ZaGBMgOfRSQAPyMaICaiXfY7qzPAiJzCyHQ5pZqjIxuvWuiiKbL2oTM75GqRTK_SIOUNfT9U5lkWtn_XRmA.webp',
          country: '🇰🇷',
        },
        {
          name: 'GAEUL',
          birthday: Date.parse('2002-09-24'),
          image:
            'https://i.namu.wiki/i/PLgYaAFt1W-09011ucCYrMey_saX5H8GVKs43Y06UQwl0k-sMsawJu3TzOAjF3r_ubnkXeOYTZGYWu96cKa4WGxtTfP7yEdbCzAPR8AHFAprs5JZL18yLhzAdl2zmjtGZ2YI9llwPBdMdMtU61FHgw.webp',
          country: '🇰🇷',
        },
        {
          name: 'REI',
          birthday: Date.parse('2004-02-03'),
          image:
            'https://i.namu.wiki/i/KKlWDRZYD29Ot6QNxJyIksUrcxq2Ku07MQv3MotuyASxuGxKjXovHZnmsQ75-nTW10eE7qar48QUS12wKZpgf0BqBH5WwgUFNaTV7yT9j68gSLMdOlWhEMUv0qBQBtQf8LNc2Y71-GVkrNmC6pIyvA.webp',
          country: '🇯🇵',
        },
        {
          name: 'WONYOUNG',
          birthday: Date.parse('2004-08-31'),
          image:
            'https://i.namu.wiki/i/jfh3EfdEK9g30lwh6qIbcLFu4nldARTBAopM237D0ZE6D9qGgh-v6x_l93AH2uqkNizolilTgZDm3awNC3dABejkm_208PjOT3K2dNfuF5yvd2R9ZsS4H1NPH0tSNxBNI0g0FxVhrec8gqsbvPcUTQ.webp',
          country: '🇰🇷',
        },
        {
          name: 'LEESEO',
          birthday: Date.parse('2007-02-21'),
          image:
            'https://i.namu.wiki/i/wv7MiKFIlaG3wgw9mGhz3b-EeIwuDH7xuktXmVJVtxXb70b0fgfS3IsATZ69-wZC7db-uq1nbDGf0xIIJMbOhiSMQo8Hqf1oMkKRJ1iTTNWLNZsU_lEt7x6RySIuStOMdekkBtCT4DL60IeO8Uo5uw.webp',
          country: '🇰🇷',
        },
        {
          name: 'LIZ',
          birthday: Date.parse('2004-11-21'),
          image:
            'https://i.namu.wiki/i/KXdJP_cX84bkNuxckqN_gQO8-dqd5x-wjeEmRszCDui77PSILO-OMes9cd6akh_efB5NmPDhe0612jg7QlZZgQvGUz56-Gc1UsRuwL0NiR-4PaYtrZTlZ1Ml3HFu9mdPM1KkmQTILbBWk1A1fnCgEg.webp',
          country: '🇰🇷',
        },
      ],
    },
    {
      name: 'NewJeans',
      debut: Date.parse('2022-07-22'),
      image:
        'https://i.namu.wiki/i/MzJQ9PNyHkJ85NndoiWbyjmvGuhI93UAd4FDcjnAleXMppX0yIR6XT9cDYYXtrZUFq3AJNWSzVhKZPUP-KiFPNciQ_CmQkjwLBdh-0Y0BGYPDPsCdG4Wh8F-9yN2smE27WTw0LWL-FDfJWf0xjHjDQ.webp',
      members: [
        {
          name: 'HYEIN',
          birthday: Date.parse('2008-04-21'),
          image:
            'https://i.namu.wiki/i/r6weaQbw7jLyTWKYdp2w_fgMlYkD_TQ_neuv3h7pHc5zUNKiA2xlLpnJKJefAjLrLob25A62EXhL34vOPaXj6njiJntt_-O2XRGtjJqyK7RZUgfCRwSFNpSDDa7U7JlMMjVrY0Sy6eCenVUeBGi-WA.webp',
          country: '🇰🇷',
        },
        {
          name: 'HANNI',
          birthday: Date.parse('2004-10-06'),
          image:
            'https://i.namu.wiki/i/FoDEvG2cngPxajDDDqM7yUwZggOcbdg-LGIjqaLze4AW566ZN3DJd38Y5DfYou0AHeRMliu5YcVqJWmUF1VxAwvcgQo6jy9Djpm1Bsp6ADsdbaz7jjQPhcpaS6gr-Z-gk3jB5oUsdglE-OIm2835iw.webp',
          country: '🇻🇳🇦🇺',
        },
        {
          name: 'DANIELLE',
          birthday: Date.parse('2005-04-11'),
          image:
            'https://i.namu.wiki/i/rEI1HmxBR6JUsb8XII-TVVuOhQbjcX3w6acPssoWAA1Xzp-UxNxBhivohZ1bVZo6DWG5k7HGOFKi622mGdLfQ8ZlLOJEeKaKpSwUqBniCM8iq-m3MarQJWa_E5WmVWkSrascUpGRi59-MgxIy47gEg.webp',
          country: '🇰🇷🇦🇺',
        },
        {
          name: 'MINJI',
          birthday: Date.parse('2004-05-07'),
          image:
            'https://i.namu.wiki/i/RiT3ah5-OSwIRlcSE3b0p2s80ahHXFI1GkEX72dPioyeRPphMbdGmmmicE2FfI93kAHokm9M8dVQqTw9Pt7FPY30oQ9QWIaA5bZscYBghfRE5LsXDZuahsJ1k3SbhkvlZYmbI_FZIemeNGK5w1wI8A.webp',
          country: '🇰🇷',
        },
        {
          name: 'HAERIN',
          birthday: Date.parse('2006-05-15'),
          image:
            'https://i.namu.wiki/i/B276ZGQFbqLIT4v4SUgGfeJIGMPcJEeU8MgDiwHG3-pLmP4zBvMkZuCWcDkwl6P_RSHonBYxQ8hIRGr7hc0OwZhwM6lzmXXIaJtA2jkG4yR0-sUkZ8T72TLhfCLU_E_Yu3vausQnWY-z5UU2tGgcpg.webp',
          country: '🇰🇷',
        },
      ],
    },
    {
      name: 'LE SSERAFIM',
      debut: Date.parse('2022-05-02'),
      image:
        'https://i.namu.wiki/i/daVl_Mz8mHM5VQYcyM0OGB5xkt6wFW3FE_uRKFSHQnChdsbRWyUnUNKn43GNWOdyHKQGKiTFBxtjMIQIfM9qNFROWp-JXWtGT_EiqHN12CGUlWqYeKpoH5q8oQ1MHXwD9H70D_ioNJhPWsbsa73RHA.webp',
      members: [
        {
          name: 'SAKURA',
          birthday: Date.parse('1998-03-19'),
          image:
            'https://i.namu.wiki/i/R08ibdrQnk1UMcsLRV-WUVdQTDZaeHs3uzvQ2-OM-ptPBhH27wYNKEcctCzu9dN6Ubj8nfZ-PuwffmbJGYtKgD2vDq-rLhHRHo0KpamDZaSucj38Q0IuPq4TyUu3NovJuHrhqP8SDP0fHUP85SKRBw.webp',
          country: '🇯🇵',
        },
        {
          name: 'CHAEWON',
          birthday: Date.parse('2000-08-01'),
          image:
            'https://i.namu.wiki/i/bTlHCs9bO5I92Z2wI9HTW4QWfnvBqs2jPw7Ll-bbkxR6bEhv1XY88QD_ls42ZgwyrBuwIXw0Ct4dMJ7_3X1dQLKrAWHYkz9n8wgB4nisxivOzNbgN0cjy203MM5lQi_Dq9lpkkYI-vr1VlBzPdc0LA.webp',
          country: '🇰🇷',
        },
        {
          name: 'YUNJIN',
          birthday: Date.parse('2001-10-08'),
          image:
            'https://i.namu.wiki/i/WZCjbuC3uFP9gIufN8yNRpp6JnlFDzgv5vdl2LfpaqNHkBJtyq0eO0w2BScm-kjXcjN7mxU3B_RnYaWsDObcTlSXns-Ga5CWP_40aT827v3OwT1FWTlAI1-eFzsD2zCJ970pcc8VbNQOOHtzsf9CcA.webp',
          country: '🇺🇸',
        },
        {
          name: 'KAZUHA',
          birthday: Date.parse('2003-08-09'),
          image:
            'https://i.namu.wiki/i/PBIyT1WNGik0W1XXOqo1-2vgz5aj23IFboYxyJ0teJJ9V_NXc9fJIu0_7_4eXv_jxM8OduTWv-s0t7rTVTZrE9giHqptTGet0BZ9D3Ggx9F72uGZ-nUhqrlnT4g-fIDwUoAJhPts7boa4h5EggxB0g.webp',
          country: '🇯🇵',
        },
        {
          name: 'EUNCHAE',
          birthday: Date.parse('2006-11-10'),
          image:
            'https://i.namu.wiki/i/I2KreqbwkMuAVW2J37JPTzWpiKacPgeEzUSJ75sQSfHa1brDfZDRJUC20Pf_XzO4MVBJqQJ9rRb_y_ZmZFNdKBAwYjJe0ZzMj8chFH7_SjfQmkH-uCpPPnEJwleft2JpJXTbG7uaKYaS7xgLn4wTEg.webp',
          country: '🇰🇷',
        },
      ],
    },
    {
      name: 'ILLIT',
      debut: Date.parse('2024-03-25'),
      image:
        'https://i.namu.wiki/i/DIlkObE_ssSLAQ6jVUOLyaZHOrrpZEADmFTwIQkEvp-Q7L0lJlUOLRMcDwqYRfCQtBxV2WqSXGZZSJj4kDhAZvSIFMT9VMPEgsOTsEP9G27NFfffZ8qI0g6sBNYYixlr1K9TQuoPUZUPHUcqRi8xQw.webp',
      members: [
        {
          name: 'MINJU',
          birthday: Date.parse('2004-05-11'),
          image:
            'https://i.namu.wiki/i/GFaupkcUpuLl4B74KpQh3jaBJqtnJ6YrNTPKWhbqLMwpqMAGuhFtCN19-ScIlwXkp7syLY2oN95KjlV8I1JF5sgZAqJyTOQlEeft4N5nLJps-FjtxjJ2mi4du9vq-dio80Bk1XjEqQMGh47NerUonQ.webp',
          country: '🇰🇷',
        },
        {
          name: 'MOKA',
          birthday: Date.parse('2004-10-08'),
          image:
            'https://i.namu.wiki/i/SyAple7ZVaVmQ3niXG4auG1Gb4tqGCMIO9oaNC4b_e9T-YELmjfneSmnQ9MgmGxe8eJyr_GY5EgTK9yIM74GJe-cqeC2DlPbtwwbtJlboDW44bqATa3IKe423QGvMbxrmzVA0EfuWphF9yAYyCQlbw.webp',
          country: '🇯🇵',
        },
        {
          name: 'IROHA',
          birthday: Date.parse('2008-02-04'),
          image:
            'https://i.namu.wiki/i/aD1d8itLVTYR3Naxe43ZUwgcFzWOCYN8zzJsQIDvII-RbUCOOubwsIoLPfBYDk0tHyZuWwWa8q3lSi5ftHhUstQLqlwmJ1ReZCthAgksC4U66RyHfcnp0nfKictuT08qNRDdUMy63UmlvryPeQi6VA.webp',
          country: '🇯🇵',
        },
        {
          name: 'WONHEE',
          birthday: Date.parse('2007-06-26'),
          image:
            'https://i.namu.wiki/i/DpVfiEr32b9e7nAUD6g-KGyovBjnYhCWJa9iLltk4p2lt7nG3fHfocPs0lhPcfyyvdZJdIzBMKZP0WVeci5RZwulECYBItTicFsbJwoyh40WXX2cl-syRXRBq8FjSgoiKFBO-lhVpZxlnc17tdJ_3A.webp',
          country: '🇰🇷',
        },
        {
          name: 'YUNAH',
          birthday: Date.parse('2004-01-15'),
          image:
            'https://i.namu.wiki/i/BQ1WyoIZNnl8W3k9r7trbWqox-3OCurHaWhsR8gissIwS7j_qnM6AbS5ozVAYzm30eKPkIZZcd-VoL-02HT6C383TeOTC7nwac4eTD-ld-AdmQnAUVrMClOMgj3UCG_O4zyCGFtrK0AEcwkCnA3z4Q.webp',
          country: '🇰🇷',
        },
      ],
    },
    {
      name: 'STAYC',
      debut: Date.parse('2020-11-12'),
      image:
        'https://i.namu.wiki/i/E-ZAQAzbEHSz_5R-LQcBydwyuajS6nN6FMkpYV-deZFOJ7ONjqzGHlPuRa5piNrgkF-EnLw97A2gg6irzjQRqw9bCbDPIXx07fr4AhsrO8IKZuNTJvqXAFzorDNTqRHFd4z-LY5s1ffEHkCl__WvFA.webp',
      members: [
        {
          name: 'J',
          birthday: Date.parse('2004-12-09'),
          image:
            'https://i.namu.wiki/i/XnCB8fsARWRZismxdlcvJyY-mym777CQs528N5NPGFdsmUX8OTDinLOCjem46Bkqt7vB95ArK__Xbc_W2bR3WyCmWjpMlLj9HFnJfJ8Xp3PZGrHI6VrWAvG3_8h-zjxq6yOGPMWpCTe8kB6is8d2rw.webp',
          country: '🇰🇷',
        },
        {
          name: 'SEEUN',
          birthday: Date.parse('2003-06-14'),
          image:
            'https://i.namu.wiki/i/JrGh9_K7gebkFMT2Tjvp9n5A-6eFg-YIJjn4bUv9VltvRSpqFm5P28a7yNns6kNrvmT4Tc8_Xaf47A2G1SfNpsTK51T-m3zT_XYdYUM6bMt1aczjV3CDXEqnWpGqDM_QdjxxrW7YKfHeMh3ssIF12g.webp',
          country: '🇰🇷',
        },
        {
          name: 'SIEUN',
          birthday: Date.parse('2001-08-01'),
          image:
            'https://i.namu.wiki/i/uYwzG6sccdl6JLE7vWnlQAd9NezIpCsZM0j2hWxsfqi19S-36dVfltVLPL-LMX0sVmd3ruPNGcGcO2T1DThdEojiDGi8HisLypiAMaH7DvDhqSK01tzkq-dv7iKklH2cEFm3cWW1ZEjvztlnnqSChA.webp',
          country: '🇰🇷',
        },
        {
          name: 'SUMIN',
          birthday: Date.parse('2001-03-13'),
          image:
            'https://i.namu.wiki/i/hcTKcKvfCbEO9_61-BgS3jpD5D2d_1pG-E9ZJyPCp6d3oevUE7Juj4NWsludmVLBXqDB-o3L3m550yq3oCq-H_0BQs4636OPbOwxdNYr7E2CzPku2A0YWUwVAkcJIembiyBDISdOxbexEA1TSe0YXQ.webp',
          country: '🇰🇷',
        },
        {
          name: 'ISA',
          birthday: Date.parse('2002-01-23'),
          image:
            'https://i.namu.wiki/i/lRqI6Rwk3AbV6m8OGNCr9lvHrCwAQ7d3BmxBU1OLX2IxLgRwqn0qXjC9HQ1SNyRc2gJjpPkBn3b5uX-pmMhUT6EjnIxqBm5_FOzMlp3Ii0yeuMPkcA_s_oXbu6Y9WxJdR2FoweFEsrBzXtnq19lfqA.webp',
          country: '🇰🇷',
        },
        {
          name: 'YOON',
          birthday: Date.parse('2004-04-14'),
          image:
            'https://i.namu.wiki/i/fabAgnG3a6pLpyJmUjpyT9ekCjQF2vjkNah9Un1iMazeLpp2gsZ2aWJUHeDignNrWZoQhcxNDUzCT6KxJYf1XdTg2k_N56C5jhw4cPTsgxXrxzipmWc_A37tXopsswCglNdqg9xDqwiMGjiqcxUNqQ.webp',
          country: '🇰🇷',
        },
      ],
    },
    {
      name: 'AESPA',
      debut: Date.parse('2020-11-17'),
      image:
        'https://i.namu.wiki/i/tP9IqeNTq5gXkK9dspjUopcfWek77pd8w5ci2zt_C-nLu4YUbua6qcZ7IPEI_vhL6jCAu9fwLw7aXGuKk6M0U_5Ab1uZ46QTRv2c7FrMu5ZWQqtAfp15sjLHulm6BrrAZBupMv6P0Qs7jCdtj-Vh0A.webp',
      members: [
        {
          name: 'WINTER',
          birthday: Date.parse('2001-01-01'),
          image:
            'https://i.namu.wiki/i/2lDV8lX0PzQDLVWE-cIUAu8BTWpGNFcghcVM19oHwHQmHAreKmBbvD6O4MZtpdfPVU5h4hH1zEO2HEFJMy5MRQuG6dqOeN1H0yLXlYvgZN1QUR9l0daEEJfPdr3IxSs_q2m_1S2Objo-R4ra_ICkUA.webp',
          country: '🇰🇷',
        },
        {
          name: 'KARINA',
          birthday: Date.parse('2000-04-11'),
          image:
            'https://i.namu.wiki/i/YyUh1S9OnYro9ELI5BAOtqRDnc-E0RxTGAiCRSTvT2u_Z06Q_Pknpa6TqRl32SsIC9x1XkM2twsSa7KEvDvjGpJxZmm4IRhE_F0ZYH-PgF1_NRYccU6axZ402MsIteYs3V26jOj5hbeEBAy1ffts3A.webp',
          country: '🇰🇷',
        },
        {
          name: 'GISELLE',
          birthday: Date.parse('2000-10-30'),
          image:
            'https://i.namu.wiki/i/924iAG1F8jdbUl-YUNQUa1zb7q4zjUSlpPzvBuex1BIUZHJVQdZj9nl2FYzJ5jvVOLsimqYxOHZ7PfzBpfV27Oj8pB8ALX4rT0QWuEPpOuKQxA6leMONGNNGSc8cSMlENYj_dG06HM3oHrV-CFgHPg.webp',
          country: '🇯🇵',
        },
        {
          name: 'NINGNING',
          birthday: Date.parse('2002-10-23'),
          image:
            'https://i.namu.wiki/i/IOqisPVMBdEHU5auigF4OmAHvJjh77ESsKMtrFNOg0rn5M3bxc3zro6NegL91-qbTW8rgzcuP88l6GV5wdRQ-1Zc2jAQM08FtYe0TwMAXR6dfq695v0lNsarQ-kSliwFBC8zOMRAu5gymcd8ANF_YA.webp',
          country: '🇨🇳',
        },
      ],
    },
    {
      name: 'BTS',
      debut: Date.parse('2013-06-13'),
      image:
        'https://i.namu.wiki/i/8Q5TTqQ4VLqPwXv7PMhjAtvAM-qRPEwjbSMnhs3YRlq8tr_EOhKOKnyQ5fDbxDftgn62mOP00XjNPnGEYOeDkCzLiUbGD27ZGi0FwLcWpSea_6WX8XwaUOf8Y3yX87fiGRPv3wCH6t3FecgZdjPRtA.webp',
      members: [
        {
          name: 'J-HOPE',
          birthday: Date.parse('1994-02-18'),
          image:
            'https://i.namu.wiki/i/IzCPRuWby39hDuJ1q8cYFySE3ncVdBqDjGpkS81Cr0kWN0YKQK6UEqWrkKAtsf99k0kp5Pq2HPazPf-C5xY8nL9tuZTcqpjH84RB_wJ45EUyg6lileqhA4sZAuO14S-54p4_ABJFBKNhkxRcTBrrkg.webp',
          country: '🇰🇷',
        },
        {
          name: 'RM',
          birthday: Date.parse('1994-09-12'),
          image:
            'https://i.namu.wiki/i/2q59cfjqsV5Ce7bK5M9xh4TjIaDabK2PcKR_rtR_wapXRBB__PxLSBW5ca99qxZyp5EIWvZV6q-HadMi_280M0ARzCB4EqB07aO8ltBNRGaFgfXOGsTo1-j4paMBnvrrWMkY_w56l-DOY2xtcjOpHw.webp',
          country: '🇰🇷',
        },
        {
          name: 'V',
          birthday: Date.parse('1995-12-30'),
          image:
            'https://i.namu.wiki/i/77xXQG7XqlVQfYETC6nGwfVwYu2h6bJ3aocuuwAVUYW0RAYwRzFIz0nJ6H38ukoOWlgZXuXDx6BN3X5vtm_o_dZcKlvzTdOqJgCqxGn_ittaIVXtnnMbeVs9iYQYacUrU8FxNTT_7KIJNfFWGVQzOQ.webp',
          country: '🇰🇷',
        },
        {
          name: 'JIN',
          birthday: Date.parse('1992-12-04'),
          image:
            'https://i.namu.wiki/i/6y_kivyxABPQfmfaRLW-e0gjgRpmHLhuCyrHlIYsqUqxjoDvbvJFp6srRgQUMiManAIw3zeQdBsHKhEvTRTFShF4Ppp3SIiQ3WYAgDwnzIYleVPFteqeBRbcTYZuv9XCl4NG1axOwHYd0zENKyEdXg.webp',
          country: '🇰🇷',
        },
        {
          name: 'JIMIN',
          birthday: Date.parse('1995-10-13'),
          image:
            'https://i.namu.wiki/i/hJ9yHNDgB_LE3srJPs4ELbhUuA6gy5C4HyRkiWGIIwbu1JL99b1sQYboFUTYcQB5j2RPFlhYt1L1OPM0bCE-ZusglXtAhzwbvau15sVjgZpwdNkPMPa4-ijnGR-zsGjL83vrxj42qP56Gg4CeBugwA.webp',
          country: '🇰🇷',
        },
        {
          name: 'SUGA',
          birthday: Date.parse('1993-03-09'),
          image:
            'https://i.namu.wiki/i/r6Lm2vMBP3pcZBu5O0CVPSEMLcxOETi85TuD-pocbLwEIzihs6eNkvQ0Jn70ZnQZngtysUlFQn--LNX3zq2zvZvkrlIVhaE3Um1FsRHBerKSS8ec5hjKB7XlNeUCMdxEW2749UPrltibw242Q3YFJg.webp',
          country: '🇰🇷',
        },
        {
          name: 'JUNG KOOK',
          birthday: Date.parse('1997-09-01'),
          image:
            'https://i.namu.wiki/i/mHKymWcAVW40aCHl00kSRzhoBhVV1WTeXxj6KFxCOc3eobltam6O7BeZTWpDgh7jUgsEzWSE3ecDjttfOLAP3fzA3u7otMvugv4zOMwtBpPhLsailZG1mFH_B7chrhCXYteyPdoOBpNBoteh-Y6KqA.webp',
          country: '🇰🇷',
        },
      ],
    },
    {
      name: 'TWS',
      debut: Date.parse('2024-01-22'),
      image:
        'https://i.namu.wiki/i/MEpzPOjH2ALQEduzMy2g1M7XaP2Xx_z9VO653bor37H01tQZhEpl0EyB444LclvXfRPVB8RUYYmosdesDSlwShAI5S1yVOBd6fgW787yjO9J3-4eshrbBQqaoT9WQTpIfaB4DyIwgMxUfOrg1cLm6g.webp',
      members: [
        {
          name: 'DOHOON',
          birthday: Date.parse('2005-01-30'),
          image:
            'https://i.namu.wiki/i/EHfxpYRgrzZ1pzGy4dPc5CJVwzcH9WLoJam4GP3dyAjLHImgcBDePr8KRNM2yKk6dr5-wj9cLy2-NsRH7JN6XkSLxeuSwu-1ePEmXrZTegDf_GEbOsj3aQi3nvMi9ODfJ9x8XSf0pX1ePLFpHaus7Q.webp',
          country: '🇰🇷',
        },
        {
          name: 'HANJIN',
          birthday: Date.parse('2006-01-05'),
          image:
            'https://i.namu.wiki/i/8Ku-FV81V1vHW3ny6RgqFzBCYpKyL4xD-_Ndgw3FwFd3m6tB8hoX1JANsB6hxDCTmQy7klBcxl3MYj5lKZSX1ycOVwRHkQ3XGhUIUP-JaSwR2k8v4mFIy4gxWRaY8srjMK9i8hk9cHOSUmMceTg60A.webp',
          country: '🇨🇳',
        },

        {
          name: 'KYUNGMIN',
          birthday: Date.parse('2007-10-02'),
          image:
            'https://i.namu.wiki/i/7WDPSUYi516za0SYU_O31lZuRRFW7VBqz58VvXSvV-v58o06nORL_D--S493uing3sNM4Pwo8zkaqph4Q-ZAeRfVlqF-dJgRNOTkUQgmGhvpoXI2zW5uqWKzXtd3vPwtV2fw9gHBk7uriGD-EiUZJw.webp',
          country: '🇰🇷',
        },
        {
          name: 'YOUNGJAE',
          birthday: Date.parse('2005-05-31'),
          image:
            'https://i.namu.wiki/i/xHI8oHTkRaOe_PfZvEAstqANWDX4CfeD-g05l5y9o_4RkHDXsQc1h0kc_3Z0nSSu739ZNjm9B0R7TF2eikJzzlaBWhS-x0_CSsaqWpHlazDudMvK5KZ6LwUMQtqroRWFe0nIqdoTB1nQYQcAVsVDqA.webp',
          country: '🇰🇷',
        },
        {
          name: 'JIHOON',
          birthday: Date.parse('2006-03-28'),
          image:
            'https://i.namu.wiki/i/1APbbdEe-KUHGNgpT6OrwdFVGqg6wb9p8dk8mGD5X6xjXpLE2zLSL4rwCt1GzIi6-Q_y44HXHAeGeU2yMUkGu3YxueVrRpB75Gmijkjxt4YzO1OT1PW_sW4cJzCpnqZmFw61cYnViAzxkGx5CGAojQ.webp',
          country: '🇰🇷',
        },
        {
          name: 'SHINYU',
          birthday: Date.parse('2003-11-07'),
          image:
            'https://i.namu.wiki/i/Sn2bdWtbxlyF2ElFZALH406ZpM-HUwMigYuYwlXcj5gtnR39D3Dbj8oG-iIgy1HcY_61bEqe_7qiyMSfHk6nVvkefokA5HPNeRhWHBlM381fs9zZzNKhBjh8AvDipy7r1hHhCpbFJW4iK7ZNKZU6Xw.webp',
          country: '🇰🇷',
        },
      ],
    },
    {
      name: 'BOYNEXTDOOR',
      debut: Date.parse('2023-05-30'),
      image:
        'https://i.namu.wiki/i/XT-5PTp-oK1KGDBbEo9BSptqcxv0VmLWCtjZs2N9Zi1f5WaKgvxV-HuwLbutphgytOcNtMtenRpbLnGLkWBypW-aqZT1owShQNHHeaLB3EoMdn8qWeDV5R9HtJozr7LZemhrQTYLD35Q8Iq5lfInmQ.webp',
      members: [
        {
          name: 'SUNGHO',
          birthday: Date.parse('2003-09-04'),
          image:
            'https://i.namu.wiki/i/nvwFsi5T1P7or4Dr2MO0vCi8yOH3QFUYRli274nfQSh-RIaciaPgdS4nLojt-fwT0KOExi5f3tFDrvs-YKQIqJQoJnA9MiGQ0qEDILiqDJDGMP9auwzJ3lSrFTgEuXKNo3rh5R5feGlJ4sMCYsieng.webp',
          country: '🇰🇷',
        },

        {
          name: 'LEEHAN',
          birthday: Date.parse('2004-10-20'),
          image:
            'https://i.namu.wiki/i/K5cmyTjYvpdzNkFrPtkZbTlv7L3Imz7846HnBvUZdZzza3T8lw2IacIS_hT3fGXh8KkCPGVIWcsgIlj-LEJiV0KgXf29zI708qUMB6KCQzVU8bWhUqEE_ct_Zy8S6Gz31Q0a-DzpDhofpOA2mGJGzA.webp',
          country: '🇰🇷',
        },

        {
          name: 'TAESAN',
          birthday: Date.parse('2004-08-10'),
          image:
            'https://i.namu.wiki/i/NJEZceHt0ECzSee5vGmac1QYHj2-lHPDmLLIQ-wvI0wI3sC__2pRo_qCrwdF6g06NF6agiNK_MOFhAbLChKsBrID2ivObcvVetOwzDSaghvkbhY0_0Fe-wsmFd2UylhIHNxfSVcQSR_zOpp00goX9Q.webp',
          country: '🇰🇷',
        },

        {
          name: 'WOONHAK',
          birthday: Date.parse('2006-11-29'),
          image:
            'https://i.namu.wiki/i/yBQvpUihC-bClDg-1deCYGHnyeldEuVdDKuADRxnJlObUqx6qwl-jhZgllmcl8ItbY5scu1DFsqYLVZImIY7E2SiXi9O0XZIz813okHxK8dSjvoZ_PE1dD1fdj7X6k8z3uQiCGBtl8qiUipeym6oyw.webp',
          country: '🇰🇷',
        },

        {
          name: 'JAEHYUN',
          birthday: Date.parse('2003-12-04'),
          image:
            'https://i.namu.wiki/i/KMkWcbTlFQMPNs2ugH3cs0rT72FCSz8J-Wfey13dJNx7JaEBMYoQChtBPsYPF_rS9jjygIbwOQcQoS6uLSDUM09KjTne99OLBJgB8PkGeabDhCjnUREwBVt_jyfw-p9a8y8MDaQcfcyq3yt_cWy6BQ.webp',
          country: '🇰🇷',
        },

        {
          name: 'RIWOO',
          birthday: Date.parse('2003-10-22'),
          image:
            'https://i.namu.wiki/i/hnm18c4LidzE8XPO2yssZeiKh1KAu8b_6iGq-7ZxaPtGFjFgmMtUG4xkAPgzlva-zWbzKnbWHzMmQu6cpL7sTE_nJcEPnwYpgABt5sVdW0ui-qgBqx56huaNGK5lK-kQokdGYiYXnBpFjnj6Yc_AMw.webp',
          country: '🇰🇷',
        },
      ],
    },
  ] as unknown as Group[],
}
