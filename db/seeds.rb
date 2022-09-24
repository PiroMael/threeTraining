# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
 puts "Clearing Database"

    Clip.destroy_all

 puts "Creating Clips"
   Allclips = Clip.create([{ name: "Le devenir polémiste d'usul", twitchID:'AmazonianClearApeFeelsBadMan',chaine:'DANYetRAZ'  },
                           { name: "J'ai eu Tatiana Ventose au téléphone ...", twitchID:'MoldyDirtyClamOhMyDog',chaine:'DANYetRAZ' },
                           { name: "La cancel culture résumée par Bégaudeau", twitchID:'TubularNimbleEmuKeepo',chaine:'DANYetRAZ' },
                           { name: "zuukou trop stylé", twitchID:'ProudArtisticMagpiePeteZaroll-XREqtWcw5yUQmEKe',chaine:'DANYetRAZ' },
                           { name: "Meilleur moment de la chaine", twitchID:'EntertainingBraveShrimpBIRB',chaine:'DANYetRAZ' },
                           { name: "usul est pour les droits trans", twitchID:'CuriousTangibleJackalKappaClaus',chaine:'DANYetRAZ' },
                           { name: "Nique ta mère Bégaudeau", twitchID:'BeautifulInterestingLapwingAMPEnergy',chaine:'DANYetRAZ' },
                           { name: "Celui qui ris en grinçant", twitchID:'RoughAggressiveNuggetsPartyTime',chaine:'DANYetRAZ' },
                           { name: "GNNNNNNNNNNNNNNN", twitchID:'GleamingObliqueGuanacoTinyFace-dRSplp5qHWfpp5Od',chaine:'DANYetRAZ' },
                           { name: "Le gauchisme expliqué par Raz", twitchID:'CuteHeadstrongKuduChefFrank',chaine:'DANYetRAZ' },
                           { name: "usul nique le chat", twitchID:'WittyRichPassionfruitUnSane',chaine:'DANYetRAZ' },
                           { name: "RP Minecraft", twitchID:'DullImpossibleClintDancingBanana-SwlVcXOSsbM5GDNe',chaine:'DANYetRAZ' },
                           { name: "Le saut de raz", twitchID:'AnimatedRockyCrocodileShadyLulu-U_UBmAdycWc10Go9',chaine:'DANYetRAZ' },
                           { name: "LA FRANCE BORDEL !!!", twitchID:'DiligentRealDaikonWoofer-NiXOkisLY1Ms5mKK',chaine:'DANYetRAZ' },
                           { name: "USUL USUL USUL USUL USUL USUL USUL USUL USUL USUL USUL USUL USUL USUL USUL USUL ", twitchID:'FaithfulConfidentCookieKappa-_geMp4K4Kt-snSQr',chaine:'DANYetRAZ' },
                           { name: "elle est sur son bureau la sale p***", twitchID:'FlaccidDeadPlumberLitty',chaine:'DANYetRAZ' },
                           { name: "les mecs geeks en couple (relatable, envoyez à vos amis non incelisants)", twitchID:'ObedientSucculentMomFrankerZ-hUT7PcEwx1aWBfD_',chaine:'DANYetRAZ' },
                           { name: "robot_macron_aime_le_football.exe", twitchID:'AntsyHealthyHyenaDansGame-Zw',chaine:'DANYetRAZ' },
                           { name: "Perdre ça M", twitchID:'CrispyFastGaurMVGame-_hOTicajUITVARYe',chaine:'DANYetRAZ' },
                           { name: "le dérapage", twitchID:'ComfortableVainOrcaBCouch-3JhgmJBiN3OO3PkU',chaine:'DANYetRAZ' },
                           { name: "roulade de wissam (faker)", twitchID:'CattleFeelsBadMan-wrsLS4zrtxRFMq16',chaine:'DANYetRAZ' },
                           { name: "Tu m'assure qu'il n'y a rien eu de seksuel entre nous", twitchID:'IncredulousLovelyPenguinAMPTropPunch-iKV70DHXVR_N_WMw',chaine:'DANYetRAZ' },
                           { name: "Dany imitie la vraie Usul", twitchID:'NurturingCloudyDinosaurSwiftRage-tOn94CR_KXw-vK5Z',chaine:'DANYetRAZ' },
                           { name: "Les beaufs et les barbarres", twitchID:'InspiringMistyAmazonSMOrc-jM-nD97IXGLWi134',chaine:'DANYetRAZ' },
                           { name: "Pose ce tournevis !", twitchID:'VainArtisticHerdOMGScoots-fv9wyv1GKju-7-Qq',chaine:'DANYetRAZ' }
                           
                           
                        ])
#   Character.create(name: 'Luke', movie: movies.first)

