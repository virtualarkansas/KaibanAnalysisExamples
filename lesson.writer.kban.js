import { Agent, Task, Team } from 'kaibanjs';

// Define template
const lessonTemplate = `## Course Name: [Course Title]

Designer Name(s): [Names of team members]

---

### Module [X]: [Module Title]

#### Lesson [X.X]: [Lesson Title]

**Overview Page:**

* Overview:  
  * [Brief description of the lesson and its importance]
  * [Key concepts to be covered]
  * [How this connects to broader course objectives]

* Objectives: After completing this lesson, students will be able to . . .  
  * [Specific measurable objective 1]
  * [Specific measurable objective 2]
  * [Specific measurable objective 3]
  
* Lesson Instructions:  
  * [Clear instructions for navigating the lesson]
  * [Any specific requirements or prerequisites]
  
* Timing:  
  * [Estimated time to complete the lesson]

* Completion:  
  * [What constitutes successful completion]
  * [Any deliverables or assessments required]

### **Teaching Concept 1:** [Title]

[Detailed explanation of first main concept]
* Key points
* Examples
* Visual aids or diagrams if needed
* Practice activities

### **Teaching Concept 2:** [Title]

[Detailed explanation of second main concept]
* Key points
* Examples
* Visual aids or diagrams if needed
* Practice activities

**Closing the Lesson:**

* **Lesson Summary**  
  * [Recap of key concepts]
  * [Main takeaways]
  * [Connection to next lesson]

* **Next Steps:** [Instructions for proceeding to next activity]`;

// Define agents
const instructionalDesigner = new Agent({
    name: 'Dr. Sarah Chen',
    role: 'Instructional Designer',
    goal: 'Design structured learning experiences with clear objectives and outcomes.',
    background: 'PhD in Instructional Design, curriculum development expert',
    tools: []
});

const contentExpert = new Agent({
    name: 'Prof. James Martinez',
    role: 'Content Expert',
    goal: 'Develop accurate, comprehensive lesson content with engaging examples.',
    background: 'Subject matter expert with extensive teaching experience',
    tools: []
});

const pedagogyExpert = new Agent({
    name: 'Dr. Emily Wong',
    role: 'Learning Strategist',
    goal: 'Create effective teaching strategies and assessment methods.',
    background: 'Educational psychology expert specializing in active learning',
    tools: []
});

// Define tasks
const planningTask = new Task({
    description: `Create lesson plan structure following the markdown{template} format.
    Use topic: {topic} and description: {description} to define 
    clear objectives and outline key concepts.`,
    expectedOutput: 'Structured lesson plan with clear objectives and assessment strategy.',
    agent: instructionalDesigner
});

const contentTask = new Task({
    description: `Develop detailed lesson content following the markdown {template} format.
    Create examples, practice activities, and explanations based on the lesson plan.
    Include visual aids and interactive elements where appropriate.`,
    expectedOutput: 'Comprehensive lesson content with examples and activities.',
    agent: contentExpert
});

const pedagogyTask = new Task({
    description: `Design teaching methods and engagement strategies following the markdown {template} format.
    Create assessment tools aligned with lesson objectives.
    Provide guidance for lesson delivery and student interaction.`,
    expectedOutput: 'Teaching strategies and assessment methods document.',
    agent: pedagogyExpert
});

// Create team
const team = new Team({
    name: 'Lesson Development Team',
    agents: [instructionalDesigner, contentExpert, pedagogyExpert],
    tasks: [planningTask, contentTask, pedagogyTask],
    inputs: {
        topic: `Introduction to Variables in Python`,
        description: `A beginner-friendly lesson teaching the concept 
        of variables in Python programming. Should cover basic variable 
        declaration, naming rules, and data types.`,
        template: lessonTemplate
    },
    env: {
        OPENAI_API_KEY: import.meta.env.VITE_OPENAI_API_KEY || 'YOUR_OPENAI_API_KEY_HERE'
    }
});

export default team;

/******************************************************************
 *                                                                  *
 *        🎓 Ready to revolutionize lesson creation? 🎓           *
 *                                                                *
 * This team can help you create:                                  *
 *                                                                *
 *   📚 Engaging lessons for any subject or skill level            *
 *   🎯 Clear learning objectives and outcomes                     *
 *   🧠 Effective teaching strategies and assessments              *
 *   ✨ Interactive activities and examples                        *
 *                                                                *
 ******************************************************************/