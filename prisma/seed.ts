import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import Database from "better-sqlite3";

const adapter = new PrismaBetterSqlite3({
    url: "dev.db",
});
const prisma = new PrismaClient({ adapter });

const projects = [
    {
        title: "Polymarket",
        description: "The world's largest information markets platform.",
        url: "https://polymarket.com",
        tags: ["Official", "Market"],
        category: "Official",
        imageUrl: "https://polymarket.com/logo.png",
    },
    {
        title: "PolyWhale",
        description: "Analytics tool for tracking whale activity on Polymarket.",
        url: "https://polywhale.xyz",
        tags: ["Analytics", "Whales"],
        category: "Analytics",
    },
    {
        title: "PolyPulse",
        description: "Real-time market sentiment analysis.",
        url: "https://polypulse.io",
        tags: ["Analytics", "Sentiment"],
        category: "Analytics",
    },
    {
        title: "BetBot 3000",
        description: "Automated betting bot for high-frequency trading.",
        url: "https://betbot3000.com",
        tags: ["Bot", "Trading"],
        category: "Bots",
    },
    {
        title: "MarketMaker Pro",
        description: "Tools for liquidity provision on Polymarket.",
        url: "https://marketmaker.pro",
        tags: ["Tools", "Liquidity"],
        category: "Tools",
    },
    {
        title: "PolyNews",
        description: "Aggregated news feed relevant to active markets.",
        url: "https://polynews.com",
        tags: ["News", "Aggregator"],
        category: "News",
    },
    {
        title: "OddsCalculator",
        description: "Advanced odds calculation and arbitrage finder.",
        url: "https://oddscalculator.com",
        tags: ["Tools", "Math"],
        category: "Tools",
    },
    {
        title: "PolyGraph",
        description: "Visualizing market trends over time.",
        url: "https://polygraph.io",
        tags: ["Analytics", "Visualization"],
        category: "Analytics",
    },
    {
        title: "PredictionDAO",
        description: "Community-governed prediction strategies.",
        url: "https://predictiondao.org",
        tags: ["DAO", "Community"],
        category: "Community",
    },
    {
        title: "PolyTax",
        description: "Tax reporting tools for prediction market earnings.",
        url: "https://polytax.com",
        tags: ["Tools", "Tax"],
        category: "Tools",
    },
    {
        title: "MarketSniper",
        description: "Alerts for new market listings.",
        url: "https://marketsniper.com",
        tags: ["Bot", "Alerts"],
        category: "Bots",
    },
    {
        title: "PolyAcademy",
        description: "Educational resources for prediction market trading.",
        url: "https://polyacademy.com",
        tags: ["Education", "Learning"],
        category: "Education",
    },
    {
        title: "TrendSpotter",
        description: "AI-driven trend analysis for markets.",
        url: "https://trendspotter.ai",
        tags: ["AI", "Analytics"],
        category: "Analytics",
    },
    {
        title: "PolyMobile",
        description: "Unofficial mobile app for Polymarket.",
        url: "https://polymobile.app",
        tags: ["Mobile", "App"],
        category: "Tools",
    },
    {
        title: "CryptoPredict",
        description: "Cross-referencing crypto prices with market odds.",
        url: "https://cryptopredict.com",
        tags: ["Crypto", "Analytics"],
        category: "Analytics",
    },
    {
        title: "PolySocial",
        description: "Social network for prediction market traders.",
        url: "https://polysocial.com",
        tags: ["Social", "Community"],
        category: "Community",
    },
    {
        title: "RiskManager",
        description: "Portfolio risk management dashboard.",
        url: "https://riskmanager.io",
        tags: ["Tools", "Finance"],
        category: "Tools",
    },
    {
        title: "PolyAPI Docs",
        description: "Unofficial enhanced documentation for Polymarket API.",
        url: "https://polyapi.docs",
        tags: ["Dev", "Docs"],
        category: "Development",
    },
    {
        title: "MarketHistory",
        description: "Archival data of resolved markets.",
        url: "https://markethistory.com",
        tags: ["Data", "History"],
        category: "Analytics",
    },
    {
        title: "PolyWatch",
        description: "Watchlist and notification service.",
        url: "https://polywatch.com",
        tags: ["Tools", "Notifications"],
        category: "Tools",
    },
];

async function main() {
    console.log("Seeding database...");

    // Clear existing projects to avoid duplicates if re-run
    await prisma.project.deleteMany();

    for (let i = 0; i < projects.length; i++) {
        const project = projects[i];
        await prisma.project.create({
            data: {
                ...project,
                tags: JSON.stringify(project.tags),
                order: i,
            },
        });
    }

    console.log("Seeding complete.");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
