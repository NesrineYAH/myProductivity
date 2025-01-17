// data.js
export const projectsData = [
  {
    name: "Les petit plats ",
    image: "",
    alt: "projet HM",
    id: "1",

    tasks: [
      {
        id: 1,
        title: "page html:",
        description: "ctte page est une page",
        completed: false,
      },
      {
        id: 2,
        title: "templating:",
        completed: false,
      },
      {
        id: 3,
        title: "Bouttons",
        completed: false,
      },
      {
        id: 4,
        title: "manageElement, templating:",
        completed: false,
      },
      {
        id: 5,
        title: "Talwind.css:",
        completed: false,
      },
      {
        id: 6,
        title: " Version mobile:",
        completed: false,
      },
    ],
  },

  {
    name: "Game on ",
    image: "",
    alt: "projet GO",
    id: "2",

    tasks: [
      {
        id: 1,
        title: "Landing page JS",
        completed: false,
      },
      {
        id: 2,
        title: "Style css",
        completed: false,
      },
      {
        id: 3,
        title: "Version Mobile",
        completed: false,
      },
    ],
  },
  {
    name: "SportSee ",
    image: "",
    alt: "p avec react",
    id: "3",
    tasks: [
      {
        id: 1,
        title: " etape1:",
        completed: false,
      },
      {
        id: 2,
        title: "etape2:",
        completed: false,
      },
      {
        id: 3,
        title: "etape3:",
        completed: false,
      },
    ],
  },
  {
    name: "CodinGame",
    image: "",
    alt: "projet codinGame",
    id: "4",
    tasks: [
      {
        id: 1,
        title: "Page principal :",
        completed: false,
      },
      {
        id: 2,
        title: " Modal contact:",
        completed: false,
      },
    ],
  },
  {
    name: "Mon portfolio ",
    image: "",
    alt: "",
    id: "5",
    tasks: [
      {
        id: 1,
        title: "Corriger CV",
        completed: false,
      },
      {
        id: 2,
        title: "Nom domain",
        completed: false,
      },
      {
        id: 3,
        title: "Mention légales",
        completed: false,
      },
      {
        id: 4,
        title: "Plan du site",
        completed: false,
      },
      {
        id: 5,
        title: "Publication du site",
        completed: false,
      },
    ],
  },
  {
    name: "Fisheye ",
    image: "",
    alt: "projet HM",
    id: "6",
    tasks: [
      {
        id: 1,
        title: "html:",
        completed: false,
      },
      {
        id: 2,
        title: "Api +Class:",
        completed: false,
      },
      {
        id: 3,
        title: "Factories:",
        completed: false,
      },
      {
        id: 4,
        title: "Functions:",
        completed: false,
      },
      {
        id: 5,
        title: "Templates:",
        completed: false,
      },
      {
        id: 6,
        title: "CSS:",
        completed: false,
      },
    ],
  },
  {
    name: "SaaS RH",
    image: "",
    alt: "",
    id: "7",
    tasks: [
      {
        id: 1,
        title: "Apprentissage Cours",
        completed: false,
        startDate: "2024-01",
        endDate: "2024-01",
      },
      {
        id: 2,
        title: "Installation de porjet",
        completed: false,
        startDate: "2024-01",
        endDate: "2024-01",
      },
      {
        id: 3,
        title: "Mise en application I",
        completed: false,
        startDate: "2024-01",
        endDate: "2024-01",
      },
      {
        id: 4,
        title: "Mise en application II",
        completed: false,
        startDate: "2024-01",
        endDate: "2024-01",
      },
    ],
  },
  {
    name: "Application MY_TASKS",
    image: "",
    alt: "",
    id: "8",
    tasks: [
      {
        id: 1,
        title: "Apprentissage Cours",
        completed: false,
        startDate: "2024-01",
        endDate: "2024-01",
      },
      {
        id: 2,
        title: "Installation de porjet",
        completed: false,
        startDate: "2024-01",
        endDate: "2024-01",
      },
      {
        id: 3,
        title: "Mise en application I",
        completed: false,
        startDate: "2024-01",
        endDate: "2024-01",
      },
      {
        id: 4,
        title: "Mise en application II",
        completed: false,
        startDate: "2024-01",
        endDate: "2024-01",
      },
    ],
  },
  {
    name: "Cours d'apprentiisage ",
    image: "",
    alt: "",
    id: "9",
    tasks: [
      {
        id: 1,
        title: " OPC Cours ANGULAR",
        completed: false,
      },
      {
        id: 2,
        title: "finir le cours JEST",
        completed: false,
      },
      {
        id: 3,
        title: "le cours SCRUM",
        completed: false,
      },
    ],
  },
];

/**
 // const App = () => {
//   const [projects, setProjects] = useState([]);
//   const [projectTasks, setProjectTasks] = useState([]);
//   const { id } = useParams();
//   const [error, setError] = useState(false);

//   const initialTasks = [
//     { id: 1, title: "Tâche 1", completed: false },
//     { id: 2, title: "Tâche 2", completed: false },
//     { id: 3, title: "Tâche 3", completed: false },
//     { id: 4, title: "Tâche 4", completed: false },
//   ];

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const response = await fetch("../dataJson/projects.json", {
//           method: "GET",
//         });

//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         setProjects(data);

//         const verify = data.find((p) => p.id === id);

//         if (!verify) {
//           setError(true);
//         } else {
//           setProjectTasks(verify.tasks || []);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchProjects();
//   }, [id]);

//   const handleToggle = (taskId) => {
//     const updatedTasks = projectTasks.map((task) =>
//       task.id === taskId ? { ...task, completed: !task.completed } : task
//     );
//     setProjectTasks(updatedTasks);
//   };

//   const progress =
//     projectTasks.length > 0
//       ? (projectTasks.filter((task) => task.completed).length /
//           projectTasks.length) *
//         100
//       : 0;

//   return (
//     <section>
//       <div>
//         {projects
//           .filter((project) => project.id === id)
//           .map((project) => (
//             <h6 className="project__title" key={project.id}>
//               {project.title}
//             </h6>
//           ))}
//       </div>

//       <div>
//         {projectTasks.length > 0
//           ? projectTasks.map((task) => (
//               <Task key={task.id} task={task} onToggle={handleToggle} />
//             ))
//           : // Utilisez les tâches initiales si projectTasks est vide
//             initialTasks.map((task) => (
//               <Task key={task.id} task={task} onToggle={handleToggle} />
//             ))}
//         <div style={{ marginTop: "20px" }}>
//           <progress value={progress} max="100"></progress>
//           <span style={{ marginLeft: "10px" }}>{`${progress.toFixed(
//             2
//           )}% complet`}</span>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default App;

const App = () => {


 */
