type CompanyMetadata = {
  name: string
  description: string
  excerpt?: string
  links: Array<string>
  founders?: Array<string>
  competitors?: Array<string>
}

export type Category = {
  name: string
  companies: Array<Company>
}

export type Company = {
  name: string
  description: string
  logo?: string
  excerpt?: string
  links: Array<string>
  founders?: Array<string>
  competitors?: Array<string>
}

export type Ecosystem = {
  whitepaper: string
  name: string
  description: string
  excerpt?: string
  links: Array<string>
  founders?: Array<string>
  competitors?: Array<string>
  categories: Array<Category>
}

export type CompanyHighchartFormat = {
  value: number
  name: string
  color: string
}

type Ecosystems = Array<Ecosystem>

export const Ecosystems: Ecosystems = [
  {
    whitepaper: "https://google.com",
    logo: "https://celestia.org/static/celestia-logo-29451ae35d3bb72cc4b0f17712d44c3a.svg",
    name: "Celestia",
    description: "This will be the short description in sidepanel",
    excerpt: "this is the samll excerpt",
    links: ["https://link1.com"],
    founders: ["Steven"],
    competitors: ["Ed"],
    categories: [
      {
        name: "DeFi",
        companies: [
          {
            name: "Catalyst",
            description: "Catalyst is a permissionless cross-chain Automated Market Maker (AMM) for the modular future. It enables easy liquidity connections and asset swaps between different blockchains, such as Ethereum, Cosmos, and rollups like Optimism and Eclipse.",
            logo: "https://pbs.twimg.com/profile_images/1646943662129946636/rPVTyDA6_400x400.png",
            excerpt: "What is Catalyst?",
            links: ["https://catalyst.exchange/", "https://twitter.com/CatalystAMM"],
            founders: ['Alexander Lindgren, Jim Chang'],
            competitors: ["Crescent, Duality, Osmosis"]
          },
          {
            name: "Crescent",
            description: "Crescent is aiming to provide a connected DeFi functionality for Cosmos Ecosystem to enhance capital efficiency and manage risk effectively.",
            logo: "https://pbs.twimg.com/profile_images/1692420741667688448/d2RN88-7_400x400.jpg",
            excerpt: "What is Crescent?",
            links: ["https://crescent.network/", "https://twitter.com/CrescentHub"],
            founders: ['Hyung Yeon Lee'],
            competitors: ["Catalyst, Duality, Osmosis"]
          },
          {
            name: "Duality",
            description: "Duality builds fair, efficient, open markets by introducing a mechanism design which combines the computational efficiency of AMMs and flexibility of order books.",
            logo: "https://pbs.twimg.com/profile_images/1588565821550432263/LpnOJlT0_400x400.png",
            excerpt: "What is Duality?",
            links: ["https://duality.xyz/", "https://twitter.com/dualityxyz"],
            founders: ['Nicholas Evans'],
            competitors: ["Catalyst, Crescent, Osmosis"]
          },
          {
            name: "Osmosis",
            description: "Osmosis is an on-chain generalized multi-token automated market maker and a self-balancing weighted portfolio built on the Cosmos SDK.",
            logo: "https://pbs.twimg.com/profile_images/1737332416002260992/fK84ceN0_400x400.jpg",
            excerpt: "What is Osmosis?",
            links: ["https://osmosis.zone/", "https://twitter.com/osmosiszone"],
            founders: ['Sunny Aggarwal'],
            competitors: ["Catalyst, Crescent, Duality"]
          },
        ]
      },
      {
        name: "NFTs/Gaming",
        companies: [
          {
            name: "Aether Games",
            description: "Aether Games is a transmedia development studio that creates immersive gaming and entertainment experiences for both web2 and web3 audiences.",
            logo: "https://pbs.twimg.com/profile_images/1724204285850681344/0w6v-xfb_400x400.jpg",
            excerpt: "What is Aether Games?",
            links: ["https://aethergames.io/", "https://twitter.com/AetherGamesInc"],
            founders: ['Jens Peeters'],
            competitors: ["Argus Labs, Bullieverse, Curio.gg, Worlds"]
          },
          {
            name: "Argus Labs",
            description: "Argus labs is a game developer and publisher built around a collective of hackers and designers in pursuit of the next great paradigm shift in the video game industry.",
            logo: "https://pbs.twimg.com/profile_images/1709263466480234499/xuF0nTco_400x400.jpg",
            excerpt: "What is Argus Labs?",
            links: ["https://argus.gg/", "https://twitter.com/ArgusLabs_"],
            founders: ['Scott Sunarto'],
            competitors: ["Aether Games, Bullieverse, Curio.gg, Worlds"]
          },
          {
            name: "Bullieverse",
            description: "Bullieverse is a play-to-earn game and metaverse that allows players to spend time in the game and earn in-game NFTs for their participation.",
            logo: "https://pbs.twimg.com/profile_images/1455886931326349317/KR3qVAQe_400x400.jpg",
            excerpt: "What is Bullieverse?",
            links: ["https://bullieverisland.com/", "https://twitter.com/Bullieverse"],
            founders: ['Srini Anala, Murali Reddy'],
            competitors: ["Argus Labs, Aether Games, Curio.gg, Worlds"]
          },
          {
            name: "Curio.gg",
            description: "Curio.gg is a blockchain game studio that has its games powered entirely by smart contracts. Thus, players contribute to a shared universe of code and data leading to games being built almost entirely by players.",
            logo: "https://pbs.twimg.com/profile_images/1722853386138361856/AXcNHcUF_400x400.jpg",
            excerpt: "What is Curio.gg?",
            links: ["https://www.curio.gg/", "https://twitter.com/0xcurio"],
            founders: ['Kevin Zhang, Yijia Chen'],
            competitors: ["Argus Labs, Aether Games, Bullieverse, Worlds"]
          },
          {
            name: "Worlds",
            description: "Worlds is a game studio that is aiming to utilize new infrastructure to deliver solid multiplayer experiences without AAA budgets.",
            logo: "https://pbs.twimg.com/profile_images/1533245276764372993/AtyqkzHz_400x400.jpg",
            excerpt: "What is Worlds?",
            links: ["https://www.worlds.org/", "https://twitter.com/worldsorg"],
            founders: ['Evan Hatch'],
            competitors: ["Argus Labs, Aether Games, Bullieverse, Curio.gg"]
          }
        ]
      },
      {
        name: "Wallets",
        companies: [{
          name: "Leap",
          description: "Leap is a wallet that enables users to store, send, swap and stake tokens on many blockchains.",
          logo: "https://pbs.twimg.com/profile_images/1603421943868162050/mFcJDHTC_400x400.jpg",
          excerpt: "What is Leap?",
          links: ["https://leapwallet.io/", "https://twitter.com/leap_wallet"],
          founders: ['Sanjeev Rao'],
          competitors: ["Keplr"]
        },
        {
          name: "Keplr",
          description: "Keplr is an interchain wallet that aims to serve as the gateway to the decentralized finance ecosystem.",
          logo: "https://pbs.twimg.com/profile_images/1655533623842570240/nryha-km_400x400.png",
          excerpt: "What is Keplr?",
          links: ["https://www.keplr.app/", "https://twitter.com/keplrwallet"],
          founders: ['Keppler Svitovsky'],
          competitors: ["Leap"]
        }],

      },
      {
        name: "Bridges",
        companies: [
          {
            name: "Axelar",
            description: "Axelar is a decentralized network and tool provider that helps to connect dApp builders with multiple blockchain ecosystems, applications and users for frictionless cross-chain communication. Axelar consists of a protocol suite, tools, and APIs.",
            logo: "https://pbs.twimg.com/profile_images/1552643733241450497/V-65_xQ1_400x400.jpg",
            excerpt: "What is Axelar?",
            links: ["https://axelar.network/", "https://twitter.com/axelarnetwork"],
            founders: ['Georgios Vlachos, Sergey Gorbunov'],
            competitors: ["Hyperlane, Squid"]
          },
          {
            name: "Squid",
            description: "Squid is the cross-chain swap and liquidity routing protocol on Axelar Network.",
            logo: "https://pbs.twimg.com/profile_images/1548647667135291394/W2WOtKUq_400x400.jpg",
            excerpt: "What is Squid?",
            links: ["https://www.squidrouter.com/", "https://twitter.com/squidrouter"],
            founders: ['n/a'],
            competitors: ["Axelar, Hyperlane"]
          },
          {
            name: "Hyperlane",
            description: "Hyperlane is a messaging protocol accelerating applications towards the interchain singularity. Clients can use this platform to use APIs and send information between blockchains.",
            logo: "https://pbs.twimg.com/profile_images/1671589406816313345/wGzRPeEf_400x400.jpg",
            excerpt: "What is Hyperlane?",
            links: ["https://www.hyperlane.xyz/", "https://twitter.com/hyperlane_xyz"],
            founders: ['Asa Oines, Nam Chu Hoai, Jon Kol'],
            competitors: ["Squid, Axelar"]
          },
        ]
      },
      {
        name: "Data/Analytics",
        companies: [
          {
            name: "Cosmostation",
            description: "Cosmostation is an infrastructure provider and operator of validator nodes for numerous blockchain projects. The firm was founded by Jung Hun, Yong Joo, David Park, and Jay Park.",
            logo: "https://pbs.twimg.com/profile_images/1141994412450254849/nWwjGAZN_400x400.png",
            excerpt: "What is Cosmostation?",
            links: ["https://www.cosmostation.io/", "https://twitter.com/CosmostationVD"],
            founders: ['Jung Hun, Yong Joo, David Park, and Jay Park'],
            competitors: ["n/a"]
          }
        ]
      }
    ]
  }
]
