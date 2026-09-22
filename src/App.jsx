import { useEffect, useRef, useState } from 'react'
import { FaBars, FaCloud, FaCode, FaCss3Alt, FaGithub, FaHashtag, FaHouse, FaJava, FaLinkedinIn, FaMedium, FaMoon, FaPalette, FaSun, FaXmark, FaXTwitter } from 'react-icons/fa6'
import {
  SiBootstrap, SiDart,
  SiDocker, SiExpress, SiFigma, SiFlutter, SiHtml5, SiJavascript,
  SiMongodb, SiNodedotjs, SiPostgresql, SiPython, SiReact, SiSvelte,
  SiTailwindcss, SiTypescript,
} from 'react-icons/si'
import './App.css'

const projectCategories = [
  { id: 'ux', label: 'UX Design' },
  { id: 'dev', label: 'Software Dev' },
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/s%C3%A9bastienviolette/', icon: FaLinkedinIn },
  { label: 'GitHub', href: 'https://github.com/OricaRyu', icon: FaGithub },
  { label: 'X', href: 'https://x.com/basiviolette', icon: FaXTwitter },
  { label: 'Medium', href: 'https://medium.com/@basiviolette', icon: FaMedium },
]

// Case-study images live in public so the published site does not depend on assignment source folders.
const asset = (relativePath) => `/case-study/${relativePath}`

// Keeping portfolio content in one place makes it easier to replace placeholders with real work later.
const projects = {
  ux: [
    {
      id: 'synkroai',
      name: 'SynkroAI',
      type: 'UX Case Study',
      summary:
        'A remote-work collaboration platform concept built around task visibility, integrated communication, and AI-assisted workflow clarity.',
      tags: ['UX Research', 'Interaction Design', 'Prototyping'],
      status: 'Case study',
      accent: 'sunset',
      detailTitle: 'Designing a more unified remote collaboration workspace',
      detailText:
        'I led the research, ideation, and prototype direction for SynkroAI, creating a concept that connects task management, file sharing, scheduling, and AI support into a more coherent and usable experience for distributed teams.',
    },
    {
      id: 'service-redesign',
      name: 'Service Redesign',
      type: 'UX Strategy',
      summary:
        'A journey-led redesign focused on reducing friction, clarifying user decisions, and improving confidence throughout the experience.',
      tags: ['Journey Mapping', 'UX Strategy', 'Systems Thinking'],
      status: 'Case study',
      accent: 'forest',
      detailTitle: 'Simplifying the moments that matter most to the user',
      detailText:
        'This concept examined the service journey end-to-end, isolating friction points and creating a more intentional flow that emphasized ownership, clarity, and easier decision-making.',
    },
  ],
  dev: [
    {
      id: 'chess-academia',
      name: 'Chess Academia',
      type: 'Realtime Web App',
      summary:
        'A multiplayer and single-player chess platform with configurable rules, online lobbies, and real-time game interactions.',
      tags: ['Python', 'JavaScript', 'Flask', 'FastAPI', 'WebSockets'],
      status: 'Live project',
      accent: 'royal',
      detailTitle: 'Bringing chess online with flexible rules and responsive gameplay',
      detailText:
        'The app combines live multiplayer logic, configurable Stockfish difficulty, room-based play, and clean game-state management to create a polished and scalable chess experience.',
    },
    {
      id: 'rejection-therapy',
      name: 'Rejection Therapy',
      type: 'Interactive Product',
      summary:
        'A playful rejection-email generator that turns job-application pain points into a full-stack, automated workflow.',
      tags: ['React', 'Node.js', 'Express', 'SQL', 'Nodemailer'],
      status: 'Live project',
      accent: 'moss',
      detailTitle: 'Designing a full-stack workflow with personality and utility',
      detailText:
        'This project highlights end-to-end product thinking: user input, authentication, data storage, service integration, and personalized automation all work together in a cohesive experience.',
    },
    {
      id: 'echomind',
      name: 'EchoMind',
      type: 'AI + Voice Platform',
      summary:
        'A voice-driven system exploring intelligent call routing, user communications, and practical automation workflows.',
      tags: ['Python', 'Twilio', 'Next.js', 'PostgreSQL', 'AI'],
      status: 'Live project',
      accent: 'stone',
      detailTitle: 'Combining communication design with backend intelligence',
      detailText:
        'EchoMind explores how AI-assisted voice and communication systems can streamline work, improve responsiveness, and support more thoughtful automation in real user scenarios.',
    },
  ],
}

const sketchGallery = [
  {
    src: asset('Sketches/Screen1_Login.jpg'),
    caption: 'Figure 1. Initial login sketch exploring sign-in entry points.',
  },
  {
    src: asset('Sketches/Screen2_Signup.jpg'),
    caption: 'Figure 2. Signup concept exploring account creation and onboarding flow.',
  },
  {
    src: asset('Sketches/Screen3_Dashboard(both variations).jpg'),
    caption: 'Figure 3. Dashboard sketch comparing collapsed and expanded layout variants.',
  },
  {
    src: asset('Sketches/Screen4_Dashboard with AI messaging.jpg'),
    caption: 'Figure 4. Concept sketch for the SynkroAI assistant and messaging panel.',
  },
  {
    src: asset('Sketches/Screen5_Project management dashboard.jpg'),
    caption: 'Figure 5. Project management sketch focused on visibility and task ownership.',
  },
  {
    src: asset('Sketches/Screen6_Create a project.jpg'),
    caption: 'Figure 6. New project creation sketch highlighting setup flow and prioritization.',
  },
  {
    src: asset('Sketches/Screen7_Calendar.jpg'),
    caption: 'Figure 7. Calendar planning sketch for meetings and scheduling support.',
  },
  {
    src: asset('Sketches/Screen8_Meeting.jpg'),
    caption: 'Figure 8. Meeting sketch for quick communication and team coordination.',
  },
  {
    src: asset('Sketches/Screen9_FileManagement.jpg'),
    caption: 'Figure 9. File management sketch emphasizing navigation and organization.',
  },
  {
    src: asset('Sketches/Screen9_FileManagementShareFolder.jpg'),
    caption: 'Figure 10. Shared-folder sketch exploring collaboration and permissions.',
  },
]

