import { razorpay, fashinza, expedia } from "../assets/images";
import {
    express,
    git,
    nextjs,
    nodejs,
    python,
    mysql,
    react,
    summiz,
    tensorflow,
    pytorch,
    notion,
    fifa,
    kaggle,
    aws,
    databricks,
    docker,
    snowflake,
    tableau,
    looker,
    langchain,
    jupyter,
    claude,
    pinecone,
    huggingface,
    pyspark,
    fastapi
} from "../assets/icons";

export const skills = [
    {
        imageUrl: python,
        name: "Python",
        type: "ML",
    },
    {
        imageUrl: tensorflow,
        name: "Tensorflow",
        type: "ML",
    },
    {
        imageUrl: pytorch,
        name: "Pytorch",
        type: "ML",
    },
    {
        imageUrl: mysql,
        name: "MySql",
        type: "Database",
    },
    {
        imageUrl: databricks,
        name: "Databricks",
        type: "Data Engineering",
    },
    {
        imageUrl: snowflake,
        name: "Snowflake",
        type: "Data Engineering",
    },
    {
        imageUrl: aws,
        name: "AWS",
        type: "Cloud",
    },
    {
        imageUrl: tableau,
        name: "Tableau",
        type: "Analytics",
    },
    {
        imageUrl: looker,
        name: "Looker",
        type: "Analytics",
    },
    {
        imageUrl: langchain,
        name: "LangChain",
        type: "AI/LLM",
    },
    {
        imageUrl: fastapi,
        name: "FastAPI",
        type: "Backend",
    },
    {
        imageUrl: pyspark,
        name: "PySpark",
        type: "Data Engineering",
    },
    {
        imageUrl: huggingface,
        name: "HuggingFace",
        type: "AI/LLM",
    },
    {
        imageUrl: pinecone,
        name: "Pinecone",
        type: "AI/LLM",
    },
    {
        imageUrl: jupyter,
        name: "Jupyter",
        type: "Tools",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "DevOps",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: claude,
        name: "Claude",
        type: "AI/LLM",
    }
];

export const experiences = [
    {
        title: "Senior Business Intelligence Analyst",
        company_name: "Expedia Group",
        icon: expedia,
        iconBg: "#eeeeee",
        iconSize: "w-[100%] h-[100%]",
        date: "September 2025 - Present",
        points: [
            "Built an internal NLP pipeline to analyze large-scale partner conversations using topic modeling, sentiment analysis, and pattern extraction, enabling scalable text analytics across the partner ecosystem.",
            "Architected a vector embedding pipeline to semantically index partner conversation data, enabling LLM-powered querying and insight generation to surface actionable patterns and trends at scale.",
            "Built 'Vector', an internal AI analytics platform that automates end-to-end dashboard creation and insight generation, significantly reducing manual effort and turnaround time.",
            "Leading development of an AI agent workflow to automate end-to-end analytics, handling the full project lifecycle from prototyping to a production-serving solution using RAG-based retrieval and LLMs.",
        ],
    },
    {
        title: "Business Analyst",
        company_name: "Razorpay",
        icon: razorpay,
        iconBg: "#acdbf1",
        date: "February 2024 - August 2025",
        points: [
            "Analyzed payment transaction data for 200+ top-tier merchants, conducting A/B testing and statistical inference on payment flow configurations to detect anomalous patterns and optimize success rates, achieving a 4–12% improvement.",
            "Collaborated cross-functionally with product, engineering, and merchant teams to identify fraud signals, model payment lifecycle bottlenecks, and deliver data-driven recommendations at scale.",
            "Utilized Python, SQL, Snowflake, and Tableau to build ETL pipelines, analyze data trends, and create visual reports, enhancing stakeholder decision-making processes.",
            "Built RazorSense using Python, a Chrome extension that enhances Freshdesk productivity by analyzing ticket context, scoring reply quality, and suggesting AI-powered responses.",
        ],
    },
    {
        title: "Machine Learning Intern",
        company_name: "Fashinza",
        icon: fashinza,
        iconBg: "#ffc3bc",
        iconSize: "w-[75%] h-[75%]",
        date: "March 2023 - September 2023",
        points: [
            "Applied advanced computer vision and deep learning techniques involving semantic segmentation to segment and extract key features of the product.",
            "Implemented a scalable and efficient recommender engine integrated with AWS cloud services for real time recommendations.",
            "Web Scraped the necessary data using Python and Selenium for analytical and Machine Learning applications.",
            "Improved the usability and user experience of the product's front-end through React.",
        ],
    },
    {
        title: "Business Analyst Intern",
        company_name: "Razorpay",
        icon: razorpay,
        iconBg: "#acdbf1",
        date: "July 2022 - September 2022",
        points: [
            "Proficiently handling large-scale databases, extracting valuable insights through data analysis.",
            "Conducted an in-depth analysis to identify the factors contributing to transaction failures, resulting in an increase in success rate.",
            "Implemented a predictive Machine Learning model to forecast the success rate of transactions."
        ],
    }
];

export const projects = [
    {
        iconUrl: notion,
        theme: 'btn-back-black',
        name: 'Full Stack Notion Clone',
        description: 'Built using Next JS providing dynamic database and intuitive file management making it an ideal tool for managing your notes, projects, and tasks.',
        link: 'https://github.com/madhurpant10/Notion-Website-Fullstack',
    },
    {
        iconUrl: fifa,
        theme: 'btn-back-red',
        name: 'FIFA ML Web App',
        description: 'A Web Application providing dynamic player recommendations, accurate match predictions and interactive visualizations.',
        link: 'https://github.com/madhurpant10/FIFA-World-Cup-ML-WebApp'
    },
    {
        iconUrl: kaggle,
        theme: 'btn-back-blue',
        name: 'Kaggle Portfolio',
        description: 'My Kaggle Profile ranked 200 globally, showcasing a collection of high quality Machine Learning and Data Science projects.',
        link: 'https://www.kaggle.com/madhurpant',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Natural Language Processing',
        description: 'Advanced NLP models employing Recurrent Neural Networks to tackle the critical tasks of classifying hate speech and analyzing public sentiment.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];