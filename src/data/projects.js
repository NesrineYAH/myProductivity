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
        title: "étape1:",
        completed: false,
        startDate: "2024-01-01",
        endDate: "2024-01-10",
      },
      {
        id: 2,
        title: "étape2 :",
        completed: false,
        startDate: "2024-01-05",
        endDate: "2024-01-15",
      },
      {
        id: 3,
        title: "étape3 :",
        completed: false,
        startDate: "2024-01-05",
        endDate: "2024-01-15",
      },
      {
        id: 4,
        title: " étape4 :",
        completed: false,
        startDate: "2024-02-11",
        endDate: "2024-02-18",
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
        title: " Bootstrap",
        completed: false,
        startDate: "2024-01-07",
        endDate: "2024-01-15",
      },
      {
        id: 2,
        title: "excBootstrap",
        completed: false,
        startDate: "2024-01-05",
        endDate: "2024-01-12",
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
        startDate: "2024-01-01",
        endDate: "2024-01-17",
      },
      {
        id: 2,
        title: "etapr2:",
        completed: false,
        startDate: "2024-01-10",
        endDate: "2024-01-18",
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
        title: "  Python :",
        completed: false,
        startDate: "2024-02-11",
        endDate: "2024-02-18",
      },
      {
        id: 2,
        title: " excPython :",
        completed: false,
        startDate: "2024-02-01",
        endDate: "2024-02-10",
      },
    ],
  },
  {
    name: "mon portfolio ",
    image: "",
    alt: "",
    id: "5",
    tasks: [
      {
        id: 1,
        title: "Corriger CV",
        completed: false,
        startDate: "2024-01",
        endDate: "2024-01",
      },
      {
        id: 2,
        title: "nom domain",
        completed: false,
        startDate: "2024-01",
        endDate: "2024-01",
      },
      {
        id: 3,
        title: "mention légales",
        completed: false,
        startDate: "2024-01",
        endDate: "2024-01",
      },
      {
        id: 4,
        title: "Plan du site",
        completed: false,
        startDate: "2024-01",
        endDate: "2024-01",
      },
    ],
  },
  {
    name: "Héberger-moi ",
    image: "",
    alt: "projet HM",
    id: "6",
    tasks: [
      {
        id: 1,
        title: "  Redux :",
        completed: false,
        startDate: "2024-01-01",
        endDate: "2024-01-10",
      },
      {
        id: 2,
        title: "excRedux :",
        completed: false,
        startDate: "2024-01-05",
        endDate: "2024-01-15",
      },
      {
        id: 3,
        title: "Document",
        completed: false,
        startDate: "2024-01-05",
        endDate: "2024-01-15",
      },
      {
        id: 4,
        title: "Media Query",
        completed: false,
        startDate: "2024-02-11",
        endDate: "2024-02-18",
      },
    ],
  },
  {
    name: "d'autres Taches ",
    image: "",
    alt: "",
    id: "7",
    tasks: [
      {
        id: 1,
        title: "finir Notion ",
        completed: false,
        startDate: "2024-01",
        endDate: "2024-01",
      },
      {
        id: 2,
        title: "finir les cours OPC",
        completed: false,
        startDate: "2024-01",
        endDate: "2024-01",
      },

      {
        id: 4,
        title: "le cours SCRUM",
        completed: false,
        startDate: "2024-01",
        endDate: "2024-01",
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
