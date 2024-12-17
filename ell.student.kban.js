import { Agent, Task, Team } from 'kaibanjs';

// Define specialized ELL education agents
const languageAnalyst = new Agent({
    name: 'Dr. Carmen Rodriguez',
    role: 'Language Acquisition Specialist',
    goal: 'Analyze language use patterns and identify L1 interference issues.',
    background: 'PhD in TESOL with expertise in Spanish-English bilingual education and second language acquisition.',
    tools: []
});

const contentExpert = new Agent({
    name: 'Ms. Elena Martinez',
    role: 'Writing and Content Specialist',
    goal: 'Evaluate content comprehension and writing development independent of language concerns.',
    background: 'Bilingual writing instructor with 10 years experience in ELL education.',
    tools: []
});

const ellReportWriter = new Agent({
    name: 'Mr. James Chen',
    role: 'ELL Progress Report Specialist',
    goal: 'Create comprehensive language development reports that acknowledge both progress and areas for growth.',
    background: 'ELL coordinator and former ESL teacher specialized in student assessment and parent communication.',
    tools: []
});

// Define analysis tasks
const languageAnalysisTask = new Task({
    description: `Analyze the student's work for:
    - L1 interference patterns
    - Vocabulary usage and development
    - Grammar patterns and errors
    - Language transfer issues
    studentWork: {studentWork}`,
    expectedOutput: 'Detailed analysis of language acquisition patterns and challenges.',
    agent: languageAnalyst
});

const contentAnalysisTask = new Task({
    description: `Evaluate the student's work for:
    - Ideas and content development
    - Organization and structure
    - Task completion and comprehension
    - Creative expression
    Independent of language accuracy.
    studentWork: {studentWork}`,
    expectedOutput: 'Analysis of content mastery and writing development.',
    agent: contentExpert
});

const reportGenerationTask = new Task({
    description: `Create a comprehensive bilingual report that:
    - Highlights both language and content strengths
    - Identifies specific areas for improvement
    - Provides actionable recommendations for both home and school support
    - Acknowledges the challenges and progress of language acquisition

    Format the report in Markdown with the following structure:
    # Student Language Development Report / Reporte del Desarrollo Lingüístico
    ## Overview / Resumen
    ## Language Skills / Habilidades Lingüísticas
    ### Strengths / Fortalezas
    ### Areas for Growth / Áreas de Crecimiento
    ## Content Understanding / Comprensión del Contenido
    ## Recommendations / Recomendaciones
    ### For School / Para la Escuela
    ### For Home / Para el Hogar
    
    Use Markdown formatting for:
    - Headers (# for main headers, ## for subheaders)
    - Bullet points for lists
    - Bold (**) for emphasis
    - Horizontal rules (---) between language sections
    - Blockquotes (>) for example texts`,
    expectedOutput: 'A Markdown-formatted bilingual progress report with specific recommendations.',
    agent: ellReportWriter
});

// Create the assessment team
const team = new Team({
    name: 'ELL Assessment Team',
    agents: [languageAnalyst, contentExpert, ellReportWriter],
    tasks: [languageAnalysisTask, contentAnalysisTask, reportGenerationTask],
    inputs: {
        studentWork: `
        Student: Maria Gonzalez
        Grade: 7th
        Assignment: Book Report - "The Giver" by Lois Lowry
        Date: December 16, 2024

        The Giver Book Report
        
        The story is about Jonas, who live in a community that is very different than our world. 
        In the beginning, Jonas is nervous because he need to go to the ceremony where he will 
        know what is his job for the future. When he arrive to the ceremony, he discover that 
        he is selected for be the next Receiver of Memory. This job is very important and Jonas 
        feel scared but also proud.

        Jonas start to work with the actual Receiver, who now is the Giver. The Giver teach 
        Jonas about the memories of the past. Jonas learned that his community don't have colors, 
        feelings, or choices because they wanted to make everything perfect and equal. This make 
        Jonas very sad when he understand that people don't know what they are missing.

        The most important part is when Jonas discovered that "release" means that they kill the 
        people who are old or the babies who are not perfect. This is when Jonas decided to escape 
        with Gabriel, a baby who is going to be released. In my opinion, Jonas is very brave 
        because he sacrifice his comfortable life to save Gabriel and to try to make his community 
        better.

        I like this book because it make me think about what is more important: to be safe and 
        equal or to have feelings and choices even if sometimes they hurt. If I was Jonas, I think 
        I would do the same thing because everybody deserve to feel love and to make their own 
        decisions in life.
        `,
    },
    env: {
        OPENAI_API_KEY: import.meta.env.VITE_OPENAI_API_KEY || 'YOUR_OPENAI_API_KEY_HERE'
    }
});

export default team;