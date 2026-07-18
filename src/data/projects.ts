export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  highlights: string[];
  status?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface MiniProject {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

// INSTRUCTIONS FOR ADDING NEW PROJECTS:
// 1. To add a new flagship project, add an object to the `flagshipProjects` array below.
// 2. To add a new mini project, add an object to the `miniProjects` array below.
// 3. Make sure to provide a unique `id` for each project.
// 4. Use '#' for `githubUrl` or `liveUrl` if the link is unknown or unavailable.

export const flagshipProjects: Project[] = [
  {
    id: "insiderwatch",
    title: "InsiderWatch — AI-Based Insider Threat Detection System",
    description: "AI-powered insider threat detection platform with real-time monitoring of employee activity.",
    techStack: ["Python", "FastAPI", "React", "Machine Learning", "TypeScript"],
    highlights: [
      "Monitors real-time employee activity via USB tracking and browser behavior analysis.",
      "Implements a hybrid anomaly detection engine combining Isolation Forest and Random Forest algorithms.",
      "Features interactive dashboards for risk scoring, threat alerts, and comprehensive security analytics."
    ],
    status: "Published; presented at IMSTEM 2026",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: "attendifyx",
    title: "AttendifyX — Smart Attendance System using Deep Learning",
    description: "Real-time face recognition attendance system with scalable, secure backend services.",
    techStack: ["Python", "InsightFace", "React", "Node.js", "TypeScript"],
    highlights: [
      "Performs real-time facial recognition for seamless attendance tracking.",
      "Provides modern administrative dashboards with automated analytics and comprehensive reporting.",
      "Backed by a scalable and highly secure backend infrastructure."
    ],
    status: "Published in IRJASH",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: "friday",
    title: "F.R.I.D.A.Y. — An Elite AI Voice Assistant",
    description: "AI-powered voice assistant integrating natural language processing with fallback conversational capabilities.",
    techStack: ["Python", "LiveKit", "Google LLM"],
    highlights: [
      "Integrates natural language processing for dynamic, real-time voice interactions.",
      "Features robust fallback conversational capabilities for uninterrupted assistance.",
      "Demonstrates advanced AI agent design and cross-platform automation capabilities."
    ],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: "ipl-simulator",
    title: "IPL Mock Auction Simulator with AI Franchise Engine",
    description: "Real-time multiplayer IPL auction platform with live bidding and automated auction workflows.",
    techStack: ["React.js", "Node.js", "Socket.IO", "PostgreSQL"],
    highlights: [
      "Facilitates real-time multiplayer bidding through an automated auction workflow.",
      "Incorporates a mathematical AI franchise engine for realistic auction strategy simulation.",
      "Evaluates player roles, squad balance, budget constraints, capped players, and overseas limits dynamically."
    ],
    githubUrl: "#",
    liveUrl: "#"
  }
];

export const miniProjects: MiniProject[] = [
  {
    id: "remedies",
    title: "Medicine-based Chatbot (Remedies)",
    description: "Intelligent chatbot assisting with medical remedies and information (Internship Project).",
    techStack: ["Python", "NLP", "Machine Learning"],
    githubUrl: "#"
  },
  {
    id: "heart-disease",
    title: "Heart Disease Prediction using ML",
    description: "Machine learning model predicting the likelihood of heart disease based on patient data.",
    techStack: ["Python", "Scikit-Learn", "Pandas"],
    githubUrl: "#"
  },
  {
    id: "ticket-booking",
    title: "Ticket Booking System",
    description: "Robust application for booking tickets seamlessly.",
    techStack: ["Java", "DBMS", "SQL"],
    githubUrl: "#"
  },
  {
    id: "muscle-factory",
    title: "Muscle Factory",
    description: "Comprehensive web platform for fitness and gym management.",
    techStack: ["React", "Node.js"],
    githubUrl: "#"
  },
  {
    id: "elitecart",
    title: "EliteCart",
    description: "Full-featured e-commerce website with modern user interface.",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "#"
  }
];