const wireframeGallery = [
  {
    src: asset('Wireframes/PSYC2030-A2-Screen 1_ Signup Wireframe.png'),
    caption: 'Figure 11. Signup wireframe establishing account setup and onboarding clarity.',
  },
  {
    src: asset('Wireframes/PSYC2030-A2-Screen 2_ Login Wireframe.png'),
    caption: 'Figure 12. Login wireframe defining entry behavior and authentication patterns.',
  },
  {
    src: asset('Wireframes/PSYC2030-A2-Screen 3.1_ Dashboard - Collapsed Nav Bar Wireframe.png'),
    caption: 'Figure 13. Collapsed dashboard wireframe prioritizing compact navigation.',
  },
  {
    src: asset('Wireframes/PSYC2030-A2-Screen 3.2_ Dashboard Expanded Nav Wireframe.png'),
    caption: 'Figure 14. Expanded dashboard wireframe focusing on navigation depth and project visibility.',
  },
  {
    src: asset('Wireframes/PSYC2030-A2-Screen 3.3_ Ask SynkroAI Wireframe.png'),
    caption: 'Figure 15. SynkroAI wireframe illustrating AI assistance and task context.',
  },
  {
    src: asset('Wireframes/PSYC2030-A2-Screen 4.1_ Project Management Wireframe.png'),
    caption: 'Figure 16. Project management wireframe for task assignment and tracking.',
  },
  {
    src: asset('Wireframes/PSYC2030-A2-Screen 4.2_ Project Management New Project Wireframe.png'),
    caption: 'Figure 17. New project setup wireframe for creation and planning workflows.',
  },
  {
    src: asset('Wireframes/PSYC2030-A2-Screen 5_ Calendar Wireframe.png'),
    caption: 'Figure 18. Calendar wireframe organizing meetings and scheduling information.',
  },
  {
    src: asset('Wireframes/PSYC2030-A2-Screen 6_ Meetings Wireframe.png'),
    caption: 'Figure 19. Meeting wireframe defining collaborative scheduling and check-ins.',
  },
  {
    src: asset('Wireframes/PSYC2030-A2-Screen 7.1_ File Management Wireframe.png'),
    caption: 'Figure 20. File management wireframe centered on organized document access.',
  },
  {
    src: asset('Wireframes/PSYC2030-A2-Screen 7.2_ File Management Sharing File Wireframe.png'),
    caption: 'Figure 21. Shared-file wireframe emphasizing file permission and collaboration flow.',
  },
]

const prototypeGallery = [
  {
    src: asset('Prototypes/PSYC2030-A2-Screen 1_ Signup Prototype.png'),
    caption: 'Figure 22. High-fidelity signup prototype establishing brand clarity and form structure.',
  },
  {
    src: asset('Prototypes/PSYC2030-A2-Screen 2_ Login Prototype.png'),
    caption: 'Figure 23. Login prototype refining the entry experience and visual hierarchy.',
  },
  {
    src: asset('Prototypes/PSYC2030-A2-Screen 3.1_ Dashboard - Collapsed Nav Bar Prototype.png'),
    caption: 'Figure 24. Collapsed dashboard prototype balancing efficiency and visibility.',
  },
  {
    src: asset('Prototypes/PSYC2030-A2-Screen 3.2_ Dashboard Expanded Nav Prototype.png'),
    caption: 'Figure 25. Expanded dashboard prototype emphasizing navigation breadth and information density.',
  },
  {
    src: asset('Prototypes/PSYC2030-A2-Screen 3.3_ Ask SynkroAI Prototype.png'),
    caption: 'Figure 26. AI assistant prototype for contextual recommendations and team query support.',
  },
  {
    src: asset('Prototypes/PSYC2030-A2-Screen 4.1_ Project Management Prototype.png'),
    caption: 'Figure 27. Project management prototype supporting prioritization and workflow tracking.',
  },
  {
    src: asset('Prototypes/PSYC2030-A2-Screen 4.2_ Project Management New Project Prototype.png'),
    caption: 'Figure 28. New project prototype clarifying setup workflows and planning data.',
  },
  {
    src: asset('Prototypes/PSYC2030-A2-Screen 5_ Calendar Prototype.png'),
    caption: 'Figure 29. Calendar prototype integrating scheduling into the collaboration workflow.',
  },
  {
    src: asset('Prototypes/PSYC2030-A2-Screen 6_ Meetings Prototype.png'),
    caption: 'Figure 30. Meeting prototype exploring collaborative scheduling and discussion flow.',
  },
  {
    src: asset('Prototypes/PSYC2030-A2-Screen 7.1_ File Management Prototype.png'),
    caption: 'Figure 31. File management prototype emphasizing structure, search, and review.',
  },
  {
    src: asset('Prototypes/PSYC2030-A2-Screen 7.2_ File Management Sharing File Prototype.png'),
    caption: 'Figure 32. Shared-file prototype highlighting permissions, collaboration, and control.',
  },
]

const caseStudyNavItems = [
  { id: 'case-overview', label: 'Overview' },
  { id: 'case-problem', label: 'Problem' },
  { id: 'case-research', label: 'Research' },
  { id: 'case-ideation', label: 'Ideation' },
  { id: 'case-prototypes', label: 'Prototyping' },
  { id: 'case-testing', label: 'Testing' },
  { id: 'case-brief', label: 'Design brief' },
  { id: 'case-reflection', label: 'Reflection' },
]

const personaGallery = [
  {
    src: '/persona-1.png',
    title: 'Randy Petravic',
    caption: 'Figure 1. A persona of a course coordinator and course developer working for the School of Applied Computer Sciences who experiences trouble with version control, real-time collaboration, and delayed responses from colleagues and students in remote work and project management.',
  },
  {
    src: '/persona-2.png',
    title: 'Jane Williamson',
    caption: 'Figure 2. A persona of a team lead and lead software developer working for a startup AI company who experiences difficulties managing tasks across multiple tools, leading to inefficiencies, and wants an all-in-one project management solution to assist in time management and team collaboration.',
  },
]

const surveyFigures = [
  {
    src: '/survey-figures/figure-3-remote-challenges.png',
    title: 'Remote work challenges',
    caption: 'Figure 3. A bar chart depicting users’ most significant challenges when working remotely.',
    takeaway: 'Communication was the largest reported challenge at 75%, while tracking project progress affected 58.3% of respondents.',
  },
  {
    src: '/survey-figures/figure-6-progress-difficulty.png',
    title: 'Progress visibility',
    caption: 'Figure 6. A bar chart depicting the trends in how difficult it is for users to track project progress remotely.',
    takeaway: 'Most responses clustered at the difficult end of the scale, reinforcing the need for a clearer shared project view.',
  },
  {
    src: '/survey-figures/figure-12-file-concerns.png',
    title: 'File collaboration concerns',
    caption: 'Figure 12. A bar chart depicting the main concerns users experience regarding file sharing.',
    takeaway: 'Version control, collaboration, and integration with other tools were each selected by 66.7% of respondents.',
  },
  {
    src: '/survey-figures/figure-14-valued-features.png',
    title: 'What users value',
    caption: 'Figure 14. A bar chart depicting the features users believe are most valuable to include in an all-in-one remote work application.',
    takeaway: 'Easy scheduling and real-time collaboration were selected by all respondents; integrated project management followed at 83.3%.',
  },
]

