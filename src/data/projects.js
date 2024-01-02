// data.js
export const projectsData = [
  {
    name: "Heéberger-moi ",
    image: "",
    alt: "projet HM",
    id: "1",
    tasks: [
      { id: 1, title: "  Redux", completed: false },
      { id: 2, title: "excRedux", completed: false },
      { id: 3, title: "installer les package", completed: false },
    ],
    undertasks:[
      { id: 1, title: " soustache1", completed: false },
      { id: 1, title: " soustache2", completed: false },
    ]
  },
  // ... autres projets //      <Line value={progress} max="100" />
  {
    name: "Game on ",
    image: "",
    alt: "projet GO",
    id: "2",
    tasks: [
      { id: 1, title: " Bootstrap", completed: false },
      { id: 2, title: "excBootstrap", completed: false },
    ],
  },
  {
    name: "Banque 36 ",
    image: "",
    alt: "projet BK36",
    id: "3",
    tasks: [
      { id: 1, title: " typeScript", completed: false },
      { id: 2, title: "exctypeScript", completed: false },
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
