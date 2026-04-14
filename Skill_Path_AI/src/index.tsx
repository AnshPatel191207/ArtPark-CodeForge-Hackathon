import { Hono } from 'hono'
import { landing } from './pages/landing'
import { upload } from './pages/upload'
import { dashboard } from './pages/dashboard'
import { aiChat } from './pages/ai-chat'
import { careerInsights } from './pages/career-insights'
import { courseSubscription } from './pages/course-subscription'
import { skillAnalytics } from './pages/skill-analytics'
import { adminPanel } from './pages/admin-panel'
import { profileSettings } from './pages/profile-settings'
import { roadmap } from './pages/roadmap'
import { login } from './pages/login'
import { signup } from './pages/signup'
const app = new Hono()

app.get('/', (c) => c.html(landing()))
app.get('/upload', (c) => c.html(upload()))
app.get('/dashboard', (c) => c.html(dashboard()))
app.get('/ai-chat', (c) => c.html(aiChat()))
app.get('/career-insights', (c) => c.html(careerInsights()))
app.get('/course/:id', (c) => c.html(courseSubscription(c.req.param('id'))))
app.get('/skill-analytics', (c) => c.html(skillAnalytics()))
app.get('/admin', (c) => c.html(adminPanel()))
app.get('/roadmap', (c) => c.html(roadmap()))
app.get('/settings', (c) => c.html(profileSettings()))
app.get('/login', (c) => c.html(login()))
app.get('/signup', (c) => c.html(signup()))

// ── Groq AI Chat API ────────────────────────────────────────
const GROQ_API_KEY = process.env.GROQ_API_KEY ?? ''
const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions'
const SYSTEM_PROMPT = `You are SkillPath AI, a friendly and expert career-coaching assistant embedded in a skill-gap analysis platform.

You help users understand their skill gaps, plan learning roadmaps, and provide actionable career advice.
When answering:
- Be concise but thorough
- Use bullet points and numbered lists for clarity
- Reference specific skills, technologies, and resources
- Provide time estimates for learning when relevant
- Be encouraging and practical
- If a question is unrelated to career/skills/learning, politely redirect the conversation`

app.post('/api/chat', async (c) => {
  try {
    const { message, history } = await c.req.json<{ message: string; history?: { role: string; content: string }[] }>()

    if (!message) return c.json({ error: 'Message is required' }, 400)
    if (!GROQ_API_KEY) return c.json({ error: 'API key not configured' }, 500)

    const messages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...(history || []),
      { role: 'user', content: message },
    ]

    const groqRes = await fetch(GROQ_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages,
        temperature: 0.7,
        max_tokens: 1024,
      }),
    })

    if (!groqRes.ok) {
      const errBody = await groqRes.text()
      console.error('Groq API error:', groqRes.status, errBody)
      return c.json({ error: 'AI service error' }, 502)
    }

    const data = await groqRes.json() as any
    const reply = data.choices?.[0]?.message?.content || 'Sorry, I could not generate a response.'

    return c.json({ reply })
  } catch (err: any) {
    console.error('Chat API error:', err)
    return c.json({ error: 'Internal server error' }, 500)
  }
})

const ANALYZE_PROMPT = `You are SkillPath AI, an expert technical recruiter and career coach.
Your task is to analyze a candidate's Resume against a Job Description and output a STRICT JSON object representing their skill gap analysis and personalized learning roadmap.
Do NOT output any markdown blocks or text outside the JSON.
The JSON must perfectly match this structure:
{
  "readinessScore": <number 0-100>,
  "existingSkills": [ { "name": "string", "level": "string e.g. Expert, Advanced", "confidence": <number 0-100> } ],
  "requiredSkills": [ { "name": "string", "priority": "string e.g. Critical, High", "match": <number 0-100> } ],
  "missingSkills": [ { "name": "string", "priority": "Critical or High", "difficultyToLearn": "High or Medium or Low" } ],
  "categoryScores": [ { "name": "string e.g. Backend", "color": "string e.g. #10B981", "score": <number 0-100> } ],
  "roadmap": [ { "name": "string", "priority": "Critical or High", "difficulty": "Beginner, Intermediate, Advanced", "duration": "string e.g. 2 wks", "reasoning": "string explaining why", "resources": ["string"] } ],
  "reasoningTrace": [ { "title": "string", "body": "string", "confidence": <number 0-100> } ]
}
Make sure your roadmap ONLY teaches the missing skills, and avoids teaching what the user already knows from their resume.`

app.post('/api/analyze', async (c) => {
  try {
    const { resumeText, jdText, config } = await c.req.json<{ resumeText?: string; jdText?: string; config?: any }>()
    if (!GROQ_API_KEY) return c.json({ error: 'API key not configured' }, 500)

    const userContent = `
=== RESUME ===
${resumeText || 'No resume text provided.'}

=== JOB DESCRIPTION ===
${jdText || 'No JD text provided.'}

=== CONFIG ===
${JSON.stringify(config || {})}
`

    const groqRes = await fetch(GROQ_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: ANALYZE_PROMPT },
          { role: 'user', content: userContent }
        ],
        temperature: 0.2,
        max_tokens: 3000,
        response_format: { type: 'json_object' }
      }),
    })

    if (!groqRes.ok) {
      console.error('Groq API error:', await groqRes.text())
      return c.json({ error: 'AI service error' }, 502)
    }

    const data = await groqRes.json() as any
    const content = data.choices?.[0]?.message?.content || '{}'
    c.header('Content-Type', 'application/json')
    return c.body(content)

  } catch (err: any) {
    console.error('Analyze API error:', err)
    return c.json({ error: 'Internal server error', details: err.message, stack: err.stack }, 500)
  }
})

export default app
