import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
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

app.use('/static/*', serveStatic({ root: './public' }))

app.get('/', (c: any) => c.html(landing()))
app.get('/upload', (c: any) => c.html(upload()))
app.get('/dashboard', (c: any) => c.html(dashboard()))
app.get('/ai-chat', (c: any) => c.html(aiChat()))
app.get('/career-insights', (c: any) => c.html(careerInsights()))
app.get('/course/:id', (c: any) => c.html(courseSubscription(c.req.param('id'))))
app.get('/skill-analytics', (c: any) => c.html(skillAnalytics()))
app.get('/admin', (c: any) => c.html(adminPanel()))
app.get('/roadmap', (c: any) => c.html(roadmap()))
app.get('/settings', (c: any) => c.html(profileSettings()))
app.get('/login', (c: any) => c.html(login()))
app.get('/signup', (c: any) => c.html(signup()))

// ── Groq AI Chat API ────────────────────────────────────────
const GROQ_API_KEY = 'gsk_REPLACE_WITH_YOUR_KEY'
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

app.post('/api/chat', async (c: any) => {
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