const competitiveLandscape = [
  {
    category: 'Project work',
    tools: 'Trello · Asana · Notion · Jira',
    strength: 'Strong visual tracking, timelines, workflows, and automation.',
    gap: 'Can be complex to learn and often requires handoffs to communication and file tools.',
  },
  {
    category: 'Meetings',
    tools: 'Zoom · Microsoft Teams · Google Meet',
    strength: 'Reliable calls, scheduling, screen sharing, and growing AI support.',
    gap: 'Meeting context and action items are easily separated from the work they affect.',
  },
  {
    category: 'Files',
    tools: 'Google Drive · Dropbox · OneDrive · GitHub',
    strength: 'Storage, sharing, real-time updates, and version history.',
    gap: 'Permissions, version control, discovery, and integration still create friction.',
  },
  {
    category: 'Collaboration',
    tools: 'Slack · Teams · Miro',
    strength: 'Fast communication, brainstorming, and flexible workspaces.',
    gap: 'Conversation can drift away from tasks, milestones, schedules, and documents.',
  },
]

const uxArtifactGallery = [
  {
    src: asset('Ideation.jpg'),
    title: 'Ideation board',
    caption: 'Ideation work exploring possible features, relationships, and opportunities for SynkroAI.',
  },
  {
    src: asset('Journeymap1.jpg'),
    title: 'User journey map 1',
    caption: 'Journey map identifying steps, pain points, and opportunities across a remote collaboration workflow.',
  },
  {
    src: asset('Journeymap2.jpg'),
    title: 'User journey map 2',
    caption: 'Second journey map examining another collaboration scenario and the moments where users need more clarity.',
  },
  {
    src: asset('mindmap1.jpg'),
    title: 'Mind map 1',
    caption: 'Early synthesis of the platform problem space and potential feature relationships.',
  },
  {
    src: asset('mindmap2.jpg'),
    title: 'Mind map 2',
    caption: 'Exploration of user needs, collaboration contexts, and product opportunities.',
  },
  {
    src: asset('mindmap3.jpg'),
    title: 'Mind map 3',
    caption: 'Synthesis work connecting research observations to possible experience directions.',
  },
  {
    src: asset('mindmap4.jpg'),
    title: 'Mind map 4',
    caption: 'Feature and workflow mapping used to shape the emerging information architecture.',
  },
  {
    src: asset('Mindmap5.jpg'),
    title: 'Mind map 5',
    caption: 'Final mind-map exploration supporting prioritization and design direction.',
  },
]

// Figure numbers follow the reader's journey through the case study, not the source folders.
const withFigureNumbers = (items, startNumber) =>
  items.map((item, index) => ({
    ...item,
    caption: `Figure ${startNumber + index}. ${item.caption.replace(/^Figure \d+\.\s*/, '')}`,
  }))

const numberedSurveyFigures = withFigureNumbers(surveyFigures, 1)
const numberedPersonaGallery = withFigureNumbers(personaGallery, 5)
const numberedJourneyGallery = withFigureNumbers(
  uxArtifactGallery.filter((item) => item.title.includes('journey map')),
  7,
)
const numberedIdeationGallery = withFigureNumbers(
  uxArtifactGallery.filter((item) => item.title === 'Ideation board'),
  9,
)
const numberedMindMapGallery = withFigureNumbers(
  uxArtifactGallery.filter((item) => item.title.includes('Mind map')),
  10,
)
const numberedSketchGallery = withFigureNumbers(sketchGallery, 15)
const numberedWireframeGallery = withFigureNumbers(wireframeGallery, 25)
const numberedPrototypeGallery = withFigureNumbers(prototypeGallery, 36)

const navItems = [
  { id: 'about', label: 'Home' },
  { id: 'works', label: 'Work' },
  { id: 'services', label: 'Services' },
  { id: 'skills', label: 'Technical stack' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

const services = [
  {
    id: 'ux',
    title: 'UX research & strategy',
    description: 'I investigate what people are trying to accomplish, where the current experience breaks down, and what the product should prioritize next. My process can include interviews, competitive analysis, personas, journey maps, usability thinking, and clear recommendations that connect research to action.',
  },
  {
    id: 'ui',
    title: 'UX & UI design',
    description: 'I translate product goals and research findings into thoughtful flows, wireframes, prototypes, and polished interfaces. I pay attention to hierarchy, accessibility, responsive behavior, interaction states, and the small details that make an interface feel understandable and dependable.',
  },
  {
    id: 'mobile',
    title: 'Mobile app development',
    description: 'I design and build mobile experiences that are practical on smaller screens and deliberate about navigation, touch targets, loading states, and platform constraints. I can carry an idea from early flow exploration through implementation and testing.',
  },
  {
    id: 'web',
    title: 'Web design',
    description: 'I create responsive websites and web applications with clear structure, strong visual rhythm, and a balance between personality and usability. The result is designed to work across desktop and mobile, not simply shrink between them.',
  },
  {
    id: 'brand',
    title: 'Branding & identity',
    description: 'I help shape the visual language around a product or person through marks, typography, colour, layout, and consistent digital touchpoints. The goal is an identity that feels recognizable, flexible, and connected to the experience it represents.',
  },
]

const languages = [
  { name: 'C#', icon: FaHashtag },
  { name: 'Java', icon: FaJava },
  { name: 'Python', icon: SiPython },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'CSS', icon: FaCss3Alt },
  { name: 'Dart', icon: SiDart },
  { name: 'Flutter', icon: SiFlutter },
  { name: 'SQL', icon: SiPostgresql },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Svelte', icon: SiSvelte },
  { name: 'Docker', icon: SiDocker },
]

const frameworks = [
  { name: 'ASP.NET', icon: FaCode },
  { name: 'Azure', icon: FaCloud },
  { name: 'Express', icon: SiExpress },
  { name: 'React', icon: SiReact },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Figma', icon: SiFigma },
  { name: 'Adobe Creative Suite', icon: FaPalette },
  { name: 'Bootstrap', icon: SiBootstrap },
  { name: 'Tailwind', icon: SiTailwindcss },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'MongoDB', icon: SiMongodb },
]

