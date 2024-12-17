import { Agent, Task, Team } from 'kaibanjs';

// Define specialized education agents
const subjectExpert = new Agent({
    name: 'Dr. Morgan Chen',
    role: 'Subject Matter Expert',
    goal: 'Analyze technical accuracy and depth of understanding in student work.',
    background: 'PhD in Education with 15 years experience teaching mathematics and science. Specialized in identifying conceptual understanding and misconceptions.',
    tools: []
});

const pedagogicalAnalyst = new Agent({
    name: 'Prof. Sarah Williams',
    role: 'Learning Strategy Analyst',
    goal: 'Evaluate learning patterns, study habits, and areas for educational intervention.',
    background: 'Educational Psychologist with expertise in learning patterns, cognitive development, and personalized learning strategies.',
    tools: []
});

const reportWriter = new Agent({
    name: 'Ms. Rachel Torres',
    role: 'Educational Report Specialist',
    goal: 'Synthesize analysis into clear, actionable reports for parents and educators.',
    background: 'Former teacher and educational consultant specializing in parent communication and educational reporting.',
    tools: []
});

// Define analysis tasks
const contentAnalysisTask = new Task({
    description: `Analyze the student's work for technical accuracy, depth of understanding, and mastery of concepts.
    Focus on identifying both strengths and areas needing improvement.
    studentWork: {studentWork}`,
    expectedOutput: 'Detailed analysis of technical competency and conceptual understanding.',
    agent: subjectExpert
});

const learningPatternTask = new Task({
    description: `Evaluate the student's work for indicators of learning patterns, study habits, and potential learning barriers.
    Consider organization, attention to detail, consistency, and problem-solving approaches.
    studentWork: {studentWork}`,
    expectedOutput: 'Analysis of learning patterns and recommendations for improvement.',
    agent: pedagogicalAnalyst
});

const reportGenerationTask = new Task({
    description: `Create a comprehensive, parent-friendly report that synthesizes the technical and learning pattern analyses.
    Include specific examples, clear explanations, and actionable recommendations.
    Format the report in a way that emphasizes constructive feedback and growth opportunities.`,
    expectedOutput: 'Professional educational progress report suitable for parent communication.',
    agent: reportWriter
});

// Create the assessment team
const team = new Team({
    name: 'Student Assessment Team',
    agents: [subjectExpert, pedagogicalAnalyst, reportWriter],
    tasks: [contentAnalysisTask, learningPatternTask, reportGenerationTask],
    inputs: {
        studentWork: `
        Math Assignment: Algebra Word Problems
        Student: Alex Thompson
        Grade: 8th
        Date: December 15, 2024

        Problem 1: A train leaves Chicago traveling west at 60 mph. Two hours later, another train leaves Chicago traveling east at 75 mph. How far apart are the trains after 3 hours from when the first train departed?
        
        Student's work:
        * First train: 60 mph × 3 hours = 180 miles west
        * Second train: 75 mph × 1 hour = 75 miles east
        * Total distance = 180 + 75 = 255 miles
        
        Problem 2: Sarah has $120 and spends 1/3 of it on books. She then spends 1/4 of what's left on lunch. How much money does she have remaining?
        
        Student's work:
        * Money spent on books = $120 × 1/3 = $40
        * Money left = $120 - $40 = $80
        * Money spent on lunch = $80 × 1/4 = $20
        * Final amount = $80 - $20 = $60
        
        Problem 3: If 8 workers can build a wall in 10 days, how many workers are needed to build the same wall in 5 days?
        
        Student's work:
        * If it takes longer, we need less workers
        * So if it takes half the time (5 days instead of 10)
        * We need 4 workers
        `
    },
    env: {
        OPENAI_API_KEY: import.meta.env.VITE_OPENAI_API_KEY || 'YOUR_OPENAI_API_KEY_HERE'
    }
});

export default team;