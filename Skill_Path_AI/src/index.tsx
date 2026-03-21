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