const workExperience = [
  {
    role: 'Application / Software Developer Co-op',
    company: 'CIBC — CDS (L4) / FDS (L5), Toronto, ON',
    dates: 'Sept. 2025 – Aug. 2026',
    bullets: [
      'Spearheaded the adoption of agentic AI within FINMOD by designing and engineering six modular AI agents and a dedicated orchestrator.',
      'Built automated Jira reporting pipelines with GitHub Actions, Azure Data Factory, and Databricks, replacing processes that required more than a week of manual effort.',
      'Architected agent governance and changelog automation, and developed a self-improvement framework using hundreds of telemetry signals with human review.',
      'Developed and tested functionality in COBOL-based mainframe systems while contributing to application modernization efforts.',
    ],
  },
  {
    role: 'Student Researcher Software Developer Co-op (L2)',
    company: 'Conestoga College, Waterloo, ON',
    dates: 'May 2025 – Aug. 2025',
    bullets: [
      'Built and maintained full-stack applications with TypeScript, SvelteKit, PostgreSQL, Docker, and Drizzle ORM for research-driven software projects.',
      'Developed interactive game experiences using Unity Engine 6 and C#.',
      'Created automated test suites with Vitest and Playwright, while contributing to UX prototyping, TailwindCSS frontend development, accessibility, ESLint, and Prettier workflows.',
    ],
  },
]

