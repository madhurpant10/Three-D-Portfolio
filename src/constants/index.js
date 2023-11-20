import { razorpay, fashinza } from "../assets/images";
import {
    css,
    express,
    git,
    html,
    javascript,
    nextjs,
    nodejs,
    python,
    java,
    mysql,
    react,
    summiz,
    tailwindcss,
    typescript,
    tensorflow,
    pytorch,
    notion,
    fifa,
    kaggle
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
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: mysql,
        name: "MySql",
        type: "Database",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node",
        type: "Backend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind",
        type: "Frontend",
    }
];

export const experiences = [
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
    },
    {
        title: "Software Engineer Intern",
        company_name: "Fashinza",
        icon: fashinza,
        iconBg: "#ffc3bc",
        date: "March 2023 - September 2023",
        points: [
            "Applied advanced computer vision and deep learning techniques involving semantic segmentation to segment and extract key features of the product.",
            "Implemented a scalable and efficient recommender engine integrated with AWS cloud services for real time recommendations.",
            "Web Scraped the necessary data using Python and Selenium for analytical and Machine Learning applications.",
            "Improved the usability and user experience of the product's front-end through React.",
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