function App() {
  const [activeCategory, setActiveCategory] = useState('ux')
  const [selectedProjectId, setSelectedProjectId] = useState('synkroai')
  const [currentView, setCurrentView] = useState('home')
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [caseMenuOpen, setCaseMenuOpen] = useState(false)
  const [activeCaseSection, setActiveCaseSection] = useState('case-overview')
  const [lightbox, setLightbox] = useState(null)
  const [activeService, setActiveService] = useState('ux')
  const [activeSection, setActiveSection] = useState('about')
  const [introComplete, setIntroComplete] = useState(false)
  const caseNavigationLock = useRef(false)
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme')
    return savedTheme || 'light'
  })

  useEffect(() => {
    document.body.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    // Let the logo intro finish before the page takes over.
    const timeout = window.setTimeout(() => setIntroComplete(true), 1350)
    return () => window.clearTimeout(timeout)
  }, [])

  useEffect(() => {
    if (!copiedEmail) {
      return undefined
    }

    const timeout = window.setTimeout(() => setCopiedEmail(false), 1800)
    return () => window.clearTimeout(timeout)
  }, [copiedEmail])

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)

    const updateActiveSection = () => {
      const contactSection = sections.find((section) => section.id === 'contact')
      // Contact is the final section, so it needs to become active before the footer enters view.
      if (contactSection && contactSection.getBoundingClientRect().top <= window.innerHeight * 0.68) {
        setActiveSection('contact')
        return
      }

      // The section crossing this reading line drives both the menu state and page focus effect.
      const readingLine = window.scrollY + window.innerHeight * 0.32
      const current = sections.reduce((closest, section) => {
        const distance = section.offsetTop - readingLine
        if (distance <= 0 && distance > closest.distance) {
          return { id: section.id, distance }
        }
        return closest
      }, { id: sections[0]?.id || 'about', distance: -Infinity })

      setActiveSection(current.id)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)
    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [currentView])

  useEffect(() => {
    if (currentView !== 'caseStudy') return undefined

    const sections = caseStudyNavItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)
    const updateActiveCaseSection = () => {
      // A menu click briefly owns the active state so scrolling cannot snap the highlight back.
      if (caseNavigationLock.current) return

      // Case-study chapters are long; a lower reading line makes the menu feel responsive at transitions.
      const readingLine = window.scrollY + window.innerHeight * 0.66
      const current = sections.reduce((closest, section) => {
        const distance = section.offsetTop - readingLine
        if (distance <= 0 && distance > closest.distance) return { id: section.id, distance }
        return closest
      }, { id: sections[0]?.id || 'case-overview', distance: -Infinity })
      setActiveCaseSection(current.id)
    }

    updateActiveCaseSection()
    window.addEventListener('scroll', updateActiveCaseSection, { passive: true })
    window.addEventListener('resize', updateActiveCaseSection)
    return () => {
      window.removeEventListener('scroll', updateActiveCaseSection)
      window.removeEventListener('resize', updateActiveCaseSection)
    }
  }, [currentView])

  const currentProjects = projects[activeCategory]
  const selectedProject =
    currentProjects.find((project) => project.id === selectedProjectId) || currentProjects[0]

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('basiviolette@gmail.com')
      setCopiedEmail(true)
    } catch {
      window.alert('Unable to copy email automatically. Please use basiviolette@gmail.com.')
    }
  }

  const handleCategoryChange = (nextCategory) => {
    // Category changes always start at that category's first project instead of leaving stale selection behind.
    setActiveCategory(nextCategory)
    const nextProject = projects[nextCategory][0]
    setSelectedProjectId(nextProject.id)
    setCurrentView('home')
  }

  const handleProjectAction = (project) => {
    setSelectedProjectId(project.id)
    // SynkroAI is the only completed case study route; the other work stays intentionally unavailable.
    if (project.id === 'synkroai') {
      setCurrentView('caseStudy')
    }
  }

  const goHome = () => setCurrentView('home')

  const sectionFocusClass = (sectionId, activeId) =>
    activeId === sectionId ? 'section-focus is-current' : 'section-focus'

  const openGallery = (items, index) => {
    // Keep a gallery's source list with the selected item so next/previous never leaves its chapter.
    setLightbox({ items, index })
  }

  const moveGallery = (direction) => {
    setLightbox((current) => {
      if (!current) return current
      // Modulo lets the gallery wrap naturally from the last image back to the first.
      const index = (current.index + direction + current.items.length) % current.items.length
      return { ...current, index }
    })
  }

  const stackProjects = currentProjects.map((project, index) => {
    // The offset becomes a visual state for the stacked mobile project treatment.
    const offset = index - currentProjects.findIndex((item) => item.id === selectedProject.id)

    let state = 'is-distant'
    if (offset === 0) state = 'is-active'
    else if (offset === 1 || offset === -1) state = 'is-adjacent'
    else if (offset === 2 || offset === -2) state = 'is-far'

    return {
      ...project,
      state,
    }
  })

  if (currentView === 'caseStudy') {
    return (
      <>
        {!introComplete && <PortfolioIntro />}
        <div className={`app-shell case-study-page-shell ${introComplete ? 'is-entered' : ''}`}>
        <button type="button" className="case-study-back" onClick={goHome} aria-label="Back to portfolio home" title="Portfolio home">
          <FaHouse aria-hidden="true" />
        </button>

        <button
          type="button"
          className="case-study-menu-button"
          onClick={() => setCaseMenuOpen((current) => !current)}
          aria-expanded={caseMenuOpen}
          aria-controls="case-study-menu"
          aria-label={caseMenuOpen ? 'Close case study menu' : 'Open case study menu'}
          title={caseMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {caseMenuOpen ? <FaXmark aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>

        <aside id="case-study-menu" className={`case-study-menu ${caseMenuOpen ? 'open' : ''}`} aria-label="Case study sections">
          {caseStudyNavItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeCaseSection === item.id ? 'active' : ''}
              onClick={() => {
                setActiveCaseSection(item.id)
                setCaseMenuOpen(false)
                // Hold the clicked state while the browser completes its smooth anchor scroll.
                caseNavigationLock.current = true
                window.setTimeout(() => {
                  caseNavigationLock.current = false
                }, 850)
              }}
            >
              {item.label}
            </a>
          ))}
        </aside>

        <button
          type="button"
          className="theme-toggle"
          onClick={() => setTheme((current) => (current === 'light' ? 'dark' : 'light'))}
          aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          title={theme === 'light' ? 'Dark mode' : 'Light mode'}
        >
          {theme === 'light' ? <FaMoon aria-hidden="true" /> : <FaSun aria-hidden="true" />}
        </button>

        <main className="case-study-page">
          <section className={`case-study-hero reveal-card ${sectionFocusClass('case-overview', activeCaseSection)}`} id="case-overview">
            <p className="eyebrow">UX Case Study</p>
            <h1>SynkroAI</h1>
            <p className="summary">
              SynkroAI was a remote-work collaboration concept designed to reduce tool fragmentation, improve visibility, and create a cleaner experience for teams managing tasks, meetings, files, and communication across multiple systems.
            </p>
          </section>

          <section className="case-study-grid">
            <div className="case-study-panel long-panel reveal-card">
              <p className="eyebrow">The opportunity</p>
              <h2>Bring remote work back into one shared rhythm.</h2>
              <p>
                SynkroAI reimagines task management, files, meetings, and communication as one connected workspace. I led research, concept development, information architecture, wireframing, and the high-fidelity prototype direction.
              </p>
            </div>

            <div className="case-study-panel small-panel reveal-card">
              <p className="eyebrow">My contribution</p>
              <ul>
                <li>Project Lead</li>
                <li>UX researcher</li>
                <li>Information architect</li>
                <li>Prototype designer</li>
              </ul>
            </div>
          </section>

          <section className={`case-study-narrative reveal-card ${sectionFocusClass('case-problem', activeCaseSection)}`} id="case-problem">
            <div>
              <p className="eyebrow">Problem</p>
              <h2>Remote teams were working across too many disconnected tools.</h2>
            </div>
            <div className="narrative-copy">
              <p>Teams often move between task management, chat, repositories, email, calendars, and file sharing just to understand what needs to happen next. That fragmentation can create duplicated work, unclear ownership, version-control problems, and limited project visibility.</p>
              <p>SynkroAI explored how those workflows could be organized in one coherent workspace without making the experience feel overwhelming.</p>
            </div>
          </section>

          <section className="case-study-narrative objectives-section reveal-card">
            <div>
              <p className="eyebrow">Objectives</p>
              <h2>Make collaboration feel more visible, connected, and actionable.</h2>
            </div>
            <ul className="objective-list">
              <li>Consolidate project management, meetings, messaging, and files.</li>
              <li>Improve visibility into task status, ownership, deadlines, and project health.</li>
              <li>Reduce navigation friction between common remote-work activities.</li>
              <li>Explore contextual AI support for summaries, questions, and recommendations.</li>
            </ul>
          </section>

          <section className={`research-story reveal-card ${['case-research', 'case-ideation'].includes(activeCaseSection) ? 'section-focus is-current' : 'section-focus'}`} id="case-research">
            <div className="case-section-intro">
              <div>
                <p className="eyebrow">Research to direction</p>
                <h2>What the research made impossible to ignore.</h2>
              </div>
              <p>Market research, survey responses, interviews, personas, and journey mapping revealed a common pattern: remote work was not short on tools, but short on continuity between them.</p>
            </div>

            <div className="research-signal-grid">
              <article className="research-signal">
                <span>01</span>
                <h3>Context switching hid the work.</h3>
                <p>Participants described moving between project trackers, chat, repositories, email, calendars, and file systems just to understand what needed attention.</p>
              </article>
              <article className="research-signal">
                <span>02</span>
                <h3>Visibility and ownership were fragile.</h3>
                <p>Interview findings emphasized the need for a clear view of project status, deadlines, task relationships, and responsibility across a distributed team.</p>
              </article>
              <article className="research-signal">
                <span>03</span>
                <h3>Files and meetings created friction.</h3>
                <p>Version control, finding the right document, scheduling across calendars, and delayed responses repeatedly interrupted collaborative momentum.</p>
              </article>
            </div>

            <div className="research-chapter">
              <div className="research-chapter-heading">
                <p className="eyebrow">Competitive landscape</p>
                <h3>Every tool solved part of the problem. The handoffs remained.</h3>
                <p>The review focused on project management, meetings, files, and collaboration. Each category offered useful strengths, but moving between categories repeatedly broke context and slowed teams down.</p>
              </div>

              <div className="competitive-grid">
                {competitiveLandscape.map((item) => (
                  <article key={item.category} className="competitive-card">
                    <p>{item.category}</p>
                    <h4>{item.tools}</h4>
                    <span><strong>Works well:</strong> {item.strength}</span>
                    <span><strong>Opportunity:</strong> {item.gap}</span>
                  </article>
                ))}
              </div>
            </div>

            <div className="research-chapter survey-chapter">
              <div className="research-chapter-heading">
                <p className="eyebrow">Survey evidence</p>
                <h3>Four signals from 12 remote-work respondents.</h3>
                <p>The survey did not simply validate the problem. It helped prioritize which connected capabilities mattered most in the proposed experience.</p>
              </div>

              <div className="survey-grid">
                {numberedSurveyFigures.map((figure, index) => (
                  <figure key={figure.src} className="survey-card">
                    <button type="button" onClick={() => openGallery(numberedSurveyFigures, index)} aria-label={`Open ${figure.title} survey figure`}>
                      <img src={figure.src} alt={figure.title} />
                      <span>Expand figure</span>
                    </button>
                    <figcaption>
                      <strong>{figure.title}</strong>
                      <span>{figure.caption}</span>
                      <em>{figure.takeaway}</em>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>

            <section className="persona-section">
              <div className="case-section-intro">
                <div>
                  <p className="eyebrow">People first</p>
                  <h2>Interviews turned a systems problem into two human workflows.</h2>
                </div>
                <p>Live interviews reinforced the survey findings: participants needed clearer project visibility, simpler file navigation, faster communication, and better ways to coordinate work. Those patterns became Randy and Jane, two personas that grounded the design in distinct remote-work realities.</p>
              </div>

              <div className="persona-grid">
                {numberedPersonaGallery.map((persona, index) => (
                  <figure key={persona.title} className="persona-card">
                    <button type="button" onClick={() => openGallery(numberedPersonaGallery, index)} aria-label={`Open ${persona.title} persona`}>
                      <img src={persona.src} alt={`${persona.title} user persona`} />
                      <span>View persona</span>
                    </button>
                    <figcaption>{persona.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </section>

            <section className="journey-section">
              <div className="case-section-intro">
                <div>
                  <p className="eyebrow">Journey mapping</p>
                  <h2>Mapping where the work breaks down made the opportunity concrete.</h2>
                </div>
                <p>The personas led into journey maps that exposed handoffs, delays, workarounds, and moments of uncertainty across planning, communication, files, and progress tracking.</p>
              </div>

              <div className="journey-grid">
                {numberedJourneyGallery.map((item, index) => {
                  return (
                    <figure key={item.src} className="journey-card">
                      <button type="button" onClick={() => openGallery(numberedJourneyGallery, index)} aria-label={`Open ${item.title}`}>
                        <img src={item.src} alt={item.title} />
                        <span>View journey map</span>
                      </button>
                      <figcaption><strong>{item.title}</strong>{item.caption}</figcaption>
                    </figure>
                  )
                })}
              </div>
            </section>

            <div className="design-response">
              <div>
                <p className="eyebrow">Design response</p>
                <h3>Three principles shaped the system.</h3>
              </div>
              <ol>
                <li><strong>One connected workspace.</strong> Keep projects, tasks, communication, meetings, and files within the same working context.</li>
                <li><strong>Make project health visible.</strong> Surface status, deadlines, dependencies, and ownership before users need to search for them.</li>
                <li><strong>Use AI as contextual support.</strong> Help users organize files, understand progress, and prepare for meetings without making the assistant a separate workflow.</li>
              </ol>
            </div>

            <section className={`research-evidence ${sectionFocusClass('case-ideation', activeCaseSection)}`} id="case-ideation">
              <div className="section-header compact-header">
                <p className="eyebrow">Ideation</p>
                <h3>Turning a shared point of view into possible directions.</h3>
                <p>Brainstorming and mind mapping helped connect research signals to an information architecture that could support projects, files, meetings, and AI assistance without making the workspace feel fragmented again.</p>
              </div>

              <div className="ideation-feature">
                {numberedIdeationGallery.map((item, index) => {
                  return (
                    <figure key={item.src} className="ideation-board">
                      <button type="button" onClick={() => openGallery(numberedIdeationGallery, index)} aria-label={`Open ${item.title}`}>
                        <img src={item.src} alt={item.title} />
                        <span>View ideation board</span>
                      </button>
                      <figcaption><strong>{item.title}</strong>{item.caption}</figcaption>
                    </figure>
                  )
                })}
              </div>

              <div className="mindmap-grid">
                {numberedMindMapGallery.map((item, index) => {
                  return (
                  <figure key={item.src} className="mindmap-card">
                    <button type="button" onClick={() => openGallery(numberedMindMapGallery, index)} aria-label={`Open ${item.title}`}>
                      <img src={item.src} alt={item.title} />
                      <span>Expand</span>
                    </button>
                    <figcaption><strong>{item.title}</strong>{item.caption}</figcaption>
                  </figure>
                  )
                })}
              </div>
            </section>
          </section>

          <section className={`case-study-gallery reveal-card ${sectionFocusClass('case-prototypes', activeCaseSection)}`} id="case-prototypes">
            <div className="section-header compact-header">
              <p className="eyebrow">Prototyping</p>
              <h2>Exploring the system from sketch to high fidelity.</h2>
              <p className="prototyping-intro">The prototype work moved from rough concepts to structural wireframes and polished interface screens. Each stage tested the relationship between navigation, project visibility, files, meetings, and contextual AI support.</p>
            </div>

            <div className="gallery-group">
              <h3>Sketches</h3>
              <div className="image-grid">
                {numberedSketchGallery.map((item, index) => (
                  <figure key={`${item.caption}-${index}`} className="case-figure">
                    <button type="button" className="case-image-button" onClick={() => openGallery(numberedSketchGallery, index)} aria-label={`Open sketch ${index + 1}`}>
                      <img src={item.src} alt={item.caption} />
                    </button>
                    <figcaption>{item.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </div>

            <div className="gallery-group">
              <h3>Wireframes</h3>
              <div className="image-grid">
                {numberedWireframeGallery.map((item, index) => (
                  <figure key={`${item.caption}-${index}`} className="case-figure">
                    <button type="button" className="case-image-button" onClick={() => openGallery(numberedWireframeGallery, index)} aria-label={`Open wireframe ${index + 1}`}>
                      <img src={item.src} alt={item.caption} />
                    </button>
                    <figcaption>{item.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </div>

            <div className="gallery-group">
              <h3>Prototypes</h3>
              <div className="image-grid">
                {numberedPrototypeGallery.map((item, index) => (
                  <figure key={`${item.caption}-${index}`} className="case-figure">
                    <button type="button" className="case-image-button" onClick={() => openGallery(numberedPrototypeGallery, index)} aria-label={`Open prototype ${index + 1}`}>
                      <img src={item.src} alt={item.caption} />
                    </button>
                    <figcaption>{item.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>

          <section className={`case-study-narrative testing-section reveal-card ${sectionFocusClass('case-testing', activeCaseSection)}`} id="case-testing">
            <div>
              <p className="eyebrow">Usability testing &amp; outcomes</p>
              <h2>What still needs to be tested with the people this is for.</h2>
            </div>
            <div className="narrative-copy">
              <p>No formal usability-testing sessions were completed within the assignment timeline, so I do not present the prototype as validated. The research, personas, and journey maps established the assumptions that a next iteration needs to test.</p>
              <ul className="testing-list">
                <li><strong>Findability:</strong> Can remote team members locate a project, file, meeting, or AI action without relying on the navigation structure?</li>
                <li><strong>Status comprehension:</strong> Can users explain a project’s health, ownership, dependencies, and next action after viewing the dashboard?</li>
                <li><strong>File confidence:</strong> Do users understand file location, version state, sharing permissions, and related project context?</li>
                <li><strong>AI usefulness:</strong> Do recommendations reduce coordination effort without interrupting focused work?</li>
              </ul>
              <p>The outcome of that testing would determine which flows and information priorities need another prototype iteration.</p>
            </div>
          </section>

          <section className={`design-brief reveal-card ${sectionFocusClass('case-brief', activeCaseSection)}`} id="case-brief">
            <div className="design-brief-heading">
              <p className="eyebrow">Final solution &amp; design brief</p>
              <h2>A connected collaboration workspace for teams that need clarity without more complexity.</h2>
            </div>
            <div className="design-brief-grid">
              <article>
                <h3>Goals &amp; audience</h3>
                <p>SynkroAI is aimed at remote and hybrid teams, especially team leads, developers, and coordinators who need clearer progress tracking, connected communication, and dependable file workflows.</p>
              </article>
              <article>
                <h3>Key UI decisions</h3>
                <p>A dashboard-first layout prioritizes project health; persistent navigation keeps key areas reachable; modular cards support scanning; and the AI assistant remains contextual to the work rather than becoming a separate destination.</p>
              </article>
              <article>
                <h3>Accessibility considerations</h3>
                <p>Interfaces were designed with readable hierarchy, clear labels, consistent navigation states, sufficient spacing for interaction, and information grouped by task rather than by feature type.</p>
              </article>
              <article>
                <h3>Key lesson learned</h3>
                <p>An all-in-one product only reduces complexity when its information architecture makes relationships visible. Consolidating features without a clear hierarchy would simply reproduce fragmentation in a new place.</p>
              </article>
            </div>
          </section>

          <section className={`case-study-narrative reflection-section reveal-card ${sectionFocusClass('case-reflection', activeCaseSection)}`} id="case-reflection">
            <div>
              <p className="eyebrow">Reflection</p>
              <h2>A design prototype shaped by research and systems thinking.</h2>
            </div>
            <div className="narrative-copy">
              <p>The project showed the value of connecting research findings to information architecture before committing to high-fidelity screens. It also made clear that an integrated product needs a strong hierarchy so that adding capabilities does not add unnecessary cognitive load.</p>
              <p>The next step would be usability testing with remote team leads and developers, focusing on findability, navigation between workflows, project-status comprehension, file-sharing confidence, and the usefulness of AI recommendations.</p>
              <p className="implementation-note"><strong>Implementation note:</strong> SynkroAI was completed as a UX design and prototyping project. The page presents the design rationale and artifacts; it does not claim that the proposed platform was implemented as production software.</p>
            </div>
          </section>

          {lightbox && (
            <div className="lightbox" role="dialog" aria-modal="true" aria-label="Expanded case study image">
              <button type="button" className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close image viewer">×</button>
              <button type="button" className="lightbox-arrow lightbox-prev" onClick={() => moveGallery(-1)} aria-label="Previous image">‹</button>
              <figure>
                <img src={lightbox.items[lightbox.index].src} alt={lightbox.items[lightbox.index].caption || lightbox.items[lightbox.index].title} />
                <figcaption>{lightbox.items[lightbox.index].caption || lightbox.items[lightbox.index].title}</figcaption>
              </figure>
              <button type="button" className="lightbox-arrow lightbox-next" onClick={() => moveGallery(1)} aria-label="Next image">›</button>
            </div>
          )}
        </main>

        <footer className="site-footer">
          <div className="footer-meta">
            <span>Sébastien Violette</span>
            <span>© 2026</span>
          </div>
        </footer>
        </div>
      </>
    )
  }

  return (
    <>
      {!introComplete && <PortfolioIntro />}
      <div className={`app-shell ${introComplete ? 'is-entered' : ''}`}>
      <button
        type="button"
        className="floating-menu"
        onClick={() => setMenuOpen((current) => !current)}
        aria-expanded={menuOpen}
        aria-controls="section-menu"
        aria-label={menuOpen ? 'Close portfolio menu' : 'Open portfolio menu'}
        title={menuOpen ? 'Close menu' : 'Open menu'}
      >
        {menuOpen ? <FaXmark aria-hidden="true" /> : <FaBars aria-hidden="true" />}
      </button>

      <aside id="section-menu" className={`side-nav ${menuOpen ? 'open' : ''}`} aria-label="Section navigation">
        <nav className="side-nav-links" aria-label="Portfolio sections">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? 'active' : ''}
              onClick={() => {
                setActiveSection(item.id)
                setMenuOpen(false)
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="side-nav-contact">
          <button type="button" className="side-copy-email" onClick={handleCopyEmail}>
            {copiedEmail ? 'Email copied' : 'Copy email'}
          </button>
          <div className="side-social-links" aria-label="Social media links">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
                  <Icon aria-hidden="true" />
                </a>
              )
            })}
          </div>
        </div>
      </aside>

      <header className="topbar">
        <div className="brand" aria-label="Sébastien Violette portfolio">
          <img src="/logo-mark-transparent.png" alt="Sébastien Violette logo mark" />
        </div>

        <button
          type="button"
          className="theme-toggle"
          onClick={() => setTheme((current) => (current === 'light' ? 'dark' : 'light'))}
          aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          title={theme === 'light' ? 'Dark mode' : 'Light mode'}
        >
          {theme === 'light' ? <FaMoon aria-hidden="true" /> : <FaSun aria-hidden="true" />}
        </button>
      </header>

      <main>
        <section className={`hero-section ${sectionFocusClass('about', activeSection)}`} id="about">
          <div className="hero-copy reveal-card">
            <p className="eyebrow">Designer. Researcher. Developer.</p>
            <h1>
              I build thoughtful digital experiences from research to implementation.
            </h1>
            <p className="summary">
              I’m a fourth-year co-op student in Conestoga College’s IT Innovation &amp; Design program and a McMaster University graduate with a BSc in Honours Life Sciences. My background spans environmental science, biology, psychology, design, and software, which gives me a naturally curious and people-aware approach to technology.
            </p>
            <p className="summary">
              I’m exploring UX/UI design, web development, software development, cloud architecture, cyber security, and AI. I’m interested in the space between how a product works and how it feels to use, and I’m building a broad foundation so I can contribute thoughtfully from early research and ideas through to implementation.
            </p>

            <div className="hero-actions">
              <a href="#works" className="primary-btn">
                View work
              </a>
              <a href="#contact" className="secondary-btn">
                Contact me
              </a>
            </div>
          </div>

          <div className="hero-panel reveal-card" aria-label="About Sébastien Violette">
            <div className="profile-card">
              <div className="profile-image-wrap">
                <img src="/profile.png" alt="Portrait of Sébastien Violette" className="profile-image" />
              </div>
              <div className="profile-details">
                <span className="mini-label">Based in Ontario, Canada</span>
                <strong>Sébastien Violette</strong>
                <span>Software developer · UX/UI designer</span>
              </div>
            </div>
            <div className="panel-card panel-small">
              <span className="mini-label">Curious about</span>
              <div className="focus-tags">
                <span>UX / UI</span>
                <span>AI &amp; ML</span>
                <span>Cloud</span>
                <span>Cyber security</span>
                <span>Web development</span>
              </div>
            </div>
            <div className="panel-card resume-panel">
              <span className="mini-label">Professional background</span>
              <p>Explore my experience, technical skills, education, and project history.</p>
              <a
                href="/Sebastien-Violette-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="resume-link"
              >
                View resume <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className={`works-section ${sectionFocusClass('works', activeSection)}`} id="works">
          <div className="section-header reveal-card">
            <p className="eyebrow">Selected work</p>
            <h2>Design, research, and software thinking in conversation.</h2>
          </div>

          <div className="category-switcher reveal-card" role="tablist" aria-label="Project categories">
            {projectCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                className={category.id === activeCategory ? 'category-btn active' : 'category-btn'}
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="project-stack reveal-card" aria-live="polite">
            {stackProjects.map((project) => (
              <article
                key={project.id}
                className={`project-card ${project.state}`}
                onClick={() => setSelectedProjectId(project.id)}
              >
                <div className={`project-visual ${project.accent} ${project.id === 'synkroai' ? 'synkroai-visual' : ''}`}>
                  {project.id === 'synkroai' ? (
                    <div className="synkro-carousel" aria-label="SynkroAI prototype images">
                      {prototypeGallery.slice(0, 4).map((image) => (
                        <img key={image.src} src={image.src} alt="SynkroAI prototype screen" />
                      ))}
                    </div>
                  ) : (
                    <span>{project.type}</span>
                  )}
                </div>

                <div className="project-body">
                  <div className="project-topline">
                    <p>{project.type}</p>
                    <span className="project-status">{project.status}</span>
                  </div>

                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>

                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  className={project.id === 'synkroai' ? 'project-action' : 'project-action is-coming-soon'}
                  onClick={() => handleProjectAction(project)}
                  disabled={project.id !== 'synkroai'}
                >
                  {project.id === 'synkroai' ? 'View case study' : 'Coming soon'}
                </button>
              </article>
            ))}
          </div>

          <div className="case-study-panel reveal-card" aria-live="polite">
            <div className="panel-copy">
              <p className="eyebrow">Featured project</p>
              <h3>{selectedProject.detailTitle}</h3>
              <p>{selectedProject.detailText}</p>
            </div>

            <div className="panel-metrics">
              {selectedProject.id === 'synkroai' ? (
                <>
                  <div>
                    <span>Role</span>
                    <strong>Project Lead</strong>
                  </div>
                  <div>
                    <span>Focus</span>
                    <strong>Research to prototype</strong>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <span>Status</span>
                    <strong>{selectedProject.status}</strong>
                  </div>
                  <div>
                    <span>Focus</span>
                    <strong>Product engineering</strong>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        <section className={`portfolio-section reveal-card ${sectionFocusClass('services', activeSection)}`} id="services">
          <div className="section-header">
            <p className="eyebrow">Services</p>
            <h2>What I bring to a product team.</h2>
          </div>

          <div className="services-list">
            {services.map((service) => (
              <article key={service.id} className={`service-item ${activeService === service.id ? 'expanded' : ''}`}>
                <button type="button" onClick={() => setActiveService(activeService === service.id ? '' : service.id)}>
                  <span>{service.title}</span>
                  <span aria-hidden="true">{activeService === service.id ? '×' : '+'}</span>
                </button>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={`portfolio-section reveal-card ${sectionFocusClass('skills', activeSection)}`} id="skills">
          <div className="section-header">
            <p className="eyebrow">Technical stack</p>
            <h2>Tools I use to turn ideas into working products.</h2>
          </div>

          <div className="skill-rail-group">
            <p className="rail-label">Programming languages</p>
            <div className="skill-rail" aria-label="Programming languages carousel">
              <div className="skill-rail-track">
                {[...languages, ...languages].map((skill, index) => {
                  const Icon = skill.icon
                  return (
                    <div className="skill-card" key={`${skill.name}-${index}`}>
                      <Icon className="skill-icon" aria-hidden="true" />
                      <span>{skill.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="skill-rail-group">
            <p className="rail-label">Frameworks and tools</p>
            <div className="skill-rail skill-rail-reverse" aria-label="Frameworks and tools carousel">
              <div className="skill-rail-track">
                {[...frameworks, ...frameworks].map((skill, index) => {
                  const Icon = skill.icon
                  return (
                    <div className="skill-card" key={`${skill.name}-${index}`}>
                      <Icon className="skill-icon" aria-hidden="true" />
                      <span>{skill.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section className={`portfolio-section reveal-card ${sectionFocusClass('experience', activeSection)}`} id="experience">
          <div className="section-header">
            <p className="eyebrow">Relevant experience</p>
            <h2>Work experience.</h2>
          </div>

          <div className="timeline">
            {workExperience.map((job) => (
              <article className="timeline-item" key={`${job.role}-${job.company}`}>
                <div className="timeline-heading">
                  <div>
                    <h3>{job.role}</h3>
                    <p>{job.company}</p>
                  </div>
                  <span>{job.dates}</span>
                </div>
                <ul>
                  {job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className={`portfolio-section reveal-card ${sectionFocusClass('achievements', activeSection)}`} id="achievements">
          <div className="section-header">
            <p className="eyebrow">Achievements</p>
            <h2>Recognition through responsible technology.</h2>
          </div>

          <article className="achievement-panel">
            <div className="achievement-heading">
              <div>
                <h3>Conhacks 2025</h3>
                <p>1st Place, Responsible Consumption &amp; Production (SDG 12)</p>
              </div>
              <span>Feb. 28 – Mar. 2, 2025</span>
            </div>
            <p><strong>Project:</strong> MindSetGo</p>
            <p>A browser extension aimed at promoting sustainable consumption and smarter choices.</p>
            <ul>
              <li>Provides environmental impact insights on potential purchases.</li>
              <li>Displays real-time sustainability metrics based on product data.</li>
              <li>Recommends second-hand and eco-friendly alternatives to reduce waste.</li>
              <li>Promotes circular economy practices to encourage sustainability.</li>
            </ul>
          </article>
        </section>

        <section className={`contact-section reveal-card ${sectionFocusClass('contact', activeSection)}`} id="contact">
          <div className="contact-copy">
            <p className="eyebrow">Let’s connect</p>
            <h2>Open to product design, UX research, and software development opportunities.</h2>
            <p>I’m always interested in thoughtful conversations about products, systems, and meaningful work.
            </p>
          </div>

          <div className="footer-contact-panel contact-link-panel">
            <div className="footer-contact-actions">
              <button type="button" className="footer-copy-email" onClick={handleCopyEmail}>
                {copiedEmail ? 'Email copied' : 'Copy email'}
              </button>
              <div className="footer-social-links" aria-label="Social media links">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                      <Icon aria-hidden="true" />
                      <span>{link.label}</span>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-meta">
          <span>Sébastien Violette</span>
          <span>© 2026</span>
        </div>
      </footer>
      </div>
    </>
  )
}

function PortfolioIntro() {
  return (
    <div className="portfolio-intro" aria-hidden="true">
      <div className="intro-mark">
        <img src="/logo-mark-transparent.png" alt="" />
      </div>
      <span className="intro-rule" />
    </div>
  )
}

export default App